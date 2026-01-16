"use client";

import { motion } from "framer-motion";
import styles from "./HeroSection.module.scss";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Engineering the <span>Future</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          We build intelligent solutions across <strong>AI</strong>,{" "}
          <strong>Electric Mobility</strong>, and <strong>AgriTech</strong> —
          transforming industries with technology and engineering excellence.
        </motion.p>

        <motion.div
          className={styles.actions}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Link href="/products" className={styles.primaryBtn}>
            Explore Solutions
          </Link>

          <Link href="/contact" className={styles.secondaryBtn}>
            Book a Consultation
          </Link>
        </motion.div>
      </div>

      <motion.div
        className={styles.visual}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <div className={styles.glow} />
        <div className={styles.domains}>
          <span>AI</span>
          <span>EV</span>
          <span>AgriTech</span>
        </div>
      </motion.div>
    </section>
  );
}
