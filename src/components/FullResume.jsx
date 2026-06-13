"use client";

import React from "react";
import { motion } from "framer-motion";

const FullResume = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    return (
        <section className="py-32 px-6 bg-transparent relative z-20">
            <div className="max-w-5xl mx-auto">

                {/* Header */}
                <div className="mb-20 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                        className="text-4xl font-semibold mb-4 text-foreground flex flex-col items-center group w-fit mx-auto cursor-default relative pb-6"
                    >
                        Experience
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

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="space-y-24"
                >
                    {/* Publicis Sapient / Marriott */}
                    <motion.div variants={itemVariants} className="relative pl-8 md:pl-0">
                        {/* Timeline Line (Desktop only) */}
                        <div className="hidden md:block absolute left-[140px] top-2 bottom-0 w-px bg-border/50"></div>

                        <div className="flex flex-col md:flex-row gap-4 md:gap-12">
                            <div className="md:w-[120px] shrink-0 pt-1">
                                <span className="text-sm font-mono tracking-widest text-muted-foreground uppercase bg-background px-2 -ml-2">2020—Current</span>
                            </div>

                            <div className="flex-1 space-y-6">
                                <div>
                                    <h3 className="text-2xl font-semibold text-foreground">Product Design Director</h3>
                                    <p className="text-xl text-primary font-medium mt-1">Publicis Sapient</p>
                                </div>

                                <div className="space-y-4">
                                    <h4 className="text-lg font-medium text-foreground">Homes & Villas by Marriott Bonvoy</h4>
                                    <ul className="space-y-3 list-none p-0 custom-bullets">
                                        <li className="text-muted-foreground leading-relaxed pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-2 before:h-2 before:bg-[#bfa2f6]/50 before:rounded-full">
                                            Directed design, product, engineering and data teams, leading managers through initiatives that contributed to <span className="font-semibold text-[#6d28d9] dark:text-[#bfa2f6]">10x revenue growth</span>
                                        </li>
                                        <li className="text-muted-foreground leading-relaxed pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-2 before:h-2 before:bg-[#bfa2f6]/50 before:rounded-full">
                                            Led the end-to-end booking funnel redesign, <span className="font-semibold text-[#6d28d9] dark:text-[#bfa2f6]">increasing conversion by 33%</span> and <span className="font-semibold text-[#6d28d9] dark:text-[#bfa2f6]">boosting overall bookings by 80%</span>
                                        </li>
                                        <li className="text-muted-foreground leading-relaxed pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-2 before:h-2 before:bg-[#bfa2f6]/50 before:rounded-full">
                                            Pioneered an industry first blended AI search experience using NLP, generative content, and predictive filtering, resulting in a <span className="font-semibold text-[#6d28d9] dark:text-[#bfa2f6]">10% step conversion lift</span> and a <span className="font-semibold text-[#6d28d9] dark:text-[#bfa2f6]">4% increase in saved homes</span>
                                        </li>
                                        <li className="text-muted-foreground leading-relaxed pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-2 before:h-2 before:bg-[#bfa2f6]/50 before:rounded-full">
                                            Prioritized personalization through machine learning and AI analysis of funnels, interactions, and session replays to identify the highest potential impact to business outcomes
                                        </li>
                                        <li className="text-muted-foreground leading-relaxed pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-2 before:h-2 before:bg-[#bfa2f6]/50 before:rounded-full">
                                            Developed a fully tokenized Figma design system, aligning it with a Storybook component library to enable AI assisted workflows in Cursor and <span className="font-semibold text-[#6d28d9] dark:text-[#bfa2f6]">reduce development time by 35%</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="space-y-4 pt-4">
                                    <h4 className="text-lg font-medium text-foreground">Organizational Impact & Leadership</h4>
                                    <ul className="space-y-3 list-none p-0">
                                        <li className="text-muted-foreground leading-relaxed pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-2 before:h-2 before:bg-[#bfa2f6]/50 before:rounded-full">
                                            Advanced organizational maturity through early career programs, mentorship, manager development, and co-authoring the agentic AI & LLM capability assessment for the North America Experience discipline
                                        </li>
                                        <li className="text-muted-foreground leading-relaxed pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-2 before:h-2 before:bg-[#bfa2f6]/50 before:rounded-full">
                                            Expanded design education by leading workshops, writing internal articles, developing training decks, and producing videos demonstrating the practical application of AI in client delivery
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Jesel Inc */}
                    <motion.div variants={itemVariants} className="relative pl-8 md:pl-0">
                        <div className="hidden md:block absolute left-[140px] top-2 bottom-0 w-px bg-border/50"></div>
                        <div className="flex flex-col md:flex-row gap-4 md:gap-12">
                            <div className="md:w-[120px] shrink-0 pt-1">
                                <span className="text-sm font-mono tracking-widest text-muted-foreground uppercase bg-background px-2 -ml-2">2014—2020</span>
                            </div>

                            <div className="flex-1 space-y-6">
                                <div>
                                    <h3 className="text-2xl font-semibold text-foreground">Creative Director</h3>
                                    <p className="text-xl text-primary font-medium mt-1">Jesel Inc.</p>
                                </div>

                                <ul className="space-y-3 list-none p-0">
                                    <li className="text-muted-foreground leading-relaxed pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-2 before:h-2 before:bg-[#bfa2f6]/50 before:rounded-full">
                                        Led digital transformation and creative strategy, evolving the brand from a legacy manufacturer into a modern digital first organization
                                    </li>
                                    <li className="text-muted-foreground leading-relaxed pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-2 before:h-2 before:bg-[#bfa2f6]/50 before:rounded-full">
                                        Established scalable content operations and production workflows, ensuring brand consistency across all digital and physical touchpoints
                                    </li>
                                    <li className="text-muted-foreground leading-relaxed pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-2 before:h-2 before:bg-[#bfa2f6]/50 before:rounded-full">
                                        Overhauled site information architecture and content strategy to strengthen search discovery, driving a <span className="font-semibold text-[#6d28d9] dark:text-[#bfa2f6]">230% increase in organic traffic</span> and achieving <span className="font-semibold text-[#6d28d9] dark:text-[#bfa2f6]">#1 Google rankings</span>
                                    </li>
                                    <li className="text-muted-foreground leading-relaxed pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-2 before:h-2 before:bg-[#bfa2f6]/50 before:rounded-full">
                                        Designed and implemented a customer retention funnel that grew to <span className="font-semibold text-[#6d28d9] dark:text-[#bfa2f6]">41,000+ subscribers</span>, averaging a <span className="font-semibold text-[#6d28d9] dark:text-[#bfa2f6]">28% open rate</span> and <span className="font-semibold text-[#6d28d9] dark:text-[#bfa2f6]">12% click through rate</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    {/* Freelance Group */}
                    <motion.div variants={itemVariants} className="relative pl-8 md:pl-0">
                        <div className="hidden md:block absolute left-[140px] top-2 bottom-0 w-px bg-border/50"></div>
                        <div className="flex flex-col md:flex-row gap-4 md:gap-12">
                            <div className="md:w-[120px] shrink-0 pt-1">
                                <span className="text-sm font-mono tracking-widest text-muted-foreground uppercase bg-background px-2 -ml-2">2010—2014</span>
                            </div>

                            <div className="flex-1 space-y-12">

                                {/* Chewy */}
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="text-2xl font-semibold text-foreground">Brand Designer</h3>
                                        <p className="text-xl text-primary font-medium mt-1">Chewy (2014)</p>
                                    </div>
                                    <ul className="space-y-3 list-none p-0">
                                        <li className="text-muted-foreground leading-relaxed pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-2 before:h-2 before:bg-[#bfa2f6]/50 before:rounded-full">
                                            Developed brand identity and packaging concepts for Chewy’s exploration into private label lines All American Pet and Simply Pet
                                        </li>
                                    </ul>
                                </div>

                                {/* Amazon */}
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="text-2xl font-semibold text-foreground">Senior Graphic Designer</h3>
                                        <p className="text-xl text-primary font-medium mt-1">Amazon (2012—2014)</p>
                                    </div>
                                    <ul className="space-y-3 list-none p-0">
                                        <li className="text-muted-foreground leading-relaxed pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-2 before:h-2 before:bg-[#bfa2f6]/50 before:rounded-full">
                                            Designed digital campaign creative for Diapers.com and Wag.com, producing high volume assets for direct marketing and on-site advertising
                                        </li>
                                        <li className="text-muted-foreground leading-relaxed pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-2 before:h-2 before:bg-[#bfa2f6]/50 before:rounded-full">
                                            Contributed to early homepage concepts and brand direction for Afterschool.com, exploring layout, messaging and visual direction
                                        </li>
                                    </ul>
                                </div>

                                {/* Target */}
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="text-2xl font-semibold text-foreground">UX Designer</h3>
                                        <p className="text-xl text-primary font-medium mt-1">Target via Publicis Sapient (2012)</p>
                                    </div>
                                    <ul className="space-y-3 list-none p-0">
                                        <li className="text-muted-foreground leading-relaxed pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-2 before:h-2 before:bg-[#bfa2f6]/50 before:rounded-full">
                                            Designed UX flows and visual assets for an experimental augmented reality mobile app, facilitating in-store product discovery through emerging technology
                                        </li>
                                    </ul>
                                </div>

                                {/* Monmouth */}
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="text-2xl font-semibold text-foreground">Design & Brand Lead</h3>
                                        <p className="text-xl text-primary font-medium mt-1">Monmouth University (2010—2012)</p>
                                    </div>
                                    <ul className="space-y-3 list-none p-0">
                                        <li className="text-muted-foreground leading-relaxed pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-2 before:h-2 before:bg-[#bfa2f6]/50 before:rounded-full">
                                            Created the Monmouth Athletic Department identity system, consolidating dozens of team and department marks into a unified visual program applied across apparel, facilities, and digital channels
                                        </li>
                                    </ul>
                                </div>

                            </div>

                        </div>
                    </motion.div>

                </motion.div>

                {/* Core Capabilities Footer List */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-32 pt-16 border-t border-border/50 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
                >
                    <div>
                        <h4 className="text-sm font-mono tracking-widest text-muted-foreground uppercase mb-6">Skills & Core Capabilities</h4>
                        <ul className="space-y-2 text-foreground font-medium">
                            <li>Leadership</li>
                            <li>Cross Functional Leadership</li>
                            <li>Team Building & Mentorship</li>
                            <li>Stakeholder Management</li>
                            <li>Design Operations</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-sm font-mono tracking-widest text-transparent uppercase mb-6 select-none">Spacer</h4>
                        <ul className="space-y-2 text-foreground font-medium">
                            <li>Long Term Product Vision</li>
                            <li>Product Design</li>
                            <li>Product Strategy</li>
                            <li>UX & UI Design</li>
                            <li>Design Systems & Tokens</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-sm font-mono tracking-widest text-transparent uppercase mb-6 select-none">Spacer</h4>
                        <ul className="space-y-2 text-foreground font-medium mb-8">
                            <li>Figma & Storybook</li>
                            <li>Adobe Creative Cloud</li>
                            <li>Cursor & Windsurf</li>
                            <li>Fullstory & GA4</li>
                        </ul>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default FullResume;
