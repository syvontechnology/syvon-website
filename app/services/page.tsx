"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useMotionValue, useSpring, useInView } from "framer-motion";
import Container from "@/components/layout/Container";
import styles from "./Services.module.scss";

/* ==========================================================================
   ANIMATED COUNTER COMPONENT
   ========================================================================== */
interface CounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

function AnimatedCounter({ value, suffix = "", duration = 2 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = value;
    if (start === end) return;

    const totalMs = duration * 1000;
    const incrementTime = Math.max(Math.floor(totalMs / end), 16); // cap at ~60fps

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
    <span ref={ref} className={styles.counterNumber}>
      {count}
      {suffix}
    </span>
  );
}

/* ==========================================================================
   INTERACTIVE TILT CARD
   ========================================================================== */
interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

function TiltCard({ children, className = "", glowColor = "rgba(99, 102, 241, 0.12)" }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 25 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    setPosition({ x: mouseX, y: mouseY });

    const normalizedX = (mouseX / width) - 0.5;
    const normalizedY = (mouseY / height) - 0.5;

    x.set(normalizedX);
    y.set(normalizedY);
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => {
    setOpacity(0);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={className}
    >
      <div
        className={styles.spotlight}
        style={{
          opacity,
          background: `radial-gradient(300px circle at ${position.x}px ${position.y}px, ${glowColor}, transparent 80%)`,
        }}
      />
      <div
        className={styles.borderSpotlight}
        style={{
          opacity,
          background: `radial-gradient(180px circle at ${position.x}px ${position.y}px, rgba(255, 255, 255, 0.22), transparent 80%)`,
        }}
      />
      <div style={{ transform: "translateZ(10px)", transformStyle: "preserve-3d", height: "100%" }}>
        {children}
      </div>
    </motion.div>
  );
}

/* ==========================================================================
   SERVICES DATA
   ========================================================================== */
const services = [
  {
    title: "Custom Business Websites",
    description: "Build modern, responsive, SEO-friendly websites that establish a strong online presence and convert visitors into customers.",
    features: ["Corporate Websites", "Landing Pages", "Portfolio Websites", "Business Websites", "CMS Integration", "SEO Optimized", "Lightning Fast Performance"],
    glow: "rgba(99, 102, 241, 0.15)", // Indigo
    gridClass: styles.bentoCol4,
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-.778.099-1.533.284-2.253" />
      </svg>
    )
  },
  {
    title: "Web Applications",
    description: "Develop powerful web applications tailored to business workflows with secure authentication, dashboards, and cloud infrastructure.",
    features: ["Admin Panels", "Dashboards", "CRM", "ERP", "Portals", "AI Integrations", "API Development"],
    glow: "rgba(139, 92, 246, 0.15)", // Violet
    gridClass: styles.bentoCol2,
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
      </svg>
    )
  },
  {
    title: "Mobile Applications",
    description: "Create premium Android and iOS applications with intuitive user experiences and high performance.",
    features: ["Cross Platform", "Native Feel", "Push Notifications", "Offline Support", "Payments", "Authentication", "App Store Deployment"],
    glow: "rgba(16, 185, 129, 0.15)", // Emerald
    gridClass: styles.bentoCol2,
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    )
  },
  {
    title: "SaaS Product Development",
    description: "End-to-end SaaS development from idea validation to deployment and scaling.",
    features: ["Multi-Tenant Architecture", "Subscription Billing", "Authentication", "Admin Dashboard", "Analytics", "Team Management", "Cloud Deployment"],
    glow: "rgba(239, 68, 68, 0.15)", // Red / Rose glow
    gridClass: styles.bentoCol4,
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
      </svg>
    )
  },
  {
    title: "AI Solutions",
    description: "Leverage modern AI technologies to automate workflows, improve customer experiences, and unlock business intelligence.",
    features: ["AI Chatbots", "Custom AI Assistants", "RAG Systems", "AI Automation", "Document Intelligence", "Multi-Agent Systems", "LLM Integration"],
    glow: "rgba(59, 130, 246, 0.15)", // Blue
    gridClass: styles.bentoCol3,
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21m0 0l-.813-5.096L9 21zm0 0h4.906M12 3v13.5M3 12h18M6.375 6.375L17.625 17.625M6.375 17.625L17.625 6.375" />
      </svg>
    )
  },
  {
    title: "UI/UX Design",
    description: "Design intuitive, visually stunning interfaces that delight users and increase engagement.",
    features: ["Wireframing", "Prototyping", "Design Systems", "Responsive Design", "User Research", "Interactive Prototypes"],
    glow: "rgba(236, 72, 153, 0.15)", // Pink
    gridClass: styles.bentoCol3,
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-1.305 1.305l-1.11 2.22a1 1 0 0 0 1.25 1.25l2.22-1.11a3 3 0 0 0 1.305-1.305l8.114-8.114a3.182 3.182 0 0 0-4.5-4.5L9.53 16.122Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12.5 9.5l3 3" />
      </svg>
    )
  }
];

