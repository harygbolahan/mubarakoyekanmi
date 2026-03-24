import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { T, TESTIMONIALS } from "../constants";

interface TestimonialsSectionProps {
  tIdx: number;
  setTIdx: (idx: number) => void;
}

export function TestimonialsSection({
  tIdx,
  setTIdx,
}: TestimonialsSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="testimonials"
      ref={ref}
      className="sp"
      style={{
        padding: "100px clamp(24px,5vw,80px)",
        borderTop: `1px solid ${T.border}`,
      }}
    >
      <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
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
            SOCIAL PROOF
          </p>
          <h2
            style={{
              fontFamily: T.fd,
              fontWeight: 800,
              fontSize: "clamp(30px,3.8vw,48px)",
              lineHeight: 1.1,
              marginBottom: 48,
            }}
          >
            What people <span style={{ color: T.accent }}>say.</span>
          </h2>
        </motion.div>

        <motion.div
          key={tIdx}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
          }
          transition={{ duration: 0.5 }}
          style={{
            background: T.s1,
            border: `1px solid ${T.border}`,
            borderRadius: 18,
            padding: "40px 44px",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              color: T.accent,
              fontFamily: "Georgia,serif",
              fontSize: 64,
              lineHeight: 0.7,
              marginBottom: 24,
              textAlign: "left",
            }}
          >
            "
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              color: T.text,
              fontSize: 17,
              lineHeight: 1.8,
              fontStyle: "italic",
              marginBottom: 32,
            }}
          >
            {TESTIMONIALS[tIdx].text}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div
              style={{
                fontFamily: T.fd,
                fontWeight: 700,
                fontSize: 15,
              }}
            >
              {TESTIMONIALS[tIdx].name}
            </div>
            <div style={{ color: T.muted, fontSize: 12, marginTop: 4 }}>
              {TESTIMONIALS[tIdx].role}
            </div>
            <div
              style={{
                display: "flex",
                gap: 3,
                justifyContent: "center",
                marginTop: 12,
              }}
            >
              {Array(TESTIMONIALS[tIdx].rating)
                .fill(0)
                .map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 + i * 0.05 }}
                    style={{ color: T.accent, fontSize: 14 }}
                  >
                    ★
                  </motion.span>
                ))}
            </div>
          </motion.div>
        </motion.div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 8,
            marginTop: 24,
          }}
        >
          {TESTIMONIALS.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setTIdx(i)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              animate={{
                width: i === tIdx ? 24 : 8,
                background: i === tIdx ? T.accent : T.border,
              }}
              transition={{ duration: 0.3 }}
              style={{
                height: 8,
                borderRadius: 100,
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
