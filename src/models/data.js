// Personal information data model
export const personalInfo = {
  name: "MITHINVEL",
  title: "Flutter Developer",
  subtitle: "Creating Mobile Experiences",
  description: "Passionate Flutter developer with expertise in mobile app development using Dart. I build scalable mobile applications and love turning ideas into reality through innovative mobile solutions.",
  email: "mithinvel@example.com",
  phone: "+91 9080971432",
  location: "Dharmapuri, Tamil Nadu, India",
  social: {
    github: "https://github.com/mithinvel",
    linkedin: "https://linkedin.com/in/mithinvel",
    twitter: "https://twitter.com/mithinvel",
    instagram: "https://instagram.com/mithinvel"
  }
};

// Skills data model
export const skills = {
  mobile: [
    { name: "Flutter", level: 90, icon: "📱" },
    { name: "Dart", level: 90, icon: "🎯" },
    { name: "Flutter Development", level: 85, icon: "🚀" }
  ],
  backend: [
    { name: "Firebase", level: 85, icon: "🔥" },
    { name: "MongoDB", level: 70, icon: "🍃" }
  ],
  tools: [
    { name: "Git", level: 90, icon: "🔧" },
    { name: "GitHub", level: 85, icon: "🐙" },
    { name: "Problem Solving", level: 95, icon: "🧩" }
  ]
};

// Projects data model
export const projects = [
  {
    id: 1,
    title: "Flutter E-Commerce App",
    description: "A fully functional e-commerce mobile application built with Flutter and Firebase backend, featuring user authentication, product catalog, shopping cart, and payment integration.",
    technologies: ["Flutter", "Dart", "Firebase", "MongoDB"],
    image: "/api/placeholder/600/400",
    github: "https://github.com/mithinvel/flutter-ecommerce",
    live: "https://play.google.com/store/apps/details?id=com.mithinvel.ecommerce",
    status: "Completed"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity mobile app for task management with real-time sync, built using Flutter and Firebase. Features include task categorization, deadline tracking, and team collaboration.",
    technologies: ["Flutter", "Dart", "Firebase"],
    image: "/api/placeholder/600/400",
    github: "https://github.com/mithinvel/task-manager",
    live: "https://play.google.com/store/apps/details?id=com.mithinvel.taskmanager",
    status: "In Progress"
  },
  {
    id: 3,
    title: "Food Delivery App",
    description: "A modern food delivery mobile application with real-time order tracking, built with Flutter. Integrated with Firebase for backend services and MongoDB for data management.",
    technologies: ["Flutter", "Dart", "Firebase", "MongoDB"],
    image: "/api/placeholder/600/400",
    github: "https://github.com/mithinvel/food-delivery",
    live: "https://play.google.com/store/apps/details?id=com.mithinvel.fooddelivery",
    status: "Completed"
  }
];

// Experience data model
export const experience = [
  {
    id: 1,
    company: "Tech Solutions Inc.",
    position: "Flutter Developer",
    duration: "Jan 2023 - Present",
    description: "Developing cross-platform mobile applications using Flutter and Dart. Working with Firebase backend services and MongoDB databases. Implementing complex UI designs and state management solutions.",
    technologies: ["Flutter", "Dart", "Firebase", "MongoDB", "Git"]
  },
  {
    id: 2,
    company: "Mobile Innovations Ltd.",
    position: "Junior Flutter Developer",
    duration: "Jun 2022 - Dec 2022",
    description: "Assisted in developing mobile applications using Flutter framework. Worked on bug fixes, feature implementation, and code optimization. Collaborated with team using Git and GitHub for version control.",
    technologies: ["Flutter", "Dart", "Git", "GitHub"]
  },
  {
    id: 3,
    company: "Freelance",
    position: "Flutter Developer",
    duration: "Jan 2022 - May 2022",
    description: "Developed custom mobile applications for small businesses. Focused on problem-solving and delivering efficient solutions using Flutter and Firebase backend integration.",
    technologies: ["Flutter", "Dart", "Firebase", "Problem Solving"]
  }
];

// Education data model
export const education = [
  {
    id: 1,
    institution: "University of Technology",
    degree: "Bachelor of Computer Science",
    duration: "2020 - 2024",
    description: "Focused on mobile app development, software engineering principles, and database management. Completed projects in Flutter development and backend integration."
  },
  {
    id: 2,
    institution: "Flutter Academy",
    degree: "Flutter Development Certification",
    duration: "2022",
    description: "Comprehensive certification in Flutter framework, Dart programming language, and mobile app development best practices."
  }
];

// Contact information
export const contact = {
  email: "mithinvel@example.com",
  phone: "+1 (555) 123-4567",
  location: "Your City, Country",
  availability: "Available for freelance projects and full-time opportunities"
};


export const certifications = [
  {
    id: 1,
    name: "Flutter-Based App Development Internship Certification",
    issuer: "CUBE CORPSOL",
    date: "January 2025",
    description: "Certification of completed internship (20 days) in Flutter-based app development, focusing on debugging and refactoring code for enhanced functionality. Gained hands-on experience in mobile application development."
  },
  {
    id: 2,
    name: "Introduction to MongoDB for Students",
    issuer: "MongoDB University",
    date: "2024",
    description: "Certification in Introduction to MongoDB for Students covering database fundamentals, document-based storage, basic CRUD operations, and integration with mobile applications."
  }
];
