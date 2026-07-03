"use client";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.scss";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Mouse glare/reflection state
  const innerRef = useRef<HTMLDivElement>(null);
  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!innerRef.current) return;
    const rect = innerRef.current.getBoundingClientRect();
    setMouseCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => setMenuOpen((v) => !v);
  const closeMenu = () => setMenuOpen(false);

  const navItems = [
    { name: "About", href: "/about-us" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
  ];

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
      role="banner"
    >
      <div
        ref={innerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={styles.inner}
      >
        {/* Subtle moving reflection glare following mouse */}
        <div
          className={styles.shine}
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(130px circle at ${mouseCoords.x}px ${mouseCoords.y}px, rgba(255, 255, 255, 0.08), transparent 80%)`,
          }}
          aria-hidden="true"
        />

        {/* Logo */}
        <div className={styles.left}>
          <Link href="/" className={styles.logo} onClick={closeMenu}>
            <div className={styles.logoWrapper}>
              <Image
                src="/logo.png"
                alt="Syvon Technology Logo"
                width={32}
                height={32}
                priority
                className={styles.logoImg}
              />
            </div>
            <span className={styles.logoText}>Syvon Technology</span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className={styles.navDesktop} aria-label="Primary navigation">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.navLink} ${isActive ? styles.active : ""}`}
              >
                <span>{item.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className={styles.activeIndicator}
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right actions */}
        <div className={styles.right}>
          <Link href="/contact" className={styles.contactBtn} onClick={closeMenu}>
            <span>Contact</span>
            <svg
              className={styles.contactArrow}
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.33331 8H12.6666M12.6666 8L8.66665 4M12.6666 8L8.66665 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className={styles.mobileMenu}
          >
            <nav className={styles.navMobile} aria-label="Mobile navigation">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={styles.navMobileLink}
                >
                  {item.name}
                </Link>
              ))}

              <Link
                href="/contact"
                onClick={closeMenu}
                className={styles.mobileContact}
              >
                Contact
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}


