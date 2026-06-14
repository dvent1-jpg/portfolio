"use client";

import CaseStudyLayout from '../components/CaseStudyLayout';
import AntigravityCanvas from '../components/AntigravityCanvas';
import AnimatedNumber from '../components/AnimatedNumber';
import { motion } from 'framer-motion';
import { Smartphone, Monitor, TrendingUp, Heart, Zap, MousePointerClick, CalendarDays } from 'lucide-react';
const MarriottBookingFunnel = () => {
    const metrics = (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 w-full">
            <div className="flex flex-col items-center text-center space-y-1">
                <AnimatedNumber valueStr="322%" colorClass="text-emerald-500" />
                <span className="text-sm md:text-xs lg:text-sm text-muted-foreground font-semibold uppercase tracking-wider leading-snug">Mobile Step Conversion</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-1">
                <AnimatedNumber valueStr="91%" colorClass="text-indigo-500" />
                <span className="text-sm md:text-xs lg:text-sm text-muted-foreground font-semibold uppercase tracking-wider leading-snug">Desktop Step Conversion</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-1">
                <AnimatedNumber valueStr="80%" colorClass="text-pink-500" />
                <span className="text-sm md:text-xs lg:text-sm text-muted-foreground font-semibold uppercase tracking-wider leading-snug">More Mobile Bookings</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-1">
                <AnimatedNumber valueStr="72%" colorClass="text-amber-500" />
                <span className="text-sm md:text-xs lg:text-sm text-muted-foreground font-semibold uppercase tracking-wider leading-snug">More Desktop Bookings</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-1">
                <AnimatedNumber valueStr="300%" colorClass="text-red-500" />
                <span className="text-sm md:text-xs lg:text-sm text-muted-foreground font-semibold uppercase tracking-wider leading-snug">Increase In Saved Homes</span>
            </div>
        </div>
    );

    const heroFloatingImage = (
        <div className="flex flex-col space-y-24 w-full pt-12 pb-8">
            <div className="w-full flex justify-center perspective-[1200px] z-10 px-4">
                <div className="relative w-full max-w-4xl">
                    <motion.div
                        animate={{ y: [0, -16, 0] }}
                        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        <img
                            src="/images/booking-funnel/Hero.png"
                            alt="Marriott Booking Funnel Redesign"
                            className="w-full h-auto"
                            style={{
                                filter: 'drop-shadow(0 40px 30px rgb(0 0 0 / 0.18))',
                                imageRendering: 'high-quality',
                            }}
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );

    return (
        <CaseStudyLayout
            title="Marriott Booking Funnel Redesign"
            overview="I led a cross functional redesign of the booking experience, defining the vision, strategy, and execution to help guests book with confidence and ease."
            metrics={metrics}
            introVideo={heroFloatingImage}
        >
            <AntigravityCanvas />

            <section className="w-full text-center mb-40 mt-32">
                <p className="max-w-5xl mx-auto text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-foreground leading-[1.4] mb-8">
                    We had launched a high-performing AI search experience, but users were still landing in a booking flow built for a different era. Discovery got better. Conversion did not.
                </p>
                <div className="flex justify-center w-full mt-4">
                    <motion.div className="group cursor-default w-fit flex flex-col items-center" whileHover="hover">
                        <p className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-[#6d28d9] dark:text-[#bfa2f6] leading-[1.4]">
                            So we rebuilt the funnel, end to end.
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
                                            'M5 8 Q 20 2, 35 8 T 65 8 T 95 8 T 125 8 T 155 8 T 185 8 T 215 8 T 245 8 T 275 8 T 305 8 T 335 8 T 365 8 T 395 8 T 425 8 T 455 8 T 485 8 T 515 8 T 545 8 T 575 8 T 605 8 T 635 8 T 665 8 T 695 8 T 725 8 T 755 8 T 785 8 T 815 8',
                                            'M5 8 Q 20 14, 35 8 T 65 8 T 95 8 T 125 8 T 155 8 T 185 8 T 215 8 T 245 8 T 275 8 T 305 8 T 335 8 T 365 8 T 395 8 T 425 8 T 455 8 T 485 8 T 515 8 T 545 8 T 575 8 T 605 8 T 635 8 T 665 8 T 695 8 T 725 8 T 755 8 T 785 8 T 815 8',
                                            'M5 8 Q 20 2, 35 8 T 65 8 T 95 8 T 125 8 T 155 8 T 185 8 T 215 8 T 245 8 T 275 8 T 305 8 T 335 8 T 365 8 T 395 8 T 425 8 T 455 8 T 485 8 T 515 8 T 545 8 T 575 8 T 605 8 T 635 8 T 665 8 T 695 8 T 725 8 T 755 8 T 785 8 T 815 8',
                                        ],
                                        transition: {
                                            duration: 1.5,
                                            repeat: Infinity,
                                            ease: 'easeInOut',
                                        },
                                    },
                                }}
                                transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.2 }}
                            />
                        </motion.svg>
                    </motion.div>
                </div>
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start mt-40 w-full">
                <div className="lg:col-span-12 space-y-8">
                    <h3 className="text-3xl font-semibold mb-6 text-[#6d28d9] dark:text-[#bfa2f6]">The Approach</h3>
                    <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
                        <p>Outside of the updated search experience we'd just launched, the booking funnel had bounced between neglect and small incremental fixes. The issues were obvious, but we'd never had the runway to take a holistic approach.</p>
                        <p>This project changed that. We committed to redesigning the entire booking experience from discovery through confirmation. Every touchpoint was rebuilt around two principles. Mobile needed to feel native, and the funnel needed to be deliberate about what information to show and when.</p>
                    </div>
                </div>
            </section>

            <section className="w-full mt-40">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center pt-8 pb-0">
                    <div className="w-full flex justify-center perspective-[1200px] z-10">
                        <div className="relative w-full max-w-sm">
                            <motion.div style={{ willChange: 'transform' }} animate={{ y: [0, -15, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
                                <img src="/images/booking-funnel/Drawer-1.png" alt="Drawer interface state one" className="w-full h-auto drop-shadow-xl" style={{ filter: 'drop-shadow(15px 25px 20px rgba(0, 0, 0, 0.15))' }} />
                            </motion.div>
                        </div>
                    </div>
                    <div className="w-full flex justify-center perspective-[1200px] z-10 md:-mt-24">
                        <div className="relative w-full max-w-sm">
                            <motion.div style={{ willChange: 'transform' }} animate={{ y: [0, -20, 0] }} transition={{ duration: 7, delay: 1.5, repeat: Infinity, ease: 'easeInOut' }}>
                                <img src="/images/booking-funnel/Drawer-2.png" alt="Drawer interface state two" className="w-full h-auto drop-shadow-xl" style={{ filter: 'drop-shadow(15px 25px 20px rgba(0, 0, 0, 0.15))' }} />
                            </motion.div>
                        </div>
                    </div>
                    <div className="w-full flex justify-center perspective-[1200px] z-10 md:mt-12">
                        <div className="relative w-full max-w-sm">
                            <motion.div style={{ willChange: 'transform' }} animate={{ y: [0, -12, 0] }} transition={{ duration: 6.5, delay: 0.5, repeat: Infinity, ease: 'easeInOut' }}>
                                <img src="/images/booking-funnel/Drawer-3.png" alt="Drawer interface state three" className="w-full h-auto drop-shadow-xl" style={{ filter: 'drop-shadow(15px 25px 20px rgba(0, 0, 0, 0.15))' }} />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start mt-24 w-full">
                <div className="lg:col-span-12 space-y-8">
                    <h3 className="text-3xl font-semibold mb-6 text-[#6d28d9] dark:text-[#bfa2f6]">Nearly Native</h3>
                    <div className="space-y-8 text-xl text-muted-foreground leading-relaxed">
                        <p>We had spent years discussing a more app-like approach to property browsing on mobile. The traditional scrolling page worked for desktop, but mobile users needed something more intuitive. Something that felt native, and the timing was finally right to execute on it.</p>
                        <p>The concept was a drawer interface that puts the gallery and property details in two distinct, swipeable layers. Users land on stunning property photography with key details in a drawer below. Swipe down to immerse in the gallery. Swipe up to dive into amenities, features, and booking details.</p>
                        <p>No more endless scrolling. No more hunting for the gallery. Just effortless switching between visual inspiration and practical information.</p>
                        <p>This was a significant departure from typical vacation rental sites. It felt more like a native app than mobile web. But for a brand competing with Airbnb's mobile experience, that was exactly the point.</p>
                    </div>
                </div>
            </section>

            <section className="w-full mt-40">
                <div className="w-full max-w-4xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 items-end">
                        <div className="flex flex-col items-center">
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                            >
                                <img
                                    src="/images/booking-funnel/ratecards/Ratecard1.png"
                                    alt="Ratecard version 1"
                                    className="w-full max-w-[320px] h-auto"
                                    style={{ filter: 'drop-shadow(0 40px 30px rgb(0 0 0 / 0.18))' }}
                                />
                            </motion.div>
                            <p className="text-sm text-[#6d28d9] dark:text-[#bfa2f6] mt-7">Old Ratecard</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                            >
                                <img
                                    src="/images/booking-funnel/ratecards/Ratecard6.png"
                                    alt="Ratecard version 5"
                                    className="w-full max-w-[320px] h-auto rounded-2xl"
                                    style={{ filter: 'drop-shadow(0 40px 30px rgb(0 0 0 / 0.18))' }}
                                />
                            </motion.div>
                            <p className="text-sm text-[#6d28d9] dark:text-[#bfa2f6] mt-7">New Ratecard</p>
                        </div>
                    </div>

                </div>
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start mt-24 w-full">
                <div className="lg:col-span-12 space-y-8">
                    <h2 className="text-3xl font-semibold mb-6 text-[#6d28d9] dark:text-[#bfa2f6]">An Important Pricing Decision</h2>
                    <div className="space-y-8 text-xl text-muted-foreground leading-relaxed">
                        <p>We had always disclosed full pricing across the entire guest journey. But what would happen if we removed the pricing breakdown from the property detail page?</p>
                        <p>Not the total price, of course. Users could still see what they'd pay. But line-item details, taxes, fees and even offer breakdowns would move to the booking page, replaced with a clear message about full pricing details being available on the next page.</p>
                        <p>The reasoning was straightforward. If the goal is to drive users deeper into the funnel, what you share and when you share it matters. Overwhelming users with pricing complexity along the way was creating friction. Simplicity creates momentum.</p>
                        <p>Our theory was that we would drive more traffic further down the funnel than the increased bounce rate of the people who got there. And that's exactly what happened. Step conversion from property details to the booking page increased dramatically, with more users reaching the booking page than ever before. Booking page conversion dropped as expected because we were sending more browsing traffic, but total bookings increased anyway because the volume of qualified traffic more than compensated for the higher bounce rate.</p>
                    </div>
                </div>
            </section>

            <section className="w-full mt-40">
                <div className="w-full flex justify-center perspective-[1200px] z-10 px-4">
                    <div className="relative w-full max-w-5xl">
                        <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}>
                            <img
                                src="/images/booking-funnel/GDP-Desktop.png"
                                alt="Booking page redesign"
                                className="w-full h-auto"
                                style={{ filter: 'drop-shadow(0 40px 30px rgb(0 0 0 / 0.18))' }}
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start mt-24 w-full">
                <div className="lg:col-span-12 space-y-8">
                    <h2 className="text-3xl font-semibold mb-6 text-[#6d28d9] dark:text-[#bfa2f6]">The Booking Page</h2>
                    <div className="space-y-8 text-xl text-muted-foreground leading-relaxed">
                        <p>Every slippery booking funnel needs a sticky booking page.</p>
                        <p>At one point, the booking experience had been spread across four different pages. That had been consolidated a couple years back, but it was never truly streamlined. No consideration had been given to keeping users there once they'd arrived.</p>
                        <p>First, we removed friction and distractions. Unnecessary language was cut. Multi-factor authentication moved behind the Pay Now button so there was no friction until commitment.</p>
                        <p>Then we added the capabilities users needed to finalize their decision without leaving. We introduced the ability to edit check-in and checkout dates, update guest count, and adjust points directly on the page. We allowed guests to apply offers without navigating away and carried the property image gallery through so they could look over images one last time before confirming their booking.</p>
                        <p>The result was a booking page that kept guests focused on the home, minimized off-ramps, and where the only remaining action was to book.</p>
                    </div>
                </div>
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start mt-24 w-full">
                <div className="lg:col-span-12 space-y-8">
                    <h2 className="text-3xl font-semibold mb-6 text-[#6d28d9] dark:text-[#bfa2f6]">Influencing Behavior</h2>
                    <div className="space-y-8 text-xl text-muted-foreground leading-relaxed">
                        <p>Research shows that well timed prompts can influence decision making more effectively than static information. The right message at the right moment can shift behavior without feeling manipulative. So we added messaging to create urgency and drive longer stays.</p>
                        <p>Property pages got labels like "Top Pick" and "Going fast" when booking velocity or availability warranted attention. The goal was gentle pressure, not manufactured scarcity.</p>
                        <p>The calendar introduced conditional prompts tied to user actions. Select dates and you'd see "Add 4 nights for a weekly discount" or "5 more nights until your next Membership Tier." The value of extending a stay became immediately clear at the moment users were deciding how long to book.</p>
                        <p>Users completed more bookings when urgency was present. Average length of stay increased when incentives were visible in context.</p>
                    </div>
                </div>
            </section>

            <section className="w-full mt-40">
                <div className="w-full flex justify-center z-10 px-4">
                    <div className="relative w-full max-w-4xl">
                        <motion.div
                            animate={{ y: [0, -12, 0] }}
                            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                        >
                            <img
                                src="/images/booking-funnel/PDP-Desktop-Mock.png"
                                alt="Desktop property detail mockup"
                                className="w-full h-auto rounded-2xl"
                                style={{ filter: 'drop-shadow(0 40px 30px rgb(0 0 0 / 0.18))' }}
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="w-screen relative left-1/2 -translate-x-1/2 py-16 md:py-[72px] mt-24 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 sm:px-12 w-full mb-8 lg:mb-12 relative z-10">
                    <h2 className="text-3xl font-semibold text-[#6d28d9] dark:text-[#bfa2f6]">The Results</h2>
                </div>

                <div className="w-full relative group z-10">
                    <div id="results-carousel" className="flex overflow-x-auto gap-6 sm:gap-8 pb-8 snap-x snap-mandatory hide-scrollbars scroll-smooth" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                        <div className="flex-none snap-start w-0 sm:w-[calc(1.5rem-24px)] xl:w-[calc((100vw-80rem)/2+3rem-32px)]"></div>

                        <div className="flex-none w-[85vw] sm:w-[50vw] md:w-[40vw] lg:w-[30vw] xl:w-[25vw] min-w-[320px] max-w-[400px] bg-white dark:bg-zinc-900 rounded-[2rem] p-8 lg:p-10 shadow-[0_8px_30px_rgba(16,185,129,0.15)] dark:shadow-[0_8px_30px_rgba(16,185,129,0.2)] snap-start flex flex-col justify-between">
                            <MousePointerClick className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-500 mb-8" strokeWidth={1.5} />
                            <p className="text-2xl sm:text-3xl lg:text-3xl font-medium tracking-tight text-foreground leading-snug">
                                Mobile Property Page to Booking Page step conversion increased <strong className="font-bold text-emerald-500">322%</strong>.
                            </p>
                        </div>

                        <div className="flex-none w-[85vw] sm:w-[50vw] md:w-[40vw] lg:w-[30vw] xl:w-[25vw] min-w-[320px] max-w-[400px] bg-white dark:bg-zinc-900 rounded-[2rem] p-8 lg:p-10 shadow-[0_8px_30px_rgba(99,102,241,0.15)] dark:shadow-[0_8px_30px_rgba(99,102,241,0.2)] snap-start flex flex-col justify-between">
                            <Monitor className="w-8 h-8 sm:w-10 sm:h-10 text-indigo-500 mb-8" strokeWidth={1.5} />
                            <p className="text-2xl sm:text-3xl lg:text-3xl font-medium tracking-tight text-foreground leading-snug">
                                Desktop Property Page to Booking Page step conversion increased <strong className="font-bold text-indigo-500">91%</strong>.
                            </p>
                        </div>

                        <div className="flex-none w-[85vw] sm:w-[50vw] md:w-[40vw] lg:w-[30vw] xl:w-[25vw] min-w-[320px] max-w-[400px] bg-white dark:bg-zinc-900 rounded-[2rem] p-8 lg:p-10 shadow-[0_8px_30px_rgba(236,72,153,0.15)] dark:shadow-[0_8px_30px_rgba(236,72,153,0.2)] snap-start flex flex-col justify-between">
                            <Smartphone className="w-8 h-8 sm:w-10 sm:h-10 text-pink-500 mb-8" strokeWidth={1.5} />
                            <p className="text-2xl sm:text-3xl lg:text-3xl font-medium tracking-tight text-foreground leading-snug">
                                Daily mobile bookings increased <strong className="font-bold text-pink-500">80%</strong>.
                            </p>
                        </div>

                        <div className="flex-none w-[85vw] sm:w-[50vw] md:w-[40vw] lg:w-[30vw] xl:w-[25vw] min-w-[320px] max-w-[400px] bg-white dark:bg-zinc-900 rounded-[2rem] p-8 lg:p-10 shadow-[0_8px_30px_rgba(249,115,22,0.15)] dark:shadow-[0_8px_30px_rgba(249,115,22,0.2)] snap-start flex flex-col justify-between">
                            <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 text-orange-500 mb-8" strokeWidth={1.5} />
                            <p className="text-2xl sm:text-3xl lg:text-3xl font-medium tracking-tight text-foreground leading-snug">
                                Daily desktop bookings increased <strong className="font-bold text-orange-500">72%</strong>.
                            </p>
                        </div>

                        <div className="flex-none w-[85vw] sm:w-[50vw] md:w-[40vw] lg:w-[30vw] xl:w-[25vw] min-w-[320px] max-w-[400px] bg-white dark:bg-zinc-900 rounded-[2rem] p-8 lg:p-10 shadow-[0_8px_30px_rgba(239,68,68,0.15)] dark:shadow-[0_8px_30px_rgba(239,68,68,0.2)] snap-start flex flex-col justify-between">
                            <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-red-500 mb-8" strokeWidth={1.5} />
                            <p className="text-2xl sm:text-3xl lg:text-3xl font-medium tracking-tight text-foreground leading-snug">
                                Saved Homes increased <strong className="font-bold text-red-500">300%</strong> on mobile and <strong className="font-bold text-red-500">180%</strong> on desktop.
                            </p>
                        </div>

                        <div className="flex-none w-[85vw] sm:w-[50vw] md:w-[40vw] lg:w-[30vw] xl:w-[25vw] min-w-[320px] max-w-[400px] bg-white dark:bg-zinc-900 rounded-[2rem] p-8 lg:p-10 shadow-[0_8px_30px_rgba(161,68,233,0.15)] dark:shadow-[0_8px_30px_rgba(161,68,233,0.2)] snap-start flex flex-col justify-between">
                            <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-[#a144e9] mb-8" strokeWidth={1.5} />
                            <p className="text-2xl sm:text-3xl lg:text-3xl font-medium tracking-tight text-foreground leading-snug">
                                Page load times improved <strong className="font-bold text-[#a144e9]">40%</strong> on mobile and <strong className="font-bold text-[#a144e9]">53%</strong> on desktop.
                            </p>
                        </div>

                        <div className="flex-none w-[85vw] sm:w-[50vw] md:w-[40vw] lg:w-[30vw] xl:w-[25vw] min-w-[320px] max-w-[400px] bg-white dark:bg-zinc-900 rounded-[2rem] p-8 lg:p-10 shadow-[0_8px_30px_rgba(245,158,11,0.15)] dark:shadow-[0_8px_30px_rgba(245,158,11,0.2)] snap-start flex flex-col justify-between">
                            <CalendarDays className="w-8 h-8 sm:w-10 sm:h-10 text-amber-500 mb-8" strokeWidth={1.5} />
                            <p className="text-2xl sm:text-3xl lg:text-3xl font-medium tracking-tight text-foreground leading-snug">
                                Overall conversion increased <strong className="font-bold text-amber-500">33%</strong> on mobile and <strong className="font-bold text-amber-500">12%</strong> on desktop.
                            </p>
                        </div>

                        <div className="flex-none snap-start w-[1.5rem] sm:w-[calc(1.5rem-24px)] xl:w-[calc((100vw-80rem)/2+1.5rem-32px)]"></div>
                    </div>
                </div>

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
        </CaseStudyLayout>
    );
};

export default MarriottBookingFunnel;
