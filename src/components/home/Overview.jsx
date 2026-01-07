import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';

const Overview = () => {
    return (
        <section className="py-24 bg-[#F4EDE5] relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20 text-center">

                {/* Sticker Heading - Fixed Size & Interactions */}
                <SectionHeading title1="Project" title2="Overview" />

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-left space-y-6"
                    >
                        <h2 className="text-5xl md:text-6xl font-extrabold text-brand-dark leading-[1.1]">
                            Design systems that scale with your <span className="text-brand-purple">ambition</span>.
                        </h2>
                        <p className="text-lg text-gray-500 leading-relaxed">
                            I create robust design frameworks, not just screens. Every element is crafted to be reusable, accessible, and delightful.
                        </p>

                        {/* Platform Icons / Tags */}
                        <div className="flex flex-wrap gap-3 pt-4">
                            {['Figma', 'React', 'Tailwind', 'Motion', 'Prototyping'].map((tag, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="px-5 py-2.5 bg-gray-50 rounded-xl border border-gray-100 font-bold text-sm text-brand-dark hover:bg-brand-dark hover:text-white transition-colors cursor-default"
                                >
                                    {tag}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right side illustration - Floating Cluster */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", bounce: 0.4 }}
                        className="relative h-[400px] bg-brand-gray rounded-[3rem] border border-gray-100/50 shadow-inner p-8 flex items-center justify-center overflow-hidden group"
                    >
                        {/* Abstract Floating UI Elements */}
                        <div className="relative p-6 bg-white rounded-3xl shadow-xl w-64 rotate-6 group-hover:rotate-0 transition-transform duration-500 z-10 border border-gray-100">
                            <div className="flex gap-2 mb-4">
                                <div className="w-8 h-8 rounded-full bg-brand-red/20" />
                                <div className="w-32 h-8 rounded-full bg-gray-100" />
                            </div>
                            <div className="w-full h-32 bg-brand-blue/10 rounded-2xl mb-2" />
                            <div className="w-1/2 h-4 bg-gray-100 rounded-full" />
                        </div>

                        <div className="absolute top-10 right-10 p-4 bg-brand-green/10 backdrop-blur-md rounded-2xl shadow-lg -rotate-12 group-hover:-rotate-6 transition-transform duration-500">
                            <div className="w-12 h-12 bg-brand-green rounded-xl flex items-center justify-center text-white text-2xl">✨</div>
                        </div>

                        <div className="absolute bottom-10 left-10 py-3 px-6 bg-brand-dark text-white rounded-full shadow-lg rotate-12 group-hover:rotate-6 transition-transform duration-500 z-20">
                            <span className="font-bold">Platform x Tools</span>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default Overview;
