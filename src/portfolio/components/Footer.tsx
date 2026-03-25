import { T } from "../constants";

export function Footer() {
  return (
    <footer
      style={{
        borderTop: `1px solid ${T.border}`,
        padding: "28px clamp(24px,5vw,80px)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 16,
      }}
    >
      <div
        style={{
          fontFamily: T.fd,
          fontWeight: 700,
          fontSize: 13,
          color: T.muted,
        }}
      >
        <span style={{ color: T.accent }}>©</span> 2025 Mubarak Gbolahan
        Oyekanmi
      </div>
      <div style={{ color: T.muted, fontSize: 12 }}>
        Built with React · Osogbo, Nigeria 🇳🇬
      </div>
      {/* <div style={{ display: "flex", gap: 20 }}>
        {[
          { name: "GitHub", icon: ExternalLink },
          { name: "LinkedIn", icon: ExternalLink },
          { name: "Twitter", icon: ExternalLink },
        ].map(({ name, icon: Icon }) => (
          <motion.a
            key={name}
            href="#"
            whileHover={{ color: T.accent, y: -2 }}
            style={{
              fontSize: 13,
              fontWeight: 500,
              color: T.muted,
              textDecoration: "none",
              transition: "color .2s ease",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <Icon size={16} />
            {name}
          </motion.a>
        ))}
      </div> */}
    </footer>
  );
}
