import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';

const tools = [
    { name: 'Figma', icon: 'https://www.vectorlogo.zone/logos/figma/figma-icon.svg', bgColor: 'bg-[#F24E1E]/10', shadow: 'shadow-[#F24E1E]/5' },
    { name: 'Sketch', icon: 'https://www.vectorlogo.zone/logos/sketchapp/sketchapp-icon.svg', bgColor: 'bg-[#FDB300]/10', shadow: 'shadow-[#FDB300]/5' },
    { name: 'Adobe XD', icon: 'https://cdn.worldvectorlogo.com/logos/adobe-xd-2.svg', bgColor: 'bg-[#FF61F6]/10', shadow: 'shadow-[#FF61F6]/5' },
    { name: 'Adobe Illustrator', icon: 'https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg', bgColor: 'bg-[#FF9A00]/10', shadow: 'shadow-[#FF9A00]/5' },
    { name: 'Adobe Photoshop', icon: 'https://cdn.worldvectorlogo.com/logos/adobe-photoshop-2.svg', bgColor: 'bg-[#31A8FF]/10', shadow: 'shadow-[#31A8FF]/5' },
    { name: 'Adobe After Effects', icon: 'https://skillicons.dev/icons?i=ae', bgColor: 'bg-[#9999FF]/10', shadow: 'shadow-[#9999FF]/5' },
    { name: 'FigJam', icon: 'https://skillicons.dev/icons?i=figma', bgColor: 'bg-[#F24E1E]/10', shadow: 'shadow-[#F24E1E]/5' },
    { name: 'Miro', icon: 'https://cdn.worldvectorlogo.com/logos/miro-2.svg', bgColor: 'bg-[#050038]/10', shadow: 'shadow-[#050038]/5' },
    { name: 'HTML5', icon: 'https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg', bgColor: 'bg-[#E34F26]/10', shadow: 'shadow-[#E34F26]/5' },
    { name: 'CSS3', icon: 'https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg', bgColor: 'bg-[#1572B6]/10', shadow: 'shadow-[#1572B6]/5' },
    { name: 'React.js', icon: 'https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg', bgColor: 'bg-[#61DAFB]/10', shadow: 'shadow-[#61DAFB]/5' },
    { name: 'Framer', icon: 'https://www.vectorlogo.zone/logos/framer/framer-icon.svg', bgColor: 'bg-[#0055FF]/10', shadow: 'shadow-[#0055FF]/5' },
];

const Stack = () => {
    return (
        <section id="stack" className="py-24 bg-[#FAFAFA] relative overflow-hidden">
            {/* Background Colorful Blobs - Simplified for Performance */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[-10%] left-[-5%] w-[300px] h-[300px] bg-brand-yellow/10 rounded-full blur-[40px] will-change-transform"
                />
                <motion.div
                    animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-brand-orange/10 rounded-full blur-[50px] will-change-transform"
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
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {tools.map((tool, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{
                                delay: index * 0.05,
                                duration: 0.6,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                            whileHover={{
                                y: -12,
                                scale: 1.05,
                                rotate: index % 2 === 0 ? 2 : -2,
                                transition: { duration: 0.4, ease: "easeOut" }
                            }}
                            className="group relative p-8 rounded-[2.5rem] bg-white shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.12)] transition-all duration-500 cursor-pointer flex flex-col items-center justify-center gap-5 will-change-transform border border-transparent hover:border-gray-100"
                        >
                            <div className={`w-16 h-16 rounded-2xl ${tool.bgColor} flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 shadow-sm`}>
                                <div className="relative w-8 h-8 flex items-center justify-center">
                                    <img src={tool.icon} alt={tool.name} className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500" loading="lazy" />
                                </div>
                            </div>
                            <span className="font-black text-gray-800 tracking-tight text-sm uppercase opacity-60 group-hover:opacity-100 transition-opacity duration-500">{tool.name}</span>

                            {/* Card Glow Effect */}
                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-gray-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-[2.5rem] pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stack;
