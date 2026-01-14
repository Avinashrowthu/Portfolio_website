import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionHeading from '../ui/SectionHeading';
import { projects } from '../../data/projects';
import { Play } from 'lucide-react';
import spotlightThumb from '../../assets/spotlight-thumb.png';

const images = [
    { src: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=800&auto=format&fit=crop', rotate: '2deg' },
    { src: spotlightThumb, rotate: '-3deg' },
    { src: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop', rotate: '4deg' },
    { src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop', rotate: '-2deg' },
    { src: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop', rotate: '3deg' },
    { src: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop', rotate: '-4deg' },
    { src: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?q=80&w=800&auto=format&fit=crop', rotate: '1deg' },
    { src: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=800&auto=format&fit=crop', rotate: '-1deg' },
    { src: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop', rotate: '1deg' },
];

const GalleryItem = ({ img, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
            duration: 0.8,
            delay: (index % 3) * 0.1,
            type: "spring",
            bounce: 0.3
        }}
        className="w-full"
    >
        <motion.div
            className="relative group rounded-[2rem] overflow-hidden shadow-2xl bg-white p-2 border border-white/50"
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            style={{ rotate: img.rotate }}
        >
            <div className={`rounded-[1.5rem] overflow-hidden relative ${img.projectId ? 'cursor-pointer' : ''}`}>
                {img.projectId ? (
                    <Link to={`/project/${img.projectId}`}>
                        <img
                            src={img.src}
                            alt={img.alt || `Gallery item ${index + 1}`}
                            className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-110"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-brand-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300" title="Play Prototype">
                                <Play size={24} className="text-brand-orange ml-1" fill="currentColor" />
                            </div>
                        </div>
                    </Link>
                ) : (
                    <>
                        <img
                            src={img.src}
                            alt={`Gallery item ${index + 1}`}
                            className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-110"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-brand-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </>
                )}
            </div>

        </motion.div>
    </motion.div>
);

const Gallery = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const yLeft = useSpring(useTransform(scrollYProgress, [0, 1], [0, -150]), { stiffness: 50, damping: 20 });
    const yCenter = useSpring(useTransform(scrollYProgress, [0, 1], [0, 150]), { stiffness: 50, damping: 20 });
    const yRight = useSpring(useTransform(scrollYProgress, [0, 1], [0, -100]), { stiffness: 50, damping: 20 });

    // Integrate Spotlight Effect project into the gallery
    const spotlightProject = projects.find(p => p.id === 'spotlight-effect');

    // Create a modified images array that includes the spotlight project
    // We'll replace the 2nd image (index 1) with the spotlight project for prominent visibility
    const galleryImages = [...images];
    if (spotlightProject) {
        galleryImages[1] = {
            src: spotlightThumb,
            rotate: '-3deg',
            projectId: spotlightProject.id,
            alt: spotlightProject.title
        };
    }

    return (
        <section id="gallery" className="py-32 bg-white relative overflow-hidden" ref={containerRef}>
            <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                    <div className="text-left">
                        <SectionHeading
                            title1="Visual"
                            title2="Explorations"
                            title1Color="bg-brand-gray"
                            textColor1="text-brand-dark"
                        />
                    </div>
                    <motion.p
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-gray-500 max-w-sm text-right md:text-left hidden md:block leading-relaxed font-medium italic"
                    >
                        — Where creativity breaks free from constraints and design becomes pure exploration.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {/* Column 1 */}
                    <motion.div className="flex flex-col gap-8 md:gap-12" style={{ y: yLeft }}>
                        {[galleryImages[0], galleryImages[3], galleryImages[6]].map((img, i) => (
                            <GalleryItem key={i} img={img} index={i} />
                        ))}
                    </motion.div>

                    {/* Column 2 */}
                    <motion.div className="flex flex-col gap-8 md:gap-12 md:mt-24" style={{ y: yCenter }}>
                        {[galleryImages[1], galleryImages[4], galleryImages[7]].map((img, i) => (
                            <GalleryItem key={i} img={img} index={i + 3} />
                        ))}
                    </motion.div>

                    {/* Column 3 */}
                    <motion.div className="flex flex-col gap-8 md:gap-12" style={{ y: yRight }}>
                        {[galleryImages[2], galleryImages[5], galleryImages[8]].map((img, i) => (
                            <GalleryItem key={i} img={img} index={i + 6} />
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-50" />
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-yellow/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-purple/10 rounded-full blur-[120px] pointer-events-none" />
        </section>
    );
};

export default Gallery;