/* ==========================================================================
   WHY CHOOSE US DATA
   ========================================================================== */
const whyChooseUsPillars = [
  { title: "Modern Technology Stack", desc: "We utilize modern, high-performance tech to keep your product lightning-fast, highly scalable, and secure." },
  { title: "Scalable Architecture", desc: "Designed for future expansion, our systems handle high loads and data volume smoothly." },
  { title: "Clean Code", desc: "Maintainable, fully documented code written according to industry best practices." },
  { title: "Fast Delivery", desc: "Agile methodologies coupled with pre-built component systems mean rapid launch times." },
  { title: "Transparent Communication", desc: "Direct communication channels, regular updates, and collaborative workspaces." },
  { title: "Long-Term Support", desc: "We stay with you post-launch to debug, add features, optimize, and maintain systems." },
  { title: "Security First", desc: "Encryption at rest/transit, input sanitization, and security reviews built-in." },
  { title: "Performance Optimized", desc: "Optimized bundle sizes, quick loading metrics, and fast server runtimes." },
  { title: "SEO Friendly", desc: "Semantic HTML structured correctly to organically rank high on search engines." },
  { title: "Cloud Ready", desc: "Configured for simple AWS, GCP, Vercel, or Docker cloud deployments." }
];

/* ==========================================================================
   TIMELINE STEPS
   ========================================================================== */
const processTimelineSteps = [
  { step: "01", title: "Discovery & Consultation", desc: "We sit down to understand your business objectives, project requirements, and target audience." },
  { step: "02", title: "Research & Planning", desc: "Conduct market research, map application requirements, and define technical architectures." },
  { step: "03", title: "UI/UX Design", desc: "We design wireframes and high-fidelity interactive prototypes focused on delighting users." },
  { step: "04", title: "Development", desc: "Our experienced engineering team converts designs into secure, robust, and clean code." },
  { step: "05", title: "Testing & QA", desc: "Rigorous automated and manual testing to eliminate bugs and verify responsiveness." },
  { step: "06", title: "Deployment", desc: "Smooth launch onto cloud environments with monitoring and CI/CD pipelines set up." },
  { step: "07", title: "Support & Maintenance", desc: "Ongoing checks, security patches, features deployment, and system maintenance support." }
];

/* ==========================================================================
   TECHNOLOGY CATEGORIES
   ========================================================================== */
const technologies = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Python", "FastAPI"]
  },
  {
    category: "Mobile",
    items: ["Flutter", "React Native"]
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MongoDB", "Firebase"]
  },
  {
    category: "Cloud",
    items: ["AWS", "Docker", "Kubernetes", "Vercel"]
  },
  {
    category: "AI & Data Science",
    items: ["OpenAI", "LangChain", "MCP", "Vector Databases"]
  }
];

/* ==========================================================================
   INDUSTRIES DATA
   ========================================================================== */
