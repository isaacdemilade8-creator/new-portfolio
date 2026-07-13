export const personalInfo = {
  name: "Oyenuga Demilade Isaac",
  firstName: "Demilade",
  lastName: "Isaac",
  title: ["AI Engineer", "Full-Stack Engineer", "Frontend Developer", "Problem Solver", "Tech Innovator"],
  location: "Ijebu Ode, Ogun State, Nigeria",
  email: "your-email@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  portfolio: "https://yourdomain.com",
  bio: "I'm a software engineer passionate about building intelligent software, AI-powered applications, scalable web platforms, and beautiful user experiences.",
  longBio: `I'm a software engineer passionate about building intelligent software, AI-powered applications, 
  scalable web platforms, and beautiful user experiences. I enjoy solving real-world problems with 
  technology and I'm constantly learning new tools and frameworks. My long-term goal is to build 
  products that impact millions of people and eventually create a world-class technology company.`,
};

export const interests = [
  "Artificial Intelligence",
  "Machine Learning",
  "Full-Stack Development",
  "Frontend Engineering",
  "Mobile App Development",
  "SaaS Products",
  "FinTech",
  "UI/UX Design",
  "Automation",
];

export const skillCategories = [
  {
    name: "Frontend",
    icon: "🎨",
    color: "from-blue-500 to-cyan-400",
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 92 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "React", level: 92 },
      { name: "Next.js", level: 88 },
      { name: "Vue.js", level: 78 },
      { name: "Angular", level: 72 },
      { name: "Tailwind CSS", level: 95 },
      { name: "SCSS", level: 88 },
    ],
  },
  {
    name: "Backend",
    icon: "⚙️",
    color: "from-purple-500 to-violet-400",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 83 },
      { name: "PHP", level: 80 },
      { name: "Laravel", level: 82 },
      { name: "Python", level: 78 },
      { name: "Django", level: 72 },
    ],
  },
  {
    name: "Databases",
    icon: "🗄️",
    color: "from-green-500 to-emerald-400",
    skills: [
      { name: "MySQL", level: 85 },
      { name: "SQL", level: 88 },
    ],
  },
  {
    name: "Mobile",
    icon: "📱",
    color: "from-orange-500 to-amber-400",
    skills: [
      { name: "React Native", level: 82 },
      { name: "Expo", level: 80 },
    ],
  },
  {
    name: "DevOps & Tools",
    icon: "🛠️",
    color: "from-red-500 to-rose-400",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "REST APIs", level: 92 },
      { name: "Responsive Design", level: 95 },
      { name: "UI/UX", level: 85 },
      { name: "Deployment", level: 78 },
      { name: "AI Integration", level: 82 },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "AI Personal Assistant",
    description:
      "An AI-powered mobile assistant capable of understanding natural language, performing tasks on behalf of users, integrating with applications, and automating daily workflows.",
    longDescription:
      "A sophisticated AI-powered mobile assistant that leverages cutting-edge natural language processing to understand user intent and execute complex tasks autonomously across multiple integrated applications.",
    tech: ["React Native", "AI APIs", "Node.js"],
    github: "https://github.com/yourusername",
    demo: "#",
    featured: true,
    color: "from-blue-600 to-cyan-500",
    icon: "🤖",
    category: "AI / Mobile",
  },
  {
    id: 2,
    title: "Digital Cooperative (Ajo) Platform",
    description:
      "A platform that digitizes local cooperative societies by managing contributions, automating payouts, maintaining member records, generating reports, and simplifying bookkeeping.",
    longDescription:
      "A comprehensive fintech platform that transforms traditional cooperative societies into digital-first organizations with automated financial management, member portals, and intelligent reporting.",
    tech: ["React", "Laravel", "MySQL"],
    github: "https://github.com/yourusername",
    demo: "#",
    featured: true,
    color: "from-purple-600 to-violet-500",
    icon: "💰",
    category: "FinTech / Web",
  },
  {
    id: 3,
    title: "Vee-Watch",
    description:
      "A modern movie discovery application with trending movies, search, movie details, watchlists, favorites, and a sleek mobile-first interface.",
    longDescription:
      "A feature-rich movie discovery app powered by the TMDB API, offering users a cinematic browsing experience with personalized watchlists, real-time search, and detailed movie information.",
    tech: ["HTML", "CSS", "JavaScript", "TMDB API"],
    github: "https://github.com/yourusername",
    demo: "#",
    featured: true,
    color: "from-red-600 to-rose-500",
    icon: "🎬",
    category: "Web App",
  },
  {
    id: 4,
    title: "Library Management System",
    description:
      "A complete library management application featuring book inventory, member management, issue/return tracking, search functionality, and an intuitive dashboard.",
    longDescription:
      "A full-featured library management system that streamlines operations with real-time inventory tracking, member management, automated notifications, and comprehensive reporting dashboards.",
    tech: ["JavaScript", "Local Storage"],
    github: "https://github.com/yourusername",
    demo: "#",
    featured: false,
    color: "from-green-600 to-emerald-500",
    icon: "📚",
    category: "Web App",
  },
  {
    id: 5,
    title: "CBT Examination System",
    description:
      "A computer-based testing platform with Admin, Teacher, and Student dashboards, authentication, automatic grading, timer, question management, and result generation.",
    longDescription:
      "A robust CBT platform supporting multi-role access for administrators, teachers, and students, with real-time exam monitoring, automated grading, and comprehensive analytics.",
    tech: ["Laravel", "MySQL", "JavaScript"],
    github: "https://github.com/yourusername",
    demo: "#",
    featured: false,
    color: "from-yellow-600 to-amber-500",
    icon: "📝",
    category: "EdTech / Web",
  },
  {
    id: 6,
    title: "Restaurant Website",
    description:
      "A responsive restaurant website featuring menu browsing, online ordering interface, reservations, and modern UI.",
    longDescription:
      "A beautiful, conversion-optimized restaurant website with an interactive menu, online reservation system, and seamless ordering experience.",
    tech: ["React", "Tailwind CSS", "Node.js"],
    github: "https://github.com/yourusername",
    demo: "#",
    featured: false,
    color: "from-orange-600 to-amber-500",
    icon: "🍽️",
    category: "Web",
  },
  {
    id: 7,
    title: "FinTech Website",
    description:
      "A modern fintech landing page showcasing financial products with beautiful animations and responsive layouts.",
    longDescription:
      "A high-converting fintech landing page with premium animations, trust signals, product showcases, and optimized conversion flows.",
    tech: ["Next.js", "TypeScript", "Framer Motion"],
    github: "https://github.com/yourusername",
    demo: "#",
    featured: false,
    color: "from-teal-600 to-cyan-500",
    icon: "💳",
    category: "FinTech / Web",
  },
  {
    id: 8,
    title: "Healthcare Platform",
    description:
      "A healthcare service platform connecting patients with healthcare providers through an intuitive interface.",
    longDescription:
      "A patient-centric healthcare platform that streamlines the provider-patient relationship with appointment scheduling, telemedicine support, and health record management.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/yourusername",
    demo: "#",
    featured: false,
    color: "from-pink-600 to-rose-500",
    icon: "🏥",
    category: "HealthTech / Web",
  },
];

