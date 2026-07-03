"use client";
import Link from "next/link";
import PageWrapper from "@/components/ui/PageWrapper";
import styles from "./syvon-ev-scooty.module.scss";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { motion } from "framer-motion";

const specs = [
  { title: "Dashboard", value: "Digital Display", detail: "Non-touch telemetry display" },
  { title: "Charge Time", value: "3 Hours Max", detail: "Fast-charging support integrated" },
  { title: "Range", value: "50 / 80 / 100 km", detail: "Per single full charge cycle" },
  { title: "Speed", value: "40 / 80 / 110 km/h", detail: "Customizable speed profiles" },
];

const features = [
  {
    title: "Reverse Parking",
    desc: "Effortless throttle parking assistant for tight urban spaces.",
    img: "/images/products/rev_park.jpg",
  },
  {
    title: "Parking Safety Mode",
    desc: "Scooty locks movement completely even with throttle applied.",
    img: "/images/products/parking_mode.jpg",
  },
  {
    title: "Theft Alarm System",
    desc: "Enhanced security with smart shock-sensors and remote alarm notifications.",
    img: "/images/products/theft_alarm.jpg",
  },
  {
    title: "Optimized Bumper Lighting",
    desc: "Headlights separated from hood and mounted low on the bumper for optimal direct road illumination.",
    img: "/images/products/headlight.jpg",
  },
  {
    title: "Cargo & Foot Space",
    desc: "Extra-long flat floorboard and roomy storage optimized for grocery boxes or larger parcels.",
    img: "/images/products/footspace.jpg",
  },
  {
    title: "Helmet & Fast Charging",
    desc: "Spacious under-seat boot fits standard helmets, plus built-in mobile charging port.",
    img: "/images/products/storage.jpg",
  },
];

export default function SyvonEvScootyPage() {
  return (
    <PageWrapper title="Syvon EV Scooty">
      {/* Intro Hero */}
      <section className={styles.hero}>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.heroTagline}
        >
          Intelligent, sustainable, and heavy-duty urban mobility.
        </motion.p>
      </section>

      {/* Gallery */}
      <section className={styles.gallery}>
        {[
          "/images/products/Front_View.jpg",
          "/images/products/Side_View.jpg",
        ].map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: i * 0.15 }}
            className={styles.galleryItem}
          >
            <img src={img} alt={`EV Scooty ${i + 1}`} className={styles.galleryImage} />
            <div className={styles.glowOverlay} />
          </motion.div>
        ))}
      </section>

      {/* Specs Dashboard */}
      <section className={styles.specs}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Specifications
        </motion.h2>
        
        <div className={styles.specsGrid}>
          {specs.map((spec, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <SpotlightCard className={styles.specCard} glowColor="rgba(99, 102, 241, 0.1)">
                <h4>{spec.title}</h4>
                <p className={styles.specValue}>{spec.value}</p>
                <span className={styles.specDetail}>{spec.detail}</span>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Showcase */}
      <section className={styles.features}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={styles.sectionHeading}
        >
          Core Features
        </motion.h2>
        
        <div className={styles.featuresGrid}>
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
            >
              <SpotlightCard className={styles.featureCard} glowColor="rgba(139, 92, 246, 0.1)">
                <div className={styles.featureImageWrapper}>
                  <img src={feature.img} alt={feature.title} />
                  <div className={styles.imageGlow} />
                </div>
                <div className={styles.featureText}>
                  <h4>{feature.title}</h4>
                  <p>{feature.desc}</p>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={styles.cta}
      >
        <div className={styles.ctaGlow} />
        <h3>Ready to experience the future?</h3>
        <p>Book a private test ride or consult our engineers on battery customization.</p>
        <Link href="/contact" className={styles.primaryBtn}>
          <span>Book a Test Ride</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </motion.section>
    </PageWrapper>
  );
}
