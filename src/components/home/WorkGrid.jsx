import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SectionHeading from '../ui/SectionHeading';
import { projects } from '../../data/projects';

const WorkGrid = () => {
    const navigate = useNavigate();

    const handleProjectClick = (project) => {
        // Navigate to the project details page
        navigate(`/project/${project.id}`);
    };

    return (
        <section id="work" className="py-24 bg-brand-bg relative z-10">
            <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">

                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="text-left">
                        <SectionHeading title1="Selected" title2="Works" className="mb-4" title1Color="bg-brand-gray" textColor1="text-brand-dark" />
                    </div>

                    <motion.p
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-gray-500 max-w-sm text-right md:text-left hidden md:block leading-relaxed"
                    >
                        A curated selection of projects where design meets functionality to solve complex problems and deliver impact.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[320px] gap-8">
                    {projects.filter(p => p.id !== 'spotlight-effect' && p.id !== 'parallax-effect').map((project, index) => (
                        <motion.div
                            key={project.id}
                            layoutId={`project-card-${index}`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{
                                duration: 1.2,
                                delay: index * 0.1,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                            onClick={() => handleProjectClick(project)}
                            className={`group relative rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-12 flex flex-col justify-between transition-all duration-1000 overflow-hidden cursor-pointer ${project.color} border border-white/10 shadow-lg hover:shadow-[0_80px_100px_-20px_rgba(0,0,0,0.15)] ${project.span}`}
                        >
                            {/* Texture Overlay */}
                            <div className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] blend-overlay" />

                            {/* Contextual Glow (matches project color) */}
                            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-white/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-[1]" />

                            {/* Full-Bleed Background Reveal */}
                            {project.thumbnail ? (
                                <div className="absolute inset-0 z-0 overflow-hidden">
                                    <img
                                        src={project.thumbnail}
                                        alt={`${project.title} - ${project.category} - UX/UI Design Project`}
                                        className="w-full h-full object-cover object-top opacity-0 group-hover:opacity-100 scale-125 group-hover:scale-100 transition-all duration-[1.5s] ease-out filter brightness-[0.85] contrast-[1.1]"
                                    />
                                    {/* Multi-layered Vignette */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                                    <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                                </div>
                            ) : (
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-1000 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay" />
                            )}

                            {/* Header: Icon (Top-Left) & Thumbnail (Top-Right) */}
                            <div className="flex justify-between items-start z-20 w-full mb-auto">
                                <motion.div
                                    whileHover={{ rotate: 12, scale: 1.1 }}
                                    className={`w-14 h-14 md:w-16 md:h-16 rounded-[1.2rem] flex items-center justify-center backdrop-blur-xl border border-white/20 shadow-xl transition-all duration-700 ${project.textColor === 'text-brand-dark' && !project.thumbnail ? 'bg-white/60 text-brand-dark' : 'bg-white/10 text-white'}`}
                                >
                                    {React.cloneElement(project.icon, { size: 26 })}
                                </motion.div>

                                {/* Floating Card Thumbnail (Stamp Style) */}
                                {project.thumbnail && (
                                    <div className="w-24 h-16 md:w-28 md:h-20 rounded-2xl overflow-hidden shadow-2xl border-[3px] border-white/20 z-10 group-hover:opacity-0 group-hover:scale-150 group-hover:translate-x-12 group-hover:-translate-y-12 transition-all duration-1000 ease-[0.19,1,0.22,1] hidden sm:block rotate-3 group-hover:rotate-12">
                                        <img
                                            src={project.thumbnail}
                                            alt=""
                                            className="w-full h-full object-cover transform scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
                                    </div>
                                )}
                            </div>

                            {/* Footer Content */}
                            <div className="z-20 relative mt-auto">
                                <div className="flex justify-between items-end">
                                    <div className="max-w-[75%]">
                                        <div className="overflow-hidden mb-3">
                                            <motion.span
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 0.7, y: 0 }}
                                                className={`inline-block text-[11px] font-black uppercase tracking-[0.25em] group-hover:text-white group-hover:opacity-100 transition-all duration-500 ${project.textColor}`}
                                            >
                                                {project.category}
                                            </motion.span>
                                        </div>
                                        <h3 className={`text-[22px] md:text-[28px] lg:text-[32px] font-black leading-[1.1] tracking-tight group-hover:text-white transition-all duration-700 ${project.textColor}`}>
                                            {project.title}
                                        </h3>
                                        <div className="h-0 group-hover:h-auto group-hover:max-h-[3.5rem] group-hover:mt-3 overflow-hidden transition-all duration-500 ease-out">
                                            <p className={`text-xs md:text-sm lg:text-[15px] opacity-0 group-hover:opacity-90 transition-opacity duration-700 delay-100 font-medium leading-relaxed line-clamp-2 ${project.textColor === 'text-brand-dark' ? 'text-brand-dark/80' : 'text-white/80'}`}>
                                                {project.description}
                                            </p>
                                        </div>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2 mt-0 h-0 opacity-0 group-hover:mt-4 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 delay-200">
                                            {project.tags.slice(0, 3).map((tag, tIndex) => (
                                                <span
                                                    key={tIndex}
                                                    className={`text-[10px] font-bold px-3 py-1.5 rounded-full border backdrop-blur-md ${project.textColor === 'text-brand-dark' ? 'border-brand-dark/10 bg-black/5 text-brand-dark' : 'border-white/10 bg-white/5 text-white'}`}
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Action Buttons (Bottom-Right) */}
                                    <div className="flex flex-col gap-3 items-center">
                                        {project.prototypeUrl && (
                                            <motion.div
                                                whileHover={{ scale: 1.1 }}
                                                className="w-10 h-10 rounded-full flex items-center justify-center bg-white/90 backdrop-blur-md text-brand-dark shadow-lg z-20 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500"
                                                title="Play Prototype"
                                            >
                                                <Play size={18} fill="currentColor" className="ml-0.5" />
                                            </motion.div>
                                        )}
                                        <motion.div
                                            className={`w-12 h-12 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 group-hover:scale-110 ${project.textColor === 'text-brand-dark' && !project.thumbnail ? 'bg-brand-dark text-white' : 'bg-white text-brand-dark'}`}
                                        >
                                            <ArrowUpRight size={24} className="group-hover:rotate-45 transition-transform duration-500" />
                                        </motion.div>
                                    </div>
                                </div>
                            </div>

                            {/* Premium Glow Border */}
                            <div className="absolute inset-0 border-0 group-hover:border-[1px] border-white/30 transition-all duration-1000 rounded-[2.5rem] md:rounded-[3.5rem] z-30 pointer-events-none" />
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center md:hidden">
                    <button className="text-brand-dark font-bold border-b-2 border-brand-dark pb-1 hover:text-brand-purple hover:border-brand-purple transition-all">View All Selected Works</button>
                </div>
            </div>
        </section>
    );
};

export default WorkGrid;
