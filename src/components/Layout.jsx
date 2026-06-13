import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import ContactModal from './ContactModal';

export default function Layout({ children }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [contactOpen, setContactOpen] = useState(false);
    // Space Confetti needs a fine pointer to slash particles — hide the trigger
    // on touch-primary devices where it can't be played.
    const [canPlayGame, setCanPlayGame] = useState(true);

    useEffect(() => {
        setCanPlayGame(window.matchMedia('(pointer: fine)').matches);
    }, []);

    // Initialize theme from localStorage or system preference
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') ||
                (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        }
        return 'dark';
    });
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
        setMobileMenuOpen(false);
    }, [location.pathname]);

    // Tab-title wink: stay memorable even when they tab away to other candidates
    useEffect(() => {
        const BASE_TITLE = 'Dennis Ventrello — Product Design Director';
        document.title = BASE_TITLE;
        const handleVisibility = () => {
            document.title = document.hidden ? '👾 Space Confetti misses you' : BASE_TITLE;
        };
        document.addEventListener('visibilitychange', handleVisibility);
        return () => document.removeEventListener('visibilitychange', handleVisibility);
    }, []);

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    };

    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
            <header
                className="fixed -top-[1px] pt-[25px] pb-6 w-full z-50 transition-colors duration-300 ease-in-out bg-background"
                style={{ backgroundColor: 'var(--background)' }}
            >
                <div className="max-w-7xl mx-auto px-6 sm:px-12 flex justify-between items-center">
                    <Link
                        to="/"
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
                                className="inline-flex items-center text-lg font-medium tracking-tight border-2 border-[#bfa2f6] bg-white dark:bg-[#0f1015] px-6 py-2 rounded-full hover:bg-[#f9f5fe] dark:hover:bg-[#21182e] transition-all duration-300 cursor-pointer"
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
                        className="fixed inset-0 z-40 bg-white dark:bg-[#0f1015] pt-24 px-6 md:hidden"
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
                                    className="inline-flex items-center text-xl font-medium border-2 border-[#bfa2f6] bg-white dark:bg-[#0f1015] px-8 py-4 rounded-full hover:bg-[#f9f5fe] dark:hover:bg-[#21182e] transition-all duration-300 mt-4 w-full justify-center cursor-pointer"
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
                {children}
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
