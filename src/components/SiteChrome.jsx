"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ContactModal from './ContactModal';
import AntigravityCanvas from './AntigravityCanvas';
import ArcadeLeaderboard from './ArcadeLeaderboard';

export default function SiteChrome({ children }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [contactOpen, setContactOpen] = useState(false);
    const [canPlayGame, setCanPlayGame] = useState(false);
    const [isGameActive, setIsGameActive] = useState(false);
    const [isGameOver, setIsGameOver] = useState(false);
    const [finalScore, setFinalScore] = useState(0);

    const pathname = usePathname();

    useEffect(() => {
        setCanPlayGame(window.matchMedia('(pointer: fine)').matches);
    }, []);

    useEffect(() => {
        const handleStart = () => setIsGameActive(true);
        window.addEventListener('start-space-confetti', handleStart);
        return () => window.removeEventListener('start-space-confetti', handleStart);
    }, []);

    // Close the mobile menu whenever the route changes
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);

    // Tab-title wink: stay memorable even when they tab away to other candidates.
    // Captures whatever the current per-page title is so it restores correctly.
    useEffect(() => {
        let savedTitle = document.title;
        const onVisibility = () => {
            if (document.hidden) {
                savedTitle = document.title;
                document.title = '👾 Space Confetti misses you';
            } else {
                document.title = savedTitle;
            }
        };
        document.addEventListener('visibilitychange', onVisibility);
        return () => document.removeEventListener('visibilitychange', onVisibility);
    }, []);

    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">

            {/* Game layer — lives in SiteChrome so it's always mounted on every page */}
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
                            setTimeout(() => setIsGameActive(true), 50);
                        }}
                    />
                )}
            </AnimatePresence>

            <header
                className="fixed -top-[1px] pt-[25px] pb-6 w-full z-50 transition-colors duration-300 ease-in-out bg-background"
                style={{ backgroundColor: 'var(--background)' }}
            >
                <div className="max-w-7xl mx-auto px-6 sm:px-12 flex justify-between items-center">
                    <Link
                        href="/"
                        className="text-xl font-medium tracking-tight hover:opacity-70 transition-opacity"
                    >
                        Dennis Ventrello
                    </Link>

                    <nav className="hidden md:flex gap-8 items-center">
                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-lg font-medium tracking-tight hover:text-muted-foreground transition-colors">CV</a>
                        <a href="https://linkedin.com/in/dennis-ventrello" target="_blank" rel="noopener noreferrer" className="text-lg font-medium tracking-tight hover:text-muted-foreground transition-colors">LinkedIn</a>
                        <button onClick={() => setContactOpen(true)} className="text-lg font-medium tracking-tight hover:text-muted-foreground transition-colors cursor-pointer">Get in touch</button>
                        {canPlayGame && (
                            <button
                                onClick={() => {
                                    window.scrollTo({ top: 0, behavior: "smooth" });
                                    setTimeout(() => window.dispatchEvent(new Event('start-space-confetti')), 500);
                                }}
                                className="inline-flex items-center text-lg font-medium tracking-tight border-2 border-[#bfa2f6] bg-white px-6 py-2 rounded-full hover:bg-[#f9f5fe] transition-all duration-300 cursor-pointer"
                            >
                                Play Space Confetti
                            </button>
                        )}
                    </nav>

                    <div className="flex items-center gap-6 md:hidden">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
                    >
                        <nav className="flex flex-col gap-8 items-start w-full">
                            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-xl font-medium" onClick={() => setMobileMenuOpen(false)}>CV</a>
                            <a href="https://linkedin.com/in/dennis-ventrello" target="_blank" rel="noopener noreferrer" className="text-xl font-medium" onClick={() => setMobileMenuOpen(false)}>LinkedIn</a>
                            <button className="text-xl font-medium text-left cursor-pointer" onClick={() => { setMobileMenuOpen(false); setContactOpen(true); }}>Get in touch</button>

                            {canPlayGame && (
                                <button
                                    onClick={() => {
                                        setMobileMenuOpen(false);
                                        window.scrollTo({ top: 0, behavior: "smooth" });
                                        setTimeout(() => window.dispatchEvent(new Event('start-space-confetti')), 500);
                                    }}
                                    className="inline-flex items-center text-xl font-medium border-2 border-[#bfa2f6] bg-white px-8 py-4 rounded-full hover:bg-[#f9f5fe] transition-all duration-300 mt-4 w-full justify-center cursor-pointer"
                                >
                                    Play Space Confetti
                                </button>
                            )}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>

            <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />

            <main className="flex-grow pt-24">
                <motion.div
                    animate={{ opacity: isGameActive || isGameOver ? 0 : 1 }}
                    transition={{ duration: 0.8 }}
                    className={isGameActive || isGameOver ? 'pointer-events-none' : ''}
                >
                    {children}
                </motion.div>
            </main>

            <footer className="py-12  mt-20">
                <div className="max-w-7xl mx-auto px-6 sm:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Dennis Ventrello. All rights reserved.</p>
                    <div className="flex gap-8 text-sm font-medium">
                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-foreground text-muted-foreground transition-colors">CV</a>
                        <a href="https://linkedin.com/in/dennis-ventrello" target="_blank" rel="noopener noreferrer" className="hover:text-foreground text-muted-foreground transition-colors">LinkedIn</a>
                        <button onClick={() => setContactOpen(true)} className="hover:text-foreground text-muted-foreground transition-colors cursor-pointer">Get in touch</button>
                    </div>
                </div>
            </footer>
        </div>
    );
}
