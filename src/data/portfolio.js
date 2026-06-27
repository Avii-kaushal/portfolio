import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiTailwindcss,
  SiRedux,
  SiReactquery,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiNeo4J,
  SiGit,
  SiVercel,
} from "react-icons/si";


export const profile = {
  name: 'Avishek Kumar',
  title: 'Full-Stack Software Developer',
  tagline: 'I turn complex problems into fast, scalable web experiences.',
  availability: 'Open to opportunities',
  location: 'Available remotely',
}

export const summary =
  'I am a Software Developer with 4 years of experience building scalable, high-performance web applications using React.js, Next.js, Vue.js, Node.js, Express.js, SQL, MongoDB, and TypeScript. I specialize in end-to-end full-stack development — responsive Ul architecture, reusable component systems, REST API design and integration, database modeling, and production deployment — with a strong focus on performance optimization, code maintainability, and user experience. I am also experienced in Al-powered application development, rapid prototyping using Al-assisted workflows, and collaborating with cross-functional teams in Agile environments.'

export const highlights = [
  { value: '3+', label: 'Years of experience' },
  { value: '10+', label: 'Apps in production' },
  { value: '4,000+', label: 'Active users served' },
  { value: '40%', label: 'Avg. performance uplift' },
]

export const heroTech = ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL']

export const experience = [
  {
    position: "Software Developer",
    company: "Paladin Tech AI",
    period: "Feb 2025 - Present",
    location: "Chandigarh",
    description: "Developed and deployed 5+ production-grade web applications using React.js, Next.js, and TypeScript. Built an AI Deepfake Detection platform, Phonetic Call Analysis system, and Big Data Analytics platform with Neo4j visualizations. Rebuilt company website with Next.js reducing load times by 20%.",
    responsibilities: [
      "Developed and deployed 5+ production-grade web applications using React.js, Next.js, and TypeScript, ensuring scalability, modularity, and long-term maintainability.",
      "Built an AI-powered Deepfake Detection platform, integrating Python APIs for media analysis and detection workflows.",
      "Developed a Phonetic Call Analysis system with interactive dashboards, real-time filtering, and AI-driven insights.",
      "Engineered a Big Data Analytics platform with Neo4j-powered graph visualizations for exploring complex entity relationships.",
      "Rebuilt the company website with Next.js, reducing page load time by 20% and increasing organic traffic by 30%.",
      "Improved application performance through lazy loading, code splitting, memoization, and Core Web Vitals optimization.",
      "Collaborated with Backend and AI/ML teams in Agile environments to deliver production-ready features."
    ],
    technologies: ["React.js", "Next.js", "TypeScript", "Python", "Neo4j", "Agile"]
  },
  {
    position: "Software Developer",
    company: "Webtunix Solution Pvt. Ltd.",
    period: "2024",
    location: "Chandigarh",
    description: "Built an AI-powered Dating Platform supporting 1,000+ active users and 500+ daily API hits. Developed an AI-powered Chatbot Platform with conversational UI, context-aware responses, and persistent chat history.",
    responsibilities: [
      "Built an AI-powered Dating Platform — users generate AI personas (photos & videos) and chat with AI characters in real time — scaled to ~1,000+ active users with 500+ API hits daily.",
      "Developed an AI-powered Chatbot Platform with conversational UI, context-aware responses, and persistent chat history for seamless multi-turn interactions.",
      "Delivered user and admin dashboards with role-based access control, analytics, and advanced filtering capabilities."
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "SQL", "JavaScript", "Python"]
  },
  {
    position: "Software Developer",
    company: "Bitfrills Solutions Inc.",
    period: "2022",
    location: "Chandigarh",
    description: "Developed frontend and backend features for SportsX9 supporting 2,000+ active users and 1,000+ daily API requests. Built Payro Finance, a business lending platform with streamlined user onboarding and loan workflows.",
    responsibilities: [
      "Developed frontend and backend features for SportsX9, supporting 2,000+ active users and 1,000+ daily API requests.",
      "Built end-to-end features using React.js, Node.js, and Express.js, from responsive UI development to REST API implementation.",
      "Developed User and Admin dashboards with role-based access control, dynamic reporting, and secure workflows.",
      "Built Payro Finance, a lending platform that helps small businesses access financing through a streamlined digital loan application process.",
      "Developed core frontend and backend features, including user onboarding, loan workflows, API integrations, and admin management tools."
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "SQL", "REST APIs"]
  },
  {
    position: "Full Stack Development Trainee",
    company: "Newton School",
    period: "2022",
    location: "Chandigarh",
    description: "Completed intensive training in full-stack development, MERN stack, database design, and DS&A. Built full-stack e-commerce applications, dashboard analytics, and resolved complex algorithms.",
    responsibilities: [
      "Completed an intensive Full Stack Web Development program covering frontend, backend, REST API development, SQL & MongoDB database management, and deployment.",
      "Built full-stack and e-commerce applications including auth systems, admin dashboards, cart/checkout flows, and responsive UIs using the MERN stack.",
      "Worked with MongoDB aggregation pipelines and SQL joins to power dynamic reports and data-driven features.",
      "Solved Data Structures & Algorithms problems across arrays, trees, recursion, sorting, searching, and dynamic programming."
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "SQL", "JavaScript", "HTML", "CSS", "DSA"]
  }
]

