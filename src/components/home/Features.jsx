import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
    Palette,
    Layout,
    PenTool,
    Code,
    Layers,
    Sparkles
} from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const expertise = [
    {
        title: "UI Design",
        icon: <Palette className="w-5 h-5 md:w-6 md:h-6" />,
        color: "bg-pink-50 text-pink-500",
        description: "Designing clean and visually appealing screens for websites and apps."
    },
    {
        title: "UX Design",
        icon: <Layout className="w-5 h-5 md:w-6 md:h-6" />,
        color: "bg-indigo-50 text-indigo-500",
        description: "Making products easy to use by improving flows, structure, and usability."
    },

    {
        title: "Prototyping",
        icon: <Layers className="w-5 h-5 md:w-6 md:h-6" />,
        color: "bg-blue-50 text-blue-500",
        description: "Creating clickable designs to show how a product works before development."
    },

    {
        title: "Front-End Development",
        icon: <Code className="w-5 h-5 md:w-6 md:h-6" />,
        color: "bg-emerald-50 text-emerald-500",
        description: "Building responsive websites using HTML, CSS, JavaScript, and React.js."
    },

    {
        title: "Graphic Design",
        icon: <PenTool className="w-5 h-5 md:w-6 md:h-6" />,
        color: "bg-amber-50 text-amber-500",
        description: "Creating visuals like banners, icons, illustrations, and marketing creatives."
    }
];

const Features = () => {
    const [constraints, setConstraints] = React.useState({ left: 0, right: 0 });
    const carouselRef = React.useRef(null);

    React.useEffect(() => {
        if (carouselRef.current) {
            setConstraints({
                left: -(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth + 80),
                right: 0
            });
        }
    }, []);

    return (
        <section id="expertise" className="py-24 bg-brand-bg relative overflow-hidden">
            {/* Premium Background Accents */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] -left-[5%] w-[30%] h-[30%] bg-brand-yellow/5 rounded-full blur-[140px]" />
                <div className="absolute bottom-[20%] -right-[5%] w-[30%] h-[30%] bg-brand-purple/5 rounded-full blur-[140px]" />
            </div>

            <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <SectionHeading
                            title1="What I"
                            title2="Do Best"
                            title1Color="bg-brand-gray"
                            textColor1="text-brand-dark"
                        />
                        <p className="mt-8 text-gray-500 text-base md:text-lg font-medium leading-relaxed">
                            I design and build digital experiences that balance <span className="text-brand-dark font-black border-b-2 border-brand-yellow">user needs</span>, business goals, and technical feasibility.
                        </p>
                    </div>

                    <div className="hidden md:flex flex-col items-end gap-2">
                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Drag to explore skills</span>
                        <div className="flex gap-2">
                            <div className="w-16 h-1 bg-brand-yellow/20 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-brand-yellow"
                                    animate={{ x: ["-100%", "100%"] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Carousel Container with Drag */}
            <div className="relative w-full">
                <motion.div
                    ref={carouselRef}
                    className="flex gap-6 px-6 sm:px-12 lg:px-20 cursor-grab active:cursor-grabbing"
                    drag="x"
                    dragConstraints={constraints}
                    dragElastic={0.1}
                    whileTap={{ cursor: "grabbing" }}
                >
                    {expertise.map((item, index) => (
                        <motion.div
                            key={index}
                            className="flex-shrink-0 w-[240px] md:w-[280px]"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                        >
                            <div className="h-full bg-white rounded-[1.8rem] p-6 md:p-8 border border-gray-100/80 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.05)] transition-all duration-500 group relative overflow-hidden flex flex-col items-center text-center">
                                {/* Large Index Number */}
                                <span className="absolute -top-1 -right-1 text-6xl font-black text-gray-50/50 group-hover:text-brand-yellow/5 transition-colors duration-500 italic select-none">
                                    {index + 1}
                                </span>

                                {/* Icon Container */}
                                <div className="relative mb-6 z-10">
                                    <div className={`absolute inset-0 blur-2xl opacity-10 group-hover:opacity-30 transition-opacity duration-500 ${item.color.split(' ')[0]}`} />
                                    <div className={`relative w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center ${item.color} shadow-inner transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3`}>
                                        {item.icon}
                                    </div>
                                </div>

                                <div className="relative z-10">
                                    <h3 className="text-lg font-bold text-brand-dark tracking-tight mb-3 group-hover:text-brand-purple transition-colors duration-500">
                                        {item.title}
                                    </h3>

                                    <p className="text-[13px] text-gray-400 font-medium leading-[1.5] group-hover:text-gray-500 transition-colors duration-500">
                                        {item.description}
                                    </p>
                                </div>

                                <div className="absolute bottom-0 left-0 w-0 h-1 bg-brand-yellow group-hover:w-full transition-all duration-500" />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Visual Fades */}
                <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-brand-bg to-transparent pointer-events-none hidden lg:block" />
                <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-brand-bg to-transparent pointer-events-none hidden lg:block" />
            </div>
        </section>
    );
};

export default Features;
