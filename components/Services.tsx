"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Workflow, ShieldCheck, Microscope } from "lucide-react";

const services = [
    {
        title: "LLM Orchestration",
        desc: "Building complex RAG systems, fine-tuning open-source models, and optimizing prompt engineering for enterprise scale.",
        icon: BrainCircuit,
        gradient: "from-blue-600 to-cyan-500"
    },
    {
        title: "Production MLOps",
        desc: "Automated training loops, model versioning, monitoring, and CI/CD pipelines specifically for machine learning workflows.",
        icon: Workflow,
        gradient: "from-indigo-600 to-purple-500"
    },
    {
        title: "System Design for AI",
        desc: "Scalable infrastructure planning that handles high-throughput inference while minimizing latency and cloud costs.",
        icon: ShieldCheck,
        gradient: "from-blue-500 to-indigo-600"
    },
    {
        title: "ML Strategy & Audit",
        desc: "Comprehensive review of current AI capabilities, data strategy, and technical roadmap for market advantage.",
        icon: Microscope,
        gradient: "from-purple-600 to-pink-500"
    }
];

export default function Services() {
    return (
        <section id="services" className="py-24 px-6 md:px-10 bg-[#0a0a0a]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Expert Solutions</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Focused on production efficiency, technical depth, and business impact.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-8 rounded-3xl bg-neutral-900 border border-white/5 relative overflow-hidden group hover:border-white/10 transition-colors"
                        >
                            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity`} />

                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white mb-6 shadow-xl`}>
                                <service.icon size={28} />
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                            <p className="text-gray-400 leading-relaxed">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
