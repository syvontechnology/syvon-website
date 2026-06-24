"use client";
import { useEffect, useState } from "react";
import styles from "./SignalDemo.module.scss";

export default function SignalDemo() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const trigger = window.scrollY > 200;
      setActive(trigger);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className={styles.demo}>
      <div className={styles.content}>
        <h2>How It Works</h2>
        <p>
          Our Faraday technology blocks all wireless signals — ensuring complete
          device isolation.
        </p>

        <div className={styles.visual}>
          <div className={`${styles.phone} ${active ? styles.active : ""}`}>
            📱
          </div>

          <div className={`${styles.signal} ${active ? styles.off : ""}`}>
            📡
          </div>
        </div>

        <p className={styles.result}>
          {active ? "Signal Blocked • Full Privacy Enabled" : "Signals Active"}
        </p>
      </div>
    </section>
  );
}