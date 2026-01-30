import PageWrapper from "@/components/ui/PageWrapper";
import styles from "./AboutUs.module.scss";

const domains = [
  {
    title: "Artificial Intelligence",
    desc: "Engineering applied AI systems that enhance decision-making, automate workflows, and operate reliably at scale.",
  },
  {
    title: "Electric Mobility",
    desc: "Developing intelligent software and analytics layers for EV platforms, energy optimization, and mobility infrastructure.",
  },
  {
    title: "AgriTech",
    desc: "Creating data-driven agricultural solutions focused on sustainability, productivity, and real-world usability.",
  },
  {
    title: "Robotics & Automation",
    desc: "Designing autonomous and semi-autonomous systems built for precision, reliability, and field deployment.",
  },
  {
    title: "Software Engineering",
    desc: "Building secure, scalable, cloud-native platforms with clean architectures and long-term maintainability.",
  },
];
export default function AboutUsPage() {
  return (
    <PageWrapper title="About Us">
      <div className={styles.about}>
        {/* Intro */}
        <section className={`${styles.intro} ${styles.animate}`}>
          <p>
            <strong>Syvon Technology</strong> is an engineering-led company
            focused on building reliable, scalable, and production-ready
            deep-tech systems.
          </p>

          <p>
            We work at the intersection of applied research and real-world
            deployment—designing technology that performs beyond prototypes
            and scales responsibly in complex environments.
          </p>
        </section>

        {/* Mission / Vision */}
        <section className={`${styles.mv} ${styles.animate}`}>
          <div>
            <h3>Our Mission</h3>
            <p>
              To engineer intelligent systems that solve real problems with
              clarity, precision, and long-term reliability.
            </p>
          </div>

          <div>
            <h3>Our Vision</h3>
            <p>
              To be a trusted global technology partner known for deep
              engineering, ethical innovation, and systems that endure.
            </p>
          </div>
        </section>

        {/* Domains */}
        <section className={`${styles.domains} ${styles.animate}`}>
          <h3>Our Focus Areas</h3>

          <div className={styles.domainGrid}>
            {domains.map((item) => (
              <div key={item.title} className={styles.domainCard}>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Principles */}
        <section className={`${styles.principles} ${styles.animate}`}>
          <h3>How We Engineer</h3>

          <ul>
            <li>Engineering decisions driven by real constraints</li>
            <li>Systems designed for scale, safety, and maintainability</li>
            <li>Security, reliability, and ethics built in—not added later</li>
            <li>Clear architectures over unnecessary complexity</li>
            <li>Continuous learning backed by execution</li>
          </ul>
        </section>
      </div>
    </PageWrapper>
  );
}
