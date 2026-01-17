"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ProductsHighlight() {
  return (
    <section style={{ padding: "100px 80px", maxWidth: 1200, margin: "0 auto" }}>
      <h2>Our Products</h2>

      <motion.ul
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        style={{ marginTop: 32, lineHeight: 2 }}
      >
        <li>AI-powered IoT & Robotics Platforms</li>
        <li>Custom Software & Enterprise Systems</li>
        <li>Electric Mobility & Drone Solutions</li>
      </motion.ul>

      <Link href="/products" style={{ display: "inline-block", marginTop: 24 }}>
        Explore all products →
      </Link>
    </section>
  );
}
