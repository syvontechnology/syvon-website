"use client";

import { useEffect, useState } from "react";
import Container from "@/components/layout/Container";
import styles from "./HeroSection.module.scss";

type NodeStyle = {
  left: string;
  animationDelay: string;
  animationDuration: string;
};

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
  const [nodes, setNodes] = useState<NodeStyle[]>([]);

  /* Carousel rotation */
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % items.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  /* Generate animated nodes ONLY on client */
  useEffect(() => {
    const generatedNodes: NodeStyle[] = Array.from({ length: 22 }).map(() => ({
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 10}s`,
      animationDuration: `${10 + Math.random() * 10}s`,
    }));

    setNodes(generatedNodes);
  }, []);

  return (
    <section className={styles.hero}>
      {/* Deep-tech animated background */}
      <div className={styles.background} aria-hidden="true">
        <div className={styles.gridLayer} />

        {nodes.map((style, i) => (
          <span
            key={i}
            className={styles.node}
            style={style}
          />
        ))}

        <div className={styles.overlay} />
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
              <button className={styles.primaryBtn}>
                Explore Our Businesses
              </button>
              <button className={styles.secondaryBtn}>
                Talk to Our Team
              </button>
            </div>
          </div>

          {/* RIGHT CAROUSEL */}
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
