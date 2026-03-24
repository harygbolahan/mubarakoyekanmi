import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Monitor, Settings, Palette, Rocket } from "lucide-react";
import { T } from "../constants";
import { fadeInUp, staggerContainer } from "../animations";

export function AboutSection() {
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
