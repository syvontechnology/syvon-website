"use client";

import Container from "@/components/layout/Container";
import styles from "./PageHero.module.scss";
import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
}

export default function PageHero({ title }: PageHeroProps) {
  return (
    <section className={styles.pageHero}>
      {/* Dynamic futuristic background */}
      <div className={styles.background} aria-hidden="true">
        <div className={styles.gridLayer} />
        <div className={styles.radialGlow} />
        <div className={styles.overlay} />
      </div>

      <Container>
        <div className={styles.content}>
          <motion.h1
            initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {title}
          </motion.h1>
        </div>
      </Container>
    </section>
  );
}
