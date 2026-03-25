import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Smartphone, Globe } from "lucide-react";
import { T, PROJECTS } from "../constants";
import { fadeInUp, staggerContainer } from "../animations";
import { iconMap } from "../iconMap";
import { ProjectModal } from "../components/ProjectModal";
import type { Project } from "../types";

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
          {/* <motion.a
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
          </motion.a> */}
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
            const handleClick = (e: React.MouseEvent) => {
              e.stopPropagation();
              setSelectedProject(p);
            };
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
                  cursor: "default",
                  gridColumn: i === 0 ? "1 / -1" : "auto",
                  transition: "all .3s ease",
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  onClick={
                    p.images && p.images.length > 0 ? handleClick : undefined
                  }
                  style={{
                    height: i === 0 ? 200 : 148,
                    background:
                      p.images && p.images.length > 0
                        ? "transparent"
                        : `linear-gradient(135deg,${T.s2} 0%,${T.border} 100%)`,
                    borderRadius: 8,
                    marginBottom: 20,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    position: "relative",
                    cursor:
                      p.images && p.images.length > 0 ? "pointer" : "default",
                  }}
                >
                  {p.images && p.images.length > 0 ? (
                    <img
                      src={p.images[0]}
                      alt={`${p.name} preview`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <>
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
                    </>
                  )}
                </motion.div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 10,
                  }}
                >
                  <div
                    style={{ display: "flex", gap: 6, alignItems: "center" }}
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
                    {p.platform === "mobile" && (
                      <span
                        style={{
                          background: "rgba(59, 130, 246, 0.1)",
                          color: "#60A5FA",
                          fontSize: 10,
                          fontWeight: 700,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          padding: "4px 10px",
                          borderRadius: 100,
                          display: "flex",
                          alignItems: "center",
                          gap: 4,
                        }}
                      >
                        <Smartphone size={10} /> MOBILE
                      </span>
                    )}
                    {p.platform === "both" && (
                      <span
                        style={{
                          background: "rgba(236, 72, 153, 0.1)",
                          color: "#F472B6",
                          fontSize: 10,
                          fontWeight: 700,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          padding: "4px 10px",
                          borderRadius: 100,
                          display: "flex",
                          alignItems: "center",
                          gap: 4,
                        }}
                      >
                        <Smartphone size={10} /> iOS & ANDROID
                      </span>
                    )}
                    {p.platform === "web" && (
                      <span
                        style={{
                          background: "rgba(168, 85, 247, 0.1)",
                          color: "#C084FC",
                          fontSize: 10,
                          fontWeight: 700,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          padding: "4px 10px",
                          borderRadius: 100,
                          display: "flex",
                          alignItems: "center",
                          gap: 4,
                        }}
                      >
                        <Globe size={10} /> WEB
                      </span>
                    )}
                  </div>
                  {/* <span style={{ color: T.muted, fontSize: 12 }}>{p.year}</span> */}
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

                {(p.link || p.appStore || p.playStore) && (
                  <motion.button
                    whileHover={{ x: 5 }}
                    onClick={handleClick}
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
                    {p.platform === "mobile" || p.platform === "both"
                      ? "View App Details"
                      : "View Project"}{" "}
                    <ArrowRight size={14} />
                  </motion.button>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
