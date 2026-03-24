import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { T, SKILLS } from "../constants";

interface SkillsSectionProps {
  skillTab: string;
  setSkillTab: (tab: string) => void;
}

export function SkillsSection({ skillTab, setSkillTab }: SkillsSectionProps) {
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
