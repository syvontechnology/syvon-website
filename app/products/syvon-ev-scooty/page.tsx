"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import PageWrapper from "@/components/ui/PageWrapper";
import styles from "./syvon-ev-scooty.module.scss";

const specs = [
  { title: "Dashboard", value: "Digital Display non-touch" },
  { title: "Charge Time", value: "Max 3 hr" },
  { title: "Range", value: "50 / 80 / 100 km (per single charge)" },
  { title: "Speed", value: "Up to 40 / 80 / 110 km/h (customizable)" },
];

const features = [
  {
    title: "Reverse Parking",
    desc: "Effortless throttle parking for tight spaces.",
    img: "/images/products/rev_park.jpg",
  },
  {
    title: "Parking Safety Mode",
    desc: "Scooty won't move even with throttle applied.",
    img: "/images/products/parking_mode.jpg",
  },
  {
    title: "Theft Alarm System",
    desc: "Enhanced security with smart theft detection.",
    img: "/images/products/theft_alarm.jpg",
  },
  {
    title: "Optimized Lighting",
    desc: "Lights separated from hood and placed on bumper for consistent illumination.",
    img: "/images/products/headlight.jpg",
  },
  {
    title: "Cargo & Foot Space",
    desc: "Long footrest and roomy storage for groceries or large objects.",
    img: "/images/products/footspace.jpg",
  },
  {
    title: "Helmet & Charging",
    desc: "Trunk storage for helmet + integrated phone charging point.",
    img: "/images/products/storage.jpg",
  },
];

export default function SyvonEvScootyPage() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <PageWrapper title="Syvon EV Scooty">
      <section className={`${styles.hero} ${loaded ? styles.fadeUp : ""}`}>
        {/* <img
          src="/images/products/ev-scooty-3.jpg"
          alt="Syvon EV Scooty"
          className={styles.heroImage}
        /> */}
        <p className={styles.heroTagline}>
          Intelligent, sustainable urban mobility.
        </p>
      </section>

      {/* Gallery */}
      <section className={styles.gallery}>
        {[
          "/images/products/Front_View.jpg",
          "/images/products/Side_View.jpg",
          // "/images/products/ev-scooty-4.jpg",
          // "/images/products/ev-scooty-1.jpg",
        ].map((img, i) => (
          <div
            key={i}
            className={`${styles.galleryItem} ${loaded ? styles.fadeUp : ""}`}
            style={{ animationDelay: `${i * 0.2}s` }}
          >
            <img src={img} alt={`EV Scooty ${i + 1}`} />
          </div>
        ))}
      </section>

      {/* Specs */}
      <section className={styles.specs}>
        <h2 className={loaded ? styles.fadeUp : ""}>Specifications</h2>
        <div className={styles.specsGrid}>
          {specs.map((spec, i) => (
            <div
              key={i}
              className={`${styles.specCard} ${loaded ? styles.fadeUp : ""}`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <h4>{spec.title}</h4>
              <p>{spec.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className={styles.features}>
        <h2 className={loaded ? styles.fadeUp : ""}>Features</h2>
        {features.map((feature, i) => (
          <div
            key={i}
            className={`${styles.featureItem} ${loaded ? styles.fadeUp : ""}`}
            style={{ animationDelay: `${i * 0.2}s` }}
          >
            <div className={styles.featureText}>
              <h4>{feature.title}</h4>
              <p>{feature.desc}</p>
            </div>
            <div className={styles.featureImage}>
              <img src={feature.img} alt={feature.title} />
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <Link href="/contact" className={styles.primaryBtn}>Book a Test Ride</Link>
      </section>
    </PageWrapper>
  );
}
