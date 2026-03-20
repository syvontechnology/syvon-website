import PageWrapper from "@/components/ui/PageWrapper";
import styles from "./ContactPage.module.scss";

export const metadata = {
  title: "Contact Us | Syvon",
  description: "Get in touch with Syvon for business, partnerships, or careers.",
};

export default function ContactPage() {
  return (
    <PageWrapper title="Contact Us">
      <main className={styles.page}>
        {/* Intro */}
        <section className={styles.intro}>
          <p>
            Have a question, proposal, or idea? We’d love to hear from you.
          </p>
        </section>

        {/* Contact Content */}
        <section className={styles.content}>
          <div className={styles.info}>
            <h2>Let’s talk</h2>
            <p>
              Reach out to us for business inquiries, partnerships, or general
              questions. Our team will respond as soon as possible.
            </p>

            <div className={styles.details}>
              <div className={styles.item}>
                <span>Email</span>
                <a href="mailto:ceo@syvontechnology.com">
                  ceo@syvontechnology.com
                </a>
              </div>

              <div className={styles.item}>
                <span>Phone</span>
                <a href="tel:+919850138917">+91 98501 38917</a>
              </div>

              <div className={styles.item}>
                <span>Location</span>
                <p>Loni Bk — 413736, India</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageWrapper>
  );
}