const industries = [
  {
    name: "Healthcare",
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    )
  },
  {
    name: "Finance",
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
      </svg>
    )
  },
  {
    name: "Education",
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
      </svg>
    )
  },
  {
    name: "Manufacturing",
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    )
  },
  {
    name: "Retail",
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
    )
  },
  {
    name: "Logistics",
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    )
  },
  {
    name: "Real Estate",
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    )
  },
  {
    name: "Hospitality",
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    )
  },
  {
    name: "Startups",
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.25-2.5 3.5-2.5 3.5s2.25-1 3.5-2.5" />
        <path d="M12 2C6.5 2 2 6.5 2 12c0 2.1.65 4.05 1.75 5.66L17.66 3.75C16.05 2.65 14.1 2 12 2z" />
        <path d="M22 2s-3.5 1-4.5 2.5l7 7C23 10.5 24 7 24 7s-1-4.5-2-5z" />
        <path d="M19.5 9.5L14.5 4.5" />
      </svg>
    )
  },
  {
    name: "Enterprise",
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="2" ry="2" />
        <line x1="9" y1="22" x2="9" y2="16" />
        <line x1="15" y1="22" x2="15" y2="16" />
        <line x1="9" y1="16" x2="15" y2="16" />
        <path d="M8 6h2v2H8zm6 0h2v2h-2zm-6 4h2v2H8zm6 0h2v2h-2z" />
      </svg>
    )
  }
];

/* ==========================================================================
   FAQ DATA
   ========================================================================== */
const faqs = [
  {
    question: "How long does a project take?",
    answer: "Project timelines vary depending on complexity and scope. Typically, a custom landing page or website takes 3 to 5 weeks, while full-scale web applications, custom SaaS platforms, or deep AI solutions can take anywhere from 8 to 16 weeks. We map out precise milestones and delivery dates during the planning phase."
  },
  {
    question: "What technologies do you use?",
    answer: "We leverage leading-edge stacks optimized for performance. In the frontend, we use React, Next.js, and TypeScript. For backends, we build using Node.js, Express, Python, and FastAPI. Databases typically consist of PostgreSQL or MongoDB, and we deploy to cloud environments using AWS, Docker, and Kubernetes. We also customize AI platforms using OpenAI APIs, LangChain, and vector databases."
  },
  {
    question: "Do you provide post-launch support?",
    answer: "Absolutely. We offer flexible post-launch maintenance packages to ensure your application remains secure, up-to-date, and optimized. This includes continuous monitoring, performance tuning, security audits, database backups, and feature iterations as your business needs evolve."
  },
  {
    question: "Can you redesign an existing application?",
    answer: "Yes, we specialize in modernizing legacy systems. We can conduct UI/UX audits, redesign interfaces for a more modern premium feel, refactor codebases for speed and security, and migrate data to highly scalable modern infrastructures without disrupting your ongoing business operations."
  },
  {
    question: "Can you integrate AI into my product?",
    answer: "Yes. We design and build secure AI solutions—ranging from simple OpenAI API integrations, LLM-based custom workflows, and Retrieval-Augmented Generation (RAG) knowledge systems, to complex multi-agent setups. We focus on enhancing user experience and automating manual data operations."
  },
  {
    question: "Do you build scalable SaaS platforms?",
    answer: "Yes, we build end-to-end SaaS platforms featuring multi-tenant databases, robust security policies, integration with Stripe for subscription billing, administrative dashboards, granular role permissions, and full cloud automation pipelines, allowing your product to scale seamlessly as users grow."
  }
];

/* ==========================================================================
   MAIN COMPONENT
   ========================================================================== */
