import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import { T } from "../constants";

export function BackToTop({ go }: { go: (id: string) => void }) {
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
