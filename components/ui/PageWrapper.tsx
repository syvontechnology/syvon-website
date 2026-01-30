"use client";

import { ReactNode } from "react";
import PageHero from "@/components/PageHero/PageHero";
import styles from "./PageWrapper.module.scss";

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

      <main className={styles.wrapper}>
        {children}
      </main>
    </>
  );
}
