"use client";
import PageWrapper from "@/components/ui/PageWrapper";
import Link from "next/link";
import styles from "./ProductsPage.module.scss";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { motion } from "framer-motion";

const products = [
  {
    title: "Syvon EV Scooty",
    description:
      "A heavy-duty, smart electric mobility platform designed for urban transit operations. Features digital telemetry displays, fast charging, and customizable safety profiles.",
    image: "/images/products/Front_View.jpg",
    href: "/products/syvon-ev-scooty",
    glow: "rgba(59, 130, 246, 0.08)",
  },
  {
    title: "Faraday Privacy Products",
    description:
      "Military-grade signal isolation pouches and boxes engineered to protect critical devices from RF tracking, data interception, and unauthorized remote access.",
    image: "/images/products/faraday1.jpg",
    href: "/products/faraday-privacy-products",
    glow: "rgba(99, 102, 241, 0.08)",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function ProductsPage() {
  return (
    <PageWrapper title="Our Products">
      <section className={styles.productsSection}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className={styles.cards}
        >
          {products.map((product) => (
            <motion.div key={product.title} variants={itemVariants}>
              <Link href={product.href} className={styles.cardLink}>
                <SpotlightCard className={styles.card} glowColor={product.glow}>
                  <div className={styles.imageWrapper}>
                    <img
                      src={product.image}
                      alt={product.title}
                      loading="lazy"
                      className={styles.image}
                    />
                    <div className={styles.imageGlow} />
                  </div>

                  <div className={styles.cardContent}>
                    <div className={styles.titleRow}>
                      <h3>{product.title}</h3>
                      <svg
                        className={styles.arrow}
                        width="18"
                        height="18"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.33331 8H12.6666M12.6666 8L8.66665 4M12.6666 8L8.66665 12"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <p>{product.description}</p>
                  </div>
                </SpotlightCard>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </PageWrapper>
  );
}

