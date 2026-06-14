"use client";

import CaseStudyLayout from '../components/CaseStudyLayout';
import AntigravityCanvas from '../components/AntigravityCanvas';
import AnimatedNumber from '../components/AnimatedNumber';
import { motion } from 'framer-motion';

const JeselTransformation = () => {
    const metrics = (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 w-full">
            <div className="flex flex-col items-center text-center space-y-1">
                <span className="text-foreground font-bold text-5xl tracking-tighter">#1</span>
                <span className="text-sm md:text-xs lg:text-sm text-muted-foreground font-semibold uppercase tracking-wider leading-snug">Premium Valvetrain Authority</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-1">
                <AnimatedNumber valueStr="9x" colorClass="text-emerald-500" />
                <span className="text-sm md:text-xs lg:text-sm text-muted-foreground font-semibold uppercase tracking-wider leading-snug">Organic Search Visibility</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-1">
                <AnimatedNumber valueStr="230%" colorClass="text-indigo-500" />
                <span className="text-sm md:text-xs lg:text-sm text-muted-foreground font-semibold uppercase tracking-wider leading-snug">Organic Traffic Growth</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-1">
                <AnimatedNumber valueStr="45%" colorClass="text-amber-500" />
                <span className="text-sm md:text-xs lg:text-sm text-muted-foreground font-semibold uppercase tracking-wider leading-snug">Time On Site</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-1">
                <AnimatedNumber valueStr="41k" colorClass="text-pink-500" />
                <span className="text-sm md:text-xs lg:text-sm text-muted-foreground font-semibold uppercase tracking-wider leading-snug">Email Subscribers</span>
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
                            src="/images/jesel/Header1.png"
                            alt="Jesel Digital Business Transformation"
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
            title="Digital Business Transformation"
            overview="I led Jesel's digital business transformation, redefining how the brand communicated, marketed, and presented its products across every channel."
            metrics={metrics}
            introVideo={heroFloatingImage}
        >
            <AntigravityCanvas />

            <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start mt-40 w-full">
                <div className="lg:col-span-12 space-y-8">
                    <h2 className="text-3xl font-semibold mb-6 text-[#6d28d9] dark:text-[#bfa2f6]">The Challenge</h2>
                    <div className="space-y-8 text-xl text-muted-foreground leading-relaxed">
                        <p>Jesel's products were trusted by championship winning race teams, but the brand's digital experience looked and felt dated. The website hadn't evolved in years, social channels were inconsistent, and print campaigns had drifted away from a unified identity.</p>
                        <p>The goal was to modernize Jesel's digital ecosystem without losing its authenticity, to create an online presence that carried the same confidence and craftsmanship as its hardware.</p>
                    </div>
                </div>
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start mt-32 w-full">
                <div className="lg:col-span-12 space-y-8">
                    <h2 className="text-3xl font-semibold mb-6 text-[#6d28d9] dark:text-[#bfa2f6]">The Approach</h2>
                    <div className="space-y-8 text-xl text-muted-foreground leading-relaxed">
                        <p>We started by defining what modernization really meant for Jesel. It wasn't about changing who the brand was, but about updating how it showed up in every channel. The plan focused on rebuilding the digital foundation to give the company more control over its content, improving product discoverability, and creating consistency across the web, social, and print experience.</p>
                        <p>I set the direction for how Jesel would communicate moving forward. It would have a unified voice, a clear visual rhythm, and a design system flexible enough to support both education and storytelling. It needed to evolve without losing the authenticity that racers already trusted.</p>
                    </div>
                </div>
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start mt-32 w-full">
                <div className="lg:col-span-12 space-y-8">
                    <h2 className="text-3xl font-semibold mb-6 text-[#6d28d9] dark:text-[#bfa2f6]">Elevating the Brand</h2>
                    <div className="space-y-8 text-xl text-muted-foreground leading-relaxed">
                        <p>Jesel had always been known for engineering premium racing parts, but its visual identity hadn't kept pace with that reputation. For years the brand chased the same visual tropes that defined the industry. Aggressive typography, saturated colors, over stuffed content. While everyone was busy trying to look like Monster Energy, I decided we would look like Rolex.</p>
                        <p>I moved Jesel to white palettes, crisp sans serif type, and tighter copy. Photography became central to the transformation, treating every part like a piece of art, precise, sculptural, and perfectly lit. We rebuilt the visual and verbal systems for clarity and confidence, replacing noise and jargon with design and language that reflected experience and performance.</p>
                        <p>The result was a unified identity that carried across digital, print, and social. An elevated brand that finally looked as premium as the products themselves.</p>
                    </div>
                </div>
            </section>

            <section className="w-full mt-40">
                <div className="w-full flex justify-center perspective-[1200px] z-10 px-4">
                    <div className="relative w-full max-w-5xl">
                        <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}>
                            <img
                                src="/images/jesel/ad-mockup7.png"
                                alt="Ad Mockup"
                                className="w-full h-auto rounded-2xl"
                                style={{ filter: 'drop-shadow(0 40px 30px rgb(0 0 0 / 0.18))' }}
                            />
                        </motion.div>
                    </div>
                </div>
                <p className="text-sm text-muted-foreground italic mt-6 text-center max-w-3xl mx-auto leading-relaxed">By reversing the visual conventions, replacing aggression with clarity and clutter with space, we elevated Jesel above the competition's noise and positioned it as the only truly premium valve train manufacturer in the industry.</p>
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start mt-40 w-full">
                <div className="lg:col-span-12 space-y-8">
                    <h2 className="text-3xl font-semibold mb-6 text-[#6d28d9] dark:text-[#bfa2f6]">Outranking the Competition</h2>
                    <div className="space-y-8 text-xl text-muted-foreground leading-relaxed">
                        <p>The original site had strong product information, but no strategy behind how people discovered it. We set out to improve Jesel's organic search visibility and how visitors moved from interest to inquiry.</p>
                        <p>We used analytics tools to build a keyword framework around the way racers and engine builders actually search. We researched competitor rankings, rewrote copy, and built out metadata to strengthen organic SEO. We targeted Google's 'People also ask' questions. We added keyword rich FAQs to every product page and wrote new articles that tied engineering insight to product relevance. Within months Jesel began outranking competitors and organic traffic increased by more than 230 percent as key products reached the top of search results.</p>
                        <p>Because Jesel's components are custom manufactured, direct online ordering was never the goal. Instead, we drove conversion through sales calls, inquiries, and newsletter sign ups. Each grew as rankings improved and intent driven visitors reached the site.</p>
                    </div>
                </div>
            </section>

            <section className="w-full mt-40">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <div className="w-full flex justify-center perspective-[1200px] z-10">
                        <div className="relative w-full">
                            <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}>
                                <img
                                    src="/images/jesel/googleresults.png"
                                    alt="Google Search Results"
                                    className="w-full h-auto rounded-2xl"
                                    style={{ filter: 'drop-shadow(0 40px 30px rgb(0 0 0 / 0.18))' }}
                                />
                            </motion.div>
                        </div>
                    </div>
                    <div className="w-full flex justify-center perspective-[1200px] z-10">
                        <div className="relative w-full">
                            <motion.div animate={{ y: [0, -16, 0] }} transition={{ duration: 7, delay: 1, repeat: Infinity, ease: 'easeInOut' }}>
                                <img
                                    src="/images/jesel/SEO.png"
                                    alt="SEO Results"
                                    className="w-full h-auto rounded-2xl"
                                    style={{ filter: 'drop-shadow(0 40px 30px rgb(0 0 0 / 0.18))' }}
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
                <p className="text-sm text-muted-foreground italic mt-6 text-center max-w-3xl mx-auto leading-relaxed">Our aggressive focus on SEO optimization turned Jesel's site into a high performing organic channel, consistently ranking at the top of Google searches.</p>
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start mt-40 w-full">
                <div className="lg:col-span-12 space-y-8">
                    <h2 className="text-3xl font-semibold mb-6 text-[#6d28d9] dark:text-[#bfa2f6]">Building Reach</h2>
                    <div className="space-y-8 text-xl text-muted-foreground leading-relaxed">
                        <p>A new identity only matters if people see it often enough to believe it. I focused on rebuilding how Jesel communicated, when we spoke, what we showed, and how it all connected.</p>
                        <p>Social content shifted from irregular posts to a deliberate rhythm. We highlighted real product stories, behind the scenes manufacturing, and technical insights. The result was authentic instead of performative. With the increased engagement and followers, social media emerged as one of our strongest sources of new site visitors.</p>
                        <p>We turned email into one of our most effective growth channels. We didn't just focus on customers, we targeted potential customers across the industry. We negotiated access to email lists from major racing organizations and trade shows and sponsored giveaways that required participants to share contact details.</p>
                        <p>As our reach expanded, email matured into one of our most effective storytelling tools, connecting new audiences to the brand with clarity and consistency while averaging 30 percent open rates and 10 percent click through rates.</p>
                    </div>
                </div>
            </section>

            <section className="w-full mt-40">
                <div className="w-full flex justify-center perspective-[1200px] z-10 px-4">
                    <div className="relative w-full max-w-5xl">
                        <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}>
                            <img
                                src="/images/jesel/EmailGroup.png"
                                alt="Email Campaigns"
                                className="w-full h-auto rounded-2xl"
                                style={{ filter: 'drop-shadow(0 40px 30px rgb(0 0 0 / 0.18))' }}
                            />
                        </motion.div>
                    </div>
                </div>
                <p className="text-sm text-muted-foreground italic mt-6 text-center max-w-3xl mx-auto leading-relaxed">Targeted email campaigns became a key source of engagement and the dramatic increase in site traffic during campaigns was tracked directly through to calls and orders.</p>
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start mt-40 w-full">
                <div className="lg:col-span-12 space-y-12">
                    <h2 className="text-3xl font-semibold text-[#6d28d9] dark:text-[#bfa2f6]">The Results</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold">Authority and Reach</h3>
                            <ul className="space-y-3 text-lg text-muted-foreground">
                                <li><strong>9x increase</strong> in overall organic search visibility</li>
                                <li><strong>230% increase</strong> in qualified organic traffic</li>
                                <li><strong>6 products</strong> achieved Page 1 Google rankings</li>
                                <li><strong>2 products</strong> achieved top ranking on Page 1</li>
                                <li><strong>#1 authority</strong> in the premium valve train market, validating brand shift</li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold">Engagement and Pipeline</h3>
                            <ul className="space-y-3 text-lg text-muted-foreground">
                                <li><strong>From 0 to 41,000</strong> engaged email subscribers, establishing critical sales pipeline</li>
                                <li><strong>28% average</strong> open rate on emails</li>
                                <li><strong>8% average</strong> click through rate on emails, confirming the quality of the content strategy</li>
                                <li><strong>550% audience growth</strong> across primary social channels (FB/IG)</li>
                                <li><strong>45% increase</strong> in average time on site</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start mt-32 w-full">
                <div className="lg:col-span-12 space-y-8">
                    <h2 className="text-3xl font-semibold mb-6 text-[#6d28d9] dark:text-[#bfa2f6]">Reflections</h2>
                    <div className="space-y-8 text-xl text-muted-foreground leading-relaxed">
                        <p>Transforming Jesel was never about chasing trends or abandoning what made the brand respected. It was about bringing that reputation to life in the places people look for proof today.</p>
                        <p>We didn't just transform the brand, we reshaped how the industry saw it. Other companies called to ask who was behind the creative work, and competitors began to reference it. We created something so distinct that Jesel became known not only for the quality of its products but for the quality of its presentation. That distinction positioned the brand as a leader and quietly set a new standard others tried to follow.</p>
                    </div>
                </div>
            </section>
        </CaseStudyLayout>
    );
};

export default JeselTransformation;
