import Container from "@/components/layout/Container";
import styles from "./HeroSection.module.scss";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.grid}>
          {/* LEFT CONTENT */}
          <div className={styles.content}>
            <h1>
              Engineering Intelligence
              <br />
              for a Sustainable Future
            </h1>

            <p>
              Syvon designs and delivers advanced solutions across Artificial
              Intelligence, Electric Mobility, AgriTech, and Robotics—helping
              industries and communities move forward with confidence.
            </p>

            <div className={styles.actions}>
              <button className="primary-btn">
                Explore Our Businesses
              </button>
              <button className="secondary-btn">
                Talk to Our Team
              </button>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className={styles.visual}>
            <div className={styles.visualCard}>
              <span>AI</span>
              <span>EV</span>
              <span>AgriTech</span>
              <span>Robotics</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
