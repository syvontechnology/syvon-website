"use client";
import PageWrapper from "@/components/ui/PageWrapper";
import styles from "./faraday-privacy-products.module.scss";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { motion } from "framer-motion";

const variants = [
  { name: "Car Key Pouch", weight: "35 ± 5 g", icon: "🔑" },
  { name: "Mobile Pouch", weight: "57 ± 5 g", icon: "📱" },
  { name: "Tablet Pouch", weight: "127 ± 10 g", icon: "平板" },
  { name: "Laptop Pouch", weight: "158 ± 10 g", icon: "💻" },
  { name: "Faraday Box", weight: "350 ± 10g", icon: "📦" },
];

const useCases = [
  {
    title: "Vehicle Security",
    desc: "Protect key fobs from relay attacks and signal boosting used by car thieves to unlock and steal vehicles.",
  },
  {
    title: "Privacy & Location Shielding",
    desc: "Block GPS, cellular, and wireless signals to prevent tracking, data leakage, and remote eavesdropping.",
  },
  {
    title: "Evidence Protection",
    desc: "Prevent remote wiping, hacking, or tampering of digital devices — critical for law enforcement and forensics.",
  },
  {
    title: "Secure Facilities",
    desc: "Create instant signal-free environments in sensitive meetings, corporate facilities, or military zones.",
  },
];

export default function FaradayPrivacyProductsPage() {
  return (
    <PageWrapper title="Faraday Privacy Products">
      <div className={styles.page}>
        {/* Image Grid / Intro */}
        <section className={styles.heroSection}>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.imageOnly}
          >
            <img
              src="/images/products/faraday1.jpg"
              alt="Faraday bag privacy protection"
            />
            <div className={styles.glowOverlay} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={styles.intro}
          >
            <p>
              Syvon Faraday Privacy Products are engineered to completely isolate
              devices from all wireless communication — preventing tracking,
              hacking, signal interception, and data theft. Designed for
              high-security environments, these solutions ensure total digital
              silence when it matters most.
            </p>
          </motion.div>
        </section>

        {/* What is Faraday Bag */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.definition}
        >
          <div className={styles.definitionInner}>
            <h3>What is a Faraday Bag?</h3>
            <p>
              A Faraday bag is a secure enclosure that blocks all electromagnetic
              signals using advanced conductive materials. It creates a protective
              shield — known as a Faraday cage — that prevents devices from sending
              or receiving any wireless communication.
            </p>
            <p>
              This ensures complete protection against GPS tracking, signal
              interception, remote access, and unauthorized data transmission.
            </p>
          </div>
        </motion.section>

        {/* Variants */}
        <section className={styles.variants}>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Available Variants
          </motion.h3>

          <div className={styles.variantGrid}>
            {variants.map((v, i) => (
              <motion.div
                key={v.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <SpotlightCard className={styles.variantCard} glowColor="rgba(16, 185, 129, 0.08)">
                  <div className={styles.variantIcon}>{v.icon}</div>
                  <h4>{v.name}</h4>
                  <p>Nominal Weight: {v.weight}</p>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Use Cases Bento */}
        <section className={styles.useCases}>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Key Applications
          </motion.h3>

          <div className={styles.useGrid}>
            {useCases.map((uc, i) => (
              <motion.div
                key={uc.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                <SpotlightCard className={styles.useCard} glowColor="rgba(99, 102, 241, 0.08)">
                  <h4>{uc.title}</h4>
                  <p>{uc.desc}</p>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Dual Column Feature */}
        <section className={styles.heroBlock}>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.imageWrap}
          >
            <img
              src="/images/products/faraday2.jpg"
              alt="Faraday privacy pouch"
            />
            <div className={styles.glowOverlay} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.heroText}
          >
            <h3>Privacy by Design</h3>
            <p>
              Our Faraday bags isolate devices from all external wireless
              communication — preventing remote access, tracking, data leakage,
              and unintended transmissions.
            </p>
            <p>
              Simply place your device inside and seal the pouch — instantly
              creating a complete signal isolation environment.
            </p>
            <p>
              Designed for professionals operating in privacy-critical,
              high-risk, or restricted environments.
            </p>
          </motion.div>
        </section>

        {/* Technical / Capabilities Split */}
        <div className={styles.technicalSplit}>
          {/* Capabilities */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.capabilities}
          >
            <h3>Core Capabilities</h3>
            <ul className={styles.techList}>
              <li>Blocks all wireless networks: CDMA, GSM, 2G–5G, and next-gen 6G</li>
              <li>Shields GPS, Wi-Fi (2.4 & 5GHz), Bluetooth, NFC, and RFID</li>
              <li>Indigenous ultra-conductive RF shielding weave</li>
              <li>Broadband signal isolation and hardware protection</li>
              <li>Rugged, military-grade wear-resistant construction</li>
            </ul>
          </motion.section>

          {/* Technical Performance */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={styles.tech}
          >
            <h3>Technical Specs</h3>
            <div className={styles.techTable}>
              <div className={styles.tableRow}>
                <span>Shielding Level</span>
                <strong>~45 dB</strong>
              </div>
              <div className={styles.tableRow}>
                <span>Frequency Range</span>
                <strong>100 MHz – 18 GHz</strong>
              </div>
              <div className={styles.tableRow}>
                <span>Materials</span>
                <strong>Multi-layer nano-conductive mesh</strong>
              </div>
              <div className={styles.tableRow}>
                <span>Temperature Range</span>
                <strong>−20°C to +55°C</strong>
              </div>
            </div>
          </motion.section>
        </div>

        {/* Operational Advantages */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.ops}
        >
          <h3>Operational Advantages</h3>
          <div className={styles.opsGrid}>
            <div className={styles.opsCard}>
              <h5>Hardware Isolation</h5>
              <p>Prevents remote software activation, device wiping, or firmware hacking.</p>
            </div>
            <div className={styles.opsCard}>
              <h5>SIGINT Countermeasure</h5>
              <p>Reduces electromagnetic signal footprints in tactical zones.</p>
            </div>
            <div className={styles.opsCard}>
              <h5>Field Ready</h5>
              <p>Lightweight, fold-flat design makes it highly portable for security agents.</p>
            </div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.cta}
        >
          <div className={styles.ctaGlow} />
          <h3>Interested in Faraday Privacy Products?</h3>
          <p>
            Contact our engineering team to discuss specialized bulk orders, Custom dimensions, or corporate integrations.
          </p>
          <a href="/contact" className={styles.primaryBtn}>
            <span>Contact Sales</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.section>
      </div>
    </PageWrapper>
  );
}