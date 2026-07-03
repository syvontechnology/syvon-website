"use client";
import React, { useRef, useState } from "react";
import styles from "./SpotlightCard.module.scss";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  onClick?: () => void;
}

export default function SpotlightCard({
  children,
  className = "",
  glowColor = "rgba(99, 102, 241, 0.12)",
  onClick,
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      onClick={onClick}
      className={`${styles.card} ${className}`}
      style={{ cursor: onClick ? "pointer" : "default" }}
    >
      <div
        className={styles.spotlight}
        style={{
          opacity,
          background: `radial-gradient(350px circle at ${position.x}px ${position.y}px, ${glowColor}, transparent 80%)`,
        }}
      />
      <div
        className={styles.borderSpotlight}
        style={{
          opacity,
          background: `radial-gradient(200px circle at ${position.x}px ${position.y}px, rgba(255, 255, 255, 0.2), transparent 80%)`,
        }}
      />
      <div className={styles.inner}>{children}</div>
    </div>
  );
}
