import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudyLayout = ({ title, heroImage, overview, metrics, introVideo, children }) => {
    // Scroll tracking for the Hero Image parallax (document level)
    const { scrollYProgress: docScrollYProgress } = useScroll();
    const y = useTransform(docScrollYProgress, [0, 1], ['0%', '20%']);

    // To ensure the page always loads at top due to router transitions
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <motion.article
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-background pb-32 overflow-x-hidden overflow-y-visible"
        >
            <div className="px-6 sm:px-12 max-w-7xl mx-auto pt-8 mb-8">
                <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-foreground transition-colors group">
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    Home
                </Link>
            </div>

            <header className="px-6 sm:px-12 max-w-7xl mx-auto mt-16 md:mt-24 mb-24 text-center z-10 relative">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-4xl sm:text-6xl font-bold tracking-tight leading-tight mb-8"
                >
                    {title}
                </motion.h1>

                {overview && (
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="text-xl sm:text-2xl text-muted leading-relaxed max-w-5xl mx-auto"
                    >
                        {overview}
                    </motion.p>
                )}
            </header>

            {metrics && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full max-w-7xl mx-auto px-6 sm:px-12 flex justify-center mb-32"
                >
                    {metrics}
                </motion.div>
            )}

            {introVideo && (
                <div className="px-6 sm:px-12 max-w-7xl mx-auto mb-16 rounded-2xl">
                    {introVideo}
                </div>
            )}

            {heroImage && (
                <div className="w-full h-[50vh] sm:h-[60vh] lg:h-[70vh] max-h-[600px] xl:max-h-[800px] overflow-hidden mb-24 relative isolation-auto">
                    <motion.div style={{ y }} className="w-full h-[120%] -top-[10%] relative">
                        <img
                            src={heroImage}
                            alt={title}
                            className={`w-full h-full object-cover`}
                        />
                        {/* Soft gradient overlay for blending */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/20" />
                    </motion.div>
                </div>
            )}

            <div className="px-6 sm:px-12 max-w-7xl mx-auto">
                {children}
            </div>

            <div className="px-6 sm:px-12 max-w-4xl mx-auto mt-32 text-center  pt-16">
                <Link to="/" className="inline-flex items-center gap-2 font-medium hover:gap-4 transition-all text-xl">
                    <ArrowLeft size={20} /> Home
                </Link>
            </div>
        </motion.article>
    );
};

export default CaseStudyLayout;
