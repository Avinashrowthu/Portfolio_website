import React from 'react';
import { motion } from 'framer-motion';

const tools = [
    { name: 'Figma', icon: 'https://www.vectorlogo.zone/logos/figma/figma-icon.svg' },
    { name: 'Sketch', icon: 'https://www.vectorlogo.zone/logos/sketchapp/sketchapp-icon.svg' },
    { name: 'Adobe XD', icon: 'https://cdn.worldvectorlogo.com/logos/adobe-xd-2.svg' },
    { name: 'Adobe Illustrator', icon: 'https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg' },
    { name: 'Adobe Photoshop', icon: 'https://cdn.worldvectorlogo.com/logos/adobe-photoshop-2.svg' },
    { name: 'Adobe After Effects', icon: 'https://skillicons.dev/icons?i=ae' },
    { name: 'FigJam', icon: 'https://skillicons.dev/icons?i=figma' },
    { name: 'Miro', icon: 'https://cdn.worldvectorlogo.com/logos/miro-2.svg' },
    { name: 'HTML5', icon: 'https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg' },
    { name: 'CSS3', icon: 'https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg' },
    { name: 'React.js', icon: 'https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg' },
    { name: 'Framer', icon: 'https://www.vectorlogo.zone/logos/framer/framer-icon.svg' },
];

const Stack = () => {
    // Duplicate tools for seamless loop
    const marqueeTools = [...tools, ...tools, ...tools];

    return (
        <section id="stack" className="py-20 bg-[#FAFAFA] overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20 mb-12 text-center">
                <p className="text-gray-500 text-lg font-medium">
                    Tools which I use on a daily basis.
                </p>
            </div>

            {/* Marquee Container */}
            <div className="relative w-full overflow-hidden">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 z-10 bg-gradient-to-r from-[#FAFAFA] to-transparent pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 z-10 bg-gradient-to-l from-[#FAFAFA] to-transparent pointer-events-none" />

                <motion.div
                    className="flex w-max items-center gap-12 md:gap-20 flex-nowrap whitespace-nowrap will-change-transform"
                    animate={{ x: ["0%", "-33.33%"] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30, // 30s for one full cycle
                            ease: "linear",
                        },
                    }}
                >
                    {marqueeTools.map((tool, index) => (
                        <div
                            key={index}
                            className="relative flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 hover:scale-110 cursor-pointer"
                            title={tool.name}
                        >
                            <img
                                src={tool.icon}
                                alt={tool.name}
                                className="w-10 h-10 md:w-12 md:h-12 object-contain"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Stack;
