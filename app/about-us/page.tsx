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
            <strong>Syvon</strong> is an engineering-driven technology company
            focused on building next-generation solutions across deep-tech and
            applied innovation domains.
          </p>

          <p>
            We bring together research, engineering excellence, and real-world
            problem solving to create systems that scale responsibly and deliver
            long-term value.
          </p>
        </section>

        {/* Mission / Vision */}
        <section className={`${styles.mv} ${styles.animate}`}>
          <div>
            <h3>Our Mission</h3>
            <p>
              To engineer intelligent, reliable, and scalable technology
              solutions that solve real-world problems while remaining ethical,
              sustainable, and future-ready.
            </p>
          </div>

          <div>
            <h3>Our Vision</h3>
            <p>
              To become a globally trusted technology partner known for deep
              engineering expertise, responsible innovation, and meaningful
              societal impact.
            </p>
          </div>
        </section>

        {/* Domains */}
        <section className={`${styles.domains} ${styles.animate}`}>
          <h3>What We Do</h3>

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
          <h3>Our Engineering Principles</h3>

          <ul>
            <li>Problem-first, technology-second thinking</li>
            <li>Scalability and reliability by design</li>
            <li>Security and ethics as non-negotiables</li>
            <li>Long-term impact over short-term gains</li>
            <li>Continuous learning and technical excellence</li>
          </ul>
        </section>
      </div>
    </PageWrapper>
  );
}
