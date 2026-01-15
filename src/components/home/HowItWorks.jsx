import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Layers, Code } from 'lucide-react';

const HowItWorks = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">

                    {/* Left: Heading & Subheading */}
                    <div className="sticky top-32">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-4xl md:text-6xl font-black text-brand-dark mb-6 leading-tight tracking-tight">
                                What Makes <br />
                                <span className="text-brand-orange">My Work</span> <br />
                                Different
                            </h2>
                            <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-md">
                                I design experiences that are clean, scalable, and built to ship.
                            </p>
                        </motion.div>
                    </div>

                    {/* Right: Feature Cards */}
                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-brand-bg p-8 rounded-[2rem] border border-gray-100 shadow-soft hover:shadow-xl transition-all"
                        >
                            <div className="flex items-start gap-5">
                                <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue shrink-0">
                                    <Layout className="w-7 h-7" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-brand-dark mb-2">Clarity Over Clutter</h3>
                                    <p className="text-gray-600 font-medium leading-relaxed">
                                        Interfaces that feel natural and easy to navigate.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-brand-bg p-8 rounded-[2rem] border border-gray-100 shadow-soft hover:shadow-xl transition-all"
                        >
                            <div className="flex items-start gap-5">
                                <div className="w-14 h-14 rounded-2xl bg-brand-purple/10 flex items-center justify-center text-brand-purple shrink-0">
                                    <Layers className="w-7 h-7" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-brand-dark mb-2">Consistency at Scale</h3>
                                    <p className="text-gray-600 font-medium leading-relaxed">
                                        Design systems that grow with products and teams.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-brand-bg p-8 rounded-[2rem] border border-gray-100 shadow-soft hover:shadow-xl transition-all"
                        >
                            <div className="flex items-start gap-5">
                                <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
                                    <Code className="w-7 h-7" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-brand-dark mb-2">Design That Works in Reality</h3>
                                    <p className="text-gray-600 font-medium leading-relaxed">
                                        Practical solutions aligned with real development constraints.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
