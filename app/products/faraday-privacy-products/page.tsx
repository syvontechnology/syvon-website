import PageWrapper from "@/components/ui/PageWrapper";
import styles from "./faraday-privacy-products.module.scss";

const variants = [
  { name: "Mobile Pouch", weight: "57 ± 5 g" },
  { name: "Tablet Pouch", weight: "127 ± 10 g" },
  { name: "Laptop Pouch", weight: "158 ± 10 g" },
];

export default function FaradayPrivacyProductsPage() {
  return (
    <PageWrapper title="Faraday Privacy Products">
      <div className={styles.page}>
        {/* Intro */}
        {/* Second Image */}
        <section className={`${styles.imageOnly} ${styles.animate}`}>
          <img
            src="/images/products/faraday1.jpg"
            alt="Faraday bag privacy protection"
          />
        </section>
        <section className={`${styles.intro} ${styles.animate}`}>
          <p>
            Syvon Faraday Privacy Products are engineered to secure devices and
            sensitive environments from unauthorized signals, tracking, and
            electromagnetic threats — enabling complete privacy in critical
            situations, meetings, and field operations.
          </p>
        </section>

        

        {/* Variants */}
        <section className={`${styles.variants} ${styles.animate}`}>
          <h3>Available Variants</h3>

          <div className={styles.variantGrid}>
            {variants.map((v) => (
              <div key={v.name} className={styles.variantCard}>
                <h4>{v.name}</h4>
                <p>Weight: {v.weight}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Capabilities */}
        <section className={`${styles.capabilities} ${styles.animate}`}>
          <h3>Core Capabilities</h3>

          <ul>
            <li>Blocks CDMA, GSM, 2G / 3G / 4G / 5G / 6G</li>
            <li>Prevents GPS, Wi-Fi, Bluetooth, NFC & RF communication</li>
            <li>Indigenous high-performance RF shielding technology</li>
            <li>Broadband signal isolation & device protection</li>
            <li>Rugged, lightweight, field-ready construction</li>
          </ul>
        </section>
        {/* Image + Core Message */}
        <section className={`${styles.heroBlock} ${styles.animate}`}>
          <div className={styles.imageWrap}>
            <img
              src="/images/products/faraday2.jpg"
              alt="Faraday privacy pouch"
            />
          </div>

          <div className={styles.heroText}>
            <h3>Privacy by Design</h3>
            <p>
              Our Faraday bags isolate devices from all external wireless
              communication — preventing remote access, tracking, data leakage,
              and unintended transmissions.
            </p>
            <p>
              Designed for professionals who operate in privacy-critical,
              high-risk, or restricted environments.
            </p>
          </div>
        </section>

        {/* Technical Performance */}
        <section className={`${styles.tech} ${styles.animate}`}>
          <h3>Technical Performance</h3>

          <div className={styles.techGrid}>
            <p><strong>Shielding Effectiveness:</strong> ~45 dB</p>
            <p><strong>Frequency Range:</strong> 100 MHz – 18 GHz</p>
            <p><strong>Blocked Signals:</strong> 2G–5G, GPS, Wi-Fi, Bluetooth, NFC</p>
            <p><strong>Advanced Fabric:</strong> Multi-layer conductive nanocomposite</p>
            <p><strong>Operating Temperature:</strong> −20°C to 55°C</p>
          </div>
        </section>

        {/* Operational Advantages */}
        <section className={`${styles.ops} ${styles.animate}`}>
          <h3>Operational Advantages</h3>

          <ul>
            <li>Prevents remote activation & data tampering</li>
            <li>Reduces SIGINT visibility</li>
            <li>Suitable for law enforcement, defense & intelligence use</li>
            <li>Cost-effective alternative to metal enclosures</li>
            <li>Reusable, rugged & mission-ready</li>
          </ul>
        </section>

        {/* Call to Action */}
        <section className={`${styles.cta} ${styles.animate}`}>
        <h3>Interested in Faraday Privacy Products?</h3>
        <p>
           Contact our team to discuss requirements, pricing, and bulk or
           professional deployment options.
          </p>

        <a href="/contact" className={styles.primaryBtn}>
         Contact Sales
        </a>
        </section>
        
      </div>
    </PageWrapper>
  );
}
