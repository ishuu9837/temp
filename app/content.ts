// Upgraded portfolio content — synced with Y.ESWAR.pdf and repository assets.
export interface ProjectItem {
  title: string;
  category: string;
  filterCat: 'ml' | 'cv' | 'llm' | 'data';
  description: string;
  metric?: string;
  metricLabel?: string;
  secondaryMetric?: string;
  tags: string[];
  url?: string;
  linkLabel?: string;
  visual?: string;
  preview?: string;
  detail: string;
  problem: string;
  architecture: string[];
  highlights: string[];
  hasSandbox?: 'edusentinel' | 'fewshot' | 'mrs';
}

export const projects: ProjectItem[] = [
  {
    title: 'EduSentinel',
    category: 'EDUCATION / ANOMALY DETECTION',
    filterCat: 'ml',
    description: 'A NumPy-only deep autoencoder and Flask REST API that flags abnormal learning behaviour in LMS data across 8 features.',
    metric: '99.40%',
    metricLabel: 'ROC-AUC',
    secondaryMetric: '90.43% Acc · 100% Recall',
    tags: ['Autoencoder', 'NumPy', 'PyTorch', 'Flask', 'REST API', 'Anomaly detection'],
    url: 'https://edusentinel.vercel.app',
    linkLabel: 'Live demo',
    visual: 'signal',
    preview: '/assets/preview-edusentinel.webp',
    detail: '90.43% accuracy, 99.40% ROC-AUC, and 100% recall. Findings published on ResearchGate and presented at GITAM University Seminar. Built from exploratory data analysis through to a deployed real-time inference REST API.',
    problem: 'Learning Management Systems generate high-volume behavioural logs, but identifying disengaged or anomalous student patterns early without labelled failure cases requires unsupervised representation learning.',
    architecture: [
      '8-Feature LMS Ingestion & Z-Score Normalization',
      'Deep Bottleneck Autoencoder (NumPy / PyTorch)',
      'Reconstruction MSE Threshold Calibration (ROC-AUC 99.40%)',
      'Real-Time Flask REST API & Interactive Dashboard'
    ],
    highlights: [
      '99.40% ROC-AUC and 90.43% classification accuracy across validation splits',
      '100% recall on anomalous behavioural sequences via reconstruction error thresholding',
      'Zero-dependency NumPy forward/backward pass implementation paired with a live web demo'
    ],
    hasSandbox: 'edusentinel'
  },
  {
    title: 'Smart Energy Grids & Sustainability',
    category: 'BIG DATA / SUSTAINABILITY',
    filterCat: 'data',
    description: 'A case study on data-driven power distribution, with an interactive energy-balance and LSTM demand-forecasting demo.',
    metric: 'Demand',
    metricLabel: 'LSTM FORECASTING',
    secondaryMetric: 'Adaptive Grid Control',
    tags: ['Big Data', 'Forecasting', 'LSTM', 'Smart grid'],
    url: 'https://smart-energy-grid-app.vercel.app',
    linkLabel: 'Live demo',
    visual: 'grid',
    preview: '/assets/preview-energy.webp',
    detail: 'Proposed a pipeline for demand forecasting and adaptive grid control, connecting Big Data Analytics with sustainable power distribution.',
    problem: 'Renewable energy sources introduce supply volatility into regional power grids, requiring predictive load balancing to prevent brownouts and minimize fossil-fuel peaking.',
    architecture: [
      'Multi-Sensor Smart Meter Telemetry Stream',
      'Time-Series Feature Engineering & Weather Fusion',
      'LSTM Sequence Forecaster for Peak Demand Windows',
      'Interactive Grid Dispatch & Storage Simulator'
    ],
    highlights: [
      'Interactive web simulation modeling solar/wind supply vs. residential & industrial demand',
      'LSTM-based time-series forecasting pipeline for proactive load shedding and storage dispatch',
      'Connects big data analytics directly to carbon-intensity reduction metrics'
    ]
  },
  {
    title: 'MRS by Letterboxd',
    category: 'RECOMMENDATION SYSTEMS',
    filterCat: 'ml',
    description: 'A film discovery and recommendation experience with title, language, year and genre filters, linked to Letterboxd.',
    metric: 'Cosine',
    metricLabel: 'VECTOR SIMILARITY',
    secondaryMetric: 'Multi-Filter Ranking',
    tags: ['Recommendation', 'Python', 'Cosine similarity', 'Scikit-learn'],
    url: 'https://movie-recommendation-using-letterbo.vercel.app',
    linkLabel: 'Live demo',
    preview: '/assets/preview-mrs-updated.webp',
    detail: 'The Python backend encodes genres and ranks films using cosine similarity. Title, language, year and genre filters shape discovery, with browser filtering available as a fallback.',
    problem: 'Standard collaborative filtering struggles with cold-start niche and international cinema when users want granular control over language, era, and mood.',
    architecture: [
      'Catalog Metadata & Letterboxd Feature Extraction',
      'TF-IDF & Multi-Hot Genre/Language Vectorization',
      'Cosine Similarity Matrix Computation',
      'Hybrid Filter Engine + Instant Browser Fallback'
    ],
    highlights: [
      'High-precision content-based filtering across title, language, release decade, and genre combinations',
      'Direct Letterboxd integration for one-click film inspection and watchlist curation',
      'Resilient dual-mode architecture with Python backend ranking and instant browser fallback'
    ],
    hasSandbox: 'mrs'
  },
  {
    title: 'Fine-Tuning Llama 3.2 for Domain Q&A',
    category: 'LLMS / PARAMETER-EFFICIENT FINE-TUNING',
    filterCat: 'llm',
    description: 'Fine-tuned Llama 3.2 using LoRA/QLoRA for finance-domain question answering while keeping trainable parameters minimal.',
    metric: 'LoRA',
    metricLabel: 'QLORA · LLAMA 3.2',
    secondaryMetric: '<2% Trainable Params',
    tags: ['PyTorch', 'Llama 3.2', 'LoRA/QLoRA', 'Transformers', 'NLP'],
    detail: 'Fine-tuned Llama 3.2 using LoRA/QLoRA for a finance-domain question-answering task, adapting the base model to domain-specific queries while keeping trainable parameters small. Evaluated adapted model outputs against baseline responses to assess domain accuracy and response quality.',
    problem: 'General-purpose pretrained LLMs often produce vague or ungrounded answers on specialized financial terminology, while full-parameter fine-tuning is computationally prohibitive.',
    architecture: [
      'Domain Q&A Instruction Dataset Curation & Formatting',
      '4-Bit NF4 Quantization + Low-Rank Adapter (LoRA) Injection',
      'Supervised Fine-Tuning (SFT) with Cosine LR Schedule',
      'Baseline vs. Adapted Output Evaluation Suite'
    ],
    highlights: [
      'Reduced trainable parameter footprint by >98% using rank-stabilized LoRA/QLoRA adapters in PyTorch',
      'Structured side-by-side evaluation against zero-shot Llama 3.2 baseline on domain-specific financial queries',
      'Reproducible single-GPU training workflow in Jupyter / Google Colab'
    ]
  },
  {
    title: 'Few-Shot Medical Image Classification',
    category: 'MEDICAL AI / META-LEARNING',
    filterCat: 'cv',
    description: 'Prototypical Networks with a ResNet18 backbone for low-data breast histopathology and brain tumor (BraTS) classification.',
    metric: 'ProtoNet',
    metricLabel: 'RESNET18 · FEW-SHOT',
    secondaryMetric: 'Histopathology & BraTS',
    tags: ['PyTorch', 'Few-shot learning', 'Prototypical Networks', 'ResNet18', 'Medical imaging'],
    detail: 'Reproduced and extended a few-shot meta-learning model (Prototypical Networks, ResNet18 backbone) for breast histopathology and brain tumor (BraTS) image classification as part of M.Tech research at GITAM University.',
    problem: 'Annotating histopathology whole-slide patches and volumetric brain MRI scans requires scarce specialist radiologist time, causing standard deep CNNs to overfit when only 1 to 5 labelled examples per class exist.',
    architecture: [
      'Episodic N-Way K-Shot Support & Query Task Sampler',
      'ResNet18 Metric Embedding Backbone (PyTorch)',
      'Class Prototype Centroid Calculation in Embedding Space',
      'Squared Euclidean Distance Softmax Classifier'
    ],
    highlights: [
      'Evaluates cross-domain transfer between source medical imagery and target breast histopathology & BraTS brain tumor datasets',
      'Episodic meta-training enables rapid adaptation to unseen tissue classes from just 1–5 labelled support examples',
      'Active M.Tech thesis research at GITAM School of Technology, Hyderabad'
    ],
    hasSandbox: 'fewshot'
  },
  {
    title: 'Heart Disease Prediction',
    category: 'MEDICAL AI',
    filterCat: 'ml',
    description: 'A deep autoencoder for the UCI Heart Disease dataset, with threshold tuning and class-imbalance handling.',
    metric: '96.3%',
    metricLabel: 'ACCURACY',
    secondaryMetric: 'L1/L2 + Dropout',
    tags: ['Autoencoder', 'TensorFlow', 'Keras', 'Deep learning'],
    detail: 'L1/L2 regularization and dropout support the deep autoencoder. Threshold tuning and class-imbalance handling are part of the prediction pipeline.',
    problem: 'Clinical tabular datasets suffer from correlated features, small sample sizes, and severe cost asymmetry between false negatives and false positives.',
    architecture: [
      'Clinical Feature Imputation & Scaling Pipeline',
      'L1/L2 Regularized Deep Autoencoder Feature Extractor',
      'Class-Weighted Classifier & Decision Threshold Optimizer',
      'Cross-Validation & Sensitivity/Specificity Audit'
    ],
    highlights: [
      'Achieved 96.3% accuracy on the UCI Heart Disease benchmark through representation learning',
      'Prevented overfitting on compact clinical tabular data via combined L1/L2 penalties and dropout',
      'Tuned classification thresholds specifically to minimize false-negative clinical risk'
    ]
  },
  {
    title: 'Real-Time Face Detection',
    category: 'COMPUTER VISION',
    filterCat: 'cv',
    description: 'An OpenCV + LBPH pipeline that stores detected faces in MongoDB with anti-spoofing safeguards. Published on ResearchGate.',
    metric: '1,000+',
    metricLabel: 'FPS · 30% SPEED BOOST',
    secondaryMetric: 'ResearchGate Paper',
    tags: ['OpenCV', 'LBPH', 'MongoDB', 'Python'],
    url: 'https://github.com/ishuu9837/REAL-TIME-FACE-DETECTION',
    linkLabel: 'View source',
    detail: 'The OpenCV and LBPH pipeline achieved a 30% speed boost and 1,000+ FPS, with detected faces stored in MongoDB and anti-spoofing safeguards designed by reasoning through real attack scenarios.',
    problem: 'Real-time access control systems need sub-millisecond facial detection and recognition on edge CPU hardware while resisting photo/replay spoofing and maintaining an auditable event log.',
    architecture: [
      'Multi-Scale Cascade & Grayscale Frame Preprocessor',
      'LBPH Facial Feature Histogram Extractor',
      'Anti-Spoofing Liveness & Confidence Gate',
      'Asynchronous MongoDB Event & Audit Logger'
    ],
    highlights: [
      '30% frame-processing speed boost reaching 1,000+ FPS in benchmarked OpenCV pipelines',
      'Published peer-accessible research paper on ResearchGate (December 2024)',
      'Integrated MongoDB persistence for real-time attendance and security audit trails'
    ]
  },
  {
    title: 'Image Colourisation',
    category: 'COMPUTER VISION',
    filterCat: 'cv',
    description: 'A U-Net convolutional autoencoder in LAB colour space on CIFAR-10, using VGG perceptual loss.',
    metric: 'U-Net',
    metricLabel: 'LAB SPACE · VGG LOSS',
    secondaryMetric: 'TF → PyTorch Migration',
    tags: ['U-Net', 'PyTorch', 'Perceptual loss', 'Computer vision'],
    detail: 'Developed through three architecture iterations and migrated from TensorFlow to PyTorch using Git-based version control and structured peer code review.',
    problem: 'Standard pixel-wise L2 loss in RGB space produces desaturated, sepia-toned grey averages because chrominance prediction is inherently multimodal.',
    architecture: [
      'RGB to CIE LAB Lightness (L*) Channel Separation',
      'Encoder-Decoder U-Net with Skip Connections',
      'VGG Feature Perceptual Loss + L1 Chrominance Objective',
      'LAB-to-RGB Reconstruction & Quantitative Evaluation'
    ],
    highlights: [
      'Preserves sharp structural boundaries via symmetric U-Net skip connections between encoder and decoder',
      'Avoids muddy desaturated outputs by combining CIE LAB colour space with VGG perceptual loss',
      'Iterated across 3 architectural generations and migrated from TensorFlow/Keras to modular PyTorch'
    ]
  },
  {
    title: 'Galaxy Glide',
    category: 'WEB / INTERACTION',
    filterCat: 'data',
    description: 'A responsive interactive front end, tested across browsers and devices for high frame-rate rendering.',
    metric: '40%',
    metricLabel: 'FASTER PAGE LOAD',
    secondaryMetric: '+35% Engagement',
    tags: ['HTML/CSS', 'JavaScript', 'Performance'],
    url: 'https://github.com/ishuu9837/GALAXY-GLIDE',
    linkLabel: 'View source',
    detail: '40% faster page load and 35% higher user engagement. Tested across browsers and devices.',
    problem: 'Heavy DOM animations and unoptimized assets degrade mobile frame rates and cause high bounce rates on interactive web experiences.',
    architecture: [
      'Asset Pipeline & Critical Rendering Path Optimization',
      'GPU-Accelerated CSS & RequestAnimationFrame Loop',
      'Responsive Touch & Pointer Input Abstraction',
      'Cross-Browser Telemetry & Lighthouse Auditing'
    ],
    highlights: [
      'Reduced initial page load time by 40% through critical-path asset optimization',
      'Increased session engagement by 35% across desktop and mobile viewports',
      'Open-source repository available on GitHub'
    ]
  }
];

