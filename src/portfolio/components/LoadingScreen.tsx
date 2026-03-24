import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import { T } from "../constants";

export function LoadingScreen() {
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
      <div style={{ position: "relative", width: 80, height: 80 }}>
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
