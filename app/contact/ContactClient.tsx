"use client";
import SpotlightCard from "@/components/ui/SpotlightCard";
import styles from "./ContactPage.module.scss";
import { motion } from "framer-motion";

export default function ContactClient() {
  const details = [
    {
      label: "Email",
      value: "ceo@syvontechnology.com",
      href: "mailto:ceo@syvontechnology.com",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      )
    },
    {
      label: "Phone",
      value: "+91 98501 38917",
      href: "tel:+919850138917",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      )
    },
    {
      // label: "Phone",
      value: "+91 90214 94113",
      href: "tel:+919021494113",
      // icon: (
      //   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      //     <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      //   </svg>
      // )
    },
    {
      label: "Location",
      value: "Shirdi, Maharashtra",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      )
    }
  ];

  return (
    <main className={styles.page}>
      {/* Intro */}
      <section className={styles.intro}>
        <p>
          Have a question, proposal, or idea? We’d love to hear from you.
        </p>
      </section>

      {/* Contact Content */}
      <section className={styles.content}>
        <SpotlightCard className={styles.info} glowColor="rgba(99, 102, 241, 0.08)">
          <h2>Let’s talk</h2>
          <p>
            Reach out to us for business inquiries, partnerships, or general
            questions. Our team will respond as soon as possible.
          </p>

          <div className={styles.details}>
            {details.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={styles.item}
              >
                <div className={styles.itemHeader}>
                  {item.icon}
                  <span>{item.label}</span>
                </div>
                {item.href ? (
                  <a href={item.href}>{item.value}</a>
                ) : (
                  <p>{item.value}</p>
                )}
              </motion.div>
            ))}
          </div>
        </SpotlightCard>
      </section>
    </main>
  );
}
