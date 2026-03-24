import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Send, CheckCircle2, Mail, ExternalLink } from "lucide-react";
import { T } from "../constants";

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const inp: React.CSSProperties = {
    background: T.bg,
    border: `1px solid ${T.border}`,
    color: T.text,
    fontSize: 14,
    padding: "13px 16px",
    borderRadius: 10,
    transition: "all .2s ease",
    width: "100%",
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="sp"
      style={{
        padding: "100px clamp(24px,5vw,80px)",
        background: T.s1,
        borderTop: `1px solid ${T.border}`,
      }}
    >
      <div style={{ maxWidth: 580, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 48 }}
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
            LET'S TALK
          </p>
          <h2
            style={{
              fontFamily: T.fd,
              fontWeight: 800,
              fontSize: "clamp(30px,3.8vw,48px)",
              lineHeight: 1.1,
              marginBottom: 16,
            }}
          >
            Have a project?
            <br />
            <span style={{ color: T.accent }}>Let's build.</span>
          </h2>
          <p style={{ color: T.muted, fontSize: 15, lineHeight: 1.8 }}>
            Whether it's a new product, a redesign, or just a question — drop me
            a message and I'll respond within 24 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {!sent ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ display: "flex", flexDirection: "column", gap: 14 }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 14,
                }}
              >
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  style={inp}
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, name: e.target.value }))
                  }
                />
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  style={inp}
                  type="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, email: e.target.value }))
                  }
                />
              </div>
              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                style={{ ...inp, resize: "vertical" as const }}
                rows={5}
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={(e) =>
                  setForm((f) => ({ ...f, message: e.target.value }))
                }
              />
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSent(true)}
                style={{
                  background: T.accent,
                  color: "#080808",
                  border: "none",
                  fontFamily: T.fd,
                  fontWeight: 700,
                  fontSize: 13,
                  letterSpacing: "0.08em",
                  padding: 16,
                  borderRadius: 10,
                  cursor: "pointer",
                  textTransform: "uppercase",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                }}
              >
                <Send size={16} />
                SEND MESSAGE
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              style={{ textAlign: "center", padding: "52px 0" }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ duration: 0.6, type: "spring" }}
                style={{
                  marginBottom: 16,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <CheckCircle2 size={52} color={T.accent} strokeWidth={2} />
              </motion.div>
              <h3
                style={{
                  fontFamily: T.fd,
                  fontWeight: 700,
                  fontSize: 22,
                  marginBottom: 10,
                }}
              >
                Message sent!
              </h3>
              <p style={{ color: T.muted, fontSize: 14 }}>
                I'll get back to you within 24 hours.
              </p>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 32,
              marginTop: 44,
              flexWrap: "wrap",
            }}
          >
            {[
              {
                label: "GitHub",
                handle: "github.com/mubarakoyekanmi",
                icon: ExternalLink,
              },
              {
                label: "LinkedIn",
                handle: "linkedin.com/in/mubarak-oyekanmi",
                icon: ExternalLink,
              },
              {
                label: "Email",
                handle: "hello@mubarakoyekanmi.dev",
                icon: Mail,
              },
            ].map(({ label, handle, icon: Icon }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 10 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                }
                transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                style={{ textAlign: "center" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 6,
                    marginBottom: 6,
                  }}
                >
                  <Icon size={14} color={T.accent} />
                  <div
                    style={{
                      fontFamily: T.fd,
                      fontWeight: 700,
                      fontSize: 13,
                    }}
                  >
                    {label}
                  </div>
                </div>
                <div style={{ color: T.muted, fontSize: 11 }}>{handle}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
