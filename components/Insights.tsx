"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { blogs } from "@/lib/blogData";

export default function Insights() {
    return (
        <section id="insights" className="py-24 px-6 md:px-10 bg-[#0a0a0a]">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col items-center text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-4"
                    >
                        Technical Deep Dives for Builders
                    </motion.span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Insights on AI, ML Systems & <br className="hidden md:block" /> Production Engineering
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl">
                        Deep dives into real-world AI system design, deployment strategies, and performance optimization.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog, idx) => (
                        <motion.a
                            key={idx}
                            href={blog.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group relative flex flex-col p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/[0.08] transition-all duration-300 shadow-xl overflow-hidden"
                        >
                            {/* Gradient Glow on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="flex items-center justify-between mb-4">
                                <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">
                                    {blog.category}
                                </span>
                                <ExternalLink size={14} className="text-gray-500 group-hover:text-blue-400 transition-colors" />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-100 transition-colors">
                                {blog.title}
                            </h3>

                            <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                                {blog.description}
                            </p>

                            <div className="flex items-center justify-between pt-4 border-t border-white/10">
                                <span className="text-xs text-gray-500">{blog.readTime}</span>
                                <div className="flex items-center gap-1 text-sm font-semibold text-blue-400 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                                    Read Article <ArrowRight size={14} />
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* Blog Footer CTA */}
                <div className="mt-20 p-8 rounded-3xl bg-gradient-to-r from-blue-600/20 via-indigo-600/10 to-transparent border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h4 className="text-xl font-bold text-white mb-2">Want help implementing this in your product?</h4>
                        <p className="text-gray-400">Let's discuss how we can build a high-performance ML system for your specific needs.</p>
                    </div>
                    <a
                        href="#contact"
                        className="whitespace-nowrap flex items-center gap-2 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] group"
                    >
                        🔥 Book Strategy Call
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
        </section>
    );
}
