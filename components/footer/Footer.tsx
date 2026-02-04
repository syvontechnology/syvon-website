// components/footer/Footer.tsx
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.container}>
          {/* Brand */}
          <div className={styles.brand}>
            <h3 className={styles.logo}>Syvon Technology</h3>
            <p className={styles.description}>
              Engineering intelligent, scalable, and sustainable technology
              solutions across AI, Electric Mobility, and AgriTech.
            </p>
          </div>

          {/* Domains */}
          <div>
            <h4 className={styles.heading}>Domains</h4>
            <ul className={styles.list}>
              <li>Artificial Intelligence</li>
              <li>Electric Mobility</li>
              <li>AgriTech</li>
              <li>Robotics & Automation</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className={styles.heading}>Company</h4>
            <ul className={styles.list}>
              <li>
                <a href="/about-us">About</a>
              </li>
              <li>
                <a href="/products">Products</a>
              </li>
            </ul>
          </div>

          {/* Contact (separate styled items) */}
          <div className={styles.contact}>
            <h4 className={styles.heading}>Contact</h4>

            <div className={styles.contactItem}>
              <span>Email</span>
              <a href="mailto:ceo@syvontechnology.com">ceo@syvontechnology.com</a>
            </div>

            <div className={styles.contactItem}>
              <span>Phone</span>
              <a href="tel:+919850138917">+91 98501 38917</a>
            </div>

            <div className={styles.contactItem}>
              <span>Location</span>
              <p>Loni Bk — 413736, India</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        © {new Date().getFullYear()} Syvon Technology. All rights reserved.
      </div>
    </footer>
  );
}
