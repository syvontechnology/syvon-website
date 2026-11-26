"use client";

import Link from "next/link";
import PageWrapper from "@/components/ui/PageWrapper";
import SpotlightCard from "@/components/ui/SpotlightCard";
import styles from "./smart-streetlight-poles.module.scss";
import { motion } from "framer-motion";

const specs = [
  {
    title: "Pole Heights",
    value: "6m – 12m Custom",
    detail: "Hot-dip galvanized steel with custom architectural powder coating",
  },
  {
    title: "LED Display",
    value: "P4 / P5 IP65",
    detail: "High-brightness outdoor digital signage with cloud CMS",
  },
  {
    title: "Dual-Zone Optics",
    value: "Road + Sidewalk",
    detail: "Dedicated overhead highway beam & low-glare pedestrian arm",
  },
  {
    title: "Solar Autonomy",
    value: "3-Day LiFePO4",
    detail: "MPPT solar charging with adaptive dusk-to-dawn motion dimming",
  },
];

const configurations = [
  {
    tag: "Urban & Smart Campus Poles",
    title: "Custom Smart Poles with LED Display & Sidewalk Lights",
    description:
      "Multi-functional architectural smart poles combining high-efficiency solar/hybrid roadway illumination, dedicated sidewalk pedestrian lighting, and integrated vertical outdoor LED display screens.",
    features: [
      "Integrated outdoor IP65 LED display for public advisories, campus branding & live AQI/weather feeds",
      "Secondary lower pedestrian arm engineered for uniform, glare-free sidewalk illumination",
      "Remote 4G / LoRaWAN CMS for real-time signage updates and dimming schedules",
      "Optional mounts for CCTV/ANPR cameras, Wi-Fi APs, SOS buttons, and EV charging pods",
    ],
    glow: "rgba(245, 158, 11, 0.1)",
  },
  {
    tag: "Expressways & Corridors",
    title: "Autonomous Solar Highway Lights",
    description:
      "Heavy-duty standalone solar LED highway lighting systems built for national highways, state corridors, industrial estates, and remote stretches without grid trenching.",
    features: [
      "High-lumen 160+ lm/W LED luminaires with precision asymmetric highway optics",
      "High-efficiency monocrystalline top solar panels with wind-rated mounting brackets",
      "In-pole or weather-sealed LiFePO4 battery packs with smart MPPT charge controllers",
      "PIR/radar adaptive dimming & dusk-to-dawn automation for 3+ rainy days of backup",
    ],
    glow: "rgba(16, 185, 129, 0.1)",
  },
];

const applications = [
  {
    title: "Smart Cities & Boulevards",
    desc: "Upgrade urban avenues with digital LED information displays, pedestrian walkway lighting, and clean solar autonomy.",
  },
  {
    title: "Highways & Expressways",
    desc: "Deploy zero-trenching, off-grid solar highway lights across medians, interchanges, and toll plazas.",
  },
  {
    title: "Industrial Parks & SEZs",
    desc: "Ensure reliable perimeter, internal road, and pedestrian safety across factories and logistics hubs.",
  },
  {
    title: "Campuses & Townships",
    desc: "Custom-branded architectural poles with digital campus announcements and energy-efficient pathway lights.",
  },
];

export default function SmartStreetlightPolesPage() {
  return (
    <PageWrapper title="Custom Smart Streetlight Poles">
      {/* Intro Hero */}
      <section className={styles.hero}>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={styles.heroBadge}
        >
          Smart Solar Infrastructure • LED Display • Sidewalk &amp; Highway Lighting
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={styles.heroTagline}
        >
          Custom-engineered smart streetlight poles integrating outdoor LED
          displays, dedicated sidewalk pedestrian lighting, and autonomous solar
          highway lights for cities, campuses, and expressways.
        </motion.p>
      </section>

      {/* Visual Gallery */}
      <section className={styles.gallery}>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className={styles.galleryItem}
        >
          <img
            src="/images/renewable/smart-streetlight-led-sidewalk.jpg"
            alt="Custom smart streetlight pole with vertical LED display and sidewalk light"
            className={styles.galleryImage}
          />
          <div className={styles.glowOverlay} />
          <div className={styles.galleryCaption}>
            Smart Pole with Integrated LED Display &amp; Dual-Arm Sidewalk Light
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className={styles.galleryItem}
        >
          <img
            src="/images/renewable/solar-highway-lights.jpg"
            alt="Autonomous solar highway streetlight poles illuminating a multi-lane expressway"
            className={styles.galleryImage}
          />
          <div className={styles.glowOverlay} />
          <div className={styles.galleryCaption}>
            Autonomous High-Lumen Solar Highway Lighting Infrastructure
          </div>
        </motion.div>
      </section>

      {/* Specs */}
      <section className={styles.specs}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Engineering Specifications
        </motion.h2>

        <div className={styles.specsGrid}>
          {specs.map((spec, i) => (
            <motion.div
              key={spec.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <SpotlightCard className={styles.specCard} glowColor="rgba(245, 158, 11, 0.1)">
                <h4>{spec.title}</h4>
                <p className={styles.specValue}>{spec.value}</p>
                <span className={styles.specDetail}>{spec.detail}</span>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pole Configurations */}
      <section className={styles.solutions}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={styles.sectionHeading}
        >
          Pole Configurations &amp; Capabilities
        </motion.h2>
        <p className={styles.sectionSub}>
          Every pole assembly is structurally designed, CAD-modeled, and custom
          fabricated to match site wind-load, roadway width, and architectural
          lighting standards.
        </p>

        <div className={styles.solutionsGrid}>
          {configurations.map((cfg, i) => (
            <motion.div
              key={cfg.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
            >
              <SpotlightCard className={styles.solutionCard} glowColor={cfg.glow}>
                <span className={styles.solutionTag}>{cfg.tag}</span>
                <h3>{cfg.title}</h3>
                <p>{cfg.description}</p>
                <ul className={styles.featureList}>
                  {cfg.features.map((feat) => (
                    <li key={feat}>{feat}</li>
                  ))}
                </ul>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Deployment Applications */}
      <section className={styles.applications}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={styles.sectionHeading}
        >
          Deployment Environments
        </motion.h2>

        <div className={styles.appGrid}>
          {applications.map((app, i) => (
            <motion.div
              key={app.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <SpotlightCard className={styles.appCard} glowColor="rgba(16, 185, 129, 0.08)">
                <h4>{app.title}</h4>
                <p>{app.desc}</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={styles.cta}
      >
        <div className={styles.ctaGlow} />
        <h3>Need Custom Smart Streetlight Poles for Your Project?</h3>
        <p>
          Share your road width, pole spacing, LED display dimensions, or
          highway corridor requirements for a tailored CAD design and lighting
          lux layout.
        </p>
        <Link href="/contact" className={styles.primaryBtn}>
          <span>Request Custom Pole Proposal</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </motion.section>
    </PageWrapper>
  );
}
