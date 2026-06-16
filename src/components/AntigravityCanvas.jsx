"use client";

import React, { useEffect, useRef, useState } from 'react';

const AntigravityCanvas = ({ isGameActive = false, onGameEnd }) => {
    const canvasRef = useRef(null);
    const [isActive, setIsActive] = useState(isGameActive);
    const isGameActiveRef = useRef(isActive);
    const onGameEndRef = useRef(onGameEnd);
    const setInactiveRef = useRef(null);

    // Keep refs current on every render — ref writes are synchronous so no useEffect needed
    isGameActiveRef.current = isActive;
    onGameEndRef.current = onGameEnd;
    setInactiveRef.current = () => setIsActive(false);

    // Propagate prop changes from parent (Home.jsx controls the game there)
    useEffect(() => {
        setIsActive(isGameActive);
    }, [isGameActive]);

    // Self-activate when the global event is dispatched — works on any page
    useEffect(() => {
        const handleStart = () => setIsActive(true);
        window.addEventListener('start-space-confetti', handleStart);
        return () => window.removeEventListener('start-space-confetti', handleStart);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;

        // Core visual palette
        const colors = [
            '#4285F4', // Google Blue
            '#EA4335', // Google Red
            '#FBBC05', // Google Yellow
            '#9B72CB', // Soft Purple
            '#22c55e'  // Emerald
        ];

        let particles = [];
        let dustParticles = [];

        // Motion sensitivity: the fly-at-you warp is a known nausea trigger on
        // small handheld screens. Detect coarse pointers (phones/tablets) and the
        // OS reduced-motion preference, and calm the ambient field accordingly.
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;

        const numParticles = isCoarsePointer ? 160 : 600;

        // Parallax smoothed tracker
        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let targetMouseX = window.innerWidth / 2;
        let targetMouseY = window.innerHeight / 2;
        
        // Exact raw tracker for Fruit-Ninja collision hitboxes
        let rawMouseX = -100;
        let rawMouseY = -100;
        let prevRawMouseX = window.innerWidth / 2;
        let prevRawMouseY = window.innerHeight / 2;
        let cursorTrail = [];

        // Arcade Game State
        let gamePhase = 'idle'; // 'idle' | 'countdown' | 'playing'
        let gameEndTime = null;
        let countdownEndTime = null;
        let gameScore = 0;

        // Streaks, bonuses, and impact feedback
        let combo = 0;
        let lastKillTime = 0;
        let bonusFlashTime = -9999;
        let shake = 0;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const handleMouseMove = (e) => {
            prevRawMouseX = rawMouseX;
            prevRawMouseY = rawMouseY;
            rawMouseX = e.clientX;
            rawMouseY = e.clientY;

            if (cursorTrail.length === 0) {
                cursorTrail.push({ x: rawMouseX, y: rawMouseY, velocity: 0 });
            }

            // Constrain the target center so the parallax isn't visually chaotic
            const maxOffset = 150; 
            const dx = e.clientX - window.innerWidth / 2;
            const dy = e.clientY - window.innerHeight / 2;

            const pctX = dx / (window.innerWidth / 2);
            const pctY = dy / (window.innerHeight / 2);

            targetMouseX = (window.innerWidth / 2) + (pctX * maxOffset);
            targetMouseY = (window.innerHeight / 2) + (pctY * maxOffset);
        };

        window.addEventListener('mousemove', handleMouseMove);

        const createExplosion = (x, y, color, count = 5) => {
            // Spawn micro-particles that scatter upon impact
            for (let i = 0; i < count; i++) {
                dustParticles.push({
                    x, y, color,
                    vx: (Math.random() - 0.5) * 15,
                    vy: (Math.random() - 0.5) * 15,
                    life: 1.0 // Initial full opacity
                });
            }
        };

        const drawCometCursor = () => {
            if (rawMouseX < 0 || rawMouseY < 0) return;

            const dx = rawMouseX - prevRawMouseX;
            const dy = rawMouseY - prevRawMouseY;
            const velocity = Math.hypot(dx, dy);
            const normalizedVelocity = Math.min(velocity / 45, 1);

            cursorTrail.unshift({
                x: rawMouseX,
                y: rawMouseY,
                velocity: normalizedVelocity,
            });

            if (cursorTrail.length > 14) {
                cursorTrail.pop();
            }

            if (cursorTrail.length > 1) {
                ctx.save();
                ctx.lineCap = 'round';
                ctx.lineJoin = 'round';
                ctx.globalCompositeOperation = 'source-over';

                for (let i = 0; i < cursorTrail.length - 1; i++) {
                    const current = cursorTrail[i];
                    const next = cursorTrail[i + 1];
                    const progress = 1 - (i / (cursorTrail.length - 1));
                    const alpha = progress * (0.18 + current.velocity * 0.16);
                    const width = 12 * progress + current.velocity * 8;

                    const gradient = ctx.createLinearGradient(current.x, current.y, next.x, next.y);
                    gradient.addColorStop(0, `rgba(191, 162, 246, ${alpha})`);
                    gradient.addColorStop(1, `rgba(191, 162, 246, 0)`);

                    ctx.beginPath();
                    ctx.strokeStyle = gradient;
                    ctx.lineWidth = width;
                    ctx.moveTo(current.x, current.y);
                    ctx.lineTo(next.x, next.y);
                    ctx.stroke();
                }

                ctx.restore();
            }

            ctx.save();
            ctx.fillStyle = '#bfa2f6';
            ctx.beginPath();
            ctx.arc(rawMouseX, rawMouseY, 15.6 + normalizedVelocity * 2.6, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        };

        const calmAmbient = prefersReducedMotion || isCoarsePointer;

        class Particle {
            constructor() {
                this.init();
                // In calm mode keep depth in a comfortable mid band so nothing spawns
                // as a giant foreground streak; otherwise disperse across the full range.
                this.z = calmAmbient
                    ? canvas.width * (0.3 + Math.random() * 0.6)
                    : Math.random() * canvas.width;
            }

            init() {
                this.x = (Math.random() - 0.5) * canvas.width * 2 + mouseX;
                this.y = (Math.random() - 0.5) * canvas.height * 2 + mouseY;
                this.z = canvas.width; // Start farthest back
                this.color = colors[Math.floor(Math.random() * colors.length)];
                this.length = Math.random() * 8 + 4;
                this.exploded = false;
                // Rare gold confetti worth 5x — only visually distinct during gameplay
                this.isGold = Math.random() < 0.04;
            }

            update() {
                const inGame = gamePhase === 'countdown' || gamePhase === 'playing';

                // Hold the ambient field completely still for reduced-motion users and
                // handheld screens — the fly-at-you warp is a nausea trigger there.
                // Gameplay always uses the full warp; it's intentional and focused, and
                // the game only runs on fine-pointer devices anyway.
                if (calmAmbient && !inGame) return;

                // Fly rapidly forward if game is active or counting down, otherwise float ambiently
                const speed = inGame ? 4.5 : 1.5;
                this.z -= speed;

                if (this.z <= 0) {
                    this.init();
                }
            }

            draw() {
                if (this.exploded) return;

                const fov = canvas.width / 2;
                const perspective = fov / this.z;

                const cx = mouseX;
                const cy = mouseY;

                // Flatten 3D coordinates onto the 2D plane
                const sx = (this.x - cx) * perspective + canvas.width / 2;
                const sy = (this.y - cy) * perspective + canvas.height / 2;

                const tailPerspective = fov / (this.z + this.length);
                const sxTail = (this.x - cx) * tailPerspective + canvas.width / 2;
                const syTail = (this.y - cy) * tailPerspective + canvas.height / 2;

                const depthRatio = this.z / canvas.width; 
                let opacity = 0;
                
                if (depthRatio > 0.8) {
                    opacity = (1 - depthRatio) * 5;
                } else if (depthRatio < 0.1) {
                    opacity = depthRatio * 10;
                } else {
                    opacity = 1 - (depthRatio * 0.5);
                }
                opacity = Math.max(0, Math.min(1, opacity));

                if (sx < 0 || sx > canvas.width || sy < 0 || sy > canvas.height) {
                    return;
                }

                // --------- THE HITBOX COLLISION ENGINE ---------
                if (gamePhase === 'playing') {
                    // Keep the hit area aligned to the visible cursor so contact feels honest.
                    if (Math.hypot(sx - rawMouseX, sy - rawMouseY) < 28) {
                        this.exploded = true;
                        const now = performance.now();
                        // Kills within 900ms of each other chain into a streak
                        combo = (now - lastKillTime < 900) ? combo + 1 : 1;
                        lastKillTime = now;
                        gameScore += this.isGold ? 5 : 1;
                        if (combo > 0 && combo % 10 === 0) {
                            gameScore += 10;
                            bonusFlashTime = now;
                            shake = Math.max(shake, 10);
                        }
                        if (this.isGold) {
                            shake = Math.max(shake, 14);
                            createExplosion(sx, sy, '#FFD700', 14);
                        } else {
                            createExplosion(sx, sy, this.color);
                        }
                        return; // Halt render
                    }
                }

                // Render intact particle
                const goldActive = this.isGold && gamePhase === 'playing';
                ctx.save();
                ctx.beginPath();
                ctx.moveTo(sxTail, syTail);
                ctx.lineTo(sx, sy);
                ctx.strokeStyle = goldActive ? '#FFD700' : this.color;
                if (goldActive) {
                    ctx.shadowColor = '#FFD700';
                    ctx.shadowBlur = 16;
                }
                ctx.globalAlpha = opacity;
                ctx.lineWidth = Math.max(0.5, (goldActive ? 4.5 : 3) * perspective);
                ctx.lineCap = 'round';
                ctx.stroke();
                ctx.restore();
            }
        }

        for (let i = 0; i < numParticles; i++) {
            particles.push(new Particle());
        }

        const draw = () => {
            mouseX += (targetMouseX - mouseX) * 0.05;
            mouseY += (targetMouseY - mouseY) * 0.05;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Impact shake — translate the whole scene, decaying each frame
            ctx.save();
            if (shake > 0.5) {
                ctx.translate((Math.random() - 0.5) * shake, (Math.random() - 0.5) * shake);
                shake *= 0.85;
            } else {
                shake = 0;
            }

            // Arcade State Controller
            if (isGameActiveRef.current) {
                // Trigger Initialization
                if (gamePhase === 'idle') {
                    gamePhase = 'countdown';
                    countdownEndTime = performance.now() + 3500; // 3.5 seconds allowing '3' to render longer
                    gameScore = 0;
                    combo = 0;
                    lastKillTime = 0;
                    bonusFlashTime = -9999;
                    shake = 0;
                }

                if (gamePhase === 'countdown') {
                    const count = Math.ceil((countdownEndTime - performance.now()) / 1000);
                    
                    if (count <= 0) {
                        gamePhase = 'playing';
                        gameEndTime = performance.now() + 15000; // 15 seconds
                    } else {
                        // Render massive countdown numbers
                        ctx.save();
                        ctx.fillStyle = 'rgba(255,255,255,0.9)';
                        ctx.textBaseline = 'middle';
                        ctx.textAlign = 'center';
                        ctx.font = '900 180px Inter, sans-serif';
                        ctx.fillText(count.toString(), canvas.width / 2, canvas.height / 2);
                        
                        drawCometCursor();
                        ctx.restore();
                    }
                }

                if (gamePhase === 'playing') {
                    let timeRemaining = (gameEndTime - performance.now()) / 1000;
                    
                    if (timeRemaining <= 0) {
                        timeRemaining = 0;
                        gamePhase = 'idle';
                        isGameActiveRef.current = false;

                        if (onGameEndRef.current) {
                            onGameEndRef.current(gameScore);
                        }
                        if (setInactiveRef.current) {
                            setInactiveRef.current();
                        }
                    }

                    // Natively render the HUD onto the canvas to save insane React re-renders!
                    ctx.save();
                    ctx.fillStyle = timeRemaining < 3 ? '#ef4444' : 'rgba(255,255,255,0.9)'; // Turn red under 3s!
                    ctx.textBaseline = 'top';
                    ctx.textAlign = 'center';

                    ctx.font = '700 80px Inter, sans-serif';
                    ctx.fillText(timeRemaining.toFixed(2), canvas.width / 2, 80);

                    ctx.font = '500 24px Inter, sans-serif';
                    ctx.fillStyle = 'rgba(255,255,255,0.6)';
                    ctx.fillText(`SCORE: ${gameScore}`, canvas.width / 2, 170);

                    // Live streak counter — only shows while the chain is alive
                    const sinceKill = performance.now() - lastKillTime;
                    if (combo >= 3 && sinceKill < 900) {
                        ctx.font = '800 32px Inter, sans-serif';
                        ctx.fillStyle = '#FFD700';
                        ctx.globalAlpha = 1 - (sinceKill / 900) * 0.5;
                        ctx.fillText(`${combo} STREAK`, canvas.width / 2, 210);
                        ctx.globalAlpha = 1;
                    }
                    if (performance.now() - bonusFlashTime < 700) {
                        ctx.font = '900 40px Inter, sans-serif';
                        ctx.fillStyle = '#FFD700';
                        ctx.fillText('STREAK BONUS +10', canvas.width / 2, 252);
                    }

                    drawCometCursor();

                    ctx.restore();
                }
            } else {
                gamePhase = 'idle';
                gameEndTime = null;
                countdownEndTime = null;
                cursorTrail = [];
            }

            // Loop and draw logic layer
            for (let i = 0; i < particles.length; i++) {
                particles[i].draw();
                particles[i].update();
            }

            // Render active shrapnel from explosions
            for (let i = dustParticles.length - 1; i >= 0; i--) {
                let p = dustParticles[i];
                p.x += p.vx;
                p.y += p.vy;
                p.life -= 0.04;
                
                if (p.life <= 0) {
                    dustParticles.splice(i, 1);
                    continue;
                }
                
                ctx.save();
                ctx.fillStyle = p.color;
                ctx.globalAlpha = p.life;
                ctx.beginPath();
                ctx.arc(p.x, p.y, Math.random() * 3, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            }

            if (isGameActiveRef.current) {
                for (let i = 0; i < cursorTrail.length; i++) {
                    const next = cursorTrail[i + 1];
                    if (!next) continue;
                    cursorTrail[i].x += (next.x - cursorTrail[i].x) * 0.18;
                    cursorTrail[i].y += (next.y - cursorTrail[i].y) * 0.18;
                }
            }

            ctx.restore(); // Close the shake translation

            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <>
            {/* Dark backdrop — needed on every page, not just homepage */}
            <div
                className={`fixed inset-0 bg-[#0a0f1c] z-[90] pointer-events-none transition-opacity duration-500 ${
                    isActive ? 'opacity-100' : 'opacity-0'
                }`}
            />
            <canvas
                ref={canvasRef}
                className={`fixed inset-0 w-full h-full transition-all duration-500 ease-in-out ${
                    isActive
                       ? 'z-[100] pointer-events-auto cursor-none opacity-100'
                       : '-z-10 pointer-events-none opacity-100'
                }`}
                style={{
                    // Drop the radial mask during gameplay to expose the full arena
                    maskImage: isActive ? 'none' : 'radial-gradient(ellipse at center, black 60%, transparent 100%)',
                    WebkitMaskImage: isActive ? 'none' : 'radial-gradient(ellipse at center, black 60%, transparent 100%)'
                }}
            />
        </>
    );
};

export default AntigravityCanvas;
