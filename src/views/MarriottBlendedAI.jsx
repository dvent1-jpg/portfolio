"use client";

import CaseStudyLayout from '../components/CaseStudyLayout';
import AntigravityCanvas from '../components/AntigravityCanvas';
import AnimatedNumber from '../components/AnimatedNumber';
import { motion } from 'framer-motion';
import { Trophy, Tv, TrendingUp, Search, MousePointerClick, Activity, Heart } from 'lucide-react';

const MarriottBlendedAI = () => {
    const metrics = (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 w-full">
            <div className="flex flex-col items-center text-center space-y-1">
                <span className="text-foreground font-bold text-5xl tracking-tighter">1st</span>
                <span className="text-sm md:text-xs lg:text-sm text-muted-foreground font-semibold uppercase tracking-wider leading-snug">To Market</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-1">
                <AnimatedNumber valueStr="10M+" colorClass="text-emerald-500" />
                <span className="text-sm md:text-xs lg:text-sm text-muted-foreground font-semibold uppercase tracking-wider leading-snug">AI Searches</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-1">
                <AnimatedNumber valueStr="10%" colorClass="text-indigo-500" />
                <span className="text-sm md:text-xs lg:text-sm text-muted-foreground font-semibold uppercase tracking-wider leading-snug">Step Conversion Lift</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-1">
                <AnimatedNumber valueStr="4%" colorClass="text-amber-500" />
                <span className="text-sm md:text-xs lg:text-sm text-muted-foreground font-semibold uppercase tracking-wider leading-snug">Saved Home Lift</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-1">
                <AnimatedNumber valueStr="54M" colorClass="text-pink-500" />
                <span className="text-sm md:text-xs lg:text-sm text-muted-foreground font-semibold uppercase tracking-wider leading-snug">Media Impressions</span>
            </div>
        </div>
    );

    const heroFloatingImage = (
        <div className="flex flex-col space-y-32 w-full pt-12 pb-8">
            <div className="w-full flex justify-center perspective-[1200px] z-10 px-4">
                <div className="relative w-full max-w-4xl">
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{
                            duration: 7,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <img
                            src="/images/ai-search/Hero.png"
                            alt="Marriott Blended AI Search Hero"
                            className="w-full h-auto"
                            style={{
                                filter: "drop-shadow(30px 50px 40px rgba(0, 0, 0, 0.2))",
                                imageRendering: "high-quality",
                            }}
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );

    return (
        <CaseStudyLayout
            title="Marriott's Blended AI Search Experience"
            overview="I led the ideation and design of a first to market blended AI search experience, shaping how we balanced innovation with the realities of search, scale, and conversion.​​​​​​​"
            metrics={metrics}
            introVideo={heroFloatingImage}
        >
            <AntigravityCanvas />

            <section className="w-full text-center mb-40 mt-32">
                <p className="max-w-5xl mx-auto text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-foreground leading-[1.4] mb-8">
                    When guests search for vacation rentals, they don't think in filters and checkboxes. They think in stories like "somewhere cozy for a family reunion," or "a place with character near great restaurants." Traditional search can't handle that complexity.
                </p>
                <div className="flex justify-center w-full mt-4">
                    <motion.div
                        className="group cursor-default w-fit flex flex-col items-center"
                        whileHover="hover"
                    >
                        <p className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-[#6d28d9] dark:text-[#bfa2f6] leading-[1.4]">
                            So we built something that could.
                        </p>
                        <motion.svg
                            width="100%"
                            height="16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-[#bfa2f6] opacity-80 mt-1"
                            preserveAspectRatio="none"
                        >
                            <motion.path
                                d="M5 8 Q 20 2, 35 8 T 65 8 T 95 8 T 125 8 T 155 8 T 185 8 T 215 8 T 245 8 T 275 8 T 305 8 T 335 8 T 365 8 T 395 8 T 425 8 T 455 8 T 485 8 T 515 8 T 545 8 T 575 8 T 605 8 T 635 8 T 665 8 T 695 8 T 725 8 T 755 8 T 785 8 T 815 8"
                                stroke="currentColor"
                                strokeWidth="4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 1 }}
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
                    </motion.div>
                </div>
            </section>

            <section className="w-full max-w-5xl mx-auto aspect-video mt-32 px-4 md:px-0">
                <iframe
                    className="w-full h-full rounded-2xl"
                    src="https://www.youtube.com/embed/0eFQgxgX7hI?si=LQXwn2_hQXZ2RN9v"
                    frameBorder="0"
                    allow="autoplay; picture-in-picture"
                    allowFullScreen>
                </iframe>
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center mt-40 w-full">
                <div className="lg:col-span-7 space-y-20">
                    <div>
                        <h2 className="text-3xl font-semibold mb-6 text-[#6d28d9] dark:text-[#bfa2f6]">The Brief</h2>
                        <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
                            <p>We assembled a small cross functional team of product, design, and engineering leaders with a clear mandate. Be first to market with an AI experience without harming the core business.</p>
                            <p>Our objectives were deliberate. Boost brand visibility, prove technical and financial feasibility, gather behavioral data and most critically, protect the existing booking funnel. Every decision would be measured against conversion rates and revenue impact.</p>
                            <p>With those goals in mind, we got to work. But we didn't get it right on the first try.</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-3xl font-semibold mb-6 text-[#6d28d9] dark:text-[#bfa2f6]">Early Signals and Failures</h3>
                        <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
                            <p>Like many teams exploring AI in 2023, we started with what seemed obvious, an AI powered chat experience. We believed giving users conversational AI to plan trips and discover destinations was the future.</p>
                            <p>The reality? Every round of user feedback revealed fundamental issues.</p>
                            <p>Chat bots carried the stigma of customer service frustration. Users associated them with desperate attempts to cancel subscriptions or repeated pleas to speak with a human. Chat added unexpected steps between homepage and search results. People who wanted to simply search for a destination found themselves in an unwanted conversation.</p>
                            <p>No matter how seamlessly we tried to embed it, chat complicated the otherwise straightforward process of searching for a destination, specifying dates, and hitting search.</p>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-5 lg:col-start-8">
                    <div className="w-full flex justify-center perspective-[1200px] z-10 px-4 mb-4">
                        <div className="relative w-full max-w-lg">
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{
                                    duration: 7,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >
                                <img
                                    src="/images/ai-search/AI-Search-Mockup.png"
                                    alt="Marriott Blended AI Search Hero"
                                    className="w-full h-auto drop-shadow-2xl"
                                    style={{
                                        filter: "drop-shadow(30px 50px 40px rgba(0, 0, 0, 0.2))",
                                        imageRendering: "high-quality",
                                    }}
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center mt-32 w-full">
                <div className="lg:col-span-12">
                    <h3 className="text-3xl font-semibold mb-6 text-[#6d28d9] dark:text-[#bfa2f6]">The Turning Point</h3>
                    <div className="space-y-8 text-xl text-muted-foreground leading-relaxed">
                        <p>While the team explored chat based ideas, I made a deceptively simple observation. The difference between chat and search was only about 800 pixels.</p>
                        <p>Moving the text input field from the bottom of the page, which signals chat, to the top, which signals search fundamentally changed the user's mental model. It was the breakthrough we'd been looking for. Instead of injecting AI chat into the funnel, we could enhance the search experience with AI.</p>
                        <p>That unlocked a larger opportunity. We used the insight to redesign search from the ground up, rethink information architecture, reimagine how users discover properties, and create a foundation for AI capabilities beyond natural language input.</p>
                    </div>
                </div>
            </section>

            <section className="w-full mt-40">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center pt-12 pb-24">
                    <div className="w-full flex justify-center perspective-[1200px] z-10">
                        <div className="relative w-full max-w-sm">
                            <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
                                <img src="/images/ai-search/blended-search-float-4.png" alt="Marriott Blended AI Search Screen 4" className="w-full h-auto drop-shadow-xl" style={{ filter: "drop-shadow(15px 25px 20px rgba(0, 0, 0, 0.15))" }} />
                            </motion.div>
                        </div>
                    </div>
                    <div className="w-full flex justify-center perspective-[1200px] z-10 md:-mt-24">
                        <div className="relative w-full max-w-sm">
                            <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 7, delay: 1.5, repeat: Infinity, ease: "easeInOut" }}>
                                <img src="/images/ai-search/blended-search-float-5.png" alt="Marriott Blended AI Search Screen 5" className="w-full h-auto drop-shadow-xl" style={{ filter: "drop-shadow(15px 25px 20px rgba(0, 0, 0, 0.15))" }} />
                            </motion.div>
                        </div>
                    </div>
                    <div className="w-full flex justify-center perspective-[1200px] z-10 md:mt-12">
                        <div className="relative w-full max-w-sm">
                            <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 6.5, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}>
                                <img src="/images/ai-search/blended-search-float-6.png" alt="Marriott Blended AI Search Screen 6" className="w-full h-auto drop-shadow-xl" style={{ filter: "drop-shadow(15px 25px 20px rgba(0, 0, 0, 0.15))" }} />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start mt-12 w-full">
                <div className="lg:col-span-12 space-y-8">
                    <h2 className="text-3xl font-semibold mb-6 text-[#6d28d9] dark:text-[#bfa2f6]">The Product Design Solution</h2>
                    <div className="space-y-8 text-xl text-muted-foreground leading-relaxed">
                        <p>We nearly made the same mistake auto manufacturers have been making for years, combining everything into one "smart" interface that actually complicates the experience.</p>
                        <p>We could have built a single text field that handled both traditional destination searches ("Paris") and natural language queries ("romantic getaway with Michelin star restaurants"). Technically feasible? Absolutely. Good for our users? Maybe not.</p>
                        <p>The insight was simple. Users expect different tools for different tasks. Sometimes they want traditional search. Sometimes they want AI discovery.</p>
                        <p>The solution was a tabbed interface allowing users to seamlessly switch between Destination Search (familiar, fast, direct) and AI Search (exploratory, descriptive, discovery-focused.)</p>
                        <p>This choice also had business implications beyond UX, as it allowed us to strategically manage costly AI API calls by creating natural drop off points while giving users clear control.</p>
                    </div>
                </div>
            </section>

            <section className="w-full mt-40">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center pt-12 pb-24">
                    <div className="w-full flex justify-center perspective-[1200px] z-10 md:-mt-12">
                        <div className="relative w-full max-w-sm">
                            <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}>
                                <img src="/images/ai-search/blended-search-float-1.png" alt="Marriott Blended AI Search Screen 1" className="w-full h-auto drop-shadow-xl" style={{ filter: "drop-shadow(15px 25px 20px rgba(0, 0, 0, 0.15))" }} />
                            </motion.div>
                        </div>
                    </div>
                    <div className="w-full flex justify-center perspective-[1200px] z-10 md:mt-12">
                        <div className="relative w-full max-w-sm">
                            <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 7.5, delay: 1.0, repeat: Infinity, ease: "easeInOut" }}>
                                <img src="/images/ai-search/blended-search-float-3.png" alt="Marriott Blended AI Search Screen 3" className="w-full h-auto drop-shadow-xl" style={{ filter: "drop-shadow(15px 25px 20px rgba(0, 0, 0, 0.15))" }} />
                            </motion.div>
                        </div>
                    </div>
                    <div className="w-full flex justify-center perspective-[1200px] z-10">
                        <div className="relative w-full max-w-sm">
                            <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 6, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}>
                                <img src="/images/ai-search/blended-search-float-2.png" alt="Marriott Blended AI Search Screen 2" className="w-full h-auto drop-shadow-xl" style={{ filter: "drop-shadow(15px 25px 20px rgba(0, 0, 0, 0.15))" }} />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start mt-12 w-full">
                <div className="lg:col-span-12 space-y-8">
                    <h2 className="text-3xl font-semibold mb-6 text-[#6d28d9] dark:text-[#bfa2f6]">Adoption and Behavior Design</h2>
                    <div className="space-y-8 text-xl text-muted-foreground leading-relaxed">
                        <p>We created a journey of discovery.</p>
                        <p>We rotated prompt examples in the search field like "Rustic cabin by serene lake, close to fishing dock, kayaks, hiking trails" and "Romantic getaway with quaint local restaurants in Europe." We introduced seamless guidance that broke down important prompt elements like location, trip type, activities and home features. And we transformed loading screens into learning opportunities with "Trending Searches" and "Search Tips."</p>
                        <p>Moving beyond static filters, we implemented contextual, AI-suggested filters that understood search intent.</p>
                        <p>This wasn't just a convenience feature, it demonstrated that AI understood guest intent and provided us with valuable data insights. 35% of users selected "Waterfront" when suggested. 31% engaged with "Private Pool." 19% clicked "Pets Allowed."</p>
                        <p>Our most innovative departure from conventional search was the introduction of AI-generated location recommendations with rich, contextual information.</p>
                        <p>For guests interested in exploring possibilities, we provided multiple destination suggestions based on their search along with detailed location information across 5 categories, Culture, Kids, Nature, Weather and Travel.</p>
                        <p>The strategic impact? Previously, users left our site to research destinations on Google, potentially landing on competitor sites. We internalized this entire discovery journey.</p>
                    </div>
                </div>
            </section>
            <section className="w-full mt-32">
                <div className="w-full flex justify-center perspective-[1200px] z-10 px-4">
                    <div className="relative w-full max-w-5xl">
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <img
                                src="/images/ai-search/AI-Search-Macbook.png"
                                alt="Marriott Blended AI Macbook Mockup"
                                className="w-full h-auto"
                                style={{
                                    filter: "drop-shadow(0px 40px 30px rgba(0, 0, 0, 0.2))",
                                    imageRendering: "high-quality",
                                }}
                            />
                        </motion.div>
                    </div>
                </div>
            </section>
            {/* Results Section - Carousel */}
            <section
                className="w-screen relative left-1/2 -translate-x-1/2 py-16 md:py-[72px] mt-24 overflow-hidden"
            >

                <div className="max-w-7xl mx-auto px-6 sm:px-12 w-full mb-8 lg:mb-12 relative z-10">
                    <h2 className="text-3xl font-semibold text-[#6d28d9] dark:text-[#bfa2f6]">Business Outcomes</h2>
                </div>

                {/* Carousel Container */}
                <div className="w-full relative group z-10">
                    {/* Floating Mobile Hint */}
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 z-10 sm:hidden pointer-events-none opacity-50 flex items-center gap-2 bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs">
                        Swipe <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                    </div>

                    <div
                        id="results-carousel"
                        className="flex overflow-x-auto gap-6 sm:gap-8 pb-8 snap-x snap-mandatory hide-scrollbars scroll-smooth"
                        style={{
                            scrollbarWidth: 'none', /* Firefox */
                            msOverflowStyle: 'none' /* IE 10+ */
                        }}
                    >
                        {/* Dynamic Left Spacer for 7xl Alignment */}
                        <div className="flex-none snap-start w-0 sm:w-[calc(1.5rem-24px)] xl:w-[calc((100vw-80rem)/2+3rem-32px)]"></div>

                        {/* Brand Impact Card */}
                        <div className="flex-none w-[85vw] sm:w-[50vw] md:w-[40vw] lg:w-[30vw] xl:w-[25vw] min-w-[320px] max-w-[400px] bg-white dark:bg-zinc-900 rounded-[2rem] p-8 lg:p-10 shadow-[0_8px_30px_rgba(161,68,233,0.15)] dark:shadow-[0_8px_30px_rgba(161,68,233,0.2)] snap-start flex flex-col justify-between">
                            <Trophy className="w-8 h-8 sm:w-10 sm:h-10 text-[#a144e9] mb-8" strokeWidth={1.5} />
                            <p className="text-2xl sm:text-3xl lg:text-3xl font-medium tracking-tight text-foreground leading-snug">
                                <strong className="font-bold text-[#a144e9]">1st to market</strong> blended AI experience in Travel industry.
                            </p>
                        </div>

                        {/* Media Card */}
                        <div className="flex-none w-[85vw] sm:w-[50vw] md:w-[40vw] lg:w-[30vw] xl:w-[25vw] min-w-[320px] max-w-[400px] bg-white dark:bg-zinc-900 rounded-[2rem] p-8 lg:p-10 shadow-[0_8px_30px_rgba(236,72,153,0.15)] dark:shadow-[0_8px_30px_rgba(236,72,153,0.2)] snap-start flex flex-col justify-between">
                            <Tv className="w-8 h-8 sm:w-10 sm:h-10 text-pink-500 mb-8" strokeWidth={1.5} />
                            <p className="text-2xl sm:text-3xl lg:text-3xl font-medium tracking-tight text-foreground leading-snug">
                                Generated <strong className="font-bold text-pink-500">54M+ media impressions</strong> across 48+ external placements.
                            </p>
                        </div>

                        {/* Usage Card */}
                        <div className="flex-none w-[85vw] sm:w-[50vw] md:w-[40vw] lg:w-[30vw] xl:w-[25vw] min-w-[320px] max-w-[400px] bg-white dark:bg-zinc-900 rounded-[2rem] p-8 lg:p-10 shadow-[0_8px_30px_rgba(16,185,129,0.15)] dark:shadow-[0_8px_30px_rgba(16,185,129,0.2)] snap-start flex flex-col justify-between">
                            <Search className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-500 mb-8" strokeWidth={1.5} />
                            <p className="text-2xl sm:text-3xl lg:text-3xl font-medium tracking-tight text-foreground leading-snug">
                                Over <strong className="font-bold text-emerald-500">10M+ AI searches</strong> generated by users since launch.
                            </p>
                        </div>

                        {/* Behavior Card */}
                        <div className="flex-none w-[85vw] sm:w-[50vw] md:w-[40vw] lg:w-[30vw] xl:w-[25vw] min-w-[320px] max-w-[400px] bg-white dark:bg-zinc-900 rounded-[2rem] p-8 lg:p-10 shadow-[0_8px_30px_rgba(249,115,22,0.15)] dark:shadow-[0_8px_30px_rgba(249,115,22,0.2)] snap-start flex flex-col justify-between">
                            <Activity className="w-8 h-8 sm:w-10 sm:h-10 text-orange-500 mb-8" strokeWidth={1.5} />
                            <p className="text-2xl sm:text-3xl lg:text-3xl font-medium tracking-tight text-foreground leading-snug">
                                Deep engagement with an average prompt length of <strong className="font-bold text-orange-500">10 words</strong>.
                            </p>
                        </div>

                        {/* Traffic Card */}
                        <div className="flex-none w-[85vw] sm:w-[50vw] md:w-[40vw] lg:w-[30vw] xl:w-[25vw] min-w-[320px] max-w-[400px] bg-white dark:bg-zinc-900 rounded-[2rem] p-8 lg:p-10 shadow-[0_8px_30px_rgba(161,68,233,0.15)] dark:shadow-[0_8px_30px_rgba(161,68,233,0.2)] snap-start flex flex-col justify-between">
                            <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 text-[#a144e9] mb-8" strokeWidth={1.5} />
                            <p className="text-2xl sm:text-3xl lg:text-3xl font-medium tracking-tight text-foreground leading-snug">
                                Drove a <strong className="font-bold text-[#a144e9]">14% YoY increase</strong> in overall site visits.
                            </p>
                        </div>

                        {/* Conversion Point 1 Card */}
                        <div className="flex-none w-[85vw] sm:w-[50vw] md:w-[40vw] lg:w-[30vw] xl:w-[25vw] min-w-[320px] max-w-[400px] bg-white dark:bg-zinc-900 rounded-[2rem] p-8 lg:p-10 shadow-[0_8px_30px_rgba(99,102,241,0.15)] dark:shadow-[0_8px_30px_rgba(99,102,241,0.2)] snap-start flex flex-col justify-between">
                            <MousePointerClick className="w-8 h-8 sm:w-10 sm:h-10 text-indigo-500 mb-8" strokeWidth={1.5} />
                            <p className="text-2xl sm:text-3xl lg:text-3xl font-medium tracking-tight text-foreground leading-snug">
                                Generated a <strong className="font-bold text-indigo-500">10% lift</strong> in AI Search to Property Details selection.
                            </p>
                        </div>

                        {/* Conversion Point 2 Card */}
                        <div className="flex-none w-[85vw] sm:w-[50vw] md:w-[40vw] lg:w-[30vw] xl:w-[25vw] min-w-[320px] max-w-[400px] bg-white dark:bg-zinc-900 rounded-[2rem] p-8 lg:p-10 shadow-[0_8px_30px_rgba(239,68,68,0.15)] dark:shadow-[0_8px_30px_rgba(239,68,68,0.2)] snap-start flex flex-col justify-between">
                            <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-red-500 mb-8" strokeWidth={1.5} />
                            <p className="text-2xl sm:text-3xl lg:text-3xl font-medium tracking-tight text-foreground leading-snug">
                                Drove a <strong className="font-bold text-red-500">4% lift</strong> in homes being saved to user wishlists.
                            </p>
                        </div>

                        {/* Dynamic Right Spacer for 7xl Alignment */}
                        <div className="flex-none snap-start w-[1.5rem] sm:w-[calc(1.5rem-24px)] xl:w-[calc((100vw-80rem)/2+1.5rem-32px)]"></div>
                    </div>
                </div>

                {/* Carousel Navigation Controls (Bottom Right) */}
                <div className="max-w-7xl mx-auto px-6 sm:px-12 w-full flex justify-end relative z-10">
                    <div className="hidden sm:flex gap-4">
                        <motion.button
                            onClick={() => {
                                const container = document.getElementById('results-carousel');
                                if (container) container.scrollBy({ left: -400, behavior: 'smooth' });
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-3 flex items-center justify-center rounded-full bg-white dark:bg-zinc-800 shadow-sm hover:shadow-md hover:bg-[#f4ebfa] dark:hover:bg-[#341d4a] transition-colors text-foreground border border-[#ebdcf9] dark:border-[#4d2d6b]"
                            aria-label="Scroll left"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                        </motion.button>
                        <motion.button
                            onClick={() => {
                                const container = document.getElementById('results-carousel');
                                if (container) container.scrollBy({ left: 400, behavior: 'smooth' });
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-3 flex items-center justify-center rounded-full bg-white dark:bg-zinc-800 shadow-sm hover:shadow-md hover:bg-[#f4ebfa] dark:hover:bg-[#341d4a] transition-colors text-foreground border border-[#ebdcf9] dark:border-[#4d2d6b]"
                            aria-label="Scroll right"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                        </motion.button>
                    </div>
                </div>
            </section>

            <section className="w-full text-center mt-24 pb-24">
                <p className="max-w-5xl mx-auto text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-foreground leading-[1.4] mb-8">
                    We set out to be first to market, and we were. But our most important discovery was that AI works best when it enhances familiar patterns rather than replacing them. The most successful features feel like a natural evolution.
                </p>
                <div className="flex justify-center w-full mt-4">
                    <motion.div
                        className="group cursor-default w-fit flex flex-col items-center"
                        whileHover="hover"
                    >
                        <p className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-[#6d28d9] dark:text-[#bfa2f6] leading-[1.4]">
                            Great AI works the way people think.
                        </p>
                        <motion.svg
                            width="100%"
                            height="16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-[#bfa2f6] opacity-80 mt-1"
                            preserveAspectRatio="none"
                        >
                            <motion.path
                                d="M5 8 Q 20 2, 35 8 T 65 8 T 95 8 T 125 8 T 155 8 T 185 8 T 215 8 T 245 8 T 275 8 T 305 8 T 335 8 T 365 8 T 395 8 T 425 8 T 455 8 T 485 8 T 515 8 T 545 8 T 575 8 T 605 8 T 635 8 T 665 8 T 695 8 T 725 8 T 755 8 T 785 8 T 815 8"
                                stroke="currentColor"
                                strokeWidth="4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 1 }}
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
                            />
                        </motion.svg>
                    </motion.div>
                </div>
            </section>

        </CaseStudyLayout >
    );
};

export default MarriottBlendedAI;