export const services = [
  {
    icon: "🤖",
    title: "AI Application Development",
    description:
      "Building intelligent applications powered by machine learning, NLP, and AI APIs to automate processes and deliver smart user experiences.",
    gradient: "from-blue-500/20 to-cyan-500/20",
    border: "border-blue-500/20",
  },
  {
    icon: "🌐",
    title: "Full-Stack Web Development",
    description:
      "End-to-end web application development with scalable backends, intuitive frontends, and robust database architectures.",
    gradient: "from-purple-500/20 to-violet-500/20",
    border: "border-purple-500/20",
  },
  {
    icon: "🎨",
    title: "Frontend Development",
    description:
      "Crafting pixel-perfect, highly interactive UI/UX with React, Next.js, and modern CSS for seamless user journeys.",
    gradient: "from-pink-500/20 to-rose-500/20",
    border: "border-pink-500/20",
  },
  {
    icon: "📱",
    title: "Mobile App Development",
    description:
      "Cross-platform mobile apps with React Native and Expo, delivering native performance on iOS and Android.",
    gradient: "from-orange-500/20 to-amber-500/20",
    border: "border-orange-500/20",
  },
  {
    icon: "⚡",
    title: "API Development",
    description:
      "Designing and building RESTful APIs with robust authentication, documentation, and scalable architecture.",
    gradient: "from-green-500/20 to-emerald-500/20",
    border: "border-green-500/20",
  },
  {
    icon: "💡",
    title: "UI/UX Implementation",
    description:
      "Turning design concepts into flawless, accessible, and performance-optimized web experiences.",
    gradient: "from-teal-500/20 to-cyan-500/20",
    border: "border-teal-500/20",
  },
  {
    icon: "🚀",
    title: "Website Optimization",
    description:
      "Performance audits, Core Web Vitals optimization, SEO improvements, and technical debt reduction.",
    gradient: "from-yellow-500/20 to-amber-500/20",
    border: "border-yellow-500/20",
  },
  {
    icon: "🧠",
    title: "Technical Consulting",
    description:
      "Architecture planning, tech stack selection, and strategic guidance for startups and established businesses.",
    gradient: "from-indigo-500/20 to-blue-500/20",
    border: "border-indigo-500/20",
  },
];

export const testimonials = [
  {
    name: "Alex Johnson",
    role: "CTO, TechStartup",
    avatar: "AJ",
    text: "Demilade delivered an exceptional AI-powered application that exceeded all expectations. His technical depth and attention to detail are remarkable.",
    rating: 5,
  },
  {
    name: "Sarah Williams",
    role: "Product Manager, FinCo",
    avatar: "SW",
    text: "Working with Isaac was a game-changer. He transformed our cooperative platform idea into a robust, scalable solution that our users love.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Founder, EduTech Startup",
    avatar: "MC",
    text: "The CBT system Isaac built is rock-solid. Clean code, great documentation, and delivered ahead of schedule. Highly recommend!",
    rating: 5,
  },
];

export const stats = [
  { value: 8, label: "Projects Completed", suffix: "+" },
  { value: 1, label: "Years Experience", suffix: "+" },
  { value: 15, label: "Technologies", suffix: "+" },
  { value: 100, label: "Client Satisfaction", suffix: "%" },
];
