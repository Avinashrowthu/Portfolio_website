import React from 'react';
import { motion } from 'framer-motion';
import { Figma, Code, Layout, Cpu, Globe, Zap, Palette, Layers, Box } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const tools = [
    { name: 'Figma', icon: <Figma className="w-8 h-8 text-[#F24E1E]" />, bgColor: 'bg-[#F24E1E]/5', borderColor: 'group-hover:border-[#F24E1E]/30', shadow: 'group-hover:shadow-[#F24E1E]/10' },
    { name: 'Framer', icon: <Layers className="w-8 h-8 text-[#0055FF]" />, bgColor: 'bg-[#0055FF]/5', borderColor: 'group-hover:border-[#0055FF]/30', shadow: 'group-hover:shadow-[#0055FF]/10' },
    { name: 'React', icon: <Cpu className="w-8 h-8 text-[#61DAFB]" />, bgColor: 'bg-[#61DAFB]/5', borderColor: 'group-hover:border-[#61DAFB]/30', shadow: 'group-hover:shadow-[#61DAFB]/10' },
    { name: 'Tailwind', icon: <Zap className="w-8 h-8 text-[#38BDF8]" />, bgColor: 'bg-[#38BDF8]/5', borderColor: 'group-hover:border-[#38BDF8]/30', shadow: 'group-hover:shadow-[#38BDF8]/10' },
    { name: 'JavaScript', icon: <Code className="w-8 h-8 text-[#F7DF1E]" />, bgColor: 'bg-[#F7DF1E]/5', borderColor: 'group-hover:border-[#F7DF1E]/30', shadow: 'group-hover:shadow-[#F7DF1E]/10' },
    { name: 'Vite', icon: <Zap className="w-8 h-8 text-[#646CFF]" />, bgColor: 'bg-[#646CFF]/5', borderColor: 'group-hover:border-[#646CFF]/30', shadow: 'group-hover:shadow-[#646CFF]/10' },
    { name: 'Three.js', icon: <Globe className="w-8 h-8 text-black" />, bgColor: 'bg-black/5', borderColor: 'group-hover:border-black/30', shadow: 'group-hover:shadow-black/10' },
    { name: 'Adobe Suite', icon: <Palette className="w-8 h-8 text-[#FF0000]" />, bgColor: 'bg-[#FF0000]/5', borderColor: 'group-hover:border-[#FF0000]/30', shadow: 'group-hover:shadow-[#FF0000]/10' },
    { name: 'GitHub', icon: <Code className="w-8 h-8 text-[#181717]" />, bgColor: 'bg-[#181717]/5', borderColor: 'group-hover:border-[#181717]/30', shadow: 'group-hover:shadow-[#181717]/10' },
    { name: 'VS Code', icon: <Layout className="w-8 h-8 text-[#007ACC]" />, bgColor: 'bg-[#007ACC]/5', borderColor: 'group-hover:border-[#007ACC]/30', shadow: 'group-hover:shadow-[#007ACC]/10' },
    { name: 'Notion', icon: <Layers className="w-8 h-8 text-black" />, bgColor: 'bg-black/5', borderColor: 'group-hover:border-black/30', shadow: 'group-hover:shadow-black/10' },
    { name: 'Blender', icon: <Box className="w-8 h-8 text-[#EBAD52]" />, bgColor: 'bg-[#EBAD52]/5', borderColor: 'group-hover:border-[#EBAD52]/30', shadow: 'group-hover:shadow-[#EBAD52]/10' },
];

const Stack = () => {
    return (
        <section id="stack" className="py-20 bg-white relative overflow-hidden">
            {/* Background Colorful Blobs */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[-10%] left-[-5%] w-[300px] h-[300px] bg-brand-yellow/10 rounded-full blur-[80px]"
                />
                <motion.div
                    animate={{ x: [0, -40, 0], y: [0, 60, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-brand-orange/10 rounded-full blur-[100px]"
                />
            </div>

            <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20 relative z-10 text-center">
                <div className="flex flex-col items-center mb-16">
                    <SectionHeading title1="My" title2="Stack" className="mb-6" />
                    <p className="text-gray-500 text-lg font-medium max-w-2xl mx-auto italic leading-relaxed">
                        The creative tools and technical powerhouses behind my digital universe.
                    </p>
                </div>

                {/* Staggered Grid of Colorful Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
                    {tools.map((tool, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: index * 0.05,
                                type: "spring",
                                stiffness: 260,
                                damping: 20
                            }}
                            whileHover={{
                                y: -8,
                                rotate: index % 2 === 0 ? 1 : -1,
                                scale: 1.02
                            }}
                            className={`group relative p-6 rounded-[2rem] ${tool.bgColor} border border-transparent transition-all duration-500 cursor-pointer flex flex-col items-center justify-center gap-4 ${tool.borderColor} ${tool.shadow} hover:shadow-xl`}
                        >
                            <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-md group-hover:shadow-xl transition-all duration-500 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50" />
                                <div className="relative z-10">{tool.icon}</div>
                            </div>
                            <span className="font-black text-brand-dark tracking-tighter text-base">{tool.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stack;
