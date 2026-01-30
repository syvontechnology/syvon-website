import PageWrapper from "@/components/ui/PageWrapper";
import styles from "./faraday-privacy-products.module.scss";

export default function FaradayPrivacyProductsPage() {
  return (
    <PageWrapper title="Faraday Privacy Products">
      <section className={styles.content}>
        <p>
          Our Faraday products are engineered to protect devices and sensitive
          environments from unauthorized signals, tracking, and electromagnetic threats.
        </p>
      </section>
    </PageWrapper>
  );
}
