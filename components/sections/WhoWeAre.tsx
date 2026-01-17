"use client";

import { motion } from "framer-motion";

export default function WhoWeAre() {
  return (
    <section style={{ padding: "100px 80px", maxWidth: 1200, margin: "0 auto" }}>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Who We Are
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        style={{ marginTop: 24, lineHeight: 1.7, maxWidth: 800 }}
      >
        We are a technology-driven engineering company focused on building
        real-world solutions using Artificial Intelligence, Electric Mobility,
        AgriTech, and advanced software systems. Our work bridges research,
        engineering, and execution to create scalable and sustainable impact.
      </motion.p>
    </section>
  );
}
