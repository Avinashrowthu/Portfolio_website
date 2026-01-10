import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';

const images = [
    { src: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=800&auto=format&fit=crop', rotate: '2deg', y: 0 },
    { src: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=800&auto=format&fit=crop', rotate: '-3deg', y: 50 },
    { src: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop', rotate: '4deg', y: -20 },
    { src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop', rotate: '-2deg', y: 30 },
    { src: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop', rotate: '3deg', y: 60 },
    { src: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop', rotate: '-4deg', y: -40 },
    { src: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?q=80&w=800&auto=format&fit=crop', rotate: '1deg', y: 20 },
    { src: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop', rotate: '-1deg', y: 70 },
    { src: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop', rotate: '1deg', y: 30 },

];

const Gallery = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const yMove = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <section id="gallery" className="py-24 bg-[#F4EDE5] relative overflow-hidden" ref={containerRef}>
            <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">

                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
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
                        className="text-lg text-gray-500 max-w-sm text-right md:text-left hidden md:block leading-relaxed"
                    >
                        A collection of design experiments, concepts, and creative bursts where I challenge the boundaries of interaction and aesthetics.
                    </motion.p>
                </div>

                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 md:gap-8 md:space-y-8">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, delay: index * 0.1, type: "spring", bounce: 0.4 }}
                            className="break-inside-avoid"
                        >
                            <div
                                className="relative group rounded-3xl overflow-hidden shadow-xl"
                                style={{ transform: `rotate(${img.rotate}) translateY(${img.y}px)` }}
                            >
                                <img
                                    src={img.src}
                                    alt={`Gallery item ${index + 1}`}
                                    className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-brand-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>

            <div className="absolute top-1/4 left-0 w-64 h-64 bg-brand-yellow/30 rounded-full blur-[40px] pointer-events-none will-change-transform" />
            <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-brand-blue/30 rounded-full blur-[50px] pointer-events-none will-change-transform" />
        </section>
    );
};

export default Gallery;
