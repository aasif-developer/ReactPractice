export const profile = {
  name: "Mohammed Aasif",
  firstName: "Mohammed",
  lastName: "Aasif",
  title: "Java Backend Developer",
  tagline: "Building scalable, secure REST APIs with clean architecture",
  photo:
    "https://res.cloudinary.com/devn2ez7p/image/upload/v1775848817/WA_1775848777544_lo4msf.jpg",
  location: "India",
  email: "aasif.mohammed.dev@gmail.com",
  phone: "+91 98765 43210",
  github: "https://github.com/aasif-developer",
  linkedin: "https://linkedin.com/in/mohammed-aasif",
  resumeUrl: "/resume.pdf",
  available: true,
};

export const stats = [
  { value: "10+", label: "Backend Projects" },
  { value: "5+", label: "Core Technologies" },
  { value: "REST", label: "API Design" },
  { value: "100%", label: "Commitment" },
];

export const about = {
  summary: `I am a Java Backend Developer focused on building reliable, production-ready
    server-side applications. I specialize in Spring Boot, RESTful API design, and
    MySQL-backed systems with clean layered architecture — Controller, Service, and
    Repository patterns.`,
  highlights: [
    "Strong foundation in OOP, data structures, and problem-solving",
    "Experience designing REST APIs with proper HTTP semantics and validation",
    "Comfortable with Git workflows, code reviews, and collaborative development",
    "Actively preparing for product-based and MNC backend engineering roles",
  ],
};

export const skills = [
  {
    category: "Languages",
    items: ["Java", "SQL", "JavaScript", "HTML", "CSS"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["Spring Boot", "Spring Data JPA", "Spring Security", "React", "Hibernate"],
  },
  {
    category: "Databases & Tools",
    items: ["MySQL", "PostgreSQL", "Git", "GitHub", "Maven", "Postman", "Docker"],
  },
  {
    category: "Concepts",
    items: [
      "REST API Design",
      "MVC Architecture",
      "JWT Authentication",
      "Exception Handling",
      "Unit Testing",
    ],
  },
];

export const experience = [
  {
    role: "Java Backend Intern",
    company: "Software Development Internship",
    period: "2025 — Present",
    type: "Internship",
    points: [
      "Built REST APIs using Spring Boot with MySQL integration and proper validation layers",
      "Implemented CRUD operations following Controller → Service → Repository architecture",
      "Resolved bugs, optimized queries, and documented API endpoints using Postman collections",
      "Collaborated using Git branching strategy and participated in code review practices",
    ],
  },
  {
    role: "Self-Directed Backend Developer",
    company: "Personal Projects & Open Source",
    period: "2024 — Present",
    type: "Projects",
    points: [
      "Designed and deployed full-stack features with React frontend and Java backend",
      "Applied SOLID principles and separation of concerns across multiple project codebases",
      "Focused on writing maintainable, testable code aligned with industry standards",
    ],
  },
];

export const projects = [
  {
    title: "FraudShield AI",
    subtitle: "AI-Powered Fraud Detection Platform",
    description:
      "Enterprise-style platform for detecting SMS, email, and WhatsApp scams using AI analysis. Built with modular backend services, secure API endpoints, and structured data flow for real-time threat assessment.",
    tech: ["Java", "Spring Boot", "REST API", "MySQL", "React"],
    highlights: [
      "Multi-channel fraud analysis pipeline",
      "Scalable API layer with validation & error handling",
      "Clean separation between detection logic and data layer",
    ],
    github: "https://github.com/aasif-developer",
    live: null,
    featured: true,
  },
  {
    title: "Employee Management API",
    subtitle: "Spring Boot REST Backend",
    description:
      "Production-pattern REST API for employee CRUD operations with MySQL persistence, DTO mapping, global exception handling, and pagination — mirroring patterns used in enterprise applications.",
    tech: ["Java", "Spring Boot", "JPA", "MySQL", "Maven"],
    highlights: [
      "Layered architecture (Controller / Service / Repository)",
      "Input validation and standardized API responses",
      "Database schema design with optimized relationships",
    ],
    github: "https://github.com/aasif-developer",
    live: null,
    featured: true,
  },
  {
    title: "Java Core Practice Suite",
    subtitle: "DSA & Problem-Solving Collection",
    description:
      "Comprehensive collection of Java programs covering algorithms, data structures, and core concepts — Calculator, Fibonacci, Factorial, Palindrome Checker, and more — demonstrating strong CS fundamentals.",
    tech: ["Java", "OOP", "Collections", "Algorithms"],
    highlights: [
      "50+ solved problems with optimized approaches",
      "Demonstrates recursion, iteration, and string manipulation",
      "Interview-ready coding patterns",
    ],
    github: "https://github.com/aasif-developer",
    live: null,
    featured: false,
  },
];

export const education = [
  {
    degree: "Bachelor of Technology / Computer Science",
    institution: "Your University Name",
    period: "2022 — 2026",
    details: "Coursework: Data Structures, DBMS, Operating Systems, Computer Networks, OOP",
  },
];

export const certifications = [
  { name: "Java Programming", issuer: "Self-paced / Online", year: "2024" },
  { name: "Spring Boot Microservices", issuer: "In Progress", year: "2025" },
  { name: "Git & GitHub", issuer: "Self-paced", year: "2024" },
];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];
