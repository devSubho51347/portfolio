export default function Projects() {
    const projects = [
        {
            title: "Neon Pulse",
            category: "Interactive WebGL Experiment",
            description: "A real-time audio reactive visualizer built with Three.js and GLSL."
        },
        {
            title: "Velvet UI",
            category: "Design System",
            description: "An enterprise-grade React component library focused on accessibility and motion."
        },
        {
            title: "Astro Commerce",
            category: "E-commerce Platform",
            description: "Headless Shopify storefront with Next.js 14 and ISR."
        },
        {
            title: "Mono Portfolio",
            category: "Personal Brand",
            description: "Minimalist portfolio template for photographers."
        }
    ];

    return (
        <section id="case-studies" className="relative z-10 w-full min-h-screen bg-[#121212] flex flex-col items-center justify-center py-24 px-4">
            <div className="max-w-7xl w-full">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-16 text-center tracking-tight">Selected Case Studies</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-white/5"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className="relative z-10">
                                <span className="text-sm font-mono text-gray-400 uppercase tracking-wider">{project.category}</span>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mt-2 mb-4 group-hover:text-blue-200 transition-colors">{project.title}</h3>
                                <p className="text-gray-300 leading-relaxed">{project.description}</p>
                            </div>

                            <div className="mt-8 flex items-center text-sm font-medium text-white/50 group-hover:text-white transition-colors">
                                View Case Study
                                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