export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Timeline Progress Track
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: timelineProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });

  const progressBarScale = useSpring(timelineProgress, { stiffness: 100, damping: 20 });

  // Map progress to active nodes
  const [activeNode, setActiveNode] = useState(0);

  useEffect(() => {
    return timelineProgress.onChange((latest) => {
      const stepFraction = 1 / (processTimelineSteps.length - 1);
      const active = Math.min(
        Math.floor(latest / stepFraction),
        processTimelineSteps.length - 1
      );
      setActiveNode(Math.max(0, active));
    });
  }, [timelineProgress]);

  return (
    <div className={styles.servicesPage}>
      {/* 1. HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroBackground} aria-hidden="true">
          <div className={styles.gridLayer} />
          
          <motion.div
            animate={{
              x: [0, 50, -30, 0],
              y: [0, -40, 30, 0],
              scale: [1, 1.15, 0.95, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className={`${styles.blob} ${styles.blob1}`}
          />

          <motion.div
            animate={{
              x: [0, -40, 50, 0],
              y: [0, 30, -50, 0],
              scale: [1, 0.9, 1.1, 1],
            }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className={`${styles.blob} ${styles.blob2}`}
          />

          <motion.div
            animate={{
              x: [0, 30, -40, 0],
              y: [0, -25, 45, 0],
              scale: [1, 1.05, 0.85, 1],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className={`${styles.blob} ${styles.blob3}`}
          />
        </div>

        <Container>
          <div className={styles.heroContent}>
            <motion.h1
              initial={{ opacity: 0, y: 35, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              We Build Digital Products
              <span className={styles.gradientText}>That Grow Businesses</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            >
              From beautiful websites to enterprise SaaS platforms and mobile applications, we design and build digital experiences that are fast, scalable, secure, and engineered for long-term growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
              className={styles.actions}
            >
              <Link href="/contact" className={styles.primaryBtn}>
                <span>Let&apos;s Build Together</span>
                <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>

              <Link href="/products" className={styles.secondaryBtn}>
                View Our Work
              </Link>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* 2. SERVICES Grid */}
      <section className={styles.bentoSection}>
        <Container>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Core Capabilities</span>
            <h2>Premium Engineering Services</h2>
            <p>We blend high-end design, advanced software engineering, and modern AI architectures to create outstanding digital solutions.</p>
          </div>

          <div className={styles.bentoGrid}>
            {services.map((item, index) => (
              <motion.div
                key={item.title}
                className={item.gridClass}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <TiltCard className={styles.bentoCard} glowColor={item.glow}>
                  <div className={styles.cardTop}>
                    <div className={styles.iconWrapper}>{item.icon}</div>
                    <h3>
                      {item.title}
                      <svg
                        className={styles.arrowIcon}
                        width="18"
                        height="18"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.33331 8H12.6666M12.6666 8L8.66665 4M12.6666 8L8.66665 12"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </h3>
                    <p>{item.description}</p>
                  </div>
                  <div className={styles.tagContainer}>
                    {item.features.map((feature) => (
                      <span key={feature} className={styles.featureTag}>
                        {feature}
                      </span>
                    ))}
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. WHY CHOOSE US Section */}
      <section className={styles.whyChooseUsSection}>
        <Container>
          <div className={styles.whyGrid}>
            {/* Left Col: Badges / Cards */}
            <div>
              <div className={`${styles.sectionHeader} ${styles.leftAlign}`}>
                <span className={styles.sectionBadge}>Why Partner With Us</span>
                <h2 style={{ textAlign: "left" }}>Engineered for Real-World Performance</h2>
                <p style={{ textAlign: "left", marginBottom: "32px" }}>
                  We stand out by maintaining high standards in design simplicity, code hygiene, system architecture, and customer transparency.
                </p>
              </div>

              <div className={styles.whyCardsGrid}>
                {whyChooseUsPillars.slice(0, 6).map((pillar, i) => (
                  <motion.div
                    key={pillar.title}
                    className={styles.whyMiniCard}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                  >
                    <h4>
                      <svg
                        className={styles.whyCheckIcon}
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {pillar.title}
                    </h4>
                    <p>{pillar.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Col: Counters */}
            <div className={styles.countersWrapper}>
              <div className={styles.counterItem}>
                <AnimatedCounter value={150} suffix="+" />
                <div className={styles.counterLabel}>Projects Delivered Successfully</div>
              </div>

              <div className={styles.counterItem}>
                <AnimatedCounter value={80} suffix="+" />
                <div className={styles.counterLabel}>Happy Global Clients</div>
              </div>

              <div className={styles.counterItem}>
                <AnimatedCounter value={12} suffix="+" />
                <div className={styles.counterLabel}>Industries Served</div>
              </div>

              <div className={styles.counterItem}>
                <AnimatedCounter value={10} suffix="+" />
                <div className={styles.counterLabel}>Years of Combined Experience</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. DEVELOPMENT PROCESS Section */}
      <section ref={timelineRef} className={styles.processSection}>
        <Container>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Execution Workflow</span>
            <h2>Our Development Process</h2>
            <p>From validation to final launch and ongoing cloud maintenance, we follow a rigorous delivery framework.</p>
          </div>

          <div className={styles.timelineWrapper}>
            <motion.div
              style={{
                width: progressBarScale,
              }}
              className={styles.timelineProgressBar}
            />

            <div className={styles.timelineGrid}>
              {processTimelineSteps.map((item, index) => {
                const isActive = index <= activeNode;
                return (
                  <motion.div
                    key={item.title}
                    className={`${styles.timelineNode} ${isActive ? styles.activeNode : ""}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <div className={styles.nodeDot}>
                      <span />
                    </div>
                    <div className={styles.nodeContent}>
                      <span className={styles.stepNum}>{item.step}</span>
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* 5. TECHNOLOGIES Section */}
      <section className={styles.techSection}>
        <Container>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Our Ecosystem</span>
            <h2>Future-Proof Technology Stack</h2>
            <p>We work with best-in-class, robust, and modern technologies to create scalable products.</p>
          </div>

          <div className={styles.techGrid}>
            {technologies.map((cat, index) => (
              <motion.div
                key={cat.category}
                className={styles.techCategory}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <h3>{cat.category}</h3>
                <div className={styles.techList}>
                  {cat.items.map((tech) => (
                    <div key={tech} className={styles.techCard}>
                      <svg width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                        <circle cx="8" cy="8" r="4" />
                      </svg>
                      {tech}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. INDUSTRIES WE SERVE */}
      <section className={styles.industriesSection}>
        <Container>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Domain Expertise</span>
            <h2>Industries We Serve</h2>
            <p>We craft tailored products that meet the specific design, security, and operational standards of diverse markets.</p>
          </div>

          <div className={styles.industriesGrid}>
            {industries.map((ind, i) => (
              <motion.div
                key={ind.name}
                className={styles.industryCard}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
              >
                <div className={styles.industryIcon}>{ind.icon}</div>
                <span>{ind.name}</span>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* 7. FAQ SECTION */}
      <section className={styles.faqSection}>
        <Container>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Got Questions?</span>
            <h2>Frequently Asked Questions</h2>
            <p>Find answers to common questions about our working processes, pricing, and capabilities.</p>
          </div>

          <div className={styles.faqContainer}>
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={faq.question}
                  className={`${styles.faqItem} ${isOpen ? styles.faqOpen : ""}`}
                >
                  <button
                    className={styles.faqQuestion}
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <svg
                      className={`${styles.faqIcon} ${isOpen ? styles.faqIconRotated : ""}`}
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className={styles.faqAnswer}
                  >
                    <div className={styles.faqAnswerInner}>
                      <p style={{ margin: 0 }}>{faq.answer}</p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 8. FINAL CALL TO ACTION */}
      <section className={styles.ctaSection}>
        <Container>
          <div className={styles.ctaContainer}>
            <div className={`${styles.ctaGlow} ${styles.ctaGlow1}`} aria-hidden="true" />
            <div className={`${styles.ctaGlow} ${styles.ctaGlow2}`} aria-hidden="true" />

            <div className={styles.ctaContent}>
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Let&apos;s Build Something Extraordinary
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Whether you&apos;re launching a startup, modernizing your business, or building the next big SaaS platform, we&apos;re ready to turn your vision into reality.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={styles.ctaActions}
              >
                <Link href="/contact" className={styles.primaryBtn}>
                  Start Your Project
                </Link>
                <Link href="/contact" className={styles.secondaryBtn}>
                  Book a Free Consultation
                </Link>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
