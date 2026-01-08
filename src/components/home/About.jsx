import React from 'react';
import { motion } from 'framer-motion';
import { User, Layers, PenTool, Search } from 'lucide-react';

const About = () => {

    const skills = [
        { icon: <Search className="w-5 h-5" />, label: "User Research & Insights", color: "bg-brand-blue/10 text-brand-blue" },
        { icon: <Layers className="w-5 h-5" />, label: "UX Strategy & IA", color: "bg-brand-purple/10 text-brand-purple" },
        { icon: <PenTool className="w-5 h-5" />, label: "UI Design & Systems", color: "bg-brand-orange/10 text-brand-orange" },
        { icon: <User className="w-5 h-5" />, label: "Design Systems", color: "bg-brand-green/10 text-brand-green" },
        { icon: <Search className="w-5 h-5" />, label: "Prototyping & Testing", color: "bg-brand-blue/10 text-brand-blue" },
        { icon: <Layers className="w-5 h-5" />, label: "Developer Handoff", color: "bg-brand-purple/10 text-brand-purple" },
    ];

    return (
        <section className="relative py-24 bg-white overflow-hidden" id="about">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gray-50 rounded-full blur-3xl -z-10 opacity-60 translate-x-1/3 -translate-y-1/3"></div>

            <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* Left Column: Copy */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gray/50 mb-6">
                            <span className="w-2 h-2 rounded-full bg-brand-dark"></span>
                            <span className="text-sm font-bold text-gray-600 uppercase tracking-wider">About Me</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-dark mb-8 leading-tight">
                            Hi, I’m Avinash — a <span className="text-brand-purple relative inline-block">
                                UX/UI Designer
                                <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-yellow -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" opacity="0.6" />
                                </svg>
                            </span> who designs with purpose.
                        </h2>

                        <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-medium">
                            <p>
                                I design intuitive and meaningful digital experiences by combining user research, thoughtful UX strategy, and clean visual design. My focus is on solving real user problems while aligning design decisions with business goals.
                            </p>
                            <p>
                                I enjoy turning complex ideas into simple, usable products and believe that great design is not just how it looks, but <span className="text-brand-dark font-bold">how effortlessly it works</span>.
                            </p>
                        </div>

                        <div className="mt-10 flex flex-wrap gap-4">
                            {/* Signature or CTA could go here, for now just a separator */}
                            <div className="h-1 w-20 bg-brand-yellow rounded-full"></div>
                        </div>
                    </motion.div>

                    {/* Right Column: Visual Skills Composition */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Main Image Container */}
                        <div className="relative z-10 bg-brand-bg rounded-3xl md:rounded-[3rem] p-6 md:p-12 shadow-2xl border border-white rotate-1 md:rotate-2 hover:rotate-0 transition-transform duration-500">
                            {/* Decorative Grid */}
                            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#2D3436_1px,transparent_1px)] [background-size:16px_16px] rounded-[3rem] pointer-events-none"></div>

                            <h3 className="text-2xl font-bold text-brand-dark mb-8">Core Competencies</h3>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {skills.map((skill, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ y: -5 }}
                                        className={`p-4 rounded-2xl ${skill.color} bg-opacity-20 flex items-center gap-3 font-bold text-sm border border-transparent hover:border-current hover:bg-white hover:shadow-lg transition-all cursor-default`}
                                    >
                                        <div className="p-2 bg-white rounded-full shadow-sm">{skill.icon}</div>
                                        {skill.label}
                                    </motion.div>
                                ))}
                            </div>

                            {/* Floating Badge */}
                            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3 animate-bounce shadow-soft">
                                <span className="text-3xl">🚀</span>
                                <div>
                                    <div className="text-xs text-gray-400 font-bold uppercase">Open for</div>
                                    <div className="text-sm font-black text-brand-dark">Opportunities</div>
                                </div>
                            </div>
                        </div>

                        {/* Background Shapes */}
                        <div className="absolute top-10 -left-10 w-32 h-32 bg-brand-purple rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob"></div>
                        <div className="absolute -bottom-10 right-10 w-32 h-32 bg-brand-yellow rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-2000"></div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
