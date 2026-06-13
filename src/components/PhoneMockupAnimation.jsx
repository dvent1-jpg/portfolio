import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const PhoneMockupAnimation = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // We have 4 main phases in this scroll:
    // 0.0 - 0.2: Phone scrolls into view (hidden -> visible)
    // 0.3 - 0.5: Map Pins pop in & Header/Footer slide in
    // 0.5 - 0.7: Small Drawer slides up
    // 0.7 - 0.9: Large Drawer fully expands over the map

    const opacityTitle = useTransform(scrollYProgress, [0.1, 0.2], [0, 1]);

    // Map base stays constant

    // Map Pins pop in
    const pinsScale = useTransform(scrollYProgress, [0.25, 0.35], [0.8, 1]);
    const pinsOpacity = useTransform(scrollYProgress, [0.25, 0.35], [0, 1]);

    // Top UI elements sliding down
    const topUiY = useTransform(scrollYProgress, [0.15, 0.3], [-100, 0]);
    const topUiOpacity = useTransform(scrollYProgress, [0.15, 0.3], [0, 1]);

    // Bottom Footer sliding up
    const footerY = useTransform(scrollYProgress, [0.15, 0.3], [100, 0]);
    const footerOpacity = useTransform(scrollYProgress, [0.15, 0.3], [0, 1]);

    // Drawers sliding up
    // Drawer 1 (small) comes in first
    const drawer1Y = useTransform(scrollYProgress, [0.4, 0.55], [400, 0]);
    const drawer1Opacity = useTransform(scrollYProgress, [0.4, 0.45], [0, 1]);

    // Drawer 2 (large) expands upward over Drawer 1
    const drawer2Y = useTransform(scrollYProgress, [0.65, 0.85], [800, 0]);
    const drawer2Opacity = useTransform(scrollYProgress, [0.65, 0.75], [0, 1]);

    // Drawer 1 fades out as Drawer 2 covers it to prevent messy stacking
    const drawer1FadeOut = useTransform(scrollYProgress, [0.7, 0.8], [1, 0]);

    return (
        <div ref={containerRef} className="relative w-full aspect-[1209/2383] max-w-[400px] mx-auto overflow-hidden rounded-[3rem] shadow-2xl bg-[#F6F6F6] isolation-auto">

            {/* Inner Screen Container - Prevents UI from rendering underneath or outside the phone's physical bezels */}
            <div className="absolute top-[2%] bottom-[2%] left-[4%] right-[4%] overflow-hidden rounded-[2.5rem] bg-white">

                {/* 1. The Base Screen (Floor) */}
                <div className="absolute inset-0">
                    <img src="/images/ai-search/animation-components/Map.png" alt="Map Background" className="w-full h-full object-cover" />
                </div>

                {/* 2. Map Pins (Pop In) */}
                <motion.div
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    style={{ scale: pinsScale, opacity: pinsOpacity, transformOrigin: 'center' }}
                >
                    <img src="/images/ai-search/animation-components/Map%20Pins.png" alt="Map Pins" className="w-[96.7%] h-auto object-contain" />
                </motion.div>

                {/* 3. Top UI Elements (Slide Down) */}
                <motion.div
                    className="absolute top-0 left-0 right-0 z-20 flex flex-col pointer-events-none"
                    style={{ y: topUiY, opacity: topUiOpacity }}
                >
                    <img src="/images/ai-search/animation-components/Status%20Bar.png" alt="Status Bar" className="w-full h-auto object-contain" />
                    <img src="/images/ai-search/animation-components/Header%20Combo.png" alt="Header" className="w-full h-auto object-contain -mt-[1px]" />
                    <img src="/images/ai-search/animation-components/Filter%20Carousel%20Combo.png" alt="Filters" className="w-[105.5%] max-w-none h-auto object-contain -mt-[1px]" />
                </motion.div>

                {/* 4. Small Drawer (Slides up) */}
                <motion.div
                    className="absolute bottom-0 left-0 right-0 z-30 pointer-events-none pb-[85px]"
                    style={{ y: drawer1Y, opacity: drawer1Opacity }}
                >
                    <motion.img
                        src="/images/ai-search/animation-components/Drawer.png"
                        alt="Small Drawer"
                        className="w-full h-auto object-contain"
                        style={{ opacity: drawer1FadeOut }}
                    />
                </motion.div>

                {/* 5. Large Drawer (Expands up over everything except maybe header) */}
                <motion.div
                    className="absolute bottom-0 left-0 right-0 z-40 origin-bottom pointer-events-none pb-[85px]"
                    style={{ y: drawer2Y, opacity: drawer2Opacity }}
                >
                    <img src="/images/ai-search/animation-components/Drawer_Expanded_WhySection.png" alt="Expanded Drawer" className="w-full h-auto object-contain" />
                </motion.div>

                {/* 6. Footer */}
                <motion.div
                    className="absolute bottom-0 left-0 right-0 z-50 pointer-events-none bg-white"
                    style={{ y: footerY, opacity: footerOpacity }}
                >
                    <img src="/images/ai-search/animation-components/Footer.png" alt="Footer Navigation" className="w-full h-auto object-contain" />
                </motion.div>
            </div>

            {/* 7. The Hollow Frame (The glass wrapper) */}
            <div className="absolute inset-0 z-50 pointer-events-none">
                <img src="/images/ai-search/animation-components/Phone-Frame.png" alt="Device Frame" className="w-full h-full object-cover" />
            </div>
        </div>
    );
};

export default PhoneMockupAnimation;
