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
        {/* Intro text below banner */}
        <section className={styles.intro}>
          <p>
            Have a question, proposal, or idea?
            We’d love to hear from you.
          </p>
        </section>

        {/* Content */}
        <section className={styles.content}>
          {/* Left info */}
          <div className={styles.info}>
            <h2>Let’s talk</h2>
            <p>
              Reach out to us for business inquiries, partnerships, or general
              questions. Our team will respond as soon as possible.
            </p>

            <div className={styles.details}>
              <div>
                <span>Email</span>
                <a href="mailto:contact@syvon.com">contact@syvon.com</a>
              </div>
              <div>
                <span>Location</span>
                <p>India</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form className={styles.form}>
            <div className={styles.field}>
              <label htmlFor="name">Name</label>
              <input id="name" type="text" placeholder="Your full name" />
            </div>

            <div className={styles.field}>
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="you@example.com" />
            </div>

            <div className={styles.field}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={5}
                placeholder="Tell us how we can help"
              />
            </div>

            <button type="submit">Send Message</button>
          </form>
        </section>
      </main>
    </PageWrapper>
  );
}
