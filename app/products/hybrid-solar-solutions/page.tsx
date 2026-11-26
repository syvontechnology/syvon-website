"use client";

import Link from "next/link";
import PageWrapper from "@/components/ui/PageWrapper";
import SpotlightCard from "@/components/ui/SpotlightCard";
import styles from "./hybrid-solar-solutions.module.scss";
import { motion } from "framer-motion";

const specs = [
  {
    title: "Plant Capacity",
    value: "25 kW – 5 MW+",
    detail: "Scalable commercial & industrial rooftop arrays",
  },
  {
    title: "Hybrid Switchover",
    value: "< 4 ms UPS",
    detail: "Seamless grid, solar, battery & DG synchronization",
  },
  {
    title: "Storage Chemistry",
    value: "LiFePO4 BESS",
    detail: "High-cycle modular lithium battery banks",
  },
  {
    title: "Smart Monitoring",
    value: "24/7 Cloud IoT",
    detail: "Real-time string telemetry, yield & fault alerts",
  },
];

const partners = [
  {
    name: "Waaree Energies",
    badge: "PV Module Partner",
    description:
      "We deploy Waaree Energies Tier-1 high-efficiency Mono PERC and N-Type TOPCon bifacial solar modules engineered for demanding industrial rooftops and high ambient temperatures.",
    highlights: [
      "High-wattage N-Type TOPCon & Mono PERC bifacial panels",
      "Superior low-light yield and low temperature coefficient",
      "25 to 30-year linear power output warranty",
      "PID-resistant frames engineered for high wind & dust loads",
    ],
    glow: "rgba(16, 185, 129, 0.1)",
  },
  {
    name: "Deye Hybrid Systems",
    badge: "Inverter & Storage Partner",
    description:
      "Powered by Deye three-phase high-voltage and low-voltage hybrid inverters, our industrial installations unify solar generation, grid power, battery storage, and diesel generators seamlessly.",
    highlights: [
      "Three-phase 10 kW to 100 kW+ parallelable hybrid inverters",
      "Intelligent peak-shaving & time-of-use tariff optimization",
      "Built-in diesel generator (DG) auto-sync & zero-export control",
      "IP65-rated protection with remote firmware & SCADA telemetry",
    ],
    glow: "rgba(59, 130, 246, 0.1)",
  },
];

const industrialFeatures = [
  {
    tag: "Grid + Battery + DG",
    title: "True Hybrid Power Continuity",
    desc: "Eliminate production downtime during grid outages with instantaneous sub-4ms battery backup and automated diesel generator synchronization.",
  },
  {
    tag: "Cost Optimization",
    title: "Peak Shaving & Demand Reduction",
    desc: "Discharge stored solar energy during peak industrial tariff windows to slash maximum demand penalties and commercial electricity bills.",
  },
  {
    tag: "Turnkey EPC",
    title: "Structural & Wind-Load Engineering",
    desc: "Non-penetrating standing-seam or ballast mounting structures designed via CAD and structural analysis for RCC and metal-shed roofs.",
  },
  {
    tag: "Compliance Ready",
    title: "Net Metering & Zero-Export",
    desc: "Configurable export limiters and DISCOM-compliant net-metering integration tailored for captive industrial consumption.",
  },
  {
    tag: "Thermal Safety",
    title: "Industrial Protection & Earthing",
    desc: "DC surge protection (SPD), arc-fault detection, chemical earthing, and lightning arresters engineered to industrial safety codes.",
  },
  {
    tag: "Analytics",
    title: "Live Energy Yield Dashboards",
    desc: "Track kWh generation, battery SoC, CO2 offset, and per-phase load balancing across multiple factory sheds from one unified dashboard.",
  },
];

export default function HybridSolarSolutionsPage() {
  return (
    <PageWrapper title="Rooftop Hybrid Solar Solutions">
      {/* Intro Hero */}
      <section className={styles.hero}>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={styles.heroBadge}
        >
          Industrial Renewable Energy • Waaree Energies × Deye
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={styles.heroTagline}
        >
          High-reliability rooftop hybrid solar plants for factories, warehouses,
          cold storages, and commercial campuses — built in partnership with
          Waaree Energies and Deye.
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
            src="/images/renewable/industrial-rooftop-solar.jpg"
            alt="Industrial factory rooftop solar PV installation with Waaree Energies panels"
            className={styles.galleryImage}
          />
          <div className={styles.glowOverlay} />
          <div className={styles.galleryCaption}>
            High-Efficiency Industrial Rooftop PV Arrays (Waaree Energies)
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
            src="/images/renewable/hybrid-solar-inverter-bess.jpg"
            alt="Deye industrial hybrid solar inverters and LiFePO4 battery storage room"
            className={styles.galleryImage}
          />
          <div className={styles.glowOverlay} />
          <div className={styles.galleryCaption}>
            Deye Three-Phase Hybrid Inverters &amp; Modular LiFePO4 BESS
          </div>
        </motion.div>
      </section>

      {/* Strategic Partnerships */}
      <section className={styles.partnersSection}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Strategic Hardware Partnerships
        </motion.h2>
        <p className={styles.sectionSub}>
          Industrial energy systems demand bankable Tier-1 components. We partner
          directly with Waaree Energies and Deye to deliver maximum yield,
          long-term durability, and intelligent hybrid control.
        </p>

        <div className={styles.partnersGrid}>
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
            >
              <SpotlightCard className={styles.partnerCard} glowColor={partner.glow}>
                <div className={styles.partnerHeader}>
                  <h3 className={styles.partnerName}>{partner.name}</h3>
                  <span className={styles.partnerBadge}>{partner.badge}</span>
                </div>
                <p className={styles.partnerDesc}>{partner.description}</p>
                <ul className={styles.partnerPoints}>
                  {partner.highlights.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Specifications */}
      <section className={styles.specs}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          System Architecture &amp; Specs
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
              <SpotlightCard className={styles.specCard} glowColor="rgba(16, 185, 129, 0.1)">
                <h4>{spec.title}</h4>
                <p className={styles.specValue}>{spec.value}</p>
                <span className={styles.specDetail}>{spec.detail}</span>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Industrial Features */}
      <section className={styles.features}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={styles.sectionHeading}
        >
          Engineered for Industrial Reliability
        </motion.h2>

        <div className={styles.featuresGrid}>
          {industrialFeatures.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
            >
              <SpotlightCard className={styles.featureCard} glowColor="rgba(16, 185, 129, 0.09)">
                <span className={styles.featureTag}>{feat.tag}</span>
                <h4>{feat.title}</h4>
                <p>{feat.desc}</p>
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
        <h3>Ready to Cut Industrial Energy Costs?</h3>
        <p>
          Schedule an on-site rooftop structural &amp; load audit with our solar
          engineering team to receive a customized Waaree + Deye hybrid ROI
          proposal.
        </p>
        <Link href="/contact" className={styles.primaryBtn}>
          <span>Request Industrial Solar Audit</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </motion.section>
    </PageWrapper>
  );
}
