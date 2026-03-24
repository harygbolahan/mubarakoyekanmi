import type { Project, Experience, Testimonial } from "./types";

// ═══════════════════════════════════════════════════════
// DESIGN TOKENS
// ═══════════════════════════════════════════════════════
export const T = {
  accent: "#B4FF6F",
  accentDim: "rgba(180,255,111,0.1)",
  accentGlow: "rgba(180,255,111,0.18)",
  bg: "#080808",
  s1: "#0F0F0F",
  s2: "#141414",
  border: "#1E1E1E",
  text: "#F0F0F0",
  muted: "#9CA3AF",
  fd: "'Syne', sans-serif",
  fb: "'Instrument Sans', sans-serif",
};

// ═══════════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════════
export const ROLES = [
  "Full Stack Engineer",
  "Frontend Specialist",
  "React Developer",
  "UI-Driven Builder",
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: "PocketFi",
    emoji: "CreditCard",
    desc: "A seamless and secure payment gateway helping businesses accept payments through bank transfers, cards, USSD, and more. Features instant settlements, low fees, and automated reconciliation.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Shadcn UI", "Recharts", "Framer Motion"],
    tag: "Fintech",
    year: "2024",
    featured: true,
    link: "https://pocketfi.ng",
    images: [
      "/pocketfi-1.png",
      "/pocketfi-2.png",
      "/pocketfi-3.png",
    ],
  },
  {
    id: 2,
    name: "Bizmit",
    emoji: "Users",
    desc: "A WhatsApp growth platform connecting businesses with real people. Helps vendors and creators gain contacts, increase status views, and grow their audience through a point-based system.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    tag: "Social Growth",
    year: "2024",
    featured: true,
    link: "https://bizmit.app",
    images: [
      "/bizmit-1.png",
      "/bizmit-2.png",
      "/bizmit-3.png",
    ],
  },
  {
    id: 3,
    name: "Eterna Guardians",
    emoji: "Shield",
    desc: "A comprehensive digital legacy and family safety platform. Features posthumous messaging, memory vaults, real-time location tracking, digital will creation, and burial planning to preserve memories and protect loved ones.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    tag: "Legacy Tech",
    year: "2024",
    featured: true,
    link: "https://eternaguardians.com",
    images: [
      "/guardians-1.png",
      "/guardians-2.png",
      "/guardians-3.png",
    ],
  },
//   {
//     id: 2,
//     name: "ShopSprint",
//     emoji: "ShoppingCart",
//     desc: "Mobile-first e-commerce experience with live inventory management, cart optimisation, and Stripe payment integration.",
//     stack: ["Next.js", "TypeScript", "Stripe", "MongoDB"],
//     tag: "E-Commerce",
//     year: "2024",
//     featured: false,
//   },
//   {
//     id: 3,
//     name: "FinScope",
//     emoji: "TrendingUp",
//     desc: "Advanced data visualisation dashboard for financial analytics with interactive D3 charts and real-time data feeds.",
//     stack: ["React", "D3.js", "Express", "PostgreSQL"],
//     tag: "Dashboard",
//     year: "2023",
//     featured: false,
//   },
//   {
//     id: 4,
//     name: "TalkRoom",
//     emoji: "MessageSquare",
//     desc: "Real-time chat and video calling app with end-to-end encryption, team workspaces, and file sharing.",
//     stack: ["Vue.js", "WebRTC", "Socket.io", "Node.js"],
//     tag: "Communication",
//     year: "2023",
//     featured: false,
//   },
//   {
//     id: 5,
//     name: "ContentAI",
//     emoji: "Sparkles",
//     desc: "AI-powered content management and social media scheduling tool for creators and marketing teams.",
//     stack: ["Next.js", "Python", "OpenAI API", "Firebase"],
//     tag: "AI Tool",
//     year: "2023",
//     featured: false,
//   },
];

export const SKILLS: Record<string, string[]> = {
  Frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "Vue.js",
    "Tailwind CSS",
    "Redux",
    "Framer Motion",
    "HTML/CSS",
  ],
  "Mobile Apps": [
    "React Native",
    "Expo",
    "TypeScript",
    "Reanimated",
    "Native Modules",
    "iOS & Android",
  ],
  Backend: [
    "Node.js",
    "Express",
    "Python",
    "Django",
    "REST APIs",
    "GraphQL",
    "WebSockets",
  ],
  Database: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Firebase", "MySQL"],
  "DevOps & Tools": [
    "Git",
    "Docker",
    "AWS",
    "Vercel",
    "Jest",
    "CI/CD",
    "Figma",
    "Linux",
  ],
};

export const EXPERIENCE: Experience[] = [
  {
    role: "Senior Frontend Engineer",
    company: "TechCorp Ltd",
    type: "Full-time",
    period: "Jan 2023 – Present",
    desc: "Leading frontend architecture for a B2B SaaS platform serving 100k+ users. Reduced page load time by 40%, improved Core Web Vitals scores across the board, and mentored 3 junior engineers.",
    tags: ["React", "TypeScript", "AWS"],
  },
  {
    role: "Full Stack Developer",
    company: "StartupXYZ",
    type: "Full-time",
    period: "Mar 2022 – Dec 2022",
    desc: "Built and shipped 3 full-stack products from scratch. Owned the full development cycle from API design to cloud deployment on AWS.",
    tags: ["Next.js", "Node.js", "MongoDB"],
  },
  {
    role: "Frontend Developer",
    company: "Digital Agency Co.",
    type: "Full-time",
    period: "Jun 2021 – Feb 2022",
    desc: "Delivered responsive, pixel-perfect interfaces for 15+ client projects across fintech, e-commerce, and edtech sectors.",
    tags: ["React", "Vue.js", "CSS"],
  },
  {
    role: "Freelance Developer",
    company: "Self-employed",
    type: "Freelance",
    period: "2020 – 2021",
    desc: "Designed and built web applications for local businesses in Osogbo, Osun State. Worked full-stack on various client projects.",
    tags: ["JavaScript", "PHP", "WordPress"],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Adewale Johnson",
    role: "CTO, PocketFi",
    rating: 5,
    text: "Mubarak is one of the most detail-oriented engineers I've had the pleasure of working with. His frontend craft is genuinely top-tier — clean code, sharp eye for design, always ships on time.",
  },
  {
    name: "Sarah Chen",
    role: "Product Manager, Bizmit",
    rating: 5,
    text: "Gbolahan consistently delivered beyond expectations. Always on time, a great communicator, and the code quality was excellent across every deliverable. Would hire again without hesitation.",
  },
  {
    name: "Emeka Obi",
    role: "CEO, Eternal Guardians",
    rating: 5,
    text: "An exceptional talent. His work impressed every single client and he brought incredible ownership and energy to every project he touched.",
  },
];
