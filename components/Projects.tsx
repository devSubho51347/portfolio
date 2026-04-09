export default function Projects() {
    return (
        <section
            id="case-studies"
            className="relative z-10 w-full bg-[#121212] flex flex-col items-center justify-center py-24 px-4"
        >
            <div className="max-w-7xl w-full">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-10 text-center tracking-tight">
                    Case Studies
                </h2>

                <div className="max-w-3xl mx-auto relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-10 md:p-14">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-indigo-600/5 to-transparent" />

                    <div className="relative z-10 text-center">
                        <p className="text-sm font-semibold tracking-[0.25em] text-blue-400 uppercase">
                            Coming Soon
                        </p>
                        <h3 className="mt-4 text-2xl md:text-4xl font-bold text-white">
                            Detailed Case Studies are on the way.
                        </h3>
                        <p className="mt-4 text-gray-400 text-base md:text-lg">
                            I’m preparing write-ups covering architecture decisions, trade-offs, and measurable outcomes.
                        </p>

                        <div className="mt-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-black/20 text-gray-300">
                            <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                            Stay tuned
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
