"use client";

import React, { useEffect, useState, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  useInView,
  AnimatePresence,
} from "framer-motion";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import AntigravityCanvas from "../components/AntigravityCanvas";
import FullResume from "../components/FullResume";
import AnimatedNumber from "../components/AnimatedNumber";
import ArcadeLeaderboard from "../components/ArcadeLeaderboard";

const Home = () => {
  const [isGameActive, setIsGameActive] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [finalScore, setFinalScore] = useState(0);

  useEffect(() => {
    const handleStart = () => setIsGameActive(true);
    window.addEventListener('start-space-confetti', handleStart);
    return () => window.removeEventListener('start-space-confetti', handleStart);
  }, []);

  // After hydration the hero's height/position may not be measured yet, which
  // can leave the scroll-linked fade (useScroll on heroRef) stuck at progress 0
  // — the evidence sub-headline never appears. Nudge framer-motion to re-measure
  // once the painted layout is stable.
  useEffect(() => {
    const id = requestAnimationFrame(() => window.dispatchEvent(new Event('resize')));
    return () => cancelAnimationFrame(id);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const blurRevealText = {
    initial: { opacity: 0, filter: "blur(10px)", y: 10 },
    animate: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const blurRevealSubtext = {
    initial: { opacity: 0, filter: "blur(10px)", y: 10 },
    animate: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  // Helper function to split text into words for stagger animation
  const splitText = (text) => {
    return text.split(" ").map((word, index) => (
      <motion.span
        key={index}
        variants={blurRevealText}
        className="inline-block mr-[0.25em]"
      >
        {word}
      </motion.span>
    ));
  };

  const splitSubtext = (text) => {
    return text.split(" ").map((word, index) => (
      <motion.span
        key={index}
        variants={blurRevealSubtext}
        className="inline-block mr-[0.25em]"
      >
        {word}
      </motion.span>
    ));
  };

  const capabilities = [
    {
      title: "Organizational Leadership & Ops",
      description:
        "Advancing organizational maturity by establishing design operations, mentoring managers, and leading cross-functional teams.",
    },
    {
      title: "Product Strategy & Vision",
      description:
        "Prioritizing business outcomes through machine learning, behavioral analysis, and deep funnel optimization.",
    },
    {
      title: "AI-Enabled Experiences",
      description:
        "Pioneering industry-first AI features, from natural language search to systemic workflow automation.",
    },
    {
      title: "UX/UI Systems",
      description:
        "Developing fully tokenized design systems that bridge the gap between design and engineering to accelerate delivery.",
    },
  ];

  const projects = [
    {
      title: "Marriott Blended AI Search",
      role: "Product Design Director",
      description:
        "Led the ideation and design of an industry-first search experience using NLP, generative content, and predictive filtering.",
      metrics: [
        {
          highlight: "10%",
          text: " step conversion lift",
          color: "text-indigo-500",
        },
        { highlight: "350k+", text: " AI searches", color: "text-emerald-500" },
        {
          highlight: "54M",
          text: " media impressions",
          color: "text-pink-500",
        },
      ],
      slug: "/marriott-blended-ai-search-experience",
      image: "/images/ai-search/AI-Search-Mockup.png",
      layout: "side-by-side",
      color: "bg-transparent",
    },
    {
      title: "Marriott Booking Funnel",
      role: "Product Design Director",
      description:
        "Directed the end-to-end redesign of the booking experience, shifting to a mobile-first app-like interface.",
      metrics: [
        {
          highlight: "322%",
          text: " mobile conversion lift",
          color: "text-emerald-500",
        },
        {
          highlight: "80%",
          text: " more daily bookings",
          color: "text-indigo-500",
        },
        {
          highlight: "300%",
          text: " increase in saved homes",
          color: "text-pink-500",
        },
      ],
      slug: "/marriott-booking-funnel-redesign",
      image: "/images/booking-funnel/Booking-Funnel-Mockup.png",
      layout: "reverse-side-by-side",
      color: "bg-emerald-50 dark:bg-emerald-900/20",
    },
    {
      title: "Jesel Digital Transformation",
      role: "Creative Director",
      description:
        "Transformed a legacy manufacturer into a modern digital-first organization and established scalable content operations.",
      metrics: [
        {
          highlight: "230%",
          text: " increase in organic traffic",
          color: "text-emerald-500",
        },
        {
          highlight: "9x",
          text: " search visibility",
          color: "text-indigo-500",
        },
        {
          highlight: "41k+",
          text: " engaged audience",
          color: "text-amber-500",
        },
      ],
      slug: "/jesel-digital-business-transformation",
      image: "/images/jesel/Jesel-Email-Mockup.png",
      layout: "side-by-side",
      color: "bg-indigo-50 dark:bg-indigo-900/20",
    },
  ];

  const companies = [
    {
      name: "Marriott",
      src: "/images/logos/Marriott.svg",
      className: "h-12 md:h-14 w-36 md:w-52",
    },
    {
      name: "Jesel",
      src: "/images/logos/Jesel.svg",
      className: "h-12 md:h-14 w-28 md:w-40",
    },
    {
      name: "Amazon",
      src: "/images/logos/Amazon.svg",
      className: "h-12 md:h-14 w-28 md:w-40 translate-y-1 md:translate-y-2",
    },
    {
      name: "Chewy",
      src: "/images/logos/Chewy.svg",
      className: "h-10 md:h-12 w-28 md:w-36",
    },
    {
      name: "Target",
      src: "/images/logos/Target.svg",
      className: "h-[55px] md:h-[70px] w-[55px] md:w-[70px]",
    },
  ];

  // Scroll Animation Setup
  const heroRef = useRef(null);

  // useScroll({ target }) can silently fail to initialize in Next.js SSR hydration.
  // Instead, use raw window scrollY + measure the section height after mount.
  const { scrollY } = useScroll();
  const [heroSectionHeight, setHeroSectionHeight] = useState(3000);

  useEffect(() => {
    const measure = () => {
      if (heroRef.current) {
        setHeroSectionHeight(heroRef.current.offsetHeight);
      }
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  // scrollYProgress: 0 when page top (section starts), 1 when scrolled a full section height
  const scrollYProgress = useTransform(scrollY, [0, heroSectionHeight], [0, 1], { clamp: true });

  // Headline fades out 0→25% of scroll
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const headlineBlur = useTransform(scrollYProgress, [0, 0.25], ["blur(0px)", "blur(24px)"]);
  const arrowOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  // Subheadline fades in 25→40%, stays fully visible 40→100%
  // Section is h-[300vh] so pin releases at ~200vh (67%). Subheadline is fully in
  // at 40% (120vh) — leaving ~80vh of pinned read time before the section scrolls off.
  const subheadlineOpacity = useTransform(scrollYProgress, [0.25, 0.4, 1], [0, 1, 1]);
  const subheadlineBlur = useTransform(scrollYProgress, [0.25, 0.4, 1], ["blur(24px)", "blur(0px)", "blur(0px)"]);

 

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 antialiased overflow-x-clip">

      {/* Global Game Isolation Layer & Physics Canvas */}
      <motion.div 
         className="fixed inset-0 bg-[#0a0f1c] z-[90] pointer-events-none"
         initial={{ opacity: 0 }}
         animate={{ opacity: isGameActive || isGameOver ? 1 : 0 }}
         transition={{ duration: 0.8 }}
      />
      <AntigravityCanvas 
         isGameActive={isGameActive} 
         onGameEnd={(score) => {
             setIsGameActive(false);
             setFinalScore(score);
             setIsGameOver(true);
         }} 
      />

      <AnimatePresence>
        {isGameOver && (
            <ArcadeLeaderboard 
                finalScore={finalScore} 
                onClose={() => setIsGameOver(false)} 
                onPlayAgain={() => {
                    setIsGameOver(false);
                    // Add a micro-delay to ensure the CRT board fully begins unmounting before re-initializing the space physics block
                    setTimeout(() => setIsGameActive(true), 50);
                }}
            />
        )}
      </AnimatePresence>

      <motion.div
         animate={{ opacity: isGameActive || isGameOver ? 0 : 1 }}
         transition={{ duration: 0.8 }}
         className={isGameActive || isGameOver ? "pointer-events-none" : ""}
      >
        {/* Hero — h-[300vh] gives ~200vh of pin then 100vh of natural scroll-off */}
        <section ref={heroRef} className="h-[300vh] relative z-10 -mt-24">
          <div className="sticky top-0 h-screen flex flex-col justify-center px-6 z-20">
            <div className="max-w-5xl mx-auto w-full relative flex items-center justify-center h-full">

              {/* Phase 1: Headline */}
              <motion.div
                style={{ opacity: headlineOpacity }}
                initial={{ opacity: 1 }}
                className="absolute inset-0 flex flex-col justify-center pointer-events-none"
              >
                <motion.h1
                  initial="initial"
                  animate="animate"
                  variants={staggerContainer}
                  style={{ filter: headlineBlur }}
                  className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground leading-tight md:leading-[1.1] text-center"
                >
                  {splitText("I build AI enabled experiences that drive conversion,")}
                  <span className="text-muted-foreground">
                    {splitText("and teach others to do the same.")}
                  </span>
                </motion.h1>
              </motion.div>

              {/* Scroll arrow */}
              <motion.div
                className="absolute bottom-12 left-1/2 -translate-x-1/2 pointer-events-none text-[#a855f7]"
                style={{ opacity: arrowOpacity }}
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowDown size={32} strokeWidth={2} />
              </motion.div>

              {/* Phase 2: Evidence subheadline — same sticky frame, cross-fades in center, scrolls off with section */}
              <motion.div
                style={{ opacity: subheadlineOpacity }}
                className="absolute inset-0 flex flex-col justify-center pointer-events-none"
              >
                <p style={{ filter: subheadlineBlur }} className="text-3xl md:text-4xl lg:text-5xl text-foreground font-medium tracking-tight leading-tight max-w-4xl text-center mx-auto">
                  At{" "}
                  <span className="text-primary">Marriott’s Homes & Villas</span>{" "}
                  I led a funnel redesign that increased bookings by{" "}
                  <span className="text-emerald-500 font-bold">80%</span>,
                  launched an industry-first AI search experience, and contributed to
                  the platform’s{" "}
                  <span className="text-indigo-500 font-bold">10x</span> revenue
                  growth.
                </p>
              </motion.div>

            </div>
          </div>
        </section>

      {/* Where I've been (Logo Ribbon) */}
      <section className="py-24 px-6 bg-background relative z-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 md:mb-16">
            <motion.h2 className="text-2xl font-semibold mb-4 text-center text-foreground flex flex-col items-center group w-fit mx-auto relative pb-6" whileHover="hover">
              Where I've been
              {/* Responsive Interactive Squiggle */}
              <motion.svg
                className="absolute bottom-0 left-0 w-full text-[#bfa2f6] opacity-80"
                height="16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M5 8 Q 20 2, 35 8 T 65 8 T 95 8 T 125 8 T 155 8 T 185 8 T 215 8 T 245 8 T 275 8 T 305 8 T 335 8 T 365 8 T 395 8 T 425 8 T 455 8 T 485 8 T 515 8 T 545 8 T 575 8 T 605 8 T 635 8 T 665 8 T 695 8 T 725 8 T 755 8 T 785 8 T 815 8"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  variants={{
                    hover: {
                      d: [
                        "M5 8 Q 20 2, 35 8 T 65 8 T 95 8 T 125 8 T 155 8 T 185 8 T 215 8 T 245 8 T 275 8 T 305 8 T 335 8 T 365 8 T 395 8 T 425 8 T 455 8 T 485 8 T 515 8 T 545 8 T 575 8 T 605 8 T 635 8 T 665 8 T 695 8 T 725 8 T 755 8 T 785 8 T 815 8",
                        "M5 8 Q 20 14, 35 8 T 65 8 T 95 8 T 125 8 T 155 8 T 185 8 T 215 8 T 245 8 T 275 8 T 305 8 T 335 8 T 365 8 T 395 8 T 425 8 T 455 8 T 485 8 T 515 8 T 545 8 T 575 8 T 605 8 T 635 8 T 665 8 T 695 8 T 725 8 T 755 8 T 785 8 T 815 8",
                        "M5 8 Q 20 2, 35 8 T 65 8 T 95 8 T 125 8 T 155 8 T 185 8 T 215 8 T 245 8 T 275 8 T 305 8 T 335 8 T 365 8 T 395 8 T 425 8 T 455 8 T 485 8 T 515 8 T 545 8 T 575 8 T 605 8 T 635 8 T 665 8 T 695 8 T 725 8 T 755 8 T 785 8 T 815 8",
                      ],
                      transition: {
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    },
                  }}
                  transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
                />
              </motion.svg>
            </motion.h2>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
            {companies.map((company, index) => (
              <img
                key={index}
                src={company.src}
                alt={company.name}
                className={`${company.className} object-contain dark:invert brightness-0`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Selected Work (Transformations) Moved Up */}
      <section className="py-24 px-6 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:mb-16">
            <motion.h2 className="text-2xl font-semibold mb-4 text-center text-foreground flex flex-col items-center group w-fit mx-auto relative pb-6" whileHover="hover">
              Select Work
              {/* Responsive Interactive Squiggle */}
              <motion.svg
                className="absolute bottom-0 left-0 w-full text-[#bfa2f6] opacity-80"
                height="16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M5 8 Q 20 2, 35 8 T 65 8 T 95 8 T 125 8 T 155 8 T 185 8 T 215 8 T 245 8 T 275 8 T 305 8 T 335 8 T 365 8 T 395 8 T 425 8 T 455 8 T 485 8 T 515 8 T 545 8 T 575 8 T 605 8 T 635 8 T 665 8 T 695 8 T 725 8 T 755 8 T 785 8 T 815 8"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  variants={{
                    hover: {
                      d: [
                        "M5 8 Q 20 2, 35 8 T 65 8 T 95 8 T 125 8 T 155 8 T 185 8 T 215 8 T 245 8 T 275 8 T 305 8 T 335 8 T 365 8 T 395 8 T 425 8 T 455 8 T 485 8 T 515 8 T 545 8 T 575 8 T 605 8 T 635 8 T 665 8 T 695 8 T 725 8 T 755 8 T 785 8 T 815 8",
                        "M5 8 Q 20 14, 35 8 T 65 8 T 95 8 T 125 8 T 155 8 T 185 8 T 215 8 T 245 8 T 275 8 T 305 8 T 335 8 T 365 8 T 395 8 T 425 8 T 455 8 T 485 8 T 515 8 T 545 8 T 575 8 T 605 8 T 635 8 T 665 8 T 695 8 T 725 8 T 755 8 T 785 8 T 815 8",
                        "M5 8 Q 20 2, 35 8 T 65 8 T 95 8 T 125 8 T 155 8 T 185 8 T 215 8 T 245 8 T 275 8 T 305 8 T 335 8 T 365 8 T 395 8 T 425 8 T 455 8 T 485 8 T 515 8 T 545 8 T 575 8 T 605 8 T 635 8 T 665 8 T 695 8 T 725 8 T 755 8 T 785 8 T 815 8",
                      ],
                      transition: {
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    },
                  }}
                  transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
                />
              </motion.svg>
            </motion.h2>
          </div>

          {/* 
                    Standard static view for the side-by-side mockup. 
                */}
          <div className="space-y-32">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="group"
              >
                {project.layout === "side-by-side" ? (
                  <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-16 mb-16 lg:mb-32 cursor-expand">
                    <div className="w-full lg:w-4/12 flex justify-center perspective-[1200px] z-10">
                      <div className="relative w-full max-w-[240px] sm:max-w-xs lg:max-w-sm">
                        <div>
                          <img
                            src={project.image}
                            alt={project.title}
                            className={`w-full h-auto`}
                            style={{
                              filter:
                                "drop-shadow(0 40px 30px rgb(0 0 0 / 0.18))",
                              imageRendering: "high-quality",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-full lg:w-8/12 flex flex-col justify-center space-y-10">
                      <div>
                        <h3 className="text-3xl font-semibold mb-3">
                          {project.title}
                        </h3>
                        <p className="text-sm font-medium tracking-wide text-primary uppercase mb-6">
                          {project.role}
                        </p>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <div className="bg-transparent rounded-2xl flex flex-col justify-center">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                          {project.metrics.map((metric, i) => (
                            <div
                              key={i}
                              className="flex flex-col space-y-1"
                            >
                              <AnimatedNumber valueStr={metric.highlight} colorClass={metric.color} />
                              <span className="text-sm sm:text-xs md:text-sm text-muted-foreground font-semibold uppercase tracking-wider leading-snug">
                                {metric.text}
                              </span>
                            </div>
                          ))}
                        </div>
                        <div className="mt-12">
                          <Link
                            href={project.slug}
                            className="inline-flex items-center text-lg font-semibold text-black border-2 border-[#bfa2f6] px-8 py-3 rounded-full hover:bg-[#bfa2f6]/10 transition-all duration-300 group/link w-fit"
                          >
                            View case study
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : project.layout === "reverse-side-by-side" ? (
                  <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-16 mb-16 lg:mb-32 cursor-expand">
                    <div className="w-full lg:w-8/12 flex flex-col justify-center space-y-10 text-right">
                      <div>
                        <h3 className="text-3xl font-semibold mb-3">
                          {project.title}
                        </h3>
                        <p className="text-sm font-medium tracking-wide text-primary uppercase mb-6">
                          {project.role}
                        </p>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <div className="bg-transparent rounded-2xl flex flex-col justify-center items-end">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 justify-items-end text-right w-full">
                          {project.metrics.map((metric, i) => (
                            <div
                              key={i}
                              className="flex flex-col space-y-1 items-end"
                            >
                              <AnimatedNumber valueStr={metric.highlight} colorClass={metric.color} />
                              <span className="text-sm sm:text-xs md:text-sm text-muted-foreground font-semibold uppercase tracking-wider leading-snug">
                                {metric.text}
                              </span>
                            </div>
                          ))}
                        </div>
                        <div className="mt-12">
                          <Link
                            href={project.slug}
                            className="inline-flex items-center text-lg font-semibold text-black border-2 border-[#bfa2f6] px-8 py-3 rounded-full hover:bg-[#bfa2f6]/10 transition-all duration-300 group/link w-fit"
                          >
                            View case study
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="w-full lg:w-4/12 flex justify-center perspective-[1200px] z-10 w-full">
                      <div className="relative w-full max-w-[240px] sm:max-w-xs lg:max-w-sm">
                        <div>
                          <img
                            src={project.image}
                            alt={project.title}
                            className={`w-full h-auto`}
                            style={{
                              filter:
                                "drop-shadow(0 40px 30px rgb(0 0 0 / 0.18))",
                              imageRendering: "high-quality",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <div
                      className={`w-full aspect-[16/9] md:aspect-[21/9] ${project.color} rounded-3xl overflow-hidden mb-12 relative `}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className={`w-full h-full object-cover transition-transform duration-700 ease-[0.22,1,0.36,1] group-hover:scale-105`}
                      />
                    </div>
                    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16 lg:mb-32">
                      <div className="md:col-span-12 lg:col-span-5 flex flex-col justify-start">
                        <h3 className="text-3xl font-semibold mb-3">
                          {project.title}
                        </h3>
                        <p className="text-sm font-medium tracking-wide text-primary uppercase mb-6">
                          {project.role}
                        </p>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                      <div className="md:col-span-12 lg:col-span-6 lg:col-start-7 bg-transparent lg:px-8 py-2 rounded-2xl flex flex-col justify-center">
                        <div className="space-y-4">
                          {project.metrics.map((metric, i) => (
                            <div
                              key={i}
                              className="text-2xl text-muted-foreground font-medium leading-tight"
                            >
                              <span
                                className={`${metric.color} font-bold`}
                              >
                                {metric.highlight}
                              </span>
                              {metric.text}
                            </div>
                          ))}
                        </div>
                        <div className="mt-8 pt-8">
                          <Link
                            href={project.slug}
                            className="inline-flex items-center text-lg font-semibold hover:text-muted-foreground transition-colors group/link"
                          >
                            Read full case study
                            <span className="ml-2 transition-transform duration-300 group-hover/link:translate-x-1">
                              →
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-24 px-6 bg-transparent">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center mb-16 gap-4 pb-8">
            <motion.h2 className="text-2xl font-semibold mb-4 text-center text-foreground flex flex-col items-center group w-fit mx-auto relative pb-6" whileHover="hover">
              Core Capabilities
              {/* Responsive Squiggle */}
              <motion.svg
                className="absolute bottom-0 left-0 w-full text-[#bfa2f6] opacity-80"
                height="16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M5 8 Q 20 2, 35 8 T 65 8 T 95 8 T 125 8 T 155 8 T 185 8 T 215 8 T 245 8 T 275 8 T 305 8 T 335 8 T 365 8 T 395 8 T 425 8 T 455 8 T 485 8 T 515 8 T 545 8 T 575 8 T 605 8 T 635 8 T 665 8 T 695 8 T 725 8 T 755 8 T 785 8 T 815 8"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  variants={{
                    hover: {
                      d: [
                        "M5 8 Q 20 2, 35 8 T 65 8 T 95 8 T 125 8 T 155 8 T 185 8 T 215 8 T 245 8 T 275 8 T 305 8 T 335 8 T 365 8 T 395 8 T 425 8 T 455 8 T 485 8 T 515 8 T 545 8 T 575 8 T 605 8 T 635 8 T 665 8 T 695 8 T 725 8 T 755 8 T 785 8 T 815 8",
                        "M5 8 Q 20 14, 35 8 T 65 8 T 95 8 T 125 8 T 155 8 T 185 8 T 215 8 T 245 8 T 275 8 T 305 8 T 335 8 T 365 8 T 395 8 T 425 8 T 455 8 T 485 8 T 515 8 T 545 8 T 575 8 T 605 8 T 635 8 T 665 8 T 695 8 T 725 8 T 755 8 T 785 8 T 815 8",
                        "M5 8 Q 20 2, 35 8 T 65 8 T 95 8 T 125 8 T 155 8 T 185 8 T 215 8 T 245 8 T 275 8 T 305 8 T 335 8 T 365 8 T 395 8 T 425 8 T 455 8 T 485 8 T 515 8 T 545 8 T 575 8 T 605 8 T 635 8 T 665 8 T 695 8 T 725 8 T 755 8 T 785 8 T 815 8",
                      ],
                      transition: {
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    },
                  }}
                  transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
                />
              </motion.svg>
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {capabilities.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="space-y-4"
              >
                <h3 className="text-2xl font-medium">{cap.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {cap.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Stylized Resume */}
      <FullResume />
      </motion.div>
    </div>
  );
};

export default Home;
