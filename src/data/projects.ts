// Project data with extended information
export const projects = [
  {
    id: 'flashpoint-qr',
    title: 'FlashPoint QR',
    description: 'A QR-based ordering system for restaurants with kitchen display and inventory management',
    longDescription: 'FlashPoint QR is a comprehensive restaurant management solution featuring QR code-based ordering, real-time kitchen display systems, and intelligent inventory management. The system streamlines the entire restaurant workflow from customer ordering to inventory forecasting, helping restaurant owners reduce costs and improve customer satisfaction.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
    image: '/projects/flashpoint-qr.jpg',
    color: '#ff8906',
    githubUrl: 'https://github.com/alagbefranc/flashpoint-qr',
    features: [
      'QR code generation for contactless ordering',
      'Real-time kitchen display system',
      'Inventory management with AI-powered demand forecasting',
      'Order tracking and analytics dashboard',
      'Multi-restaurant support with custom branding'
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'WebSockets']
  },
  {
    id: 'purpsend',
    title: 'PurpSend',
    description: 'A financial transaction platform for sending money securely across borders',
    longDescription: 'PurpSend is a secure cross-border money transfer application designed to make international transactions fast, affordable, and secure. The platform leverages blockchain technology to reduce transaction fees while providing complete transparency and security for users.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    image: '/projects/purpsend.jpg',
    color: '#7f5af0',
    githubUrl: 'https://github.com/alagbefranc/purpsend',
    features: [
      'Instant cross-border transfers',
      'Multi-currency support',
      'Real-time exchange rate tracking',
      'Secure authentication with biometrics',
      'Transaction history and analytics'
    ],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Redis', 'JWT Authentication']
  },
  {
    id: 'clinical-assistant',
    title: 'Clinical Assistant',
    description: 'AI-powered clinical documentation and decision support system for healthcare professionals',
    longDescription: 'Clinical Assistant is an AI-powered platform that helps healthcare professionals streamline their documentation workflow and access evidence-based clinical decision support. The system uses natural language processing to generate structured medical notes from doctor-patient conversations and provides relevant medical references and guidelines.',
    tags: ['Next.js', 'OpenAI', 'TypeScript', 'Firebase'],
    image: '/projects/clinical-assistant.jpg',
    color: '#e53170',
    githubUrl: 'https://github.com/alagbefranc/clinical-assistant',
    features: [
      'Voice-to-text transcription of patient encounters',
      'Automated medical documentation generation',
      'Clinical decision support with medical literature integration',
      'Secure patient data management',
      'Integration with electronic health records'
    ],
    technologies: ['Next.js', 'TypeScript', 'OpenAI API', 'Firebase', 'TensorFlow']
  },
  {
    id: 'gasaroo-delivery',
    title: 'Gasaroo Delivery',
    description: 'On-demand fuel delivery service application with real-time tracking',
    longDescription: 'Gasaroo Delivery is an on-demand mobile fuel delivery service platform that brings gas directly to users\' vehicles wherever they are parked. The application features real-time delivery tracking, scheduled deliveries, and a seamless payment experience to revolutionize how people refuel their vehicles.',
    tags: ['React Native', 'Firebase', 'Google Maps API', 'Node.js'],
    image: '/projects/gasaroo-delivery.jpg',
    color: '#f25f4c',
    githubUrl: 'https://github.com/alagbefranc/gasaroo-delivery',
    features: [
      'On-demand and scheduled fuel delivery',
      'Real-time delivery tracking',
      'Secure payment processing',
      'Delivery zone optimization',
      'Push notifications for delivery updates'
    ],
    technologies: ['React Native', 'Firebase', 'Google Maps API', 'Node.js', 'Stripe']
  },
  {
    id: 'rag-chatbot',
    title: 'RAG Chatbot Platform',
    description: 'Retrieval-augmented generation platform for building knowledge-based chatbots',
    longDescription: 'The RAG (Retrieval-Augmented Generation) Chatbot Platform allows businesses to create custom AI chatbots that combine the power of large language models with their proprietary knowledge bases. The platform features document ingestion, vector-based retrieval, and fine-tuning capabilities to create highly accurate and context-aware conversational agents.',
    tags: ['Python', 'FastAPI', 'Vector DB', 'React'],
    image: '/projects/rag-chatbot.jpg',
    color: '#2cb67d',
    githubUrl: 'https://github.com/alagbefranc/rag-chatbot',
    features: [
      'Document processing and knowledge extraction',
      'Vector database integration for semantic search',
      'Context-aware conversation management',
      'Custom model fine-tuning interface',
      'Analytics dashboard for chatbot performance'
    ],
    technologies: ['Python', 'FastAPI', 'Langchain', 'Pinecone', 'React', 'OpenAI API']
  },
  {
    id: 'smart-home-hub',
    title: 'Smart Home Hub',
    description: 'Centralized IoT control system for smart home devices with voice and mobile control',
    longDescription: 'Smart Home Hub is a comprehensive IoT control center that unifies the management of various smart home devices regardless of their manufacturer. The platform provides voice control, automation routines, energy usage monitoring, and security features through both mobile and web interfaces.',
    tags: ['React', 'Node.js', 'MQTT', 'WebSockets'],
    image: '/projects/smart-home-hub.jpg',
    color: '#0f0e17',
    githubUrl: 'https://github.com/alagbefranc/smart-home-hub',
    features: [
      'Universal device compatibility',
      'Voice command integration',
      'Automated routines and scenes',
      'Energy usage monitoring and optimization',
      'Remote access and control'
    ],
    technologies: ['React', 'Node.js', 'MQTT', 'WebSockets', 'Redis', 'Raspberry Pi']
  },
  {
    id: 'harvest-tracker',
    title: 'Harvest Tracker',
    description: 'Agricultural management system for tracking crop growth, weather data, and yield predictions',
    longDescription: 'Harvest Tracker is a comprehensive agricultural management system designed to help farmers optimize their crop yields through data-driven insights. The application combines weather data, soil sensors, and satellite imagery to provide real-time monitoring of crop health and predictive analytics for harvest planning.',
    tags: ['Vue.js', 'Python', 'Django', 'PostgreSQL'],
    image: '/projects/harvest-tracker.jpg',
    color: '#f9bc60',
    githubUrl: 'https://github.com/alagbefranc/harvest-tracker',
    features: [
      'Field mapping and zone management',
      'Weather data integration and forecasting',
      'Crop growth stage tracking',
      'Yield prediction using machine learning',
      'Resource planning and optimization'
    ],
    technologies: ['Vue.js', 'Python', 'Django', 'PostgreSQL', 'TensorFlow', 'Weather API']
  },
  {
    id: 'memorease',
    title: 'MemorEase',
    description: 'Spaced repetition learning application with AI-generated study materials',
    longDescription: "MemorEase is an intelligent learning platform that utilizes spaced repetition algorithms and AI-generated content to optimize the learning process. The application adapts to each user\'s learning pace and generates custom study materials based on their performance and goals.",
    tags: ['React', 'Express', 'MongoDB', 'Machine Learning'],
    image: '/projects/memorease.jpg',
    color: '#ff8906',
    githubUrl: 'https://github.com/alagbefranc/memorease',
    features: [
      'Personalized spaced repetition scheduling',
      'AI-generated quizzes and flashcards',
      'Progress tracking and analytics',
      'Content import from various formats',
      'Study group collaboration features'
    ],
    technologies: ['React', 'Express', 'MongoDB', 'TensorFlow.js', 'WebRTC']
  },
  {
    id: 'portfolio-showcase',
    title: 'Portfolio Showcase',
    description: 'Modern portfolio website built with Next.js featuring 3D elements and interactive UI',
    longDescription: 'This portfolio website showcases my projects using modern web technologies and design principles. It features 3D elements, parallax scrolling effects, and a responsive design to create an engaging user experience. The site is built with the latest version of Next.js and uses Three.js for 3D rendering and animations.',
    tags: ['Next.js', 'Three.js', 'TypeScript', 'Tailwind CSS'],
    image: '/projects/portfolio-showcase.jpg',
    color: '#6246ea',
    githubUrl: 'https://github.com/alagbefranc/portfolio',
    features: [
      '3D interactive elements',
      'Parallax scrolling effects',
      'Responsive design for all devices',
      'Dynamic project pages',
      'Modern UI with glassmorphism and gradients'
    ],
    technologies: ['Next.js', 'TypeScript', 'Three.js', 'Framer Motion', 'Tailwind CSS']
  },
  {
    id: 'fittrack-pro',
    title: 'FitTrack Pro',
    description: 'Fitness tracking application with custom workout plans and nutrition monitoring',
    longDescription: 'FitTrack Pro is a comprehensive fitness tracking application that helps users achieve their health goals through personalized workout plans, nutrition tracking, and progress analytics. The app features AI-powered workout recommendations, calorie tracking, and integration with various fitness wearables.',
    tags: ['React Native', 'Firebase', 'GraphQL', 'TensorFlow'],
    image: '/projects/fittrack-pro.jpg',
    color: '#e45858',
    githubUrl: 'https://github.com/alagbefranc/fittrack-pro',
    features: [
      'Personalized workout plan generation',
      'Nutrition tracking and meal planning',
      'Progress visualization and analytics',
      'Wearable device integration',
      'Social features for workout sharing and challenges'
    ],
    technologies: ['React Native', 'Firebase', 'GraphQL', 'TensorFlow Lite', 'HealthKit/Google Fit APIs']
  }
];
