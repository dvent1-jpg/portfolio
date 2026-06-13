"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// The author's standing challenge — an arcade cabinet is never empty
const DNV_HIGH_SCORE = 72;
const SEED_SCORES = [
    { id: 'seed-dnv', initials: 'DNV', score: DNV_HIGH_SCORE },
    { id: 'seed-ace', initials: 'ACE', score: 51 },
    { id: 'seed-pix', initials: 'PIX', score: 33 },
];

const ArcadeLeaderboard = ({ finalScore, onClose, onPlayAgain }) => {
    const [initials, setInitials] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [leaderboard, setLeaderboard] = useState([]);
    const [newId, setNewId] = useState(null);
    const [copied, setCopied] = useState(false);

    // Load leaderboard on mount
    useEffect(() => {
        const savedScores = localStorage.getItem('spaceConfettiScores');
        if (savedScores) {
            try {
                setLeaderboard(JSON.parse(savedScores));
            } catch (e) {
                console.error("Failed to parse scores", e);
                setLeaderboard(SEED_SCORES);
            }
        } else {
            setLeaderboard(SEED_SCORES);
        }
    }, []);

    const handleInitialChange = (e) => {
        const val = e.target.value.toUpperCase().replace(/[^A-Z]/g, '');
        if (val.length <= 3) {
            setInitials(val);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (initials.length === 0) return;

        const newScore = {
            id: Date.now(),
            initials: initials.padEnd(3, ' '),
            score: finalScore,
            date: new Date().toISOString()
        };

        const updatedLeaderboard = [...leaderboard, newScore]
            .sort((a, b) => b.score - a.score)
            .slice(0, 5); // Keep top 5

        setNewId(newScore.id);
        setLeaderboard(updatedLeaderboard);
        localStorage.setItem('spaceConfettiScores', JSON.stringify(updatedLeaderboard));
        setSubmitted(true);
    };

    const handleChallenge = async () => {
        try {
            await navigator.clipboard.writeText(
                `I scored ${finalScore} in Space Confetti on Dennis Ventrello's portfolio. Think you can beat me? ${window.location.origin}`
            );
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (e) {
            console.error("Clipboard unavailable", e);
        }
    };

    return (
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-transparent backdrop-blur-md font-mono"
        >
            <div className="bg-[#0f172a]/80 border border-indigo-500/30 p-10 md:p-16 rounded-3xl shadow-2xl max-w-lg w-full text-center relative overflow-hidden">
                {/* Vintage CRT scanline effect */}
                <div className="absolute inset-0 pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiAvPjwvc3ZnPg==')] opacity-10"></div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-400 to-purple-500 mb-2 tracking-widest uppercase">
                    Game Over
                </h2>
                <div className="text-indigo-200/60 tracking-widest text-sm mb-12">Space Confetti</div>

                {!submitted ? (
                    <div className="space-y-10">
                        <div>
                            <div className="text-sm tracking-widest text-slate-400 mb-2 uppercase">Final Score</div>
                            <div className="text-6xl font-bold text-white">{finalScore}</div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div>
                                <label className="block text-sm tracking-widest text-slate-400 mb-4 uppercase">Enter Initials</label>
                                <input 
                                    type="text" 
                                    value={initials}
                                    onChange={handleInitialChange}
                                    placeholder="AAA"
                                    className="bg-slate-900 border-2 border-indigo-500/50 rounded-xl text-center text-5xl p-4 w-48 text-white focus:outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-500/20 transition-all uppercase placeholder-slate-700"
                                    autoFocus
                                    maxLength={3}
                                />
                            </div>
                            <button 
                                type="submit"
                                disabled={initials.length === 0}
                                className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold tracking-widest uppercase py-4 rounded-xl transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98]"
                            >
                                Submit Score
                            </button>
                        </form>
                    </div>
                ) : (
                    <div className="space-y-10">
                        <div>
                            <div className="text-xl font-bold text-white tracking-widest uppercase mb-6 flex items-center justify-center gap-4">
                                <span>🏆</span> Hall of Fame <span>🏆</span>
                            </div>
                            <div className="space-y-3">
                                {leaderboard.map((entry, i) => (
                                    <div
                                        key={entry.id}
                                        className={`flex justify-between items-center p-3 rounded-lg ${entry.id === newId ? 'bg-indigo-500/20 border border-indigo-500/30' : 'bg-slate-800/50'}`}
                                    >
                                        <div className="flex gap-6 items-center">
                                            <span className="text-slate-500 font-bold">#{i + 1}</span>
                                            <span className={`text-xl font-bold ${entry.id === newId ? 'text-indigo-300' : 'text-slate-300'}`}>
                                                {entry.initials}
                                            </span>
                                        </div>
                                        <span className={`text-2xl font-bold ${entry.id === newId ? 'text-white' : 'text-slate-400'}`}>
                                            {entry.score}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="text-xs text-slate-400 tracking-wide leading-relaxed space-y-2">
                            {finalScore > DNV_HIGH_SCORE ? (
                                <p className="text-amber-300">
                                    You beat my high score. I want to hear about it —{' '}
                                    <a href={`mailto:dennis.ventrello@gmail.com?subject=I beat your Space Confetti score&body=Scored ${finalScore}. Your move.`} className="underline hover:text-amber-200 transition-colors">
                                        claim your bragging rights
                                    </a>.
                                </p>
                            ) : (
                                <p>
                                    DNV is me. Beat {DNV_HIGH_SCORE} and{' '}
                                    <a href={`mailto:dennis.ventrello@gmail.com?subject=I beat your Space Confetti score`} className="underline hover:text-slate-300 transition-colors">
                                        email me your bragging rights
                                    </a>.
                                </p>
                            )}
                        </div>

                        <div className="space-y-4 pt-4">
                            <button
                                onClick={onPlayAgain}
                                className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold tracking-widest uppercase py-4 rounded-xl transition-all cursor-pointer transform hover:scale-[1.02]"
                            >
                                Play Again
                            </button>
                            <button
                                onClick={onClose}
                                className="w-full border-2 border-indigo-500/50 hover:bg-indigo-500/10 text-indigo-300 font-bold tracking-widest uppercase py-4 rounded-xl transition-all cursor-pointer"
                            >
                                Return to Portfolio
                            </button>
                            <button
                                onClick={handleChallenge}
                                className="w-full text-slate-400 hover:text-indigo-300 text-sm tracking-widest uppercase py-2 transition-colors cursor-pointer"
                            >
                                {copied ? '✓ Copied to clipboard' : 'Challenge a friend'}
                            </button>
                        </div>

                        <p className="text-[10px] text-slate-600 tracking-widest uppercase pt-2">
                            Built from scratch · Canvas + requestAnimationFrame · No game libraries
                        </p>
                    </div>
                )}
            </div>
        </motion.div>
    ); // END ArcadeLeaderboard
};

export default ArcadeLeaderboard;
