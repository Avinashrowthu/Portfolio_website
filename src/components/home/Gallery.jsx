import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionHeading from '../ui/SectionHeading';
import { projects } from '../../data/projects';
import { Play } from 'lucide-react';
import spotlightThumb from '../../assets/spotlight-thumb.png';
import dottedBg from '../../assets/dotted-bg.png';

const images = [
    { src: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=800&auto=format&fit=crop', rotate: '5deg', yOffset: -40 },
    { src: spotlightThumb, rotate: '-6deg', yOffset: 60 },
    // UI LUX / UI UX Specific beautiful images
    { src: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=800&auto=format&fit=crop', rotate: '4deg', yOffset: -20 }, // Design System
    { src: 'https://images.unsplash.com/photo-1614332287897-cdc485fa562d?q=80&w=800&auto=format&fit=crop', rotate: '-5deg', yOffset: 30 }, // High-end Dashboard UI
    { src: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop', rotate: '6deg', yOffset: -50 }, // Mobile App
    { src: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop', rotate: '-4deg', yOffset: 10 }, // Interface Sketch
    { src: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=800&auto=format&fit=crop', rotate: '3deg', yOffset: -30 }, // Web Design
    { src: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=800&auto=format&fit=crop', rotate: '-5deg', yOffset: 70 }, // UX Process
    { src: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=800&auto=format&fit=crop', rotate: '6deg', yOffset: -10 }, // Premium App Interface
    { src: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=800&auto=format&fit=crop', rotate: '-3deg', yOffset: 40 }, // Dark Mode UI
    { src: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop', rotate: '5deg', yOffset: -60 }, // Website Header
    { src: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop', rotate: '-4deg', yOffset: 20 }, // Tech/UI
];

const GalleryItem = ({ img, index, scrollYProgress }) => {
    // Rotation goes from initial state to 0deg (perfectly straight) as we scroll
    const rotate = useSpring(
        useTransform(scrollYProgress, [0.1, 0.4], [img.rotate, '0deg']),
        { stiffness: 60, damping: 25 }
    );

    // Y offset goes from initial uneven state to 0 (perfect grid alignment)
    const y = useSpring(
        useTransform(scrollYProgress, [0.1, 0.4], [img.yOffset, 0]),
        { stiffness: 60, damping: 25 }
    );

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: (index % 4) * 0.05 }}
            className="w-full"
            style={{ y }}
        >
            <motion.div
                className="relative group rounded-[2rem] overflow-hidden shadow-2xl bg-white p-2 border border-white/50"
                whileHover={!img.embed ? { scale: 1.05, zIndex: 20, transition: { duration: 0.3 } } : {}}
                style={{ rotate }}
            >
                <div className={`rounded-[1.6rem] overflow-hidden relative aspect-square ${img.projectId && !img.embed ? 'cursor-pointer' : ''}`}>
                    {img.embed ? (
                        <div className="w-full h-full">
                            {img.embed}
                        </div>
                    ) : img.projectId ? (
                        <Link to={`/project/${img.projectId}`} className="block w-full h-full">
                            <img
                                src={img.src}
                                alt={img.alt || `Gallery item ${index + 1}`}
                                className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-brand-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300">
                                    <Play size={20} className="text-brand-orange ml-0.5" fill="currentColor" />
                                </div>
                            </div>
                        </Link>
                    ) : (
                        <>
                            <img
                                src={img.src}
                                alt={`Gallery item ${index + 1}`}
                                className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
                                loading="lazy"
                            />
                            {/* Subtle overlay */}
                            <div className="absolute inset-0 bg-brand-dark/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        </>
                    )}
                </div>
            </motion.div>
        </motion.div>
    );
};

const Gallery = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Integrate specific projects into the gallery
    const spotlightProject = projects.find(p => p.id === 'spotlight-effect');
    const parallaxProject = projects.find(p => p.id === 'parallax-effect');

    // Create a modified images array that includes the projects
    const galleryImages = [...images];

    if (spotlightProject) {
        galleryImages[1] = { ...galleryImages[1], src: spotlightThumb, projectId: spotlightProject.id, alt: spotlightProject.title };
    }
    if (parallaxProject && parallaxProject.thumbnail) {
        galleryImages[0] = { ...galleryImages[0], src: parallaxProject.thumbnail, projectId: parallaxProject.id, alt: parallaxProject.title };
    }

    // Distribute into 4 columns
    const columns = [[], [], [], []];
    galleryImages.forEach((img, i) => {
        columns[i % 4].push({ ...img, originalIndex: i });
    });

    return (
        <section id="gallery" className="py-24 bg-[#FCFCFD] relative overflow-hidden" ref={containerRef}>
            {/* HD Dotted Background */}
            <div className="absolute inset-0 z-0">
                {/* HD Dot Image Pattern */}
                <div className="absolute inset-0 opacity-[1]"
                    style={{
                        backgroundImage: `url(${dottedBg})`,
                        backgroundSize: '400px 400px',
                        backgroundRepeat: 'repeat'
                    }}
                />

                {/* Soft Gradient Overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />

                {/* Decorative Color Blobs & Bright Edges */}
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-orange/10 rounded-full blur-[150px] pointer-events-none animate-pulse" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[150px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-purple/10 rounded-full blur-[150px] pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-yellow/10 rounded-full blur-[150px] pointer-events-none" />

                {/* Central Glow for depth */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-white/20 blur-[120px] pointer-events-none" />
            </div>

            <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="text-left">
                        <SectionHeading
                            title1="Visual"
                            title2="Explorations"
                            title1Color="bg-brand-gray"
                            textColor1="text-brand-dark"
                        />
                    </div>
                    <motion.p
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-lg text-gray-500 max-w-sm text-right md:text-left hidden md:block leading-relaxed font-medium italic"
                    >
                        — Where creativity breaks free from constraints and design becomes pure exploration.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
                    {columns.map((colImages, colIndex) => (
                        <div key={colIndex} className="flex flex-col gap-4 lg:gap-5">
                            {colImages.map((img, i) => (
                                <GalleryItem
                                    key={i}
                                    img={img}
                                    index={img.originalIndex}
                                    scrollYProgress={scrollYProgress}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default Gallery;