export const skillGroups = [
  {
    title: 'Frontend',
    skills: [
      'React.js',
      'Next.js',
      'TypeScript',
      'JavaScript (ES6+)',
      'Tailwind CSS',
      'Redux Toolkit',
      'React Query',
      'Core Web Vitals',
      'WCAG Accessibility',
    ],
  },
  {
    title: 'Backend',
    skills: [
      'Node.js',
      'Express.js',
      'Python',
      'REST API Design',
      'Authentication',
      'Role-Based Access Control',
      'Middleware Development',
    ],
  },
  {
    title: 'Database',
    skills: [
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'Neo4j',
      'Query Optimization',
      'Database Modeling',
    ],
  },
  {
    title: 'AI & Rapid Development',
    skills: [
      'AI Application Development',
      'Cursor & Claude Workflows',
      'Rapid Prototyping',
      'AI-assisted Delivery',
    ],
  },
  {
    title: 'Tools & Deployment',
    skills: [
      'Git & GitHub',
      'CI/CD',
      'Vercel',
      'Netlify',
      'Sentry',
      'Agile / Scrum',
      'System Design',
      'DSA',
    ],
  },
]

export const projects = [
  {
    id: 1,
    title: "AI Deepfake Detection Platform",
    category: "AI & Cybersecurity",
    technologies: "Python, Next.js, FastAPI, PyTorch, React, TypeScript",
    image: "/images/project-1.svg",
    description: "An AI-powered media analysis and deepfake detection platform integrating Python APIs for media processing and detection workflows."
  },
  {
    id: 2,
    title: "Phonetic Call Analysis System",
    category: "Speech AI & Analytics",
    technologies: "React.js, Python, Node.js, Express.js, WebSockets, Chart.js",
    image: "/images/project-2.svg",
    description: "Interactive real-time call analysis platform featuring phonetic search, sentiment tracking, and conversational dashboards."
  },
  {
    id: 3,
    title: "Big Data Analytics Platform",
    category: "Graph DB & Analytics",
    technologies: "Neo4j, React, TypeScript, Node.js, Express, Tailwind CSS",
    image: "/images/project-3.svg",
    description: "Relationship discovery platform using Neo4j graph databases and interactive UI networks to explore complex entity linkages."
  },
  {
    id: 4,
    title: "AI Dating Platform",
    category: "AI / Social Application",
    technologies: "React.js, Node.js, Express.js, MongoDB, SQL, Python",
    image: "/images/project-4.svg",
    description: "A dating application where users generate AI personas and chat with characters in real time, scaled to 1,000+ active users."
  },
  {
    id: 5,
    title: "AI Chatbot Platform",
    category: "Conversational AI",
    technologies: "React.js, Node.js, Express.js, MongoDB, OpenAI API",
    image: "/images/project-5.svg",
    description: "A context-aware chatbot platform featuring dynamic chat workflows, persistent history, and role-based admin panels."
  },
  {
    id: 6,
    title: "SportsX9 Web Application",
    category: "Full Stack Web App",
    technologies: "React.js, Node.js, Express.js, MongoDB, SQL, Redis",
    image: "/images/project-6.svg",
    description: "High-traffic sports gaming platform supporting 2,000+ active users and 1,000+ daily API requests with optimized caching."
  },
  {
    id: 7,
    title: "Payro Finance Lending",
    category: "Fintech Platform",
    technologies: "React.js, Node.js, Express.js, MongoDB, RESTful APIs",
    image: "/images/project-7.svg",
    description: "A business financing portal streamlining user onboarding, document uploads, loan approvals, and loan workflows."
  },
  {
    id: 8,
    title: "MERN E-commerce System",
    category: "E-commerce & Analytics",
    technologies: "React.js, Node.js, Express.js, MongoDB, SQL, Tailwind CSS",
    image: "/images/project-8.svg",
    description: "Complete checkout flow system featuring admin panels, aggregation pipelines, and responsive design systems."
  }
]


export const skills = {
  develop: {
    title: "FRONTEND DEVELOPMENT",
    description: "Modern UI/UX & Responsive Web Applications",
    details:
      "Building responsive and performant web applications using React.js, Next.js, and TypeScript.",

    tools: [
      { name: "React.js", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiHtml5 },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Redux Toolkit", icon: SiRedux },
      { name: "React Query", icon: SiReactquery },
    ],
  },

  design: {
    title: "BACKEND & AI",
    description: "Scalable APIs, Databases & AI Solutions",
    details:
      "Building backend services using Node.js, Express.js and Python.",

    tools: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "Python", icon: SiPython },
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Neo4j", icon: SiNeo4J },
      { name: "Git", icon: SiGit },
      { name: "Vercel", icon: SiVercel },
    ],
  },
};

export const contact = {
  email: 'hello@example.com',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
}
