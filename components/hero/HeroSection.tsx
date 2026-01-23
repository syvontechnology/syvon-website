"use client";

import { useEffect, useState } from "react";
import Container from "@/components/layout/Container";
import styles from "./HeroSection.module.scss";

const items = [
  {
    title: "Artificial Intelligence",
    desc: "Production-grade AI systems designed for real-world intelligence and scale.",
  },
  {
    title: "Electric Mobility",
    desc: "Smart EV platforms, energy intelligence, and future-ready mobility systems.",
  },
  {
    title: "AgriTech",
    desc: "Data-driven, scalable solutions empowering modern agriculture.",
  },
  {
    title: "Robotics & Automation",
    desc: "Autonomous systems engineered for precision and efficiency.",
  },
  {
    title: "Software Platforms",
    desc: "Secure, cloud-native platforms built for enterprise resilience.",
  },
];

export default function HeroSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % items.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.hero}>
      {/* Animated Deep-Tech Background */}
      <div className={styles.background}>
        <span className={styles.layer} />
        <span className={styles.layer} />
        <span className={styles.layer} />
      </div>

      <Container>
        <div className={styles.grid}>
          {/* LEFT CONTENT */}
          <div className={styles.content}>
            <h1>
              Engineering Intelligence
              <br />
              for a Sustainable Future
            </h1>

            <p>
              Syvon is an engineering-driven deep-tech company building intelligent
              systems across Artificial Intelligence, Electric Mobility, AgriTech,
              Robotics, and Software Platforms — focused on long-term impact and
              scalable innovation.
            </p>

            <div className={styles.actions}>
              <button className="primary-btn">Explore Our Businesses</button>
              <button className="secondary-btn">Talk to Our Team</button>
            </div>
          </div>

          {/* RIGHT HORIZONTAL DEPTH CAROUSEL */}
          <div className={styles.carouselWrapper}>
            {items.map((item, index) => {
              const offset = index - active;

              return (
                <div
                  key={item.title}
                  className={styles.card}
                  style={{
                    transform: `
                      translateX(${offset * 140}px)
                      scale(${1 - Math.abs(offset) * 0.18})
                    `,
                    opacity:
                      Math.abs(offset) > 2
                        ? 0
                        : 1 - Math.abs(offset) * 0.3,
                    zIndex: 10 - Math.abs(offset),
                  }}
                >
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
