import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';
import { Button } from '../ui/Button';
import { Star, Sparkles, Smartphone, ArrowRight, Zap, Globe } from 'lucide-react';

const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

    // Mouse Parallax Logic
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = ({ clientX, clientY, currentTarget }) => {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        const xPct = (clientX - left) / width - 0.5;
        const yPct = (clientY - top) / height - 0.5;
        mouseX.set(xPct);
        mouseY.set(yPct);
    };

    const springConfig = { damping: 15, stiffness: 150, mass: 0.5 };
    const xHead = useSpring(useTransform(mouseX, [-0.5, 0.5], [-20, 20]), springConfig);
    const yHead = useSpring(useTransform(mouseY, [-0.5, 0.5], [-20, 20]), springConfig);

    // Background Blobs - Inverse Movement
    const xBlob = useSpring(useTransform(mouseX, [-0.5, 0.5], [40, -40]), springConfig);
    const yBlob = useSpring(useTransform(mouseY, [-0.5, 0.5], [40, -40]), springConfig);

    return (
        <section
            ref={ref}
            onMouseMove={handleMouseMove}
            className="relative min-h-[90vh] pt-32 pb-20 overflow-hidden flex flex-col justify-center bg-brand-bg perspective-1000"
        >
            {/* 1. Animated & Interactive Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div style={{ x: xBlob, y: yBlob }} className="absolute top-[10%] left-[5%] w-48 h-48 md:w-72 md:h-72 rounded-full bg-brand-yellow/40 blur-[80px]" />
                <motion.div style={{ x: xBlob, y: useTransform(yBlob, v => v * -1.5) }} className="absolute bottom-[20%] right-[10%] w-64 h-64 md:w-96 md:h-96 rounded-full bg-brand-purple/30 blur-[100px]" />
                <motion.div style={{ x: useTransform(xBlob, v => v * 1.5), y: yBlob }} className="absolute top-[30%] right-[30%] w-32 h-32 md:w-48 md:h-48 rounded-full bg-brand-orange/30 blur-[60px]" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            </div>

            <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20 relative z-10 w-full">
                <div className="text-center max-w-6xl mx-auto mb-20">

                    {/* Top Pill */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-gray-200/50 shadow-sm mb-8 hover:scale-105 transition-transform cursor-pointer"
                    >
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-green"></span>
                        </span>
                        <span className="text-sm font-bold text-gray-600 tracking-wide">Available for new projects</span>
                    </motion.div>

                    {/* Main Headline with Parallax */}
                    <motion.div style={{ x: xHead, y: yHead }}>
                        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] font-black tracking-tighter leading-[0.9] text-brand-dark mb-8">
                            <span className="block overflow-hidden" style={{ padding: "20px" }}>
                                <motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="block">
                                    Crafting Digital
                                </motion.span>
                            </span>
                            <span className="block overflow-hidden mt-2 sm:mt-4">
                                <motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} className="block flex items-center justify-center gap-4 flex-wrap" style={{ padding: "20px" }}>
                                    <span className="bg-brand-yellow text-brand-dark px-8 py-3 md:px-10 md:py-4 rounded-[1.5rem] transform -rotate-2 inline-block shadow-lg border-2 border-brand-dark/10">Experiences</span>
                                    <motion.span
                                        initial={{ scale: 0, rotate: -180 }}
                                        animate={{ scale: 1, rotate: 0 }}
                                        transition={{ delay: 0.5, type: "spring" }}
                                        className="inline-block relative -top-2"
                                    >
                                        <Star className="w-12 h-12 md:w-20 md:h-20 text-brand-yellow fill-current animate-[spin_10s_linear_infinite]" />
                                    </motion.span>
                                </motion.span>
                            </span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto mb-12 font-medium leading-relaxed"
                    >
                        I transform complex ideas into playful, intuitive, and pixel-perfect interface designs.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Button size="xl" className="rounded-full bg-brand-orange text-white px-10 py-4 text-lg font-bold hover:bg-brand-dark transition-all shadow-xl shadow-brand-orange/20 hover:shadow-brand-dark/30 hover:-translate-y-1 active:scale-95">
                            View My Work
                        </Button>
                        <Button size="xl" variant="outline" className="rounded-full border-2 border-gray-200 bg-white px-10 py-4 text-lg font-bold hover:border-brand-yellow hover:text-brand-yellow hover:bg-brand-yellow/5 transition-all active:scale-95">
                            Contact Me
                        </Button>
                    </motion.div>
                </div>

                {/* Floating 3D Elements Composition */}
                <div className="relative h-[200px] md:h-[300px] w-full max-w-6xl mx-auto hidden md:block">
                    {/* Left Floating Card */}
                    <motion.div
                        style={{ x: useTransform(mouseX, [-0.5, 0.5], [30, -30]), y: useTransform(mouseY, [-0.5, 0.5], [30, -30]), rotate: -6 }}
                        className="absolute left-10 top-10 bg-white p-6 rounded-[2.5rem] shadow-2xl border border-gray-100 w-72 z-20 hover:rotate-0 transition-transform duration-500 hover:z-30 hover:scale-105 cursor-default"
                        initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }}
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-2xl bg-brand-green/20 text-brand-green flex items-center justify-center"><Smartphone className="w-6 h-6" /></div>
                            <div>
                                <div className="h-2 w-20 bg-gray-200 rounded-full mb-2" />
                                <div className="h-2 w-12 bg-gray-100 rounded-full" />
                            </div>
                        </div>
                        <div className="h-24 bg-gray-50 rounded-2xl w-full" />
                    </motion.div>

                    {/* Right Floating Card */}
                    <motion.div
                        style={{ x: useTransform(mouseX, [-0.5, 0.5], [-40, 40]), y: useTransform(mouseY, [-0.5, 0.5], [-20, 20]), rotate: 6 }}
                        className="absolute right-10 top-0 bg-white p-6 rounded-[2.5rem] shadow-2xl border border-gray-100 w-80 z-10 hover:rotate-0 transition-transform duration-500 hover:z-30 hover:scale-105 cursor-default"
                        initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }}
                    >
                        <div className="flex justify-between items-center mb-6">
                            <span className="text-lg font-bold text-gray-800">Analytics</span>
                            <span className="text-xs font-bold bg-brand-purple/10 text-brand-purple px-3 py-1 rounded-full">+24%</span>
                        </div>
                        <div className="flex items-end gap-2 h-20">
                            {[40, 70, 50, 90, 60, 80].map((h, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ delay: 1 + (i * 0.1) }}
                                    className="flex-1 bg-brand-purple rounded-t-lg opacity-80"
                                />
                            ))}
                        </div>
                    </motion.div>

                    {/* Center Background Shape */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-dashed border-gray-200 rounded-full flex items-center justify-center -z-10"
                    >
                        <div className="w-4 h-4 bg-brand-yellow rounded-full absolute -top-2" />
                        <div className="w-4 h-4 bg-brand-blue rounded-full absolute -bottom-2" />
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
