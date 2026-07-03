"use client";
import PageWrapper from "@/components/ui/PageWrapper";
import styles from "./AboutUs.module.scss";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { motion } from "framer-motion";

const domains = [
  {
    title: "Artificial Intelligence",
    desc: "Engineering applied AI systems that enhance decision-making, automate workflows, and operate reliably at scale.",
    glow: "rgba(99, 102, 241, 0.08)",
  },
  {
    title: "Electric Mobility",
    desc: "Developing intelligent software and analytics layers for EV platforms, energy optimization, and mobility infrastructure.",
    glow: "rgba(139, 92, 246, 0.08)",
  },
  {
    title: "AgriTech",
    desc: "Creating data-driven agricultural solutions focused on sustainability, productivity, and real-world usability.",
    glow: "rgba(16, 185, 129, 0.08)",
  },
  {
    title: "Robotics & Automation",
    desc: "Designing autonomous and semi-autonomous systems built for precision, reliability, and field deployment.",
    glow: "rgba(239, 68, 68, 0.06)",
  },
  {
    title: "Software Engineering",
    desc: "Building secure, scalable, cloud-native platforms with clean architectures and long-term maintainability.",
    glow: "rgba(59, 130, 246, 0.08)",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AboutUsPage() {
  return (
    <PageWrapper title="About Us">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className={styles.about}
      >
        {/* Intro */}
        <motion.section variants={itemVariants} className={styles.intro}>
          <p>
            <strong className={styles.highlightText}>Syvon Technology</strong> is an engineering-led company
            focused on building reliable, scalable, and production-ready
            deep-tech systems.
          </p>

          <p>
            We work at the intersection of applied research and real-world
            deployment—designing technology that performs beyond prototypes
            and scales responsibly in complex environments.
          </p>
        </motion.section>

        {/* Mission / Vision Cards */}
        <motion.section variants={itemVariants} className={styles.mv}>
          <SpotlightCard className={styles.mvCard} glowColor="rgba(99, 102, 241, 0.06)">
            <h3>Our Mission</h3>
            <p>
              To engineer intelligent systems that solve real problems with
              clarity, precision, and long-term reliability.
            </p>
          </SpotlightCard>

          <SpotlightCard className={styles.mvCard} glowColor="rgba(139, 92, 246, 0.06)">
            <h3>Our Vision</h3>
            <p>
              To be a trusted global technology partner known for deep
              engineering, ethical innovation, and systems that endure.
            </p>
          </SpotlightCard>
        </motion.section>

        {/* Focus Domains */}
        <motion.section variants={itemVariants} className={styles.domains}>
          <h3>Our Focus Areas</h3>

          <div className={styles.domainGrid}>
            {domains.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <SpotlightCard className={styles.domainCard} glowColor={item.glow}>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Principles */}
        <motion.section variants={itemVariants} className={styles.principles}>
          <h3>How We Engineer</h3>

          <ul className={styles.principlesList}>
            <li>Engineering decisions driven by real constraints</li>
            <li>Systems designed for scale, safety, and maintainability</li>
            <li>Security, reliability, and ethics built in—not added later</li>
            <li>Clear architectures over unnecessary complexity</li>
            <li>Continuous learning backed by execution</li>
          </ul>
        </motion.section>
      </motion.div>
    </PageWrapper>
  );
}

