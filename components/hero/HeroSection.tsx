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
    { id: "solar", label: "Hybrid Solar", x: 120, y: 80, color: "#10B981" },
    { id: "poles", label: "Smart Poles", x: 280, y: 110, color: "#F59E0B" },
    { id: "ev", label: "EV Mobility", x: 80, y: 220, color: "#059669" },
    { id: "highway", label: "Highway Solar", x: 260, y: 240, color: "#3B82F6" },
    { id: "uav", label: "UAV & Drones", x: 180, y: 320, color: "#6366F1" },
    { id: "ai", label: "Energy AI & IoT", x: 340, y: 340, color: "#EC4899" },
  ];

  const connections = [
    { from: "solar", to: "poles" },
    { from: "solar", to: "ev" },
    { from: "poles", to: "highway" },
    { from: "ev", to: "uav" },
    { from: "highway", to: "uav" },
    { from: "uav", to: "ai" },
    { from: "ai", to: "poles" },
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
    title: "Rooftop Hybrid Solar for Industry",
    desc: "Turnkey commercial & industrial rooftop hybrid solar plants engineered in partnership with Waaree Energies PV modules and Deye hybrid inverters with LiFePO4 storage.",
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32 1.41-1.41" />
      </svg>
    ),
    tag: "Renewable Energy"
  },
  {
    title: "Custom Smart Streetlight Poles",
    desc: "Architectural solar smart poles featuring integrated outdoor LED displays, dedicated sidewalk pedestrian lighting, and autonomous solar highway lights.",
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 18h6m-5 4h4M12 2a7 7 0 0 0-4 12.74V16a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-1.26A7 7 0 0 0 12 2Z" />
      </svg>
    ),
    tag: "Solar Lighting"
  },
  {
    title: "Smart Electric Mobility",
    desc: "Designing clean urban electric mobility platforms, battery telemetry layers, and intelligent safety systems led by the Syvon EV Scooty.",
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    tag: "EV Mobility"
  },
  {
    title: "Drone Tech & UAV Systems",
    desc: "End-to-end UAV mechanical design, electronics flight control, sensor AI payload integration, pilot training, and professional flight teams.",
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    tag: "UAV & Aerospace"
  },
  {
    title: "Reverse Engineering & 3D Scanning",
    desc: "Transforming physical components into high-precision digital CAD models, metrology inspection, and additive manufacturing prototypes.",
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    ),
    tag: "R&D Metrology"
  },
  {
    title: "Applied AI & Energy IoT Software",
    desc: "Deploying real-time solar SCADA dashboards, smart pole CMS, machine learning models, and scalable cloud platforms.",
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21m0 0l-.813-5.096L9 21zm0 0h4.906M12 3v13.5M3 12h18M6.375 6.375L17.625 17.625M6.375 17.625L17.625 6.375" />
      </svg>
    ),
    tag: "Intelligence"
  }
];

