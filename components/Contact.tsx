"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Calendar, Send } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 px-6 md:px-10 bg-[#050505] relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-bold text-white mb-8"
                        >
                            Ready to build something <span className="text-blue-500">intelligent?</span>
                        </motion.h2>
                        <p className="text-gray-400 text-xl mb-12 max-w-lg">
                            Let's skip the small talk. Book a call directly or send a brief overview of your technical challenges.
                        </p>

                        <div className="flex flex-col gap-6">
                            <a
                                href="https://calendly.com/choudhurysubhadeep51347"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 group"
                            >
                                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
                                    <Calendar size={20} />
                                </div>
                                <div>
                                    <span className="block text-white font-bold text-lg">Pick a Time</span>
                                    <span className="text-gray-500 text-sm italic">Direct access to my calendar</span>
                                </div>
                            </a>

                            <a
                                href="mailto:choudhurysubhadeep51347@gmail.com"
                                className="flex items-center gap-4 group"
                            >
                                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <span className="block text-white font-bold text-lg">Send Email</span>
                                    <span className="text-gray-500 text-sm">Response within 24 hours</span>
                                </div>
                            </a>
                        </div>

                        <div className="flex gap-4 mt-12">
                            {[Github, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition-all">
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-[40px] backdrop-blur-xl"
                    >
                        <form className="space-y-6" onSubmit={(e) => {
                            e.preventDefault();
                            const formData = new FormData(e.currentTarget);
                            const name = formData.get('name') || '';
                            const email = formData.get('email') || '';
                            const message = formData.get('message') || '';
                            window.location.href = `mailto:choudhurysubhadeep51347@gmail.com?subject=${encodeURIComponent(`Message from ${name}`)}&body=${encodeURIComponent(`${message}\n\nReply to: ${email}`)}`;
                        }}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400">Name</label>
                                    <input name="name" type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400">Email</label>
                                    <input name="email" type="email" placeholder="john@company.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400">Message</label>
                                <textarea name="message" placeholder="Tell me about your project..." rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none" />
                            </div>
                            <button type="submit" className="w-full bg-white text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-blue-500 hover:text-white transition-all group">
                                Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>
                </div>

                <div className="mt-40 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between text-gray-600 text-sm gap-4">
                    <p>© 2026 Subhadeep Choudhury. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-gray-400">Privacy Policy</a>
                        <a href="#" className="hover:text-gray-400">Terms of Service</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
