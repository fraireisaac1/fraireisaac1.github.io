import { RevealOnScroll } from "../RevealOnScroll";
import resumeImg from "../../images/resume.PNG";

export const Resume = () => {
    return <section id="resume" className="min-h-screen flex items-center justify-center py-20">

        <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Resume</h2>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-6">

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">Tailwind Resume</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center">
                            <img src={resumeImg} alt="resume" className="w-100 h-50 m-3 rounded-xl border border-blue-500 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all" />
                            <div>
                                <p className="text-gray-400 m-3">My resume has gone through a plethora of itterations since high school. This one I created at West-Mec with my knowledge of Tailwind CSS to properly style it.</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {["Tailwind CSS", "HTML5"].map((tech, key) => (
                                        <span key={key} className="bg-blue500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between items-center">
                            <a href="https://github.com/fraireisaac1/Tailwind-Resume/tree/main" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Repository &rarr;</a>
                        </div>
                    </div>

                </div>
            </div>
        </RevealOnScroll>
    </section>
}