export const skillGroups = [
  { title: 'Machine learning & AI', number: '01', description: 'From the first experiment to the trained model.', skills: ['PyTorch','TensorFlow','Keras','Scikit-learn','OpenCV','NumPy','Pandas','Autoencoders','U-Net','Few-shot learning'] },
  { title: 'Programming & data', number: '02', description: 'The foundations behind the pipeline.', skills: ['Python','SQL','JavaScript','HTML/CSS','Flask','Django','MongoDB'] },
  { title: 'Cloud, BI & tools', number: '03', description: 'Making the work useful beyond the notebook.', skills: ['AWS','Docker','Power BI','Tableau','Git & GitHub','Jupyter','Google Colab','Linux','Claude','Manus','Codex'] },
];

export const experience = [
  { role:'Personal Tutor (Maths, Stats & Python)', company:'Freelancer.com', dates:'Jan 2025 — Jul 2025', description:'Taught Mathematics, Statistics and Python to a global student base with personalized lesson plans and interactive coding sessions.' },
  { role:'Freelance Researcher', company:'Fiverr', dates:'Nov 2024 — May 2025', description:'Statistical analysis and research consulting: data cleaning, validation and regression analysis.' },
];

export const education = [
  { degree:'M.Tech in Data Science', school:'GITAM University', place:'Hyderabad', dates:'2025 — 2027', score:'8.95 CGPA', current:true },
  { degree:'B.Tech in CSE (Artificial Intelligence)', school:'Parul University', place:'Vadodara', dates:'2021 — 2025', score:'7.13 CGPA' },
];

