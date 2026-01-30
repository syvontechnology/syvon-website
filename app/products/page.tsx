import PageWrapper from "@/components/ui/PageWrapper";
import Link from "next/link";
import styles from "./ProductsPage.module.scss";

const products = [
  {
    title: "Syvon EV Scooty",
    description:
      "Experience eco-friendly urban travel. Long-range battery, smart features, and unmatched style.",
    image: "/images/products/ev-scooty.jpg",
    href: "/products/syvon-ev-scooty",
  },
  {
    title: "Faraday Privacy Products",
    description:
      "Protect your privacy and devices from unauthorized tracking, EMPs, and secure your private meetings.",
    image: "/images/products/faraday-bags.jpg",
    href: "/products/faraday-privacy-products",
  },
];

export default function ProductsPage() {
  return (
    <PageWrapper title="Our Products">
      <section className={styles.productsSection}>
        <div className={styles.cards}>
          {products.map((product) => (
            <Link
              key={product.title}
              href={product.href}
              className={styles.card}
            >
              <div className={styles.imageWrapper}>
                <img
                  src={product.image}
                  alt={product.title}
                  loading="lazy"
                />
              </div>

              <div className={styles.cardContent}>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}
