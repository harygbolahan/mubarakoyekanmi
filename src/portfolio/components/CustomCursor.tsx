import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { T } from "../constants";

export function CustomCursor() {
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
