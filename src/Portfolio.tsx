import { useState, useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useScroll,
  useMotionValue,
  useSpring,
} from "framer-motion";
import {
  Monitor,
  Settings,
  Palette,
  Rocket,
  ExternalLink,
  Mail,
  Send,
  CheckCircle2,
  Workflow,
  ShoppingCart,
  TrendingUp,
  MessageSquare,
  Sparkles,
  ArrowRight,
  Code2,
} from "lucide-react";

// ═══════════════════════════════════════════════════════
// ICON MAPPING
// ═══════════════════════════════════════════════════════
const iconMap: Record<string, any> = {
  Workflow,
  ShoppingCart,
  TrendingUp,
  MessageSquare,
  Sparkles,
};

// ═══════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════
interface Project {
  id: number;
  name: string;
  emoji: string;
  desc: string;
  stack: string[];
  tag: string;
  year: string;
  featured: boolean;
}

interface Experience {
  role: string;
  company: string;
  type: string;
  period: string;
  desc: string;
  tags: string[];
}

interface Testimonial {
  name: string;
  role: string;
  rating: number;
  text: string;
}

// ═══════════════════════════════════════════════════════
// DESIGN TOKENS
// ═══════════════════════════════════════════════════════
const T = {
  accent: "#B4FF6F",
  accentDim: "rgba(180,255,111,0.1)",
  accentGlow: "rgba(180,255,111,0.18)",
  bg: "#080808",
  s1: "#0F0F0F",
  s2: "#141414",
  border: "#1E1E1E",
  text: "#F0F0F0",
  muted: "#585858",
  fd: "'Syne', sans-serif",
  fb: "'Instrument Sans', sans-serif",
};

// ═══════════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════════
const ROLES = [
  "Full Stack Engineer",
  "Frontend Specialist",
  "React Developer",
  "UI-Driven Builder",
];

const PROJECTS: Project[] = [
  {
    id: 1,
    name: "NexaFlow",
    emoji: "Workflow",
    desc: "A full-stack SaaS platform for team workflow automation with real-time collaboration, analytics, and role-based access control.",
    stack: ["React", "Node.js", "PostgreSQL", "Redis"],
    tag: "SaaS Platform",
    year: "2024",
    featured: true,
  },
  {
    id: 2,
    name: "ShopSprint",
    emoji: "ShoppingCart",
    desc: "Mobile-first e-commerce experience with live inventory management, cart optimisation, and Stripe payment integration.",
    stack: ["Next.js", "TypeScript", "Stripe", "MongoDB"],
    tag: "E-Commerce",
    year: "2024",
    featured: false,
  },
  {
    id: 3,
    name: "FinScope",
    emoji: "TrendingUp",
    desc: "Advanced data visualisation dashboard for financial analytics with interactive D3 charts and real-time data feeds.",
    stack: ["React", "D3.js", "Express", "PostgreSQL"],
    tag: "Dashboard",
    year: "2023",
    featured: false,
  },
  {
    id: 4,
    name: "TalkRoom",
    emoji: "MessageSquare",
    desc: "Real-time chat and video calling app with end-to-end encryption, team workspaces, and file sharing.",
    stack: ["Vue.js", "WebRTC", "Socket.io", "Node.js"],
    tag: "Communication",
    year: "2023",
    featured: false,
  },
  {
    id: 5,
    name: "ContentAI",
    emoji: "Sparkles",
    desc: "AI-powered content management and social media scheduling tool for creators and marketing teams.",
    stack: ["Next.js", "Python", "OpenAI API", "Firebase"],
    tag: "AI Tool",
    year: "2023",
    featured: false,
  },
];

const SKILLS: Record<string, string[]> = {
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

const EXPERIENCE: Experience[] = [
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

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Adewale Johnson",
    role: "CTO, TechCorp Ltd",
    rating: 5,
    text: "Mubarak is one of the most detail-oriented engineers I've had the pleasure of working with. His frontend craft is genuinely top-tier — clean code, sharp eye for design, always ships on time.",
  },
  {
    name: "Sarah Chen",
    role: "Product Manager, StartupXYZ",
    rating: 5,
    text: "Gbolahan consistently delivered beyond expectations. Always on time, a great communicator, and the code quality was excellent across every deliverable. Would hire again without hesitation.",
  },
  {
    name: "Emeka Obi",
    role: "CEO, Digital Agency Co.",
    rating: 5,
    text: "An exceptional talent. His work impressed every single client and he brought incredible ownership and energy to every project he touched.",
  },
];

// ═══════════════════════════════════════════════════════
// ANIMATION VARIANTS
// ═══════════════════════════════════════════════════════
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

// ═══════════════════════════════════════════════════════
// GLOBAL CSS
// ═══════════════════════════════════════════════════════
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Instrument+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap');

