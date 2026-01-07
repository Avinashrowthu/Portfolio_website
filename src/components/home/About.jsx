import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Code, Palette, Coffee } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const About = () => {
    return (
        <section id="about" className="py-32 bg-brand-bg relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Image / Sticker Composition */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Main Photo Placeholder */}
                        <div className="w-full aspect-[4/5] bg-gray-200 rounded-[3rem] overflow-hidden relative z-10 shadow-2xl rotate-3 border-4 border-white">
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" alt="Profile" className="w-full h-full object-cover" />
                        </div>

                        {/* Floating Stickers */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-6 -left-6 bg-brand-yellow text-brand-dark font-bold px-6 py-3 rounded-full shadow-lg z-20 border-2 border-white -rotate-12"
                        >
                            Hello! 👋
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute bottom-10 -right-6 bg-brand-orange text-white font-bold px-6 py-3 rounded-full shadow-lg z-20 border-2 border-white rotate-6"
                        >
                            UX Wizard 🧙‍♂️
                        </motion.div>
                    </motion.div>

                    {/* Right: Bio Content */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="mb-6 -ml-4">
                                <SectionHeading title1="About" title2="Me" title2Color="bg-brand-green" />
                            </div>
                            <p className="text-xl text-gray-500 leading-relaxed font-medium">
                                I'm a passionate designer who bridges the gap between functional interfaces and emotional connections. I believe that good design should not only work well but also bring a smile to your face.
                            </p>
                        </motion.div>

                        {/* Fun Stats / Values */}
                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { icon: Code, label: "Clean Code", color: "bg-brand-blue" },
                                { icon: Palette, label: "Pixel Perfect", color: "bg-brand-purple" },
                                { icon: Sparkles, label: "Motion", color: "bg-brand-yellow" },
                                { icon: Coffee, label: "Caffeine", color: "bg-brand-orange" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center gap-4 p-4 rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                                >
                                    <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center text-white`}>
                                        <item.icon size={20} />
                                    </div>
                                    <span className="font-bold text-gray-700">{item.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default About;
