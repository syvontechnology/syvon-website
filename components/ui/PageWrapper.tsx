"use client";

import { ReactNode } from "react";
import PageHero from "@/components/PageHero/PageHero";
import styles from "./PageWrapper.module.scss";
import { motion } from "framer-motion";

export default function PageWrapper({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <>
      <PageHero title={title} />

      <motion.main
        className={styles.wrapper}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
      >
        {children}
      </motion.main>
    </>
  );
}

