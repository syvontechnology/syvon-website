import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Brand */}
        <div className={styles.brand}>
          <h3 className={styles.logo}>Syvon Technology</h3>
          <p className={styles.description}>
            Engineering intelligent and sustainable solutions across AI, EV, and
            AgriTech.
          </p>
        </div>

        {/* Domains */}
        <div>
          <h4 className={styles.heading}>Domains</h4>
          <ul className={styles.list}>
            <li>Artificial Intelligence</li>
            <li>Electric Mobility</li>
            <li>AgriTech</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className={styles.heading}>Company</h4>
          <ul className={styles.list}>
            <li>About Us</li>
            <li>Careers</li>
            <li>CSR</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className={styles.heading}>Contact</h4>
          <p>contact@syvontechnology.com</p>
          <p>India</p>
        </div>
      </div>

      <div className={styles.bottom}>
        © {new Date().getFullYear()} Syvon. All rights reserved.
      </div>
    </footer>
  );
}
