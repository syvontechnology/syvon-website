"use client";

import { motion } from "framer-motion";

const domains = [
  {
    title: "Artificial Intelligence",
    desc: "Machine learning, automation, analytics, and intelligent platforms for enterprise and industry.",
  },
  {
    title: "Electric Mobility",
    desc: "EV systems, smart mobility, drones, and sustainable transportation technologies.",
  },
  {
    title: "AgriTech",
    desc: "Data-driven agricultural solutions improving yield, efficiency, and sustainability.",
  },
];

export default function Expertise() {
  return (
    <section style={{ padding: "100px 80px", background: "#0f1117" }}>
      <h2 style={{ textAlign: "center", marginBottom: 60 }}>Our Expertise</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 32,
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        {domains.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            style={{
              padding: 32,
              borderRadius: 16,
              background: "rgba(255,255,255,0.04)",
            }}
          >
            <h3>{item.title}</h3>
            <p style={{ marginTop: 12, opacity: 0.8 }}>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
