import styles from "./BusinessCard.module.scss";

interface BusinessCardProps {
  title: string;
  description: string;
}

export default function BusinessCard({
  title,
  description,
}: BusinessCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.media} />

      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
