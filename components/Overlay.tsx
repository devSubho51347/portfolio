"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Overlay() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const y1 = useTransform(scrollYProgress, [0, 0.3], [0, -50]);
    const opacity1 = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 1, 0]);

    const y2 = useTransform(scrollYProgress, [0.2, 0.5], [100, 0]);
    const opacity2 = useTransform(scrollYProgress, [0.2, 0.4, 0.5, 0.6], [0, 1, 1, 0]);

    const y3 = useTransform(scrollYProgress, [0.5, 0.8], [100, 0]);
    const opacity3 = useTransform(scrollYProgress, [0.5, 0.7, 0.9], [0, 1, 1]);

    return (
        <div ref={containerRef} className="absolute inset-0 z-10 pointer-events-none h-[500vh]">
            <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center text-white p-10">
                {/* Section 1 */}
                <motion.div style={{ y: y1, opacity: opacity1 }} className="absolute text-center">
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">My Name.</h1>
                    <p className="text-xl md:text-2xl mt-4 font-light text-gray-300">Subhadeep Choudhury</p>
                </motion.div>

                {/* Section 2 */}
                <motion.div style={{ y: y2, opacity: opacity2 }} className="absolute left-10 md:left-24 max-w-2xl">
                    <h2 className="text-5xl md:text-7xl font-bold leading-tight">I am an AI Consultant.</h2>
                </motion.div>

                {/* Section 3 */}
                <motion.div style={{ y: y3, opacity: opacity3 }} className="absolute right-10 md:right-24 text-right max-w-2xl">
                    <h2 className="text-5xl md:text-7xl font-bold leading-tight">Building Scalable ML Solutions For Fortune 500 Companies.</h2>
                </motion.div>
            </div>
        </div>
    );
}
