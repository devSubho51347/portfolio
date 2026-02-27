"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Factory, Zap, Target } from "lucide-react";

const targetAudience = [
    {
        title: "Growth-Stage Startups",
        desc: "Scale your AI-driven features without compromising on technical debt or latency.",
        icon: Zap
    },
    {
        title: "Fortune 500 Enterprises",
        desc: "Modernize legacy systems with production-grade ML pipelines and LLM integration.",
        icon: Factory
    },
    {
        title: "AI Product Teams",
        desc: "Refine architecture for better cost-efficiency and model performance metrics.",
        icon: Target
    }
];

export default function WhoIHelp() {
    return (
        <section id="about" className="py-24 px-6 md:px-10">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 border-l-4 border-blue-600 pl-6">
                            Helping Organizations <br /> Scale Intelligent Systems
                        </h2>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            I bridge the gap between experimental notebooks and production-ready systems. With experience building ML solutions for massive datasets, I help companies turn AI concepts into high-margin products.
                        </p>
                        <ul className="space-y-4">
                            {["99.9% Pipeline Uptime", "35% Cost Reduction in Inference", "Production-First ML Culture"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-300">
                                    <CheckCircle2 className="text-blue-500" size={20} />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-6">
                        {targetAudience.map((target, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-5 hover:bg-white/[0.08] transition-colors group"
                            >
                                <div className="p-3 rounded-lg bg-blue-500/10 text-blue-500 group-hover:scale-110 transition-transform">
                                    <target.icon size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">{target.title}</h3>
                                    <p className="text-gray-400 text-sm">{target.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
