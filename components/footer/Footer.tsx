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
              <li>About</li>
              {/* <li>Team</li> */}
              {/* <li>Business</li> */}
              <li>Products</li>
              {/* <li>Careers</li> */}
              {/* <li>CSR</li> */}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className={styles.heading}>Contact</h4>
            <ul className={styles.list}>
              <li>ceo@syvontechnology.com</li>
              <li>India</li>
            </ul>
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
