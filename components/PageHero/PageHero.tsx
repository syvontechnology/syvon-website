"use client";

import Container from "@/components/layout/Container";
import styles from "./PageHero.module.scss";

interface PageHeroProps {
  title: string;
}

export default function PageHero({ title }: PageHeroProps) {
  return (
    <section className={styles.pageHero}>
      {/* Background */}
      <div className={styles.background} aria-hidden="true">
        <div className={styles.gridLayer} />
        <div className={styles.overlay} />
      </div>

      <Container>
        <div className={styles.content}>
          <h1>{title}</h1>
        </div>
      </Container>
    </section>
  );
}
