import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const HowItWorks = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Stacked Sticker Text - Slide In Stagger */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
                        }}
                        className="relative z-10 flex flex-col items-start select-none"
                    >
                        <motion.div
                            variants={{ hidden: { x: -50, opacity: 0 }, visible: { x: 0, opacity: 1 } }}
                            className="transform -rotate-[6deg] bg-brand-dark text-white px-8 py-4 rounded-2xl text-4xl md:text-5xl font-bold shadow-lg mb-4 hover:scale-105 transition-transform duration-300 border-2 border-brand-dark/5"
                        >
                            How to
                        </motion.div>
                        <motion.div
                            variants={{ hidden: { x: -50, opacity: 0 }, visible: { x: 0, opacity: 1 } }}
                            className="transform rotate-[2deg] bg-brand-yellow text-brand-dark px-10 py-5 rounded-2xl text-4xl md:text-5xl font-bold shadow-lg mb-4 ml-12 hover:scale-105 transition-transform duration-300 border-2 border-brand-dark/5"
                        >
                            start
                        </motion.div>
                        <motion.div
                            variants={{ hidden: { x: -50, opacity: 0 }, visible: { x: 0, opacity: 1 } }}
                            className="relative transform -rotate-[-6deg] bg-brand-orange text-white px-8 py-4 rounded-2xl text-4xl md:text-5xl font-bold shadow-lg hover:scale-105 transition-transform duration-300"
                        >
                            a Project?

                            {/* Star Icon */}
                            <div className="absolute -top-6 -right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md animate-[spin_4s_linear_infinite]">
                                <svg className="w-8 h-8 text-brand-yellow" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                                </svg>
                            </div>
                        </motion.div>

                        <motion.p
                            variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                            className="mt-12 text-lg text-gray-500 max-w-md leading-relaxed"
                        >
                            It's simple. We define your goals, I craft the magic, and we launch something distinctive together.
                        </motion.p>
                    </motion.div>

                    {/* Right: Gradient Video Card with Reveal */}
                    <motion.div
                        initial={{ opacity: 0, rotate: 5, scale: 0.9 }}
                        whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, type: "spring" }}
                        className="relative group cursor-pointer"
                    >
                        <div className="aspect-square bg-gradient-to-br from-[#FDCB58] via-[#FC6B00] to-[#6C5CE7] rounded-[3rem] shadow-2xl flex items-center justify-center relative overflow-hidden transition-all duration-500 hover:shadow-brand-purple/50 hover:-translate-y-2">

                            {/* Glass Overlay/Sheen */}
                            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Play Button Interface */}
                            <div className="text-center text-white relative z-10">
                                <div className="w-20 h-20 rounded-full border-2 border-white/50 border-dashed animate-[spin_10s_linear_infinite] flex items-center justify-center mb-4 mx-auto">
                                </div>
                                <div className="absolute top-0 left-0 right-0 w-20 h-20 flex items-center justify-center mx-auto">
                                    <Play fill="white" className="w-8 h-8 text-white translate-x-1" />
                                </div>
                                <div className="font-bold text-xl tracking-wide opacity-90 mt-4">
                                    How to start?
                                </div>
                            </div>

                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
