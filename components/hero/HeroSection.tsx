"use client";

import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import Container from "@/components/layout/Container";
import styles from "./HeroSection.module.scss";
import { motion, useInView } from "framer-motion";
import SpotlightCard from "@/components/ui/SpotlightCard";

/* =====================================
   ANIMATED COUNTER COMPONENT
 ===================================== */
interface CounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

function AnimatedCounter({ value, suffix = "", duration = 1.5 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = value;
    if (start === end) return;

    const totalMs = duration * 1000;
    const incrementTime = Math.max(Math.floor(totalMs / end), 16);

    const timer = setInterval(() => {
      start += Math.ceil(end / (totalMs / incrementTime));
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className={styles.statNum}>
      {count}
      {suffix}
    </span>
  );
}

/* =====================================
   INTERACTIVE TECH NODE NETWORK
 ===================================== */
function InteractiveNodeNetwork() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const nodes = [
    { id: "ai", label: "AI & ML", x: 120, y: 80, color: "#3B82F6" },
    { id: "iot", label: "Embedded IoT", x: 280, y: 110, color: "#6366F1" },
    { id: "ev", label: "Smart EV Mobility", x: 80, y: 220, color: "#10B981" },
    { id: "sec", label: "Faraday Security", x: 260, y: 240, color: "#F59E0B" },
    { id: "hw", label: "Custom Hardware", x: 180, y: 320, color: "#EF4444" },
    { id: "rd", label: "Product R&D", x: 340, y: 340, color: "#EC4899" },
  ];

  const connections = [
    { from: "ai", to: "iot" },
    { from: "ai", to: "ev" },
    { from: "iot", to: "sec" },
    { from: "ev", to: "hw" },
    { from: "sec", to: "hw" },
    { from: "hw", to: "rd" },
    { from: "rd", to: "iot" },
  ];

  return (
    <div className={styles.visualContainer}>
      <svg viewBox="0 0 420 400" className={styles.networkSvg}>
        {/* Connection Lines */}
        {connections.map((conn, idx) => {
          const fromNode = nodes.find(n => n.id === conn.from);
          const toNode = nodes.find(n => n.id === conn.to);
          if (!fromNode || !toNode) return null;

          const isHighlighted = hoveredNode === conn.from || hoveredNode === conn.to;

          return (
            <g key={idx}>
              <motion.line
                x1={fromNode.x}
                y1={fromNode.y}
                x2={toNode.x}
                y2={toNode.y}
                stroke={isHighlighted ? "#6366F1" : "rgba(15, 23, 42, 0.06)"}
                strokeWidth={isHighlighted ? 2 : 1}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              {isHighlighted && (
                <motion.circle
                  r={3}
                  fill="#6366F1"
                  animate={{
                    cx: [fromNode.x, toNode.x],
                    cy: [fromNode.y, toNode.y]
                  }}
                  transition={{
                    cx: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                    cy: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                />
              )}
            </g>
          );
        })}

        {/* Outline background circular grid */}
        <circle cx="210" cy="200" r="160" fill="none" stroke="rgba(15, 23, 42, 0.015)" strokeDasharray="5 5" />
        <circle cx="210" cy="200" r="110" fill="none" stroke="rgba(15, 23, 42, 0.015)" strokeDasharray="3 3" />

        {/* Nodes */}
        {nodes.map((node) => {
          const isHovered = hoveredNode === node.id;

          return (
            <g
              key={node.id}
              className={styles.nodeGroup}
              onMouseEnter={() => setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <motion.circle
                cx={node.x}
                cy={node.y}
                r={isHovered ? 16 : 10}
                fill="none"
                stroke={node.color}
                strokeWidth={1.5}
                animate={{ scale: isHovered ? 1.25 : [1, 1.15, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <circle
                cx={node.x}
                cy={node.y}
                r={isHovered ? 8 : 5}
                fill={node.color}
                style={{ cursor: "pointer" }}
              />
              <motion.g
                initial={{ opacity: 0.8, y: -8 }}
                animate={{ opacity: 1, y: isHovered ? -14 : -10 }}
                transition={{ duration: 0.2 }}
              >
                <text
                  x={node.x}
                  y={node.y}
                  textAnchor="middle"
                  className={styles.nodeText}
                  style={{
                    fill: isHovered ? "#3B82F6" : "#475569",
                    fontWeight: isHovered ? "700" : "600",
                    fontSize: "11px",
                    fontFamily: "var(--font-display), sans-serif"
                  }}
                >
                  {node.label}
                </text>
              </motion.g>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

/* =====================================
   DATA DEFINITIONS
 ===================================== */
const capabilities = [
  {
    title: "Applied Artificial Intelligence",
    desc: "Deploying production-grade machine learning models, custom RAG pipelines, and automated multi-agent workflows to streamline core operations.",
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21m0 0l-.813-5.096L9 21zm0 0h4.906M12 3v13.5M3 12h18M6.375 6.375L17.625 17.625M6.375 17.625L17.625 6.375" />
      </svg>
    ),
    tag: "Intelligence"
  },
  {
    title: "SaaS & Cloud Platforms",
    desc: "Building multi-tenant architectures, secure billing pipelines, and real-time dashboards designed for rapid enterprise scaling.",
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
      </svg>
    ),
    tag: "Cloud"
  },
  {
    title: "High-Performance Web Apps",
    desc: "Developing secure, low-latency applications with clean React/Next.js codebases, optimized database structures, and seamless API systems.",
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
      </svg>
    ),
    tag: "Web"
  },
  {
    title: "Cross-Platform Mobile Apps",
    desc: "Crafting native-performing iOS and Android experiences with rich gesture interactions, offline sync support, and beautiful user interfaces.",
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    tag: "Mobile"
  },
  {
    title: "Robotics & Electric Mobility",
    desc: "Designing secure embedded software, telemetry layers, and autonomous logic systems for hardware platforms and mobility infrastructures.",
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3" />
      </svg>
    ),
    tag: "Hardware"
  },
  {
    title: "Bespoke System Integrations",
    desc: "Integrating custom ERP/CRM panels, legacy migration paths, and custom backend logic blocks optimized for maximum performance.",
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253" />
      </svg>
    ),
    tag: "Enterprise"
  }
];

const featuredProducts = [
  {
    title: "Syvon EV Scooty",
    category: "Electric Mobility Platform",
    desc: "A heavy-duty, smart electric mobility solution engineered for urban transit, featuring digital telemetry displays, fast charging, and intelligent safety controls.",
    href: "/products/syvon-ev-scooty",
    image: "/images/products/Front_View.jpg",
    tags: ["Range: 100km", "Charge: 3h", "Safety Lock"]
  },
  {
    title: "Faraday Shielding Products",
    category: "Hardware & Device Security",
    desc: "Military-grade signal-blocking pouches and boxes designed to insulate critical wireless devices from RF tracking, hacking, and eavesdropping.",
    href: "/products/faraday-privacy-products",
    image: "/images/products/faraday1.jpg",
    tags: ["EMP Isolation", "GPS Blocking", "RF Shielding"]
  }
];

const stats = [
  { value: 120, suffix: "+", label: "Custom Systems Deployed" },
  { value: 8, suffix: "+", label: "Years of Applied R&D" },
  { value: 99, suffix: "%", label: "Engineering SLA Commitment" },
];

const processSteps = [
  {
    num: "01",
    title: "Discovery & Blueprinting",
    desc: "We align closely with your business objective, mapping out database logic, load profiles, and system blueprints before writing a single line of code."
  },
  {
    num: "02",
    title: "Bespoke System Design",
    desc: "Our creative design team builds intuitive, high-fidelity interactive design prototypes in Figma, keeping spacing, usability, and brand values top-of-mind."
  },
  {
    num: "03",
    title: "Clean Production Engineering",
    desc: "Our senior developers write clean, maintainable, TypeScript-driven platforms utilizing highly scalable systems and cloud infrastructure."
  },
  {
    num: "04",
    title: "Automated QA & Delivery",
    desc: "We perform rigorous automated unit and regression testing, load testing, and edge case checking to deliver zero-defect software."
  }
];

/* =====================================
   MAIN COMPONENT
 ===================================== */
export default function HeroSection() {
  return (
    <div className={styles.wrapper}>
      {/* Background Layers */}
      <div className={styles.background} aria-hidden="true">
        <div className={styles.gridLayer} />
        
        {/* Subtle blur aura blobs */}
        <motion.div
          animate={{
            x: [0, 30, -15, 0],
            y: [0, -20, 10, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`${styles.blob} ${styles.blobPrimary}`}
        />
        <motion.div
          animate={{
            x: [0, -20, 30, 0],
            y: [0, 30, -20, 0],
            scale: [1, 0.95, 1.05, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`${styles.blob} ${styles.blobAccent}`}
        />
        <div className={styles.overlay} />
      </div>

      {/* 1. HERO BANNER */}
      <section className={styles.heroSection}>
        <Container>
          <div className={styles.heroGrid}>
            {/* LEFT COLUMN - TEXT CONTENT */}
            <div className={styles.heroContent}>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className={styles.heroBadge}
              >
                <span>Research • Design • Engineering</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 25, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={styles.heroTitle}
              >
                Engineering the next generation of software, hardware, and intelligent systems.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                className={styles.heroSubtitle}
              >
                We research, design, and build custom hardware, embedded IoT platforms, 
                smart EV mobility, applied AI solutions, and enterprise software architectures for global companies.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                className={styles.heroActions}
              >
                <Link href="/products" className={styles.primaryBtn}>
                  Explore Our Innovations
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
                <Link href="/contact" className={styles.secondaryBtn}>
                  Let&apos;s Build the Future
                </Link>
              </motion.div>
            </div>

            {/* RIGHT COLUMN - INTERACTIVE NETWORK NODE VISUALS */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className={styles.heroVisual}
            >
              <InteractiveNodeNetwork />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* 2. STATS SECTION */}
      <section className={styles.statsSection}>
        <Container>
          <div className={styles.statsGrid}>
            {stats.map((stat, i) => (
              <div key={i} className={styles.statCard}>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <p className={styles.statLabel}>{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. FOCUS CAPABILITIES BENTO */}
      <section className={styles.section}>
        <Container>
          <div className={styles.sectionHeader}>
            <h2>Core Competencies</h2>
            <p>Our multidisciplinary engineering team constructs high-performance systems configured to survive enterprise workloads.</p>
          </div>

          <div className={styles.bentoGrid}>
            {capabilities.map((item, i) => (
              <div key={i} className={styles.bentoItem}>
                <SpotlightCard className={styles.bentoCard}>
                  <div className={styles.bentoContent}>
                    <div className={styles.iconBox}>{item.icon}</div>
                    <div>
                      <span className={styles.bentoTag}>{item.tag}</span>
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                </SpotlightCard>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. FEATURED PRODUCTS */}
      <section className={styles.section}>
        <Container>
          <div className={styles.sectionHeader}>
            <h2>Flagship Products</h2>
            <p>Applied R&D in mechanical engineering, electronics, and custom software systems transformed into market-ready products.</p>
          </div>

          <div className={styles.productsGrid}>
            {featuredProducts.map((prod, i) => (
              <div key={i} className={styles.productWrap}>
                <SpotlightCard className={styles.productCard}>
                  <div className={styles.productImgWrap}>
                    <img src={prod.image} alt={prod.title} loading="lazy" />
                    <div className={styles.imgOverlay} />
                  </div>
                  <div className={styles.productContent}>
                    <span className={styles.prodCat}>{prod.category}</span>
                    <h3>{prod.title}</h3>
                    <p>{prod.desc}</p>
                    <div className={styles.prodTags}>
                      {prod.tags.map((t, idx) => (
                        <span key={idx} className={styles.tag}>{t}</span>
                      ))}
                    </div>
                    <Link href={prod.href} className={styles.prodLink}>
                      View Case Study & Specifications
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
                </SpotlightCard>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. PROCESS METHODOLOGY */}
      <section className={styles.section}>
        <Container>
          <div className={styles.sectionHeader}>
            <h2>How We Build</h2>
            <p>Our software engineering workflow is structured to minimize latency, optimize budget resources, and maximize platform durability.</p>
          </div>

          <div className={styles.processGrid}>
            {processSteps.map((step, i) => (
              <div key={i} className={styles.processItem}>
                <div className={styles.processIndex}>
                  <span>{step.num}</span>
                  <div className={styles.processConnector} />
                </div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. FINAL CTA BANNER */}
      <section className={styles.ctaSection}>
        <Container>
          <div className={styles.ctaContainer}>
            <div className={styles.ctaInner}>
              <h2>Have a complex engineering challenge?</h2>
              <p>
                Whether you need to roll out a secure SaaS platform, deploy custom AI models, 
                or build autonomous mobile telemetries, our team of senior systems engineers is ready to help.
              </p>
              <div className={styles.ctaActions}>
                <Link href="/contact" className={styles.primaryBtn}>
                  Start Your Project
                </Link>
                <Link href="/services" className={styles.secondaryBtn}>
                  View Our Capabilities
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