*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{background:#080808!important;color:#F0F0F0;font-family:'Instrument Sans',sans-serif;-webkit-font-smoothing:antialiased;overflow-x:hidden}

::-webkit-scrollbar{width:4px}
::-webkit-scrollbar-track{background:#080808}
::-webkit-scrollbar-thumb{background:#B4FF6F;border-radius:2px}
::selection{background:rgba(180,255,111,.2);color:#B4FF6F}

@keyframes pulseRing{0%{transform:scale(1);opacity:.7}100%{transform:scale(2.4);opacity:0}}
@keyframes floatY{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}
@keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}

.nav-a{position:relative}
.nav-a::after{content:'';position:absolute;bottom:-2px;left:0;width:0;height:1.5px;background:#B4FF6F;transition:width .25s ease}
.nav-a:hover::after,.nav-a.act::after{width:100%}

input,textarea{font-family:'Instrument Sans',sans-serif}
input::placeholder,textarea::placeholder{color:#404040}
input:focus,textarea:focus{outline:none;border-color:rgba(180,255,111,.5)!important;box-shadow:0 0 0 3px rgba(180,255,111,.08)!important}

@media(max-width:768px){
  .dsk-nav{display:none!important}
  .hero-h{font-size:clamp(48px,11vw,88px)!important;line-height:0.95!important;word-wrap:break-word;overflow-wrap:break-word}
  .two-col{grid-template-columns:1fr!important;gap:40px!important}
  .proj-grid{grid-template-columns:1fr!important}
  .stats-row{grid-template-columns:repeat(2,1fr)!important;gap:20px 32px!important}
  .sp{padding:72px 20px!important}
  body{cursor:auto!important}
}

@media(max-width:480px){
  .hero-h{font-size:clamp(32px,9.5vw,48px)!important;line-height:1!important}
  .stats-row{grid-template-columns:1fr!important;gap:16px!important}
  .sp{padding:60px 16px!important}
}
`;

// ═══════════════════════════════════════════════════════
// LOADING SCREEN
// ═══════════════════════════════════════════════════════
function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  if (!loading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 1.5 }}
      style={{
        position: "fixed",
        inset: 0,
        background: T.bg,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 32,
      }}
      onAnimationComplete={() => setLoading(false)}
    >
      {/* Animated Logo */}
      <div style={{ position: "relative", width: 80, height: 80 }}>
        {/* Outer rotating ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          style={{
            position: "absolute",
            inset: 0,
            border: `2px solid ${T.border}`,
            borderTopColor: T.accent,
            borderRadius: "50%",
          }}
        />

        {/* Inner pulsing circle */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            inset: 16,
            background: `radial-gradient(circle, ${T.accentGlow}, transparent)`,
            borderRadius: "50%",
          }}
        />

        {/* Center icon */}
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Code2 size={32} color={T.accent} strokeWidth={2} />
        </motion.div>
      </div>

      {/* Loading text with dots */}
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <motion.p
          style={{
            color: T.text,
            fontSize: 14,
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            fontFamily: T.fd,
          }}
        >
          Loading
        </motion.p>
        <div style={{ display: "flex", gap: 4 }}>
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
              style={{
                width: 4,
                height: 4,
                borderRadius: "50%",
                background: T.accent,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════
// BACK TO TOP BUTTON
// ═══════════════════════════════════════════════════════
function BackToTop({ go }: { go: (id: string) => void }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: show ? 1 : 0, scale: show ? 1 : 0 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => go("home")}
      style={{
        position: "fixed",
        bottom: 32,
        right: 32,
        width: 48,
        height: 48,
        borderRadius: "50%",
        background: T.accent,
        border: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 100,
        boxShadow: "0 4px 12px rgba(180,255,111,.3)",
      }}
    >
      <Rocket size={20} color="#080808" />
    </motion.button>
  );
}

// ═══════════════════════════════════════════════════════
// CUSTOM CURSOR COMPONENT
// ═══════════════════════════════════════════════════════
function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <motion.div
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: 32,
        height: 32,
        borderRadius: "50%",
        border: `2px solid ${T.accent}`,
        pointerEvents: "none",
        zIndex: 9999,
        x: cursorXSpring,
        y: cursorYSpring,
      }}
    />
  );
}

// ═══════════════════════════════════════════════════════
// MAIN EXPORT
// ═══════════════════════════════════════════════════════
export default function Portfolio() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [activeNav, setActiveNav] = useState("home");
  const [tIdx, setTIdx] = useState(0);
  const [skillTab, setSkillTab] = useState("Frontend");
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const t = setInterval(
      () => setRoleIdx((i) => (i + 1) % ROLES.length),
      2800,
    );
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const ids = [
      "home",
      "about",
      "projects",
      "skills",
      "experience",
      "testimonials",
      "contact",
    ];
    const h = () => {
      const y = window.scrollY + 100;
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.offsetTop <= y) {
          setActiveNav(ids[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div
      style={{
        background: T.bg,
        color: T.text,
        minHeight: "100vh",
        cursor: "none",
      }}
    >
      <LoadingScreen />
      <style>{CSS}</style>
      <CustomCursor />
      <BackToTop go={go} />

      {/* Progress Bar */}
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: T.accent,
          transformOrigin: "0%",
          scaleX: scrollYProgress,
          zIndex: 300,
        }}
      />

      {/* ── NAV ─────────────────────────────────────── */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          height: 64,
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          background: "rgba(8,8,8,0.82)",
          borderBottom: `1px solid ${T.border}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 clamp(24px,5vw,80px)",
        }}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => go("home")}
          style={{
            fontFamily: T.fd,
            fontWeight: 800,
            fontSize: 16,
            letterSpacing: "0.04em",
            cursor: "pointer",
          }}
        >
          <span style={{ color: T.accent }}>M</span>UBARAK
          <span style={{ color: T.muted, fontWeight: 400, fontSize: 13 }}>
            {" "}
            ·OG
          </span>
        </motion.div>

        <div
          className="dsk-nav"
          style={{ display: "flex", gap: 28, alignItems: "center" }}
        >
          {["about", "projects", "skills", "experience", "contact"].map((s) => (
            <button
              key={s}
              className={`nav-a ${activeNav === s ? "act" : ""}`}
              onClick={() => go(s)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: T.fb,
                fontSize: 13,
                fontWeight: 500,
                color: activeNav === s ? T.text : T.muted,
                textTransform: "capitalize",
                letterSpacing: "0.02em",
                padding: "4px 0",
              }}
            >
              {s}
            </button>
          ))}
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => go("contact")}
            style={{
              background: T.accent,
              color: "#080808",
              border: "none",
              fontFamily: T.fd,
              fontWeight: 700,
              fontSize: 12,
              letterSpacing: "0.08em",
              padding: "9px 18px",
              borderRadius: 6,
              cursor: "pointer",
              textTransform: "uppercase",
            }}
          >
            HIRE ME
          </motion.button>
        </div>
      </motion.nav>

      {/* ── HERO ────────────────────────────────────── */}
      <HeroSection go={go} roleIdx={roleIdx} />

      {/* SECTIONS */}
      <AboutSection />
      <ProjectsSection />
      <SkillsSection skillTab={skillTab} setSkillTab={setSkillTab} />
      <ExperienceSection />
      <TestimonialsSection tIdx={tIdx} setTIdx={setTIdx} />
      <ContactSection />

      {/* ── FOOTER ──────────────────────────────────── */}
      <footer
        style={{
          borderTop: `1px solid ${T.border}`,
          padding: "28px clamp(24px,5vw,80px)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <div
          style={{
            fontFamily: T.fd,
            fontWeight: 700,
            fontSize: 13,
            color: T.muted,
          }}
        >
          <span style={{ color: T.accent }}>©</span> 2025 Mubarak Gbolahan
          Oyekanmi
        </div>
        <div style={{ color: T.muted, fontSize: 12 }}>
          Built with React · Osogbo, Nigeria 🇳🇬
        </div>
        <div style={{ display: "flex", gap: 20 }}>
          {[
            { name: "GitHub", icon: ExternalLink },
            { name: "LinkedIn", icon: ExternalLink },
            { name: "Twitter", icon: ExternalLink },
          ].map(({ name, icon: Icon }) => (
            <motion.a
              key={name}
              href="#"
              whileHover={{ color: T.accent, y: -2 }}
              style={{
                fontSize: 13,
                fontWeight: 500,
                color: T.muted,
                textDecoration: "none",
                transition: "color .2s ease",
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <Icon size={16} />
              {name}
            </motion.a>
          ))}
        </div>
      </footer>
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// HERO SECTION
// ═══════════════════════════════════════════════════════
function HeroSection({
  go,
  roleIdx,
}: {
  go: (id: string) => void;
  roleIdx: number;
}) {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px clamp(24px,5vw,80px) 60px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Grid bg */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          backgroundImage: `linear-gradient(${T.border} 1px,transparent 1px),linear-gradient(90deg,${T.border} 1px,transparent 1px)`,
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 70% 70% at 50% 50%,black,transparent)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 70% at 50% 50%,black,transparent)",
          opacity: 0.5,
        }}
      />

      {/* Floating particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.sin(i) * 20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4,
          }}
          style={{
            position: "absolute",
            left: `${20 + i * 15}%`,
            top: `${30 + i * 10}%`,
            zIndex: 0,
          }}
        >
          <Code2 size={16 + i * 4} color={T.accent} opacity={0.2} />
        </motion.div>
      ))}

      {/* Glow orb */}
      <motion.div
        animate={{
          y: [0, -14, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          top: "15%",
          right: "8%",
          width: 520,
          height: 520,
          background: `radial-gradient(circle,${T.accentGlow} 0%,transparent 65%)`,
          borderRadius: "50%",
          zIndex: 0,
        }}
      />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 940 }}>
        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: T.accentDim,
            border: `1px solid rgba(180,255,111,0.25)`,
            borderRadius: 100,
            padding: "6px 14px",
            marginBottom: 36,
          }}
        >
          <span
            style={{
              position: "relative",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: 10,
              height: 10,
            }}
          >
            <span
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                background: T.accent,
                animation: "pulseRing 1.6s ease-out infinite",
                opacity: 0.7,
              }}
            />
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: T.accent,
                position: "relative",
                zIndex: 1,
              }}
            />
          </span>
          <span
            style={{
              color: T.accent,
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Available for work
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hero-h"
          style={{
            fontFamily: T.fd,
            fontWeight: 800,
            fontSize: "clamp(60px,9.5vw,118px)",
            lineHeight: 0.92,
            letterSpacing: "-0.025em",
            marginBottom: 16,
          }}
        >
          MUBARAK
          <br />
          <span style={{ color: T.accent }}>
            OYEKANMI
            <span
              style={{
                color: T.muted,
                fontSize: "0.45em",
                fontWeight: 400,
                letterSpacing: "0",
                verticalAlign: "middle",
              }}
            >
              {" "}
              ·GB
            </span>
          </span>
        </motion.h1>

        {/* Animated role */}
        <div style={{ height: 32, marginBottom: 28, overflow: "hidden" }}>
          <motion.p
            key={roleIdx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            style={{
              fontFamily: T.fb,
              color: T.muted,
              fontSize: "clamp(15px,2.2vw,20px)",
              fontWeight: 500,
            }}
          >
            <span
              style={{ color: T.accent, fontStyle: "italic", marginRight: 8 }}
            >
              //
            </span>
            {ROLES[roleIdx]}
          </motion.p>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{
            color: T.muted,
            fontSize: 15,
            lineHeight: 1.85,
            maxWidth: 500,
            marginBottom: 44,
          }}
        >
          Building high-performance web applications from Osogbo, Nigeria.
          Obsessed with clean code, pixel-perfect UI, and shipping products that
          actually matter.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{
            display: "flex",
            gap: 14,
            flexWrap: "wrap",
            marginBottom: 64,
          }}
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => go("projects")}
            style={{
              background: T.accent,
              color: "#080808",
              border: "none",
              fontFamily: T.fd,
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: "0.07em",
              padding: "15px 36px",
              borderRadius: 8,
              cursor: "pointer",
              textTransform: "uppercase",
            }}
          >
            VIEW MY WORK
          </motion.button>
          <motion.button
            whileHover={{
              scale: 1.05,
              borderColor: "rgba(180,255,111,.5)",
              color: T.accent,
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => go("contact")}
            style={{
              background: "transparent",
              color: T.text,
              border: `1px solid ${T.border}`,
              fontFamily: T.fb,
              fontWeight: 600,
              fontSize: 14,
              padding: "15px 32px",
              borderRadius: 8,
              cursor: "pointer",
              transition: "all .25s ease",
            }}
          >
            Get In Touch →
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="stats-row"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,auto)",
            gap: "24px 56px",
            width: "fit-content",
          }}
        >
          {[
            ["4+", "Years of Experience"],
            ["20+", "Projects Shipped"],
            ["10+", "Happy Clients"],
          ].map(([n, l], i) => (
            <motion.div
              key={l}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
            >
              <div
                style={{
                  fontFamily: T.fd,
                  fontWeight: 800,
                  fontSize: 38,
                  color: T.accent,
                  lineHeight: 1,
                }}
              >
                {n}
              </div>
              <div
                style={{
                  color: T.muted,
                  fontSize: 12,
                  marginTop: 5,
                  letterSpacing: "0.04em",
                }}
              >
                {l}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.45 }}
        transition={{ duration: 1, delay: 1 }}
        whileHover={{ opacity: 0.8 }}
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          cursor: "pointer",
        }}
        onClick={() => go("about")}
      >
        <span
          style={{
            color: T.muted,
            fontSize: 10,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
          }}
        >
          SCROLL
        </span>
        <motion.div
          animate={{ height: [36, 28, 36] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: 1,
            height: 36,
            background: `linear-gradient(${T.muted},transparent)`,
          }}
        />
      </motion.div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════
