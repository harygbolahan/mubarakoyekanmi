import { motion } from "framer-motion";
import { T } from "../constants";

interface NavigationProps {
  activeNav: string;
  go: (id: string) => void;
}

export function Navigation({ activeNav, go }: NavigationProps) {
  return (
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
        {["about", "projects", "skills",  "contact"].map((s) => (
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
  );
}
