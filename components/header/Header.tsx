"use client";

import Link from "next/link";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Syvon Technology
        </Link>

        <nav className={styles.nav}>
          <Link href="/about-us">About Us</Link>
          <Link href="/our-team">Our Team</Link>
          <Link href="/our-business">Our Business</Link>
          <Link href="/products">Products</Link>
          <Link href="/certifications">Certifications</Link>
          <Link href="/csr">CSR</Link>
          <Link href="/careers">Careers</Link>
        </nav>
      </div>
    </header>
  );
}
