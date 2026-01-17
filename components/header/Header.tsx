"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.scss";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          SYVON
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.navDesktop}>
          <Link href="/about-us">About</Link>
          <Link href="/our-team">Team</Link>
          <Link href="/our-business">Business</Link>
          <Link href="/products">Products</Link>
          <Link href="/certifications">Certifications</Link>
          <Link href="/csr">CSR</Link>
          <Link href="/careers">Careers</Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={styles.menuButton}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <Link href="/about-us" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link href="/our-team" onClick={() => setMenuOpen(false)}>
            Team
          </Link>
          <Link href="/our-business" onClick={() => setMenuOpen(false)}>
            Business
          </Link>
          <Link href="/products" onClick={() => setMenuOpen(false)}>
            Products
          </Link>
          <Link href="/certifications" onClick={() => setMenuOpen(false)}>
            Certifications
          </Link>
          <Link href="/csr" onClick={() => setMenuOpen(false)}>
            CSR
          </Link>
          <Link href="/careers" onClick={() => setMenuOpen(false)}>
            Careers
          </Link>
        </div>
      )}
    </header>
  );
}
