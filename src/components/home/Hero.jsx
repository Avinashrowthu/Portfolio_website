import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';
import { Button } from '../ui/Button';
import { Star, Sparkles, Smartphone, ArrowRight, Zap, Globe, Palette, Layout } from 'lucide-react';

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
            id="hero"
            onMouseMove={handleMouseMove}
            className="relative min-h-[90vh] pt-32 pb-20 overflow-hidden flex flex-col justify-center bg-brand-bg perspective-1000"
        >
            {/* 1. Animated & Interactive Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div style={{ x: xBlob, y: yBlob }} className="absolute top-[10%] left-[5%] w-48 h-48 md:w-72 md:h-72 rounded-full bg-brand-yellow/40 blur-[40px] will-change-transform" />
                <motion.div style={{ x: xBlob, y: useTransform(yBlob, v => v * -1.5) }} className="absolute bottom-[20%] right-[10%] w-64 h-64 md:w-96 md:h-96 rounded-full bg-brand-purple/30 blur-[50px] will-change-transform" />
                <motion.div style={{ x: useTransform(xBlob, v => v * 1.5), y: yBlob }} className="absolute top-[30%] right-[30%] w-32 h-32 md:w-48 md:h-48 rounded-full bg-brand-orange/30 blur-[30px] will-change-transform" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20 relative z-10 w-full"
            >
                <div className="text-center max-w-6xl mx-auto mb-20 relative">

                    {/* Decorative Blue Target - Moved further out */}
                    <div className="absolute top-[-30px] right-[5%] z-20 pointer-events-none">
                        <div className="w-8 h-8 rounded-full border-2 border-brand-blue/30 flex items-center justify-center">
                            <div className="w-2.5 h-2.5 rounded-full bg-brand-blue shadow-[0_0_10px_rgba(116,185,255,0.6)]" />
                        </div>
                    </div>

                    {/* Top Pill */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-gray-200/50 shadow-sm mb-8 hover:scale-105 transition-transform cursor-pointer"
                    >
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-green"></span>
                        </span>
                        <span className="text-sm font-bold text-gray-600 tracking-wide">Available for new projects</span>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.div style={{ x: xHead, y: yHead }}>
                        <h1 className="text-[32px] sm:text-[52px] md:text-[76px] lg:text-[100px] font-black tracking-tighter leading-[0.9] text-brand-dark mb-8 relative">
                            <span className="block overflow-hidden" style={{ padding: "10px 0" }}>
                                <motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} className="block">
                                    Hi, I'm
                                </motion.span>
                            </span>
                            <span className="block overflow-hidden mt-2 sm:mt-4">
                                <motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} className="block flex items-center justify-center gap-4 flex-wrap" style={{ padding: "10px 0" }}>
                                    <span className="bg-brand-yellow text-brand-dark px-6 py-2 md:px-8 md:py-3 rounded-[1.2rem] transform -rotate-2 inline-block shadow-lg border-2 border-brand-dark/10">Avinash Naidu</span>
                                    <motion.span
                                        initial={{ scale: 0, rotate: -180 }}
                                        animate={{ scale: 1, rotate: 0 }}
                                        transition={{ delay: 0.6, type: "spring" }}
                                        className="inline-block relative"
                                    >
                                        <Star className="w-8 h-8 md:w-14 md:h-14 text-brand-yellow fill-current animate-[spin_10s_linear_infinite]" />
                                    </motion.span>
                                </motion.span>
                            </span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto mb-12 font-medium leading-relaxed italic"
                    >
                        — a UX/UI Designer who designs with purpose.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <a href="#work">
                            <Button size="xl" className="rounded-full bg-brand-orange text-white px-10 py-4 text-lg font-bold hover:bg-brand-dark transition-all shadow-xl shadow-brand-orange/20 hover:shadow-brand-dark/30 hover:-translate-y-1 active:scale-95">
                                View My Work
                            </Button>
                        </a>
                        <a href="mailto:rowthuavinash@gmail.com">
                            <Button size="xl" variant="outline" className="rounded-full border-2 border-gray-200 bg-white px-10 py-4 text-lg font-bold hover:border-brand-yellow hover:text-brand-yellow hover:bg-brand-yellow/5 transition-all active:scale-95">
                                Contact Me
                            </Button>
                        </a>
                    </motion.div>
                </div>

                {/* Floating Elements Composition - Responsive & Interactive */}
                <div className="absolute inset-0 z-0 pointer-events-none hidden md:block">

                    {/* 1. Left - Design System Card */}
                    <motion.div
                        style={{
                            x: useTransform(mouseX, [-0.5, 0.5], [30, -30]),
                            y: useTransform(mouseY, [-0.5, 0.5], [30, -30]),
                            rotate: -6
                        }}
                        initial={{ opacity: 0, x: -100, rotate: -6 }}
                        animate={{
                            opacity: 1,
                            x: 0,
                            rotate: -6,
                            y: [0, -10, 0] // Added floating animation
                        }}
                        transition={{
                            delay: 0.7,
                            duration: 0.8,
                            y: { duration: 4, repeat: Infinity, ease: "easeInOut" } // Floating transition
                        }}
                        className="absolute left-[2%] top-[25%] bg-white p-3 rounded-[1.2rem] shadow-2xl border border-gray-100 w-44 pointer-events-auto hover:z-30 transition-transform duration-300 will-change-transform"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-8 rounded-full bg-brand-purple/10 flex items-center justify-center text-brand-purple font-bold text-xs">Ui</div>
                            <div>
                                <h4 className="font-bold text-gray-900 leading-tight text-[10px]">Design System</h4>
                                <p className="text-[8px] text-gray-400 font-medium">Updates</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <div className="h-12 bg-gray-50 rounded-lg" />
                            <div className="h-12 bg-gray-50 rounded-lg" />
                        </div>
                    </motion.div>

                    {/* 2. Top Right - Palette Card */}
                    <motion.div
                        style={{
                            x: useTransform(mouseX, [-0.5, 0.5], [-25, 25]),
                            y: useTransform(mouseY, [-0.5, 0.5], [-25, 25]),
                            rotate: 6
                        }}
                        initial={{ opacity: 0, y: -100, rotate: 6 }}
                        animate={{
                            opacity: 1,
                            y: [0, 10, 0], // Floating animation (relative to initial offset)
                            rotate: 6
                        }}
                        transition={{
                            delay: 0.8,
                            duration: 0.8,
                            y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                        }}
                        className="absolute right-[12%] top-[18%] bg-white p-3 rounded-[1.2rem] shadow-2xl border border-gray-100 w-40 pointer-events-auto hover:z-30 transition-transform duration-300 will-change-transform"
                    >
                        <div className="bg-brand-yellow/10 rounded-xl p-3 h-20 flex items-center justify-center relative">
                            <Palette className="w-6 h-6 text-brand-orange" />
                            {/* Decorative Orange Dot above Palette */}
                            <div className="absolute top-[-5px] right-[-5px] w-2.5 h-2.5 rounded-full bg-brand-orange" />
                        </div>
                        <div className="space-y-1.5 px-0.5 pb-0.5">
                            <div className="h-1.2 w-full bg-gray-100 rounded-full" />
                            <div className="h-1.2 w-2/3 bg-gray-100 rounded-full" />
                        </div>
                    </motion.div>

                    {/* 3. Bottom Right - Creative Layouts Card */}
                    <motion.div
                        style={{
                            x: useTransform(mouseX, [-0.5, 0.5], [-15, 15]),
                            y: useTransform(mouseY, [-0.5, 0.5], [-15, 15]),
                            rotate: 1
                        }}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{
                            opacity: 1,
                            x: 0,
                            y: [0, -15, 0] // Floating animation
                        }}
                        transition={{
                            delay: 0.9,
                            duration: 0.8,
                            y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                        }}
                        className="absolute right-[5%] bottom-[8%] bg-white p-3 rounded-[1.5rem] shadow-2xl border border-gray-100 w-52 pointer-events-auto hover:z-30 transition-transform duration-300 will-change-transform"
                    >
                        <div className="h-32 rounded-lg bg-gradient-to-br from-brand-purple to-brand-orange flex items-center justify-center mb-3 shadow-md relative group overflow-hidden">
                            <Layout className="w-8 h-8 text-white/90" />
                        </div>
                        <div className="px-0.5 pb-1">
                            <h3 className="text-base font-bold text-gray-900 mb-0.5">Creative Layouts</h3>
                            <p className="text-[10px] text-gray-500 leading-tight">Crafting interfaces that breathe and engage.</p>
                        </div>

                        {/* Blue Target Indicator at bottom right of card */}
                        <div className="absolute right-[-8px] bottom-[-8px] z-20">
                            <div className="w-7 h-7 rounded-full border border-brand-blue/30 bg-white shadow-soft flex items-center justify-center">
                                <div className="w-2 h-2 rounded-full bg-brand-blue shadow-[0_0_8px_rgba(116,185,255,0.8)]" />
                            </div>
                        </div>
                    </motion.div>

                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
