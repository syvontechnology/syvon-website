"use client";
import React, { useRef } from "react";
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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    card.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  const handleMouseEnter = () => {
    cardRef.current?.style.setProperty("--spot-opacity", "1");
  };

  const handleMouseLeave = () => {
    cardRef.current?.style.setProperty("--spot-opacity", "0");
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`${styles.card} ${className}`}
      style={
        {
          cursor: onClick ? "pointer" : "default",
          "--glow-color": glowColor,
        } as React.CSSProperties
      }
    >
      <div className={styles.spotlight} aria-hidden="true" />
      <div className={styles.inner}>{children}</div>
    </div>
  );
}
