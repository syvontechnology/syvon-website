import Container from "@/components/layout/Container";

export default function TrustStrip() {
  const items = [
    { title: "Artificial Intelligence", icon: "/images/icons/ai.svg" },
    { title: "Electric Mobility", icon: "/images/icons/ev.svg" },
    { title: "AgriTech", icon: "/images/icons/agri.svg" },
  ];

  return (
    <section className="section section--tight" style={{ background: "transparent", paddingTop: 28, paddingBottom: 28 }}>
      <Container>
        <div style={{ display: "flex", gap: 24, justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
          {items.map((it) => (
            <div key={it.title} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 18px", background: "white", borderRadius: 12, boxShadow: "0 6px 20px rgba(10,37,64,0.06)" }}>
              <img src={it.icon} alt={it.title} style={{ width: 36, height: 36 }} />
              <div style={{ fontWeight: 600, color: "var(--text-primary)" }}>{it.title}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
