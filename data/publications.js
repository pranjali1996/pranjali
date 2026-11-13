/**
 * Academic Publications Dataset
 * Update this file to add or modify your publications.
 */
const PUBLICATIONS = [
  {
    id: "pub-2026-1",
    title: "MSTR-Net: A Multi-Scale Transformer Refinement Network for Underwater Image Enhancement",
    authors: "Pranjali Singh, Prithwijit Guha",
    venue: "IEEE International Joint Conference on Neural Networks (IJCNN)",
    year: 2026,
    badge: "Oral Presentation",
    badgeType: "accent",
    codeUrl: "https://github.com/pranjali1996/MSTR-Net",
    scholarUrl: "https://scholar.google.com",
    abstract: "Underwater images often suffer from severe visual degradation caused by light scattering, absorption, and wavelength-dependent attenuation, leading to reduced visibility, color distortion, and loss of structural details. To address these challenges, this paper proposes MSTR-Net, a Multi-Scale Transformer Refinement Network for underwater image enhancement (UIE). The proposed framework adopts a transformer-based encoder with efficient self-attention to capture long-range contextual information while maintaining computational efficiency. Hierarchical features extracted at multiple spatial resolutions are aggregated through a multi-scale feature fusion decoder, which predicts a residual image to restore fine structural details. To further improve visual quality, a multi-scale structural refinement module enhances edge continuity and suppresses local artifacts, while a luminance-guided refinement module corrects uneven illumination without introducing color distortion. As a result, MSTR-Net produces visually consistent outputs with improved color balance and sharper boundaries, effectively avoiding over-saturation and halo artifacts commonly observed in existing methods. Extensive experiments conducted on four benchmark underwater image datasets demonstrate that the proposed method consistently outperforms state-of-the-art approaches in both full-reference and no-reference evaluation metrics, confirming its effectiveness and robustness across diverse underwater conditions.",
    bibtex: `@INPROCEEDINGS{11729869,
  author={Singh, Pranjali and Guha, Prithwijit},
  booktitle={2026 International Joint Conference on Neural Networks (IJCNN)}, 
  title={MSTR-Net: A Multi-Scale Transformer Refinement Network for Underwater Image Enhancement}, 
  year={2026},
  volume={},
  number={},
  pages={1-8},
  keywords={Color;Modeling;Timing;Printing;PSNR;Image enhancement;Modules (abstract algebra);Tagging;Equations;Conferences;Efficient attention;Feature refinement;Hybrid attention;Multi-stage fusion;Underwater Image Enhancement},
  doi={10.1109/IJCNN69854.2026.11729869}}
}`
  },
  {
    id: "pub-2024-1",
    title: "IDA-UIE: An Iterative Framework for Deep Network based Degradation Aware Underwater Image Enhancement",
    authors: "Pranjali Singh, Prithwijit Guha",
    venue: "Indian Conference on Computer Vision Graphics and Image Processing (ICVGIP)",
    year: 2024,
    badge: "Oral Presentation",
    badgeType: "accent",
    codeUrl: "https://github.com",
    scholarUrl: "https://scholar.google.com",
    abstract: "Underwater image quality is often compromised due to factors like fluorescence, low illumination, absorption, and scattering. Recent advancements in underwater image enhancement have introduced various deep network architectures to address these issues. Typically, these methods employ a single network to tackle all degradation challenges. However, we hypothesize that deep networks trained for specific conditions outperform those trained for multiple degradation cases. Consequently, we propose an iterative framework that individually identifies and resolves a dominant degradation condition. We focus on eight specific degradation conditions: low illumination, low contrast, haziness, blurriness, noise, and color imbalances across three channels. Our approach involves designing a deep network capable of detecting the dominant degradation condition and selecting an appropriate deep network tailored for that specific condition. We further propose that our work is the creation of condition-specific datasets derived from high-quality images in two standard datasets, UIEB and EUVP. These datasets facilitate the training of enhancement networks specific to each degradation condition. Our proposed method performs better than the nine baseline methods on both UIEB and EUVP datasets.",
    bibtex: `@inproceedings{10.1145/3702250.3702252,
author = {Singh, Pranjali and Guha, Prithwijit},
title = {IDA-UIE: An Iterative Framework for Deep Network based Degradation Aware Underwater Image Enhancement},
year = {2025},
isbn = {9798400710759},
publisher = {Association for Computing Machinery},
address = {New York, NY, USA},
url = {https://doi.org/10.1145/3702250.3702252},
doi = {10.1145/3702250.3702252},
booktitle = {Proceedings of the Fifteenth Indian Conference on Computer Vision Graphics and Image Processing},
articleno = {2},
numpages = {9},
series = {ICVGIP '24}
}
}`
  },
  {
    id: "pub-2024-2",
    title: "Designing a U-Net Architecture for Underwater Image Enhancement",
    authors: "Saba Zaidi, Pranjali Singh, Prithwijit Guha",
    venue: "IEEE National Conference on Communications (NCC)",
    year: 2024,
    badge: "Oral Presentation",
    badgeType: "accent",
    scholarUrl: "https://scholar.google.com",
    abstract: "Underwater images are often degraded due to issues like noise, scattering, and color distortion caused by factors such as light absorption. Recent works using deep neural network (DNN) based approaches have shown promising performance in this domain. This work proposes an U-Net architecture-based network for underwater image enhancement. The proposed network consists of specialized components like inception, residual group and receptive field blocks with pixel and channel attention mechanisms. The paper presents detailed ablation studies involved in designing the network. The proposal is evaluated on two standard datasets (UIEB and EUVP) and compared against 8 different baselines. Extensive experiments show the competitive performance of the proposed model.",
    bibtex: `@INPROCEEDINGS{10485836,
  author={Zaidi, Saba and Singh, Pranjali and Guha, Prithwijit},
  booktitle={2024 National Conference on Communications (NCC)}, 
  title={Designing a U-Net Architecture for Underwater Image Enhancement}, 
  year={2024},
  volume={},
  number={},
  pages={1-6},
  keywords={Measurement;Systematics;Computational modeling;Scattering;Computer architecture;Artificial neural networks;Proposals;Underwater Imaging Model;Deep Learning;Underwater Image Enhancement;U-Net},
  doi={10.1109/NCC60321.2024.10485836}}

}`
  },
  {
    id: "pub-2022-1",
    title: "A Comprehensive Analysis on Masked Face Detection Algorithms",
    authors: "Pranjali Singh, Amitesh Garg, Amritpal Singh",
    venue: "Advanced Healthcare Systems",
    year: 2022,
    badge: "Oral Presentation",
    badgeType: "accent",
    codeUrl: "https://github.com",
    scholarUrl: "https://scholar.google.com",
    abstract: "The COVID-19 is an ongoing crisis that has resulted in a large number of fatalities and safety concerns. People also carry masks to cover themselves to effectively prevent the transmission of this virus. In this situation, recognizing a face is very challenging. In certain cases, like facial attendance, face access control, and facial security, this makes traditional facial recognition technology ineffective, for that urgent requirement to improve this recognition performance and use the technology on the masked face. During the current pandemic, the main objective of researchers is to deal with these problems through quick and accurate approaches. Throughout this chapter, we suggest a clear way centered on removing masked area and deep learning–related techniques to resolve the issues of mask detection. Another way of finding the masked face is to go through TensorFlow, YOLOv5, SSDMNV2, SVM, OpenCV, and Keras. The first phase is discarding the area of the masked face. Next, to determine the best aspects from the areas collected for that, we use a pre-instruction of deep CNN (Convolutional Neural Network). We used labeled image data to train the CNN model. With a 98.7% accuracy, a face mask is identified by the proposed system. By using the SVM classifier, the dataset of RMFD had a testing accuracy of 99.64%. In SMFD, it achieved 99.49% testing accuracy, and in LFW, it achieved 100% testing accuracy. SSDMNV2 used in this paper yields a 92.64% accuracy score and a 93% F1 score.",
    bibtex: `
@inbook{doi:https://doi.org/10.1002/9781119769293.ch16,
author = {Singh, Pranjali and Garg, Amitesh and Singh, Amritpal},
publisher = {John Wiley & Sons, Ltd},
isbn = {9781119769293},
title = {A Comprehensive Analysis on Masked Face Detection Algorithms},
booktitle = {Advanced Healthcare Systems},
chapter = {16},
pages = {319-334},
doi = {https://doi.org/10.1002/9781119769293.ch16},
url = {https://onlinelibrary.wiley.com/doi/abs/10.1002/9781119769293.ch16},
eprint = {https://onlinelibrary.wiley.com/doi/pdf/10.1002/9781119769293.ch16},
year = {2022}
}

}`
  },
  {
    id: "pub-2022-2",
    title: "Unmasking the Masked Face Using Zero-Shot Learning",
    authors: "Pranjali Singh, Amritpal Singh",
    venue: "Advanced Network Technologies and Intelligent Computing (ANTIC).",
    year: 2022,
    badge: "Oral Presentation",
    badgeType: "accent",
    codeUrl: "https://github.com",
    scholarUrl: "https://scholar.google.com",
    abstract: "Nowadays, people are required to wear masks due to the COVID-19 pandemic. The COVID-19 is an ongoing crisis that has resulted in a large number of fatalities and safety concerns. People also carry masks to cover themselves to effectively prevent the transmission of this virus. In this situation recognizing a face is very challenging. In certain cases, like facial attendance, face access control, facial security, this makes traditional facial recognition technology ineffective, for that urgent requirement to improve this recognition performance and use the technology on the masked face. During the current pandemic, the main objective of researchers is to deal with these problems through quick and accurate approaches. Throughout this report, suggest a clear way centred on removing masked areas and deep learning related techniques to resolve the issues of mask detection. Another way of finding the masked face is to go through TensorFlow, YOLOv5, SSDMNV2, SVM, OpenCV, Keras. Deep Learning of artificial intelligence (AI) is an exciting future technology with explosive growth. Masked face recognition is a mesmerizing topic that contains several AI technologies including classifications, SSD object detection, MTCNN, FaceNet, data preparation, data cleaning, data augmentation, training skills, etc. Takes two datasets, CASIA-Web face datasets used for training purpose and LFW is used for testing purpose. Here, face alignment has been done by SSD and MTCNN. After face alignment, deleting the misleading image. Then wear a face mask in the image by using Dlib. From Dlib get the facial landmark. So take the mouth part for the face mask. Then detect the face mask. In green box shows that the person is wearing the mask. In red it shows that person is not wearing the mask. After detecting the face, also have to recognize the person in the mask. In training, it gives 99% of accuracy and in testing, it gives 96% of accuracy.",
    bibtex: `@InProceedings{10.1007/978-3-030-96040-7_43,
author="Singh, Pranjali
and Singh, Amritpal",
editor="Woungang, Isaac
and Dhurandher, Sanjay Kumar
and Pattanaik, Kiran Kumar
and Verma, Anshul
and Verma, Pradeepika",
title="Unmasking the Masked Face Using Zero-Shot Learning",
booktitle="Advanced Network Technologies and Intelligent Computing",
year="2022",
publisher="Springer International Publishing",
address="Cham",
pages="563--585",
isbn="978-3-030-96040-7"
}

}`
  }
];
