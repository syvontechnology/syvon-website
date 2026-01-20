import { ReactNode } from "react";
import styles from "./PageWrapper.module.scss";

export default function PageWrapper({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <main className={styles.wrapper}>
      <h1 className={styles.title}>{title}</h1>
      {children}
    </main>
  );
}
