"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.scss";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close the menu when pathname changes (robust)
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => setMenuOpen((v) => !v);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
      role="banner"
    >
      <div className={styles.inner}>
        {/* Logo */}
        <div className={styles.left}>
          <Link href="/" className={styles.logo} onClick={closeMenu}>
            Syvon Technology
          </Link>
        </div>

        {/* Desktop nav */}
        <nav className={styles.navDesktop} aria-label="Primary navigation">
          <Link href="/about-us" className={styles.navLink}>
            About
          </Link>
          <Link href="/our-team" className={styles.navLink}>
            Team
          </Link>
          <Link href="/our-business" className={styles.navLink}>
            Business
          </Link>
          <Link href="/products" className={styles.navLink}>
            Products
          </Link>
          <Link href="/careers" className={styles.navLink}>
            Careers
          </Link>
        </nav>

        {/* Right actions */}
        <div className={styles.right}>
          <Link href="/contact" className={styles.contactBtn} onClick={closeMenu}>
            Contact
          </Link>

          <button
            className={`${styles.burger} ${menuOpen ? styles.open : ""}`}
            onClick={toggleMenu}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile menu (animated) */}
      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ""}`}
        role="dialog"
        aria-modal="false"
      >
        <nav className={styles.navMobile} aria-label="Mobile navigation">
          <Link href="/about-us" onClick={closeMenu} className={styles.navMobileLink}>
            About
          </Link>
          <Link href="/our-team" onClick={closeMenu} className={styles.navMobileLink}>
            Team
          </Link>
          <Link href="/our-business" onClick={closeMenu} className={styles.navMobileLink}>
            Business
          </Link>
          <Link href="/products" onClick={closeMenu} className={styles.navMobileLink}>
            Products
          </Link>
          <Link href="/careers" onClick={closeMenu} className={styles.navMobileLink}>
            Careers
          </Link>

          <Link
            href="/contact"
            onClick={closeMenu}
            className={`${styles.navMobileLink} ${styles.mobileContact}`}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
