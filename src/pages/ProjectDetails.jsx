import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Maximize2 } from 'lucide-react';
import { projects } from '../data/projects';
import FigmaEmbed from '../components/ui/FigmaEmbed';
import { Button } from '../components/ui/Button';
import SEO from '../components/SEO';

const ProjectDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = projects.find(p => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return (
            <div className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
                <h2 className="text-3xl font-bold text-brand-dark mb-4">Project Not Found</h2>
                <Button onClick={() => navigate('/')} className="bg-brand-orange text-white">
                    Back to Home
                </Button>
            </div>
        );
    }

    return (
        <main className="min-h-screen pt-32 pb-20 px-6 md:px-12 lg:px-20 bg-brand-bg">
            <SEO
                title={`${project.title} – UX/UI Case Study`}
                description={project.description}
                keywords={`${project.title}, ${project.category}, UX Case Study, ${project.tags.join(', ')}`}
                // Note: project.thumbnail is an imported asset string, usually starting with /assets
                image={project.thumbnail}
                url={`/project/${project.id}`}
                type="article"
                schema={{
                    "@context": "https://schema.org",
                    "@type": "CreativeWork",
                    "headline": project.title,
                    "description": project.description,
                    "author": {
                        "@type": "Person",
                        "name": "Avinash Naidu"
                    },
                    "keywords": project.tags.join(', ')
                }}
            />
            <div className="max-w-[1400px] mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center text-gray-500 hover:text-brand-dark transition-colors mb-6 font-medium"
                    >
                        <ArrowLeft size={20} className="mr-2" /> Back
                    </button>

                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <span className="text-brand-orange font-bold tracking-wider uppercase text-sm mb-2 block">{project.category}</span>
                            <h1 className="text-4xl md:text-6xl font-black text-brand-dark leading-tight">{project.title}</h1>
                        </div>
                        <div className="flex gap-2">
                            {project.tags.map((tag, i) => (
                                <span key={i} className="px-4 py-2 bg-white border border-gray-100 rounded-full text-sm font-bold text-gray-600 shadow-sm">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>

                <div className={`grid grid-cols-1 ${project.caseStudyImages ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-12`}>
                    {/* Left: Content (Prototype or Gallery) */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className={`${project.caseStudyImages ? 'lg:col-span-3' : 'lg:col-span-2'}`}
                    >
                        {project.caseStudyImages ? (
                            <div className="space-y-8">
                                {project.caseStudyImages.map((img, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.6 }}
                                        className="rounded-3xl overflow-hidden shadow-2xl bg-white border border-white/50"
                                    >
                                        <img
                                            src={img}
                                            alt={`${project.title} - Step ${index + 1}`}
                                            className="w-full h-auto object-cover"
                                            loading="lazy"
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        ) : (
                            <div className="bg-white rounded-3xl shadow-xl border border-white/50 overflow-hidden h-[600px] md:h-[700px] relative">
                                {project.prototypeUrl ? (
                                    <FigmaEmbed url={project.prototypeUrl} title={project.title} />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center flex-col text-gray-400 p-8 text-center bg-gray-50">
                                        <div className="w-20 h-20 bg-gray-100 rounded-3xl mb-6 flex items-center justify-center">
                                            <Maximize2 size={32} />
                                        </div>
                                        <p className="text-lg font-medium">No playable prototype available for this project.</p>
                                    </div>
                                )}
                            </div>
                        )}
                    </motion.div>

                    {/* Right: Details */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="space-y-8 lg:sticky lg:top-32 h-fit"
                    >
                        <div className="bg-white p-8 rounded-3xl shadow-lg border border-white/50">
                            <h3 className="text-xl font-bold text-brand-dark mb-4">About the Project</h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                {project.longDescription || project.description}
                            </p>
                        </div>

                        {project.prototypeUrl && project.caseStudyImages && (
                            <div className="bg-white p-8 rounded-3xl shadow-lg border border-white/50 transition-all hover:shadow-xl group">
                                <h3 className="text-xl font-bold text-brand-dark mb-4 flex items-center">
                                    <Maximize2 size={20} className="mr-2 text-brand-orange" />
                                    Live Prototype
                                </h3>
                                <p className="text-gray-500 text-sm mb-6">Interact with the actual design components and user flow.</p>
                                <a
                                    href={project.prototypeUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Button className="w-full justify-center bg-brand-orange text-white hover:bg-brand-dark border-none">
                                        Play Prototype
                                    </Button>
                                </a>
                            </div>
                        )}

                        <div className="bg-brand-dark p-8 rounded-3xl shadow-lg text-white">
                            <h3 className="text-xl font-bold mb-4">Interested in this work?</h3>
                            <p className="text-white/70 mb-6 leading-relaxed">
                                This project represents a deep dive into user experience and interface design.
                                Let's discuss how we can bring similar quality to your ideas.
                            </p>
                            <Button className="w-full justify-center bg-white text-brand-dark hover:bg-brand-yellow border-none">
                                Contact Me <ExternalLink size={16} className="ml-2" />
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </main>
    );
};

export default ProjectDetails;
