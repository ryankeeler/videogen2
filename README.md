---
license: cc-by-4.0
task_categories:
- text-to-video
language:
- en
tags:
- text-to-video
- Video Generative Model Training
- Text-to-Video Diffusion Model Training
- prompts
pretty_name: OpenVid-1M
size_categories:
- 1M<n<10M
---

# Summary
OpenVid-1M is a high-quality text-to-video dataset designed for research institutions to enhance video quality, featuring high aesthetics, clarity, and resolution. It can be used for direct training or as a quality tuning complement to other video datasets.


# Directory
```
DATA_PATH
    OpenVid-1M.csv
    OpenVidHD.csv
    OpenVid_part0.zip
    OpenVid_part1.zip
    OpenVid_part2.zip
    ...
```

# Download
You can also download each file by ```wget```, for instance:
```
wget https://huggingface.co/datasets/nkp37/OpenVid-1M/resolve/main/OpenVid_part0.zip
wget https://huggingface.co/datasets/nkp37/OpenVid-1M/resolve/main/OpenVid_part1.zip
wget https://huggingface.co/datasets/nkp37/OpenVid-1M/resolve/main/OpenVid_part2.zip
...
```

# Usage
You can unzip each OpenVid_part*.zip file by ```unzip```, for instance:
```
unzip -j OpenVid_part0.zip -d video_folder
unzip -j OpenVid_part1.zip -d video_folder
unzip -j OpenVid_part2.zip -d video_folder
...
```
We split some large files (> 50G) into multiple small files, you can recover these files by ```cat```, for instance:
```
cat OpenVid_part73_part* > OpenVid_part73.zip
unzip -j OpenVid_part73.zip -d video_folder
```
``OpenVid-1M.csv`` and ``OpenVidHD.csv`` contains the text-video pairs.
They can easily be read by

```python
import pandas
df = pd.read_csv("OpenVid-1M.csv")
```
