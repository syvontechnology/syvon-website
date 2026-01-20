import Container from "@/components/layout/Container";
import BusinessCard from "@/components/cards/BusinessCard";
import styles from "./BusinessCards.module.scss";

const BUSINESSES = [
  {
    title: "Artificial Intelligence",
    description:
      "Machine learning systems, computer vision, predictive analytics, and intelligent automation for modern enterprises.",
  },
  {
    title: "Electric Mobility",
    description:
      "EV platforms, energy optimization, charging infrastructure, and next-gen mobility solutions.",
  },
  {
    title: "AgriTech",
    description:
      "Precision farming, IoT-enabled agriculture, remote sensing, and data-driven crop intelligence.",
  },
];

export default function BusinessCards() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <h2>Our Businesses</h2>
          <p>
            We operate across high-impact domains where technology,
            sustainability, and engineering excellence converge.
          </p>
        </div>

        <div className={styles.grid}>
          {BUSINESSES.map((item) => (
            <BusinessCard
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
