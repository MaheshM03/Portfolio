import {
  FaUserTie,
  FaLaptopCode,
  FaServer,
  FaRobot,
  FaCloud,
  FaBuilding,
  FaTasks,
  FaShoppingCart,
  FaBriefcase,
  FaGraduationCap,
  FaCertificate
} from "react-icons/fa";

export const config = {
  name: "Mahesh Misal",
  tagline: "Web Developer & Prompt Engineer",
  phone: "7264031487",
  whatsapp: "7264031487",
  email: "misalmahesh03@gmail.com",
  github: "https://github.com/MaheshM03",
  linkedin: "https://www.linkedin.com/in/mahesh-misal",
  about:
    "I'm a passionate Full Stack Developer and Prompt Engineer with expertise in building scalable web applications and AI-powered solutions. I specialize in creating innovative digital experiences that combine cutting-edge technology with user-centric design.",
};


export const skills = [
  {
    icon: FaLaptopCode,
    title: "Frontend Development",
    desc: "React, HTML5, CSS3, JavaScript, TypeScript, Tailwind CSS",
    proficiency: 90, // Add proficiency percentage
  },
  {
    icon: FaServer,
    title: "Backend Development",
    desc: "Node.js, Express, REST APIs, MongoDB",
    proficiency: 85,
  },
  {
    icon: FaRobot,
    title: "AI & Prompt Engineering",
    desc: "GPT Models, Claude, LangChain, Prompt Optimization, AI Integration, LLM Fine-tuning",
    proficiency: 88,
  },
  {
    icon: FaCloud,
    title: "Cloud & DevOps",
    desc: "AWS, Docker, Kubernetes, CI/CD, Git, GitHub Actions, Vercel, Netlify",
    proficiency: 80,
  },
];


export const projects = [
  {
    icon: FaBuilding,
    title: "Company Official Website",
    desc: "Designed and developed a responsive corporate website using React, delivering a polished user experience, clear brand communication, and optimized performance across all devices.",
    tags: ["React", "JavaScript", "Responsive Design"],
    liveUrl: "https://example.com", // Add your live URL
    githubUrl: "https://github.com/MaheshM03/company-website", // Add your GitHub repo
  },
  {
    icon: FaTasks,
    title: "Task Manager",
    desc: "A modern task management platform featuring real-time analytics dashboards, advanced filtering, and productivity tracking for efficient workflow management.",
    tags: ["React.js", "JavaScript"],
    liveUrl: "https://task-manager-demo.com",
    githubUrl: "https://github.com/MaheshM03/task-manager",
  },
  {
    icon: FaShoppingCart,
    title: "E-Commerce Platform",
    desc: "Full-stack e-commerce solution with real-time inventory management, secure authentication, and payment gateway integration.",
    tags: ["React.js", "Express", "Node.js"],
    liveUrl: "https://ecommerce-demo.com",
    githubUrl: "https://github.com/MaheshM03/ecommerce-platform",
  },
];


export const experience = [
  {
    icon: FaBriefcase,
    title: " Full Stack Developer",
    company: "Qurinom Solutions",
    year: "March-2023 - August-2023",
    points: [
      "Led development of AI-powered applications",
      "Collaborated with cross-functional teams",
      "Optimized backend APIs to reduce operational costs",
    ],
  },
  {
    icon: FaBriefcase,
    title: "Intern Full Stack Developer",
    company: "Skillhub Innovative Solutions",
    year: "2021 - 2023",
    points: [
      "Developed scalable web applications",
      "Implemented CI/CD pipelines",
      "Integrated third-party APIs",
    ],
  },
  {
    icon: FaBriefcase,
    title: "  Web Developer and AI prompt Engineer",
    company: "Freelancer",
    year: "2024-Present",
    points: [
      "Built responsive websites",
      "Maintained production web apps",
      "Worked in Agile development teams",
    ],
  },
];


export const education = [
  {
    icon: FaGraduationCap,
    title: "Bachelor In Computer Applications",
    school: "Deogiri College, Maharashtra, India",
    year: "2019 - 2023",
    sub: "Web Development, Data Structures, Algorithms, Database Management",
  },
  {
    icon: FaGraduationCap,
    title: "Master In Business Administration",
    school: "Institute of Management and Research Technology, Maharashtra, India",
    year: "2024 - 2026",
    sub: "Information Technology Management, Project Management, Business Analytics",
  },
  {
    icon: FaCertificate,
    title: "Professional Certifications",
    list: [
      "AWS Certified Solutions Architect",
      "Google Cloud Professional",
      "OpenAI Prompt Engineering",
    ],
  },
];