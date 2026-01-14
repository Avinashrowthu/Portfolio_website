import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Maximize2 } from 'lucide-react';
import FigmaEmbed from './FigmaEmbed';
import { Button } from './Button';

const ProjectModal = ({ project, isOpen, onClose }) => {
    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[100] bg-brand-dark/80 backdrop-blur-sm cursor-pointer"
                    />

                    {/* Modal Content */}
                    <div className="fixed inset-0 z-[101] flex items-center justify-center pointer-events-none p-4 md:p-8">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="bg-white w-full max-w-6xl max-h-[90vh] rounded-[2rem] shadow-2xl overflow-hidden flex flex-col pointer-events-auto relative"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-white z-10">
                                <div>
                                    <h3 className="text-2xl font-black text-brand-dark">{project.title}</h3>
                                    <p className="text-gray-500 text-sm font-medium">{project.category}</p>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="w-10 h-10 rounded-full bg-gray-100 hover:bg-red-50 hover:text-red-500 flex items-center justify-center transition-colors"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Body */}
                            <div className="flex-1 overflow-auto bg-gray-50 p-6">
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-full">
                                    {/* Left: Prototype View */}
                                    <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col h-[500px] lg:h-auto min-h-[400px]">
                                        {project.prototypeUrl ? (
                                            <FigmaEmbed url={project.prototypeUrl} title={project.title} />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center flex-col text-gray-400 p-8 text-center">
                                                <div className="w-16 h-16 bg-gray-100 rounded-2xl mb-4 flex items-center justify-center">
                                                    <Maximize2 size={24} />
                                                </div>
                                                <p>No playable prototype available for this project.</p>
                                            </div>
                                        )}
                                    </div>

                                    {/* Right: Details */}
                                    <div className="space-y-6">
                                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                                            <h4 className="font-bold text-lg mb-4 text-brand-dark">About the Project</h4>
                                            <p className="text-gray-600 leading-relaxed text-sm mb-6">
                                                {project.longDescription || project.description}
                                            </p>

                                            <div className="space-y-4">
                                                <div>
                                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-2">Technologies</span>
                                                    <div className="flex flex-wrap gap-2">
                                                        {project.tags.map((tag, i) => (
                                                            <span key={i} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-bold">
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-brand-dark/5 p-6 rounded-2xl border border-brand-dark/10">
                                            <h4 className="font-bold text-sm text-brand-dark mb-2">Want to see more?</h4>
                                            <p className="text-xs text-brand-dark/60 mb-4">Check out the full case study on Behance.</p>
                                            <Button className="w-full justify-center bg-brand-dark text-white text-sm py-3">
                                                View Case Study <ExternalLink size={14} className="ml-2" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;
