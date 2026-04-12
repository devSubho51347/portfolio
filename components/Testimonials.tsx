"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        quote: "Subhadeep stands out for his strong entrepreneurial mindset and deep technical expertise. He consistently approaches problems with a focus on impact, scalability, and real-world value, going beyond just building models to delivering meaningful business outcomes. His ability to bridge business understanding with advanced machine learning, combined with his ownership-driven attitude and curiosity, makes him a highly valuable collaborator and a natural problem solver. I highly recommend him for roles that demand innovation and forward-thinking execution.",
        author: "Data Science Senior Consultant",
        company: "ZS Associates",
        image: "https://i.pravatar.cc/150?u=1"
    },
    {
        quote: "I had the chance to work alongside Subhadeep as a peer, and what stood out most was his entrepreneurial mindset and proactive approach. While we were often tackling similar problems, he consistently pushed boundaries—thinking beyond the immediate task to explore scalable and impactful solutions. He’s someone who takes initiative, experiments with new ideas, and isn’t afraid to challenge the usual way of doing things. Along with his strong technical skills, this mindset makes him a great teammate to learn from and collaborate with. Highly recommend working with him.",
        author: "Data Science Associate Consultant",
        company: "ZS Associates",
        image: "https://media.licdn.com/dms/image/v2/D4D03AQGgxQK3wzENhA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1679937436052?e=1777507200&v=beta&t=q4--KZ-12CzPQZ2JXV3B4CjPc4vZ-H_CugvFBf0Zhqo"
    },
    {
        quote: "His RAG Customer Support Pipeline helped us reduce our average response time by 30% and significantly improved customer satisfaction. Subhadeep's ability to understand our unique challenges and tailor a solution that seamlessly integrated with our existing systems was impressive. His proactive communication and dedication to ensuring the success of the project made the entire process smooth and efficient. I highly recommend Subhadeep for any organization looking to leverage AI for customer support or similar applications.",
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