export const certifications = [
  { title:'Professional Certification in Data Science & AI', issuer:'IIT Roorkee via Intellipaat · 2025', score:'A Grade', url:'https://tih.iitr.ac.in/certificate/intellipaat/IPTIH25070775.jpg' },
  { title:'Introduction to Machine Learning', issuer:'NPTEL / Coursera', score:'100/100' },
  { title:'Introduction to Cybersecurity', issuer:'Cisco', url:'https://www.credly.com/badges/2f2ea326-f082-4302-adad-f97ff5e5eef4' },
  { title:'Python Essentials 1', issuer:'Cisco', score:'100/100', url:'https://www.credly.com/badges/038d86bf-0279-4e10-9751-9c3c0a5c195e/linked_in_profile' },
  { title:'Python Essentials 2', issuer:'Cisco', score:'100/100', url:'https://www.credly.com/badges/2ebedeb7-139b-42af-ab17-7c387deb94d6/linked_in_profile' },
];

export const slugify = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export const site = {
  name: 'Y Eswar',
  email: 'founder@ishuu.me',
  altEmail: 'eswaryadav8543@gmail.com',
  url: 'https://ishuu.me',
  linkedin: 'https://www.linkedin.com/in/eswar854/',
  github: 'https://github.com/ishuu9837',
  instagram: 'https://www.instagram.com/ishuu.me/',
  lastUpdatedFallback: '2026-10-18',
};

