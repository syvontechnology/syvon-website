"use client";
import PageWrapper from "@/components/ui/PageWrapper";
import styles from "./AboutUs.module.scss";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { motion } from "framer-motion";

const domains = [
  {
    title: "Rooftop Hybrid Solar for Industry",
    desc: "Delivering high-yield commercial & industrial hybrid solar plants powered by Waaree Energies PV modules, Deye hybrid inverters, and modular LiFePO4 storage.",
    glow: "rgba(16, 185, 129, 0.1)",
  },
  {
    title: "Smart Streetlight & Solar Highway Systems",
    desc: "Custom-engineered smart streetlight poles featuring outdoor LED displays, dedicated sidewalk illumination, and autonomous solar highway lights.",
    glow: "rgba(245, 158, 11, 0.1)",
  },
  {
    title: "Electric Mobility",
    desc: "Developing smart EV platforms, battery telemetry, and clean urban mobility solutions led by the Syvon EV Scooty.",
    glow: "rgba(59, 130, 246, 0.08)",
  },
  {
    title: "UAV, Drone & Hardware R&D",
    desc: "End-to-end UAV design, diagnostic repair, pilot training, 3D laser reverse engineering, and additive manufacturing prototypes.",
    glow: "rgba(99, 102, 241, 0.08)",
  },
  {
    title: "Applied AI & Energy Software",
    desc: "Building IoT telemetry dashboards, smart-grid analytics, and scalable cloud-native software systems for modern enterprises.",
    glow: "rgba(139, 92, 246, 0.08)",
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
            <strong className={styles.highlightText}>Syvon Technology</strong> is a renewable-energy-first
            engineering and clean-tech company accelerating industrial decarbonization, smart solar
            infrastructure, and intelligent mobility.
          </p>

          <p>
            From turnkey industrial rooftop hybrid solar plants built with <strong>Waaree Energies</strong> and{" "}
            <strong>Deye</strong> to custom smart streetlight poles with LED displays, sidewalk lighting, and
            solar highway systems, we combine bankable energy hardware with UAV, R&amp;D, and AI software engineering.
          </p>
        </motion.section>

        {/* Mission / Vision Cards */}
        <motion.section variants={itemVariants} className={styles.mv}>
          <SpotlightCard className={styles.mvCard} glowColor="rgba(16, 185, 129, 0.1)">
            <h3>Our Mission</h3>
            <p>
              To accelerate the transition to clean, resilient energy by engineering bankable industrial
              hybrid solar systems, smart solar public lighting, and intelligent clean-tech platforms.
            </p>
          </SpotlightCard>

          <SpotlightCard className={styles.mvCard} glowColor="rgba(245, 158, 11, 0.1)">
            <h3>Our Vision</h3>
            <p>
              To be India&apos;s trusted renewable energy and smart infrastructure engineering partner—combining
              Tier-1 solar technology, custom fabrication, and applied software for sustainable industrial growth.
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

