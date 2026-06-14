"use client";

import React, { useEffect, useState, useRef } from "react";
import { useSpring, useInView } from "framer-motion";

const AnimatedNumber = ({ valueStr, colorClass }) => {
    const ref = useRef(null);
    // Parse numbers and suffixes. e.g "10%" -> 10, "%" or "350k+" -> 350, "k+"
    const match = valueStr.match(/^([\d.]+)(.*)$/);
    const targetValue = match ? parseFloat(match[1]) : 0;
    const suffix = match ? match[2] : valueStr;

    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const springValue = useSpring(0, {
        damping: 30,
        stiffness: 100,
        mass: 1,
    });

    useEffect(() => {
        if (isInView) {
            springValue.set(targetValue);
        }
    }, [isInView, targetValue, springValue]);

    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            // Format number nicely, no decimals
            setDisplayValue(Math.floor(latest));
        });
    }, [springValue]);

    return (
        <span ref={ref} className={`${colorClass} font-bold text-5xl tracking-tighter`}>
            {displayValue}
            {suffix}
        </span>
    );
};

export default AnimatedNumber;