export const publications = [
  { title: 'EduSentinel: Anomaly Detection in Education Using a Deep Autoencoder', description: 'Research findings from the abnormal learning behaviour detection project (99.40% ROC-AUC, 90.43% accuracy). Presented at GITAM University Seminar.', venue: 'ResearchGate & GITAM Seminar', date: 'December 2024' },
  { title: 'Real-Time Face Recognition Using OpenCV and LBPH', description: 'Real-time facial recognition with OpenCV and LBPH, covering effectiveness, anti-spoofing safeguards, and adaptability in cybersecurity applications.', venue: 'ResearchGate', date: 'December 2024' },
];

export const researchFacts = [
  ['Status', 'In progress (M.Tech Thesis)'],
  ['Where', 'M.Tech · GITAM University, Hyderabad'],
  ['Approach', 'Meta-learning · Prototypical Networks (ResNet18)'],
  ['Datasets', 'Breast Histopathology & BraTS Brain Tumor MRI'],
  ['Framework', 'PyTorch'],
];

export const faqs = [
  { id: 'roles', q: 'What kind of roles are you looking for?', a: 'Research internships and full-time roles in data science, ML engineering, Gen AI / LLMs and data analytics, including computer vision, medical imaging and data analyst positions. Remote, hybrid or onsite.' },
  { id: 'research', q: 'What is your M.Tech research about?', a: 'Cross-domain few-shot learning for histopathology and brain tumor (BraTS) images using Prototypical Networks with a ResNet18 backbone: how models can learn from limited labelled data and transfer that learning across image domains. It is active research at GITAM University.' },
  { id: 'tools', q: 'Which tools do you work with most?', a: 'Python with PyTorch, TensorFlow, Keras, scikit-learn, LoRA/QLoRA and OpenCV for modelling; SQL, Flask, Django and MongoDB for data and services; and Docker, AWS, Power BI and Tableau to make the work useful beyond the notebook.' },
  { id: 'demos', q: 'Can I try your projects or read the code?', a: 'Several projects have a live demo or a source link on their card: EduSentinel, Smart Energy Grids, MRS by Letterboxd, Real-Time Face Detection and Galaxy Glide. You can also test live interactive simulations in the AI Lab section.' },
  { id: 'publications', q: 'Where can I read your publications?', a: 'Two papers were published on ResearchGate in December 2024: Real-Time Face Recognition Using OpenCV and LBPH, and EduSentinel: Anomaly Detection in Education Using a Deep Autoencoder. You will find them under Research & publications.' },
  { id: 'contact', q: 'What is the best way to reach you?', a: 'Email founder@ishuu.me (or eswaryadav8543@gmail.com), or use the message composer in the Contact section. You can also find me on LinkedIn and GitHub.' },
  { id: 'location', q: 'Where are you based?', a: 'Hyderabad, Telangana, India, and open to relocation or remote work.' },
];
