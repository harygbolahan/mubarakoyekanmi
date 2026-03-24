import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import { T, ROLES } from "../constants";

interface HeroSectionProps {
  go: (id: string) => void;
  roleIdx: number;
}

export function HeroSection({ go, roleIdx }: HeroSectionProps) {
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
