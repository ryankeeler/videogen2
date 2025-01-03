const functions = require("firebase-functions");
const admin = require("firebase-admin");
const axios = require("axios");

admin.initializeApp();
const db = admin.firestore();

// PayPal webhook to verify payments
exports.paypalWebhook = functions.https.onRequest(async (req, res) => {
    try {
        const { paymentId, userId, amount } = req.body;

        // Verify payment with PayPal API (replace 'YOUR_PAYPAL_CLIENT_ID' and 'YOUR_PAYPAL_SECRET')
        const response = await axios.post(
            "https://api-m.sandbox.paypal.com/v1/payments/payment/" + paymentId,
            {},
            {
                auth: {
                    username: "YOUR_PAYPAL_CLIENT_ID",
                    password: "YOUR_PAYPAL_SECRET",
                },
            }
        );

        if (response.data.state === "approved") {
            // Update user's subscription or credits
            if (amount === 5) {
                // Add 1 video credit for the user
                await db.collection("users").doc(userId).update({
                    videoCredits: admin.firestore.FieldValue.increment(1),
                });
            } else if (amount === 25) {
                // Update subscription status
                await db.collection("users").doc(userId).set({
                    isSubscribed: true,
                    subscriptionExpires: Date.now() + 30 * 24 * 60 * 60 * 1000, // 30 days
                });
            }

            return res.status(200).send("Payment processed successfully.");
        } else {
            return res.status(400).send("Payment not approved.");
        }
    } catch (error) {
        console.error(error);
        return res.status(500).send("Internal Server Error.");
    }
});

// API to generate text-to-video
exports.generateVideo = functions.https.onRequest(async (req, res) => {
    try {
        const { userId, text } = req.body;

        // Fetch user data
        const userDoc = await db.collection("users").doc(userId).get();
        const userData = userDoc.data();

        // Check user's quota or subscription
        if (userData.isSubscribed || userData.videoCredits > 0) {
            // Call the external AI video generation API
            const response = await axios.post("https://your-ai-video-api.com/generate", {
                text,
            });

            // Deduct a credit if not subscribed
            if (!userData.isSubscribed) {
                await db.collection("users").doc(userId).update({
                    videoCredits: admin.firestore.FieldValue.increment(-1),
                });
            }

            return res.status(200).json({ videoUrl: response.data.videoUrl });
        } else {
            return res.status(403).send("Insufficient credits or subscription expired.");
        }
    } catch (error) {
        console.error(error);
        return res.status(500).send("Internal Server Error.");
    }
});
