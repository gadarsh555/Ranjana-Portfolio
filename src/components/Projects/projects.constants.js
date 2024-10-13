const PROJECTS = [
  {
    title:
      "Artistic Image Stylization with Generative Adversarial Networks(GANs)",
    description:
      "Leveraged GANs to create artistic image stylizations, successfully capturing the distinctive artistic patterns and textures of Claude Monet. This project explored the capabilities of GANs for generating creative content, which could be beneficial for the company's marketing or design departments in creating unique and engaging visuals.",
    points: [
      "Constructed neural network architectures for both image generation (applying artistic style) and discrimination (differentiating real paintings from generated ones).",
      "Employed various loss functions during training: generator loss, cycle consistency loss, identity loss, and discriminator loss to optimize the model's performance. ",
      "Trained the model to achieve photo-to-painting style transfer while maintaining the original image content through cycle consistency.",
      "Addressed challenges like content preservation and maintaining artistic fidelity to achieve realistic and visually appealing results, ensuring high-quality image generation.",
    ],
    ghLink:
      "https://github.com/ranj10/Artistic-Image-Stylization-with-Generative-Adversarial-Networks--GANs-",
    demoLink: "",
    imgPath: "",
  },
  {
    title: "Innovative YouTube Video Summarization Tool with Hugging Face ASR",
    description:
      "Pioneered a novel video summarization tool utilizing Hugging Face ASR technology. This tool extracts key audio segments from YouTube videos and generates concise summaries, tackling challenges like diverse speech patterns and background noise.",
    points: [
      "Leveraged Hugging Face's wav2vec2-large-xlsr-53-english model for speech recognition, transcribing audio into text.",
      "Implemented audio chunking using librosa to address potential out-of-memory errors during processing.",
      "Utilized transformers library's summarization pipeline to condense lengthy transcripts into concise summaries.",
      "Incorporated text chunking for efficient summarization of large volumes of transcribed text",
    ],
    ghLink:
      "https://github.com/ranj10/-Innovative-YouTube-Video-Summarization-Tool-with-Hugging-Face-ASR",
    demoLink: "",
    imgPath: "",
  },
  {
    title: "Conversational Chatbot using a novel Bahdanau attention mechanism",
    description:
      "Designed and implemented a user-friendly chatbot that leverages powerful NLP techniques. This chatbot integrates a deep learning language model to understand user queries and generate contextually relevant responses.",
    points: [
      "This high-performing sequence-to-sequence chatbot uses TensorFlow and Keras, enabling contextually relevant responses",
      "Incorporated a novel Bahdanau attention mechanism to strategically focus on critical elements within the input sequence during response generation, enhancing conversational coherence.",
      "Implemented robust text data preprocessing techniques, including cleaning, tokenization, and padding, to prepare data for efficient model training.",
      "Achieved text summarization capabilities through a meticulously designed GRU (Gated Recurrent Unit) encoder-decoder architecture.",
      "Ensured user satisfaction by gracefully handling out-of- vocabulary words, informing the user and continuing the conversation for a seamless user experience.",
    ],
    ghLink:
      "https://github.com/ranj10/Conversational-Chatbot-using-a-novel-Bahdanau-attention-mechanism",
    demoLink: "",
    imgPath: "",
  },
  {
    title: "Real-Time Driver Drowsiness Detection System",
    description:
      "Engineered a robust computer vision system for real-time driver drowsiness detection with high accuracy, even in varying lighting conditions. This system utilizes facial landmark and eye movement analysis with convolutional neural networks to assess driver alertness, minimizing false positives.",
    points: [
      "Optimized for resource-constrained environments like vehicles and mobile devices, this system has the potential to significantly improve road safety by promoting driver alertness.",
      "Implemented real-time drowsiness detection algorithms with efficient inference for on-device deployment, enabling immediate feedback for drivers.",
      "Conducted extensive testing on simulated and real-world datasets to ensure the system's reliability in various driving scenarios.",
    ],
    ghLink:
      "https://github.com/ranj10/Real-Time-Driver-Drowsiness-Detection-System-",
    demoLink: "",
    imgPath: "",
  },
  {
    title: "Personalized Music Recommendation System",
    description:
      "Developed a high-performing music recommender system using machine learning on a massive Spotify dataset. This system analyzes user preferences, music genres, and listening habits to generate highly personalized recommendations, resulting in 89% boost in user engagement.",
    points: [
      "Unveiled music trends through meticulous data exploration with pandas and NumPy, empowering targeted recommendations and content discovery.",
      "Implemented K-Means clustering to effectively group songs and genres based on audio features, laying the groundwork for personalized listening journeys and increased user satisfaction.",
      "Championed efficient data visualization with t-SNE and PCA, enabling clear comprehension of song relationships, fostering content exploration, and informing strategic music library acquisitions.",
      "Integrated cosine similarity to deliver accurate song recommendations by calculating song similarity based on features, promoting user retention and boosting platform value.",
      "Developed a user-friendly interface using ipywidgets, streamlining song input and recommendation display, enhancing user experience, and driving platform adoption.",
    ],
    ghLink:
      "https://github.com/ranj10/Personalized-Music-Recommendation-System",
    demoLink: "",
    imgPath: "",
  },
  {
    title: "Fraud Detection Model",
    description:
      "Built a machine learning model that predicts fraudulent transactions using internal data, resulting in reduction in financial losses for the bank. This model utilizes anomaly detection techniques to identify suspicious transaction patterns.",
    points: [
      "Continuously monitored and updated the model to maintain its effectiveness against evolving fraud schemes, ensuring ongoing protection against financial threats.",
      "Employed data visualization techniques to analyze model performance and identify potential weaknesses, allowing for targeted improvements and further loss prevention",
    ],
    ghLink: "https://github.com/ranj10/Fraud_detection",
    demoLink: "",
    imgPath: "",
  },
  {
    title: "Credit Card Approval Predictive Model",
    description:
      "Developed a highly accurate machine learning model for predicting credit card approval, achieving 91% accuracy.",
    points: [
      "Identified key factors influencing creditworthiness, enabling banks to make more informed decisions.",
      "Streamlined the credit card application process, leading to improved operational efficiency and reduced costs.",
      "Mitigated financial risks by identifying potential high-risk applicants.",
    ],
    ghLink: "https://github.com/ranj10/credit_card_approval",
    demoLink: "",
    imgPath: "",
  },
];

export { PROJECTS };
