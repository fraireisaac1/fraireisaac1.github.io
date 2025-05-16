import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
    const languages = ["HTML5", "CSS3", "JavaScript", "PHP", "TypeScript", "SQL", "Markdown", "JSON", "Node"];
    const technologies = ["Windows", "Linux", "Laravel", "React", "Express", "MongoDB", "Boostrap", "Tailwind"];
    const tools = ["VSCode", "Vim", "Emmet", "Powershell", "TMUX", "Phaser", "Git", "Github", "Virtual Box"];

    return <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">About Me</h2>
                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">Passionate developer with expertise in building scalable web applications and creating innovative solutions.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Languages</h3>
                            <div className="flex flex-wrap gap-2">
                                {languages.map((tech, key) => (
                                    <span key={key} className="bg-cyan-500/10 text-cyan-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Technologies</h3>
                            <div className="flex flex-wrap gap-2">
                                {technologies.map((tech, key) => (
                                    <span key={key} className="bg-cyan-500/10 text-cyan-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Tools</h3>
                            <div className="flex flex-wrap gap-2">
                                {tools.map((tech, key) => (
                                    <span key={key} className="bg-cyan-500/10 text-cyan-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Education</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                                <strong>A.S. in Computer and Information Technology</strong> - Estrella Mountain Community College
                            </li>
                            <li>
                                <strong>IT Specialist HTML5 Certification</strong> - West-Mec
                            </li>
                            <li>
                                <strong>IT Specialist JavaScript Certification</strong> - West-Mec
                            </li>
                            <li>
                                Relevant Coursework: Computer Programming & Technology, AP Computer Science Principles, Advanced Computer Science, Coding 1 & 2
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Volunteerism</h3>
                        <div className="space-y-4 text-gray-300">
                            <div>
                                <h4 className="font-semibold">Software Engineer at ABC Corp (NOT A REAL JOB!)</h4>
                                <h4 className="font-semibold">West Mec FBLA</h4>
                                <p>Compently worked Help Desk at multiple West Mec Open House events. Promoted the high-caliber program, and provided detailed information about the technologies we use.</p>
                                <p>Built decorations and helped create a custom car design for a community Trunk or Treat event to pass out candy and play games with families 2 years in a row.</p>
                            </div>
                        </div>
                    </div>
            </div>
            </div>
        </RevealOnScroll>
    </section>
}