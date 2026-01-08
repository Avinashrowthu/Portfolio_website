import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Target, Lightbulb } from 'lucide-react';

const HowItWorks = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left: Stacked Sticker Text - Slide In Stagger */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
                        }}
                        className="relative z-10 flex flex-col items-center select-none"
                    >
                        <motion.div
                            variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                            className="transform -rotate-[6deg] bg-brand-orange text-white px-6 py-2 md:px-8 md:py-3 rounded-xl md:rounded-2xl text-2xl sm:text-3xl md:text-5xl font-black shadow-lg z-10 border-2 border-white"
                        >
                            Design
                        </motion.div>
                        <motion.div
                            variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                            className="transform rotate-[6deg] bg-brand-yellow text-brand-dark px-8 py-3 md:px-10 md:py-4 rounded-xl md:rounded-2xl text-2xl sm:text-3xl md:text-5xl font-black shadow-lg -mt-3 md:-mt-4 z-20 border-2 border-white"
                        >
                            With
                        </motion.div>
                        <motion.div
                            variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                            className="relative transform -rotate-[3deg] bg-brand-dark text-white px-6 py-3 md:px-8 md:py-4 rounded-xl md:rounded-2xl text-2xl sm:text-3xl md:text-5xl font-black shadow-lg -mt-3 md:-mt-4 z-30 flex items-center gap-4 border-2 border-white"
                        >
                            Purpose
                        </motion.div>

                        <motion.div className="h-16" /> {/* Spacer */}
                    </motion.div>

                    {/* Right: Philosophy Cards */}
                    <div className="space-y-4">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-brand-bg p-6 md:p-7 rounded-[2rem] border border-gray-100 shadow-soft hover:shadow-xl transition-all"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center text-brand-red shrink-0">
                                    <Heart className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-[24px] font-black text-brand-dark mb-1">Empathy First</h3>
                                    <p className="text-gray-500 text-sm font-medium leading-relaxed">
                                        Understanding the person behind the screen is the foundation of every pixel I place.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-brand-bg p-6 md:p-7 rounded-[2rem] border border-gray-100 shadow-soft hover:shadow-xl transition-all"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue shrink-0">
                                    <Target className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-[24px] font-black text-brand-dark mb-1">Goal Oriented</h3>
                                    <p className="text-gray-500 text-sm font-medium leading-relaxed">
                                        Design is a tool for problem solving, not just decoration. Every choice has a reason.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-brand-bg p-6 md:p-7 rounded-[2rem] border border-gray-100 shadow-soft hover:shadow-xl transition-all"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-brand-yellow/10 flex items-center justify-center text-brand-yellow shrink-0">
                                    <Lightbulb className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-[24px] font-black text-brand-dark mb-1">Simple, Not Basic</h3>
                                    <p className="text-gray-500 text-sm font-medium leading-relaxed">
                                        Complexity should be hidden behind an interface that feels effortless to use.
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
