import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';

const Showcase = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);

    return (
        <section ref={containerRef} className="py-24 bg-brand-bg overflow-hidden">

            <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20 mb-12 flex justify-center">
                <SectionHeading title1="Awesome" title2="Presentation" />
            </div>

            <div className="flex gap-8 pl-6 sm:pl-12 lg:pl-20 w-[200vw]">
                {/* Horizontal Scroll Track */}
                <motion.div style={{ x }} className="flex gap-8">
                    {[1, 2, 3, 4].map((item, index) => (
                        <div key={index} className="w-[85vw] sm:w-[400px] md:w-[600px] aspect-[16/10] bg-blue-50 rounded-3xl md:rounded-[2.5rem] shadow-xl overflow-hidden relative flex-shrink-0 group">
                            {/* Faux Browser/App content */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${index === 0 ? 'from-brand-blue/20 to-brand-purple/20' :
                                index === 1 ? 'from-brand-yellow/20 to-brand-orange/20' :
                                    index === 2 ? 'from-brand-green/20 to-brand-blue/20' :
                                        'from-brand-red/20 to-brand-purple/20'
                                }`}></div>

                            <div className="absolute inset-4 md:inset-8 bg-white rounded-2xl md:rounded-[2rem] shadow-lg flex items-center justify-center transform group-hover:scale-[1.02] transition-transform duration-500">
                                <div className="text-center">
                                    <div className="text-6xl mb-4">
                                        {index === 0 ? '👟' : index === 1 ? '🎧' : index === 2 ? '📸' : '🎮'}
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800">Use Case {index + 1}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Showcase;