const featuredProducts = [
  {
    title: "Rooftop Hybrid Solar for Industry",
    category: "Waaree Energies × Deye Partnered EPC",
    desc: "Bankable industrial rooftop solar paired with three-phase hybrid inverters and LiFePO4 battery storage for uninterrupted power, peak shaving, and rapid ROI.",
    href: "/products/hybrid-solar-solutions",
    image: "/images/renewable/industrial-rooftop-solar.jpg",
    tags: ["Waaree PV", "Deye Hybrid", "LFP BESS"]
  },
  {
    title: "Custom Smart Streetlight Poles",
    category: "LED Display • Sidewalk • Solar Highway",
    desc: "Custom architectural smart poles featuring vertical outdoor LED displays and sidewalk pedestrian lights, plus autonomous high-lumen solar highway lighting.",
    href: "/products/smart-streetlight-poles",
    image: "/images/renewable/smart-streetlight-led-sidewalk.jpg",
    tags: ["LED Display", "Sidewalk Light", "Highway Solar"]
  },
  {
    title: "Autonomous Solar Highway Lights",
    category: "Off-Grid Expressway Lighting",
    desc: "High-efficiency monocrystalline solar highway poles with smart MPPT controllers and adaptive dusk-to-dawn dimming for expressways and industrial corridors.",
    href: "/products/smart-streetlight-poles",
    image: "/images/renewable/solar-highway-lights.jpg",
    tags: ["160+ lm/W", "MPPT Solar", "3-Day Backup"]
  },
  {
    title: "Syvon EV Scooty",
    category: "Electric Mobility Platform",
    desc: "A heavy-duty, smart electric mobility solution engineered for clean urban transit, featuring digital telemetry displays, fast charging, and intelligent safety controls.",
    href: "/products/syvon-ev-scooty",
    image: "/images/products/Front_View.jpg",
    tags: ["Range: 100km", "Charge: 3h", "Safety Lock"]
  },
  {
    title: "UAV & Drone Technologies",
    category: "Aerospace & Field Operations",
    desc: "End-to-end drone design, sensor payload integration, diagnostic repairs, certified pilot training, and professional field operator teams.",
    href: "/services#drone-technology",
    image: "/images/drone-services/drone-design.jpg",
    tags: ["Autonomous Flight", "Custom Payload", "Pilot Teams"]
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
  { value: 120, suffix: "+", label: "Clean Energy & Engineering Systems" },
  { value: 8, suffix: "+", label: "Years of Applied R&D" },
  { value: 99, suffix: "%", label: "System Uptime & SLA Commitment" },
];

const processSteps = [
  {
    num: "01",
    title: "Site & Load Audit",
    desc: "We analyze rooftop structures, industrial load curves, solar irradiance, or roadway lux profiles before engineering the exact system blueprint."
  },
  {
    num: "02",
    title: "CAD & System Design",
    desc: "Our engineers design high-efficiency PV layouts, custom smart pole CAD assemblies, and SCADA/IoT monitoring architectures."
  },
  {
    num: "03",
    title: "Tier-1 Integration",
    desc: "We integrate bankable hardware from Waaree Energies and Deye alongside precision fabrication, embedded telemetry, and clean software."
  },
  {
    num: "04",
    title: "Commissioning & Telemetry",
    desc: "Rigorous safety testing, DISCOM/grid synchronization, and 24/7 cloud energy monitoring ensure zero-defect long-term performance."
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
                <span>Renewable Energy • Smart Infrastructure • Engineering</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 25, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={styles.heroTitle}
              >
                Powering industry with hybrid solar, smart lighting, and clean-tech engineering.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                className={styles.heroSubtitle}
              >
                Syvon Technology delivers industrial rooftop hybrid solar plants in partnership with{" "}
                <strong>Waaree Energies</strong> &amp; <strong>Deye</strong>, custom smart streetlight poles
                with LED displays &amp; sidewalk/highway solar lighting, alongside EV mobility, UAV systems, and applied AI.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                className={styles.heroActions}
              >
                <Link href="/products/hybrid-solar-solutions" className={styles.primaryBtn}>
                  Explore Solar &amp; Smart Poles
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
                <Link href="/contact" className={styles.secondaryBtn}>
                  Request Solar Site Audit
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

      {/* 2B. STRATEGIC RENEWABLE PARTNERSHIPS */}
      <section className={styles.partnersSection}>
        <Container>
          <div className={styles.partnersBox}>
            <div className={styles.partnersLead}>
              <span>Bankable Tier-1 Ecosystem</span>
              <h3>Official Hardware Partnerships for Industrial Solar</h3>
              <p>
                Every industrial rooftop hybrid solar installation is engineered with globally proven Tier-1 PV modules and intelligent three-phase hybrid inverters.
              </p>
            </div>
            <div className={styles.partnerPills}>
              <div className={styles.partnerTile}>
                <span className={styles.partnerRole}>Solar PV Modules</span>
                <h4>Waaree Energies</h4>
                <p>High-efficiency N-Type TOPCon &amp; Mono PERC bifacial panels built for peak industrial yield.</p>
              </div>
              <div className={styles.partnerTile}>
                <span className={styles.partnerRole}>Hybrid Inverters &amp; Storage</span>
                <h4>Deye</h4>
                <p>Three-phase hybrid inverters with &lt;4ms backup switchover, DG sync, and LiFePO4 BESS support.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. FOCUS CAPABILITIES BENTO */}
      <section className={styles.section}>
        <Container>
          <div className={styles.sectionHeader}>
            <h2>Renewable &amp; Clean-Tech Competencies</h2>
            <p>Multidisciplinary renewable energy, smart lighting, electric mobility, UAV, and software engineering built for industrial reliability.</p>
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
            <h2>Flagship Renewable &amp; Engineering Solutions</h2>
            <p>Industrial hybrid solar plants, custom smart solar streetlight poles, electric mobility, and deep-tech hardware built for real-world deployment.</p>
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
            <h2>How We Deliver</h2>
            <p>From industrial solar load audits and smart pole CAD engineering to grid commissioning and 24/7 IoT monitoring.</p>
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
              <h2>Ready to transition to clean, resilient energy?</h2>
              <p>
                Whether you are planning an industrial rooftop hybrid solar plant with Waaree Energies &amp; Deye,
                deploying custom smart streetlight poles, or building clean-tech hardware and AI systems, our engineers are ready.
              </p>
              <div className={styles.ctaActions}>
                <Link href="/contact" className={styles.primaryBtn}>
                  Start Your Renewable Project
                </Link>
                <Link href="/services" className={styles.secondaryBtn}>
                  Explore All Services
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
