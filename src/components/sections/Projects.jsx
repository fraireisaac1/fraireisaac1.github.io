import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    return <section id="projects" className="min-h-screen flex items-center justify-center py-20">

        <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">Lyst-V2</h3>
                        <p className="text-gray-400 mb-3">The second iteration of my Lyst project that creates and stores lists the user creates, this time using MVC architecture.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["MVC Architecture", "Laravel", "Node.js", "PHP"].map((tech, key) => (
                                <span key={key} className="bg-blue500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">{tech}</span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a href="https://github.com/fraireisaac1/lyst-v2" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project &rarr;</a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">Deelish</h3>
                        <p className="text-gray-400 mb-3">A website designed around databases. It's meant to store and modify the data of recipes that the user enters.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["JavaScript", "Node.js", "Express"].map((tech, key) => (
                                <span key={key} className="bg-blue500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">{tech}</span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a href="https://github.com/fraireisaac1/Deelish" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project &rarr;</a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">WBLA Elevate Project</h3>
                        <p className="text-gray-400 mb-3">WBLA tasked my team to create an e-commerce website for weight-training and excercise equipment. Mind you this is before our class learned about databases.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Node.js", "JavaScript", "GIMP 2.10.34"].map((tech, key) => (
                                <span key={key} className="bg-blue500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">{tech}</span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a href="https://github.com/fraireisaac1/wbla-3pm-es" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project &rarr;</a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">Grocery Website</h3>
                        <p className="text-gray-400 mb-3">This website was the first major instance of me learning about databases. The database in this project is modeled to be that of a grocery store's inventory.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["MongoDB", "Node.js", "JavaScript", "Express"].map((tech, key) => (
                                <span key={key} className="bg-blue500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">{tech}</span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a href="https://github.com/fraireisaac1/mongodb-with-rest_client" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project &rarr;</a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">Mongoose Express Server</h3>
                        <p className="text-gray-400 mb-3">Further developing upon what we learned with the grocery database project. This project incorporates more along the lines with CRUD operators and further database usage.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Mongoose", "MongoDB", "Node.js", "JavaScript", "Express"].map((tech, key) => (
                                <span key={key} className="bg-blue500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">{tech}</span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a href="https://github.com/fraireisaac1/mongoose-express-server" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project &rarr;</a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">MECAZON</h3>
                        <p className="text-gray-400 mb-3">MECAZON was a class project from West Mec that ever student worked on. My team worked with creating the react components for the project specifically, and our repository reflects that work.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["MongoDB", "Node.js", "JavaScript", "Express"].map((tech, key) => (
                                <span key={key} className="bg-blue500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">{tech}</span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a href="https://github.com/fraireisaac1/TeamB-WestMEC-Temp" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project &rarr;</a>
                        </div>
                    </div>

                </div>
            </div>
        </RevealOnScroll>
    </section>
}