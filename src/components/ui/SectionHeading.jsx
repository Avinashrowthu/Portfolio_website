import React from 'react';
import { motion } from 'framer-motion';

const SectionHeading = ({
    title1,
    title2,
    title1Color = "bg-brand-yellow",
    title2Color = "bg-brand-orange",
    textColor1 = "text-brand-dark",
    textColor2 = "text-white"
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="relative inline-flex flex-wrap justify-center items-center gap-2 mb-16"
        >
            {/* First Sticker */}
            <div className={`transform -rotate-3 ${title1Color} px-8 py-3 md:px-10 md:py-4 rounded-[1.5rem] shadow-lg border-2 border-brand-dark/10 hover:scale-105 hover:rotate-2 transition-all duration-300 z-10 cursor-default`}>
                <span className={`text-4xl md:text-5xl font-black ${textColor1} tracking-tighter`}>{title1}</span>
            </div>

            {/* Second Sticker */}
            <div className={`relative transform rotate-2 ${title2Color} px-10 py-4 md:px-12 md:py-5 rounded-[1.5rem] shadow-lg border-2 border-brand-dark/10 -ml-4 hover:scale-105 hover:-rotate-2 transition-all duration-300 z-20 cursor-default`}>
                <span className={`text-4xl md:text-5xl font-black ${textColor2} tracking-tighter`}>{title2}</span>

                {/* Star Decoration based on the image provided in user request, mostly appearing on the second sticker */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-6 -right-6 drop-shadow-md"
                >
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="white">
                        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                    </svg>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default SectionHeading;
