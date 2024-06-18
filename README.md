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

<p align="center">
  <img src="https://huggingface.co/datasets/nkp37/OpenVid-1M/resolve/main/OpenVid-1M.png">
</p>

# Summary
This is the dataset proposed in our paper "[**OpenVid-1M: A Large-Scale High-Quality Dataset for Text-to-video Generation**](https://nju-pcalab.github.io/projects/openvid)".
OpenVid-1M is a high-quality text-to-video dataset designed for research institutions to enhance video quality, featuring high aesthetics, clarity, and resolution. It can be used for direct training or as a quality tuning complement to other video datasets.
All videos in the OpenVid-1M dataset have resolutions of at least 512×512. Furthermore, we curate 433K 1080p videos from OpenVid-1M to create OpenVidHD, advancing high-definition video generation.

**Project**: [https://nju-pcalab.github.io/projects/openvid](https://nju-pcalab.github.io/projects/openvid)

**Code**: [https://github.com/NJU-PCALab/OpenVid](https://github.com/NJU-PCALab/OpenVid)


<p align="center">
  <video width="600" controls>
    <source src="https://huggingface.co/datasets/nkp37/OpenVid-1M/blob/main/compare_videos/IIvwqskxtdE_0.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</p>

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

# License
Our OpenVid-1M is released as CC-BY-4.0. The video samples are collected from publicly available datasets. Users must follow the related licenses [Panda](https://github.com/snap-research/Panda-70M/tree/main?tab=readme-ov-file#license-of-panda-70m), [ChronoMagic](https://github.com/PKU-YuanGroup/MagicTime?tab=readme-ov-file#-license), [Open-Sora-plan](https://github.com/PKU-YuanGroup/Open-Sora-Plan?tab=readme-ov-file#-license), CelebvHQ(Unknow)) to use these video samples.


<!-- If you have any questions, feel free to contact Kepan Nan (nankpan@163.com). -->