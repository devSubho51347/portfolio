"use client";

import { motion } from "framer-motion";

const steps = [
    {
        num: "01",
        title: "Discovery & Audit",
        desc: "Deep dive into your existing data, infrastructure, and business objectives."
    },
    {
        num: "02",
        title: "Experimental Proof",
        desc: "Rapid prototyping and validation of the AI solution in a controlled environment."
    },
    {
        num: "03",
        title: "System Integration",
        desc: "Architecture design and integration with your core product stack."
    },
    {
        num: "04",
        title: "Deployment & Scaling",
        desc: "Hardening for production, setting up monitoring, and scaling for user growth."
    }
];

export default function Process() {
    return (
        <section id="process" className="py-24 px-6 md:px-10">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div className="max-w-xl">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Built For Certainty</h2>
                        <p className="text-gray-400 text-lg">
                            My process eliminates guesswork, ensuring that every ML investment drives measurable business value.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="relative group"
                        >
                            <div className="text-8xl font-black text-white/5 absolute -top-10 -left-6 select-none transition-colors group-hover:text-blue-500/10">
                                {step.num}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 relative z-10 transition-colors group-hover:text-blue-400">
                                {step.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed relative z-10">
                                {step.desc}
                            </p>
                            {/* Connector Line (Desktop) */}
                            {idx < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-[1.5rem] right-[-3rem] w-12 h-[1px] bg-white/10" />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
