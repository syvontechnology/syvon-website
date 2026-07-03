"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Container from "@/components/layout/Container";
import styles from "./HeroSection.module.scss";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  {
    title: "Artificial Intelligence",
    desc: "Production-grade AI systems designed for real-world intelligence and scale.",
    glow: "rgba(99, 102, 241, 0.15)",
  },
  {
    title: "Electric Mobility",
    desc: "Smart EV platforms, energy intelligence, and future-ready mobility systems.",
    glow: "rgba(139, 92, 246, 0.15)",
  },
  {
    title: "AgriTech",
    desc: "Data-driven, scalable solutions empowering modern agriculture.",
    glow: "rgba(16, 185, 129, 0.15)",
  },
  {
    title: "Robotics & Automation",
    desc: "Autonomous systems engineered for precision and efficiency.",
    glow: "rgba(239, 68, 68, 0.12)",
  },
  {
    title: "Software Platforms",
    desc: "Secure, cloud-native platforms built for enterprise resilience.",
    glow: "rgba(59, 130, 246, 0.15)",
  },
];

export default function HeroSection() {
  const [active, setActive] = useState(0);

  /* Carousel rotation */
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % items.length);
    }, 3800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.hero}>
      {/* Deep-tech animated background with aurora blur blobs */}
      <div className={styles.background} aria-hidden="true">
        <div className={styles.gridLayer} />
        
        {/* Animated Aurora Blobs */}
        <motion.div
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -30, 20, 0],
            scale: [1, 1.15, 0.9, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`${styles.blob} ${styles.blobPrimary}`}
        />
        
        <motion.div
          animate={{
            x: [0, -30, 40, 0],
            y: [0, 40, -30, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`${styles.blob} ${styles.blobAccent}`}
        />

        <div className={styles.overlay} />
      </div>

      <Container>
        <div className={styles.grid}>
          {/* LEFT CONTENT */}
          <div className={styles.content}>
            <motion.h1
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              Engineering Intelligence
              <br />
              <span className={styles.gradientText}>for a Sustainable Future</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            >
              Syvon is an engineering-driven deep-tech company building intelligent
              systems across Artificial Intelligence, Electric Mobility, AgriTech,
              Robotics, and Software Platforms — focused on long-term impact and
              scalable innovation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className={styles.actions}
            >
              <Link href="/contact" className={styles.primaryBtn}>
                Explore Our Businesses
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>

              <Link href="/contact" className={styles.secondaryBtn}>
                Talk to Our Team
              </Link>
            </motion.div>
          </div>

          {/* RIGHT CAROUSEL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className={styles.carouselWrapper}
          >
            <div className={styles.carouselGlow} style={{ background: items[active].glow }} />
            
            {items.map((item, index) => {
              const offset = index - active;
              const isCenter = offset === 0;

              return (
                <div
                  key={item.title}
                  className={`${styles.card} ${isCenter ? styles.cardActive : ""}`}
                  style={{
                    transform: `
                      translateY(${offset * 120}px)
                      scale(${1 - Math.abs(offset) * 0.12})
                    `,
                    opacity:
                      Math.abs(offset) > 2
                        ? 0
                        : 1 - Math.abs(offset) * 0.4,
                    zIndex: 10 - Math.abs(offset),
                    borderColor: isCenter ? "rgba(255, 255, 255, 0.15)" : "rgba(255, 255, 255, 0.05)",
                  }}
                >
                  <div className={styles.cardHeader}>
                    <span className={styles.dot} />
                    <h4>{item.title}</h4>
                  </div>
                  <p>{item.desc}</p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

