import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
    return <section id="home" className="min-h-screen flex items-center justify-center relative">

        <RevealOnScroll>
            <div className="text-center z-10 px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">Hi, I'm Isaac Fraire</h1>

                <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">I'm a full-stack developer fresh out of high school who greatly enjoys creating fully functional and asthetically pleasing web applications. My goal is currently to successfully transiton from the educational environment to the professional environment. I'd like to work a job that incorporates what I've learned and tailors to what I enjoy about web development.</p>
                <div className="flex justify-center space-x-4">
                    <a href="#projects" className="bg-cyan-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">View Projects</a>
                    <a href="#contact" className="border border-cyan-500/50 text-cyan-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-cyan-500/10">Contact Me</a>
                </div>
            </div>
        </RevealOnScroll>
    </section>
}