import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Smartphone, Zap, Layout, Globe, Activity, Layers, PenTool } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const projects = [
    {
        title: "Ipsum Dolor",
        category: "Lorem",
        description: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
        tags: ["Sit Amet", "Elit"],
        color: "bg-brand-yellow",
        textColor: "text-brand-dark",
        icon: <Smartphone size={24} />,
        span: "md:col-span-1"
    },
    {
        title: "Sit Amet",
        category: "Consectetur",
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
        tags: ["Adipiscing", "Tempor"],
        color: "bg-brand-purple",
        textColor: "text-white",
        icon: <Activity size={24} />,
        span: "md:col-span-2"
    },
    {
        title: "Magna Aliqua",
        category: "Labore",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
        tags: ["Magna", "Aliqua"],
        color: "bg-brand-green",
        textColor: "text-white",
        icon: <Globe size={24} />,
        span: "md:col-span-1"
    },
    {
        title: "Ut Enim",
        category: "Minim",
        description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
        tags: ["Veniam", "Nostrud"],
        color: "bg-brand-orange",
        textColor: "text-white",
        icon: <Zap size={24} />,
        span: "md:col-span-1"
    },
    {
        title: "Mollit Anim",
        category: "Laboris",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
        tags: ["Ullamco", "Nisi"],
        color: "bg-brand-dark",
        textColor: "text-white",
        icon: <Layers size={24} />,
        span: "md:col-span-1"
    },
    {
        title: "Totam Rem",
        category: "Aperiam",
        description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
        tags: ["Voluptatem", "Sequi"],
        color: "bg-brand-blue",
        textColor: "text-white",
        icon: <Layout size={24} />,
        span: "md:col-span-2"
    }
];

const WorkGrid = () => {
    return (
        <section id="work" className="py-24 bg-brand-bg relative z-10">
            <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">

                {/* Header - Consistent H2 and Body */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="text-left">
                        <SectionHeading title1="Lorem" title2="Ipsum" className="mb-4" title1Color="bg-brand-gray" textColor1="text-brand-dark" />
                    </div>

                    <motion.p
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-gray-500 max-w-sm text-right md:text-left hidden md:block leading-relaxed"
                    >
                        Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </motion.p>
                </div>

                {/* Bento Grid with Staggered Entrance */}
                <div className="grid grid-cols-1 md:grid-cols-3 md:auto-rows-[340px] gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`group relative rounded-3xl md:rounded-[2.5rem] p-6 md:p-8 flex flex-col justify-between transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden ${project.color} ${project.span}`}
                        >
                            {/* Texture */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay" />

                            {/* Top Row */}
                            <div className="flex justify-between items-start z-10">
                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/20 shadow-sm ${project.textColor === 'text-brand-dark' ? 'bg-white/40 text-brand-dark' : 'bg-white/10 text-white'}`}>
                                    {project.icon}
                                </div>
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300 ${project.textColor === 'text-brand-dark' ? 'bg-brand-dark text-white' : 'bg-white text-brand-dark'}`}>
                                    <ArrowUpRight size={20} />
                                </div>
                            </div>

                            {/* Bottom Content */}
                            <div className="z-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <div className="mb-4">
                                    <span className={`text-xs font-bold uppercase tracking-wider opacity-80 ${project.textColor}`}>
                                        {project.category}
                                    </span>
                                    <h3 className={`text-3xl font-bold mt-1 ${project.textColor}`}>
                                        {project.title}
                                    </h3>
                                    <p className={`mt-2 text-sm opacity-90 leading-relaxed font-medium ${project.textColor === 'text-brand-dark' ? 'text-brand-dark/80' : 'text-white/80'}`}>
                                        {project.description}
                                    </p>
                                </div>

                                {/* Hover Tags */}
                                <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                                    {project.tags.map((tag, tIndex) => (
                                        <span
                                            key={tIndex}
                                            className={`text-[10px] font-bold px-3 py-1 rounded-full border ${project.textColor === 'text-brand-dark' ? 'border-brand-dark/20 text-brand-dark' : 'border-white/20 text-white'}`}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Decorative Blur */}
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 ease-out pointer-events-none" />
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center md:hidden">
                    <button className="text-brand-dark font-bold border-b-2 border-brand-dark pb-1 hover:text-brand-purple hover:border-brand-purple transition-all">Lorem Ipsum View</button>
                </div>

            </div>
        </section>
    );
};

export default WorkGrid;
