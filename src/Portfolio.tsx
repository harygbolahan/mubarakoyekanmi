import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { T, ROLES } from "./portfolio/constants";
import { CSS } from "./portfolio/styles";
import { LoadingScreen } from "./portfolio/components/LoadingScreen";
import { CustomCursor } from "./portfolio/components/CustomCursor";
import { BackToTop } from "./portfolio/components/BackToTop";
import { Navigation } from "./portfolio/components/Navigation";
import { Footer } from "./portfolio/components/Footer";
import { HeroSection } from "./portfolio/sections/HeroSection";
import { AboutSection } from "./portfolio/sections/AboutSection";
import { ProjectsSection } from "./portfolio/sections/ProjectsSection";
import { SkillsSection } from "./portfolio/sections/SkillsSection";
import { ExperienceSection } from "./portfolio/sections/ExperienceSection";
import { TestimonialsSection } from "./portfolio/sections/TestimonialsSection";
import { ContactSection } from "./portfolio/sections/ContactSection";

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

      <Navigation activeNav={activeNav} go={go} />
      <HeroSection go={go} roleIdx={roleIdx} />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection skillTab={skillTab} setSkillTab={setSkillTab} />
      {/* <ExperienceSection /> */}
      <TestimonialsSection tIdx={tIdx} setTIdx={setTIdx} />
      <ContactSection />
      <Footer />
    </div>
  );
}
