import PageWrapper from "@/components/ui/PageWrapper";
import styles from "./AboutUs.module.scss";

const domains = [
  {
    title: "Artificial Intelligence",
    desc: "Building intelligent systems that augment human decision-making and automate complex processes responsibly.",
  },
  {
    title: "Electric Mobility",
    desc: "Driving sustainable transportation through smart EV systems, analytics, and infrastructure software.",
  },
  {
    title: "AgriTech",
    desc: "Empowering agriculture with data-driven, scalable, and farmer-first technology solutions.",
  },
  {
    title: "Robotics & Automation",
    desc: "Designing autonomous and semi-autonomous systems to improve efficiency and precision.",
  },
  {
    title: "Software Engineering",
    desc: "Developing secure, scalable platforms with modern cloud-native architectures.",
  },
];

export default function AboutUsPage() {
  return (
    <PageWrapper title="About Us">
      <div className={styles.about}>
        {/* Intro */}
        <section className={styles.intro}>
          <p>
            <strong>Syvon</strong> is an engineering-driven technology company
            focused on building next-generation solutions across deep-tech and
            applied innovation domains. We combine research, engineering
            excellence, and real-world problem solving to create systems that
            scale sustainably.
          </p>

          <p>
            Our work spans Artificial Intelligence, Electric Mobility, AgriTech,
            Robotics, and Software Platforms — unified by a single goal:{" "}
            <strong>long-term impact over short-term gains</strong>.
          </p>
        </section>

        {/* Mission / Vision */}
        <section className={styles.mv}>
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
        <section className={styles.domains}>
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
        <section className={styles.principles}>
          <h3>Our Engineering Principles</h3>

          <ul>
            <li>Problem-first, technology-second approach</li>
            <li>Scalability and reliability by design</li>
            <li>Security and ethics as core requirements</li>
            <li>Long-term thinking over quick wins</li>
            <li>Continuous learning and technical excellence</li>
          </ul>
        </section>
      </div>
    </PageWrapper>
  );
}
