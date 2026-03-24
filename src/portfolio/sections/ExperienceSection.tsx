import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { T, EXPERIENCE } from "../constants";

export function ExperienceSection() {
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