// ABOUT
// ═══════════════════════════════════════════════════════
function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const traits = [
    {
      icon: Monitor,
      title: "Frontend First",
      desc: "React, Next.js, TypeScript — delivering fast, accessible, beautiful UIs.",
    },
    {
      icon: Settings,
      title: "Full Stack",
      desc: "Node.js, databases, APIs — I own the entire delivery pipeline.",
    },
    {
      icon: Palette,
      title: "Design-Aware",
      desc: "Strong eye for detail. I collaborate fluently with designers.",
    },
    {
      icon: Rocket,
      title: "Shipping Mindset",
      desc: "I bias toward execution. Clean code, fast delivery, always.",
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="sp"
      style={{
        padding: "100px clamp(24px,5vw,80px)",
        borderTop: `1px solid ${T.border}`,
      }}
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="two-col"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 72,
          alignItems: "center",
          maxWidth: 1080,
          margin: "0 auto",
        }}
      >
        <motion.div variants={fadeInUp}>
          <p
            style={{
              color: T.accent,
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            WHO I AM
          </p>
          <h2
            style={{
              fontFamily: T.fd,
              fontWeight: 800,
              fontSize: "clamp(30px,3.8vw,48px)",
              lineHeight: 1.1,
              marginBottom: 24,
            }}
          >
            Engineer by craft,
            <br />
            <span style={{ color: T.accent }}>creator</span> by passion.
          </h2>
          <p
            style={{
              color: T.muted,
              fontSize: 15,
              lineHeight: 1.85,
              marginBottom: 20,
            }}
          >
            I'm Mubarak Gbolahan Oyekanmi — a full-stack software engineer based
            in Osogbo, Nigeria, with a sharp focus on frontend excellence. I
            believe great software lives at the intersection of clean
            engineering and thoughtful design.
          </p>
          <p style={{ color: T.muted, fontSize: 15, lineHeight: 1.85 }}>
            From architecting scalable APIs to crafting pixel-perfect UIs, I
            bring both technical depth and visual sensibility to every project I
            ship.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}
        >
          {traits.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              variants={fadeInUp}
              whileHover={{ y: -5, borderColor: "rgba(180,255,111,.3)" }}
              style={{
                background: T.s1,
                border: `1px solid ${T.border}`,
                borderRadius: 12,
                padding: 20,
                transition: "all .3s ease",
              }}
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={
                  isInView
                    ? { scale: 1, rotate: 0 }
                    : { scale: 0, rotate: -180 }
                }
                transition={{
                  duration: 0.5,
                  delay: 0.3 + i * 0.1,
                  type: "spring",
                }}
                style={{ marginBottom: 10 }}
              >
                <Icon size={24} color={T.accent} strokeWidth={2} />
              </motion.div>
              <div
                style={{
                  fontFamily: T.fd,
                  fontWeight: 700,
                  fontSize: 14,
                  marginBottom: 6,
                }}
              >
                {title}
              </div>
              <div style={{ color: T.muted, fontSize: 12, lineHeight: 1.6 }}>
                {desc}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════
// PROJECTS
// ═══════════════════════════════════════════════════════
function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="projects"
      ref={ref}
      className="sp"
      style={{
        padding: "100px clamp(24px,5vw,80px)",
        background: T.s1,
        borderTop: `1px solid ${T.border}`,
      }}
    >
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 52,
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <div>
            <p
              style={{
                color: T.accent,
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              SELECTED WORK
            </p>
            <h2
              style={{
                fontFamily: T.fd,
                fontWeight: 800,
                fontSize: "clamp(30px,3.8vw,48px)",
                lineHeight: 1.1,
              }}
            >
              Projects that
              <br />
              <span style={{ color: T.accent }}>ship & scale.</span>
            </h2>
          </div>
          <motion.a
            href="#"
            whileHover={{ color: T.accent, borderColor: T.accent }}
            style={{
              color: T.muted,
              fontSize: 13,
              textDecoration: "none",
              borderBottom: `1px solid ${T.border}`,
              paddingBottom: 3,
              transition: "all .2s",
            }}
          >
            View all on GitHub →
          </motion.a>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="proj-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}
        >
          {PROJECTS.map((p, i) => {
            const IconComponent = iconMap[p.emoji];
            return (
              <motion.div
                key={p.id}
                variants={fadeInUp}
                whileHover={{
                  y: -5,
                  borderColor: "rgba(180,255,111,.25)",
                  boxShadow: "0 16px 48px rgba(180,255,111,.07)",
                }}
                style={{
                  background: T.bg,
                  border: `1px solid ${T.border}`,
                  borderRadius: 14,
                  padding: 26,
                  cursor: "pointer",
                  gridColumn: i === 0 ? "1 / -1" : "auto",
                  transition: "all .3s ease",
                }}
              >
                {/* Thumbnail */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  style={{
                    height: i === 0 ? 200 : 148,
                    background: `linear-gradient(135deg,${T.s2} 0%,${T.border} 100%)`,
                    borderRadius: 8,
                    marginBottom: 20,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      backgroundImage: `repeating-linear-gradient(45deg,rgba(180,255,111,.03) 0,rgba(180,255,111,.03) 1px,transparent 0,transparent 50%)`,
                      backgroundSize: "18px 18px",
                    }}
                  />
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <IconComponent
                      size={i === 0 ? 64 : 52}
                      color="rgba(180,255,111,0.15)"
                      strokeWidth={1.5}
                    />
                  </motion.div>
                </motion.div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 10,
                  }}
                >
                  <span
                    style={{
                      background: T.accentDim,
                      color: T.accent,
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      padding: "4px 10px",
                      borderRadius: 100,
                    }}
                  >
                    {p.tag}
                  </span>
                  <span style={{ color: T.muted, fontSize: 12 }}>{p.year}</span>
                </div>

                <h3
                  style={{
                    fontFamily: T.fd,
                    fontWeight: 700,
                    fontSize: 20,
                    marginBottom: 8,
                  }}
                >
                  {p.name}
                </h3>
                <p
                  style={{
                    color: T.muted,
                    fontSize: 13,
                    lineHeight: 1.7,
                    marginBottom: 16,
                  }}
                >
                  {p.desc}
                </p>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 7,
                    marginBottom: 16,
                  }}
                >
                  {p.stack.map((s) => (
                    <motion.span
                      key={s}
                      whileHover={{
                        borderColor: "rgba(180,255,111,.4)",
                        color: T.accent,
                      }}
                      style={{
                        border: `1px solid ${T.border}`,
                        color: T.muted,
                        fontSize: 11,
                        padding: "3px 9px",
                        borderRadius: 5,
                        transition: "all .2s ease",
                      }}
                    >
                      {s}
                    </motion.span>
                  ))}
                </div>

                {/* View Project Button */}
                <motion.button
                  whileHover={{ x: 5 }}
                  style={{
                    background: "transparent",
                    border: "none",
                    color: T.accent,
                    fontSize: 12,
                    fontWeight: 600,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    padding: 0,
                    marginTop: "auto",
                  }}
                >
                  View Project <ArrowRight size={14} />
                </motion.button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════
// SKILLS
// ═══════════════════════════════════════════════════════
function SkillsSection({
  skillTab,
  setSkillTab,
}: {
  skillTab: string;
  setSkillTab: (tab: string) => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const all = Object.values(SKILLS).flat();

  return (
    <section
      id="skills"
      ref={ref}
      className="sp"
      style={{
        padding: "100px clamp(24px,5vw,80px)",
        borderTop: `1px solid ${T.border}`,
      }}
    >
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 44 }}
        >
          <p
            style={{
              color: T.accent,
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            TECH ARSENAL
          </p>
          <h2
            style={{
              fontFamily: T.fd,
              fontWeight: 800,
              fontSize: "clamp(30px,3.8vw,48px)",
              lineHeight: 1.1,
            }}
          >
            What I build <span style={{ color: T.accent }}>with.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
            marginBottom: 32,
          }}
        >
          {Object.keys(SKILLS).map((cat, i) => (
            <motion.button
              key={cat}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSkillTab(cat)}
              style={{
                background: skillTab === cat ? T.accent : "transparent",
                color: skillTab === cat ? "#080808" : T.muted,
                border: `1px solid ${skillTab === cat ? T.accent : T.border}`,
                fontFamily: T.fb,
                fontWeight: 600,
                fontSize: 12,
                padding: "8px 16px",
                borderRadius: 100,
                cursor: "pointer",
                transition: "all .2s ease",
              }}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          key={skillTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            marginBottom: 56,
          }}
        >
          {SKILLS[skillTab].map((s, i) => (
            <motion.div
              key={s}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
              whileHover={{
                y: -2,
                background: "rgba(180,255,111,.1)",
                color: T.accent,
                borderColor: "rgba(180,255,111,.4)",
              }}
              style={{
                background: T.s1,
                border: `1px solid ${T.border}`,
                color: T.text,
                fontSize: 13,
                fontWeight: 500,
                padding: "10px 18px",
                borderRadius: 8,
                cursor: "default",
                transition: "all .2s ease",
              }}
            >
              {s}
            </motion.div>
          ))}
        </motion.div>

        {/* Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            borderTop: `1px solid ${T.border}`,
            borderBottom: `1px solid ${T.border}`,
            padding: "14px 0",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              animation: "marquee 26s linear infinite",
              width: "max-content",
            }}
          >
            {[...all, ...all].map((s, i) => (
              <span
                key={i}
                style={{
                  color: T.muted,
                  fontSize: 12,
                  fontWeight: 500,
                  marginRight: 36,
                  whiteSpace: "nowrap",
                }}
              >
                <span style={{ color: T.accent, marginRight: 8 }}>◆</span>
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════
// EXPERIENCE
// ═══════════════════════════════════════════════════════
function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="experience"
      ref={ref}
      className="sp"
      style={{
        padding: "100px clamp(24px,5vw,80px)",
        background: T.s1,
        borderTop: `1px solid ${T.border}`,
      }}
    >
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 52 }}
        >
          <p
            style={{
              color: T.accent,
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            CAREER
          </p>
          <h2
            style={{
              fontFamily: T.fd,
              fontWeight: 800,
              fontSize: "clamp(30px,3.8vw,48px)",
              lineHeight: 1.1,
            }}
          >
            Where I've <span style={{ color: T.accent }}>been.</span>
          </h2>
        </motion.div>

        <div style={{ position: "relative" }}>
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : { height: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{
              position: "absolute",
              left: 14,
              top: 6,
              bottom: 0,
              width: 1,
              background: `linear-gradient(180deg,${T.accent}50 0%,transparent 100%)`,
            }}
          />
          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              style={{ display: "flex", gap: 28, marginBottom: 44 }}
            >
              <div
                style={{
                  flexShrink: 0,
                  position: "relative",
                  zIndex: 1,
                  marginTop: 3,
                }}
              >
                <motion.div
                  whileHover={{
                    scale: 1.2,
                    background: T.accent,
                    boxShadow: "0 0 0 5px rgba(180,255,111,.15)",
                  }}
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    background: T.bg,
                    border: `2px solid ${T.border}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all .3s ease",
                  }}
                >
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: T.muted,
                    }}
                  />
                </motion.div>
              </div>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: 8,
                    marginBottom: 8,
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontFamily: T.fd,
                        fontWeight: 700,
                        fontSize: 17,
                        marginBottom: 3,
                      }}
                    >
                      {exp.role}
                    </h3>
                    <span
                      style={{
                        color: T.accent,
                        fontSize: 13,
                        fontWeight: 500,
                      }}
                    >
                      {exp.company}
                    </span>
                    <span style={{ color: T.muted, fontSize: 13 }}>
                      {" "}
                      · {exp.type}
                    </span>
                  </div>
                  <span
                    style={{
                      color: T.muted,
                      fontSize: 12,
                      whiteSpace: "nowrap",
                      marginTop: 2,
                    }}
                  >
                    {exp.period}
                  </span>
                </div>
                <p
                  style={{
                    color: T.muted,
                    fontSize: 13,
                    lineHeight: 1.75,
                    marginBottom: 12,
                  }}
                >
                  {exp.desc}
                </p>
                <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>
                  {exp.tags.map((tag, idx) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={
                        isInView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0.8 }
                      }
                      transition={{
                        duration: 0.3,
                        delay: 0.3 + i * 0.1 + idx * 0.05,
                      }}
                      style={{
                        background: T.accentDim,
                        color: T.accent,
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: "0.06em",
                        padding: "3px 10px",
                        borderRadius: 100,
                      }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════
// TESTIMONIALS
// ═══════════════════════════════════════════════════════
function TestimonialsSection({
  tIdx,
  setTIdx,
}: {
  tIdx: number;
  setTIdx: (idx: number) => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="testimonials"
      ref={ref}
      className="sp"
      style={{
        padding: "100px clamp(24px,5vw,80px)",
        borderTop: `1px solid ${T.border}`,
      }}
    >
      <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <p
            style={{
              color: T.accent,
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            SOCIAL PROOF
          </p>
          <h2
            style={{
              fontFamily: T.fd,
              fontWeight: 800,
              fontSize: "clamp(30px,3.8vw,48px)",
              lineHeight: 1.1,
              marginBottom: 48,
            }}
          >
            What people <span style={{ color: T.accent }}>say.</span>
          </h2>
        </motion.div>

        <motion.div
          key={tIdx}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
          }
          transition={{ duration: 0.5 }}
          style={{
            background: T.s1,
            border: `1px solid ${T.border}`,
            borderRadius: 18,
            padding: "40px 44px",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              color: T.accent,
              fontFamily: "Georgia,serif",
              fontSize: 64,
              lineHeight: 0.7,
              marginBottom: 24,
              textAlign: "left",
            }}
          >
            "
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              color: T.text,
              fontSize: 17,
              lineHeight: 1.8,
              fontStyle: "italic",
              marginBottom: 32,
            }}
          >
            {TESTIMONIALS[tIdx].text}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div
              style={{
                fontFamily: T.fd,
                fontWeight: 700,
                fontSize: 15,
              }}
            >
              {TESTIMONIALS[tIdx].name}
            </div>
            <div style={{ color: T.muted, fontSize: 12, marginTop: 4 }}>
              {TESTIMONIALS[tIdx].role}
            </div>
            <div
              style={{
                display: "flex",
                gap: 3,
                justifyContent: "center",
                marginTop: 12,
              }}
            >
              {Array(TESTIMONIALS[tIdx].rating)
                .fill(0)
                .map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 + i * 0.05 }}
                    style={{ color: T.accent, fontSize: 14 }}
                  >
                    ★
                  </motion.span>
                ))}
            </div>
          </motion.div>
        </motion.div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 8,
            marginTop: 24,
          }}
        >
          {TESTIMONIALS.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setTIdx(i)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              animate={{
                width: i === tIdx ? 24 : 8,
                background: i === tIdx ? T.accent : T.border,
              }}
              transition={{ duration: 0.3 }}
              style={{
                height: 8,
                borderRadius: 100,
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════
// CONTACT
// ═══════════════════════════════════════════════════════
function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const inp: React.CSSProperties = {
    background: T.bg,
    border: `1px solid ${T.border}`,
    color: T.text,
    fontSize: 14,
    padding: "13px 16px",
    borderRadius: 10,
    transition: "all .2s ease",
    width: "100%",
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="sp"
      style={{
        padding: "100px clamp(24px,5vw,80px)",
        background: T.s1,
        borderTop: `1px solid ${T.border}`,
      }}
    >
      <div style={{ maxWidth: 580, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 48 }}
        >
          <p
            style={{
              color: T.accent,
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            LET'S TALK
          </p>
          <h2
            style={{
              fontFamily: T.fd,
              fontWeight: 800,
              fontSize: "clamp(30px,3.8vw,48px)",
              lineHeight: 1.1,
              marginBottom: 16,
            }}
          >
            Have a project?
            <br />
            <span style={{ color: T.accent }}>Let's build.</span>
          </h2>
          <p style={{ color: T.muted, fontSize: 15, lineHeight: 1.8 }}>
            Whether it's a new product, a redesign, or just a question — drop me
            a message and I'll respond within 24 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {!sent ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ display: "flex", flexDirection: "column", gap: 14 }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 14,
                }}
              >
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  style={inp}
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, name: e.target.value }))
                  }
                />
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  style={inp}
                  type="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, email: e.target.value }))
                  }
                />
              </div>
              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                style={{ ...inp, resize: "vertical" as const }}
                rows={5}
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={(e) =>
                  setForm((f) => ({ ...f, message: e.target.value }))
                }
              />
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSent(true)}
                style={{
                  background: T.accent,
                  color: "#080808",
                  border: "none",
                  fontFamily: T.fd,
                  fontWeight: 700,
                  fontSize: 13,
                  letterSpacing: "0.08em",
                  padding: 16,
                  borderRadius: 10,
                  cursor: "pointer",
                  textTransform: "uppercase",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                }}
              >
                <Send size={16} />
                SEND MESSAGE
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              style={{ textAlign: "center", padding: "52px 0" }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ duration: 0.6, type: "spring" }}
                style={{
                  marginBottom: 16,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <CheckCircle2 size={52} color={T.accent} strokeWidth={2} />
              </motion.div>
              <h3
                style={{
                  fontFamily: T.fd,
                  fontWeight: 700,
                  fontSize: 22,
                  marginBottom: 10,
                }}
              >
                Message sent!
              </h3>
              <p style={{ color: T.muted, fontSize: 14 }}>
                I'll get back to you within 24 hours.
              </p>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 32,
              marginTop: 44,
              flexWrap: "wrap",
            }}
          >
            {[
              {
                label: "GitHub",
                handle: "github.com/mubarakoyekanmi",
                icon: ExternalLink,
              },
              {
                label: "LinkedIn",
                handle: "linkedin.com/in/mubarak-oyekanmi",
                icon: ExternalLink,
              },
              {
                label: "Email",
                handle: "hello@mubarakoyekanmi.dev",
                icon: Mail,
              },
            ].map(({ label, handle, icon: Icon }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 10 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                }
                transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                style={{ textAlign: "center" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 6,
                    marginBottom: 6,
                  }}
                >
                  <Icon size={14} color={T.accent} />
                  <div
                    style={{
                      fontFamily: T.fd,
                      fontWeight: 700,
                      fontSize: 13,
                    }}
                  >
                    {label}
                  </div>
                </div>
                <div style={{ color: T.muted, fontSize: 11 }}>{handle}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
