"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        quote: "Subhadeep's ability to simplify complex ML architectures saved our engineering team months of trial and error.",
        author: "Tech Lead",
        company: "FinTech Startup",
        image: "https://i.pravatar.cc/150?u=1"
    },
    {
        quote: "The LLM pipeline he built for us handled a 10x spike in traffic without a single failure. Truly production-grade.",
        author: "Director of AI",
        company: "Enterprise SaaS",
        image: "https://i.pravatar.cc/150?u=2"
    },
    {
        quote: "His strategic audit revealed inefficiencies in our MLOps that cut our cloud compute costs by nearly 40%.",
        author: "CTO",
        company: "Health-Tech Firm",
        image: "https://i.pravatar.cc/150?u=3"
    }
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-24 px-6 md:px-10 bg-[#0a0a0a]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Built by Developers, <br /> Trusted by Leaders</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-neutral-900 border border-white/5 p-8 rounded-3xl flex flex-col items-center text-center relative"
                        >
                            <Quote size={40} className="text-blue-500/20 absolute top-6 left-6" />
                            <p className="text-gray-300 text-lg italic mb-8 relative z-10">"{t.quote}"</p>
                            <div className="flex flex-col items-center mt-auto">
                                <img src={t.image} alt={t.author} className="w-14 h-14 rounded-full border-2 border-blue-500 mb-4" />
                                <h4 className="text-white font-bold">{t.author}</h4>
                                <span className="text-gray-500 text-sm">{t.company}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
