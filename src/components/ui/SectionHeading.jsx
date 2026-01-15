import React from 'react';
import { motion } from 'framer-motion';

const SectionHeading = ({
    title1,
    title2,
    title1Color = "bg-brand-yellow",
    title2Color = "bg-brand-orange",
    textColor1 = "text-brand-dark",
    textColor2 = "text-white",
    className = ""
}) => {
    return (
        <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", bounce: 0.5 }}
            className={`relative inline-flex flex-wrap justify-center items-center gap-2 ${className}`}
        >
            {/* First Sticker */}
            <div className={`relative transform -rotate-3 ${title1Color} px-6 py-2.5 md:px-8 md:py-3.5 rounded-xl md:rounded-2xl shadow-lg border-2 border-brand-dark/10 hover:scale-105 hover:rotate-2 transition-all duration-300 z-10 cursor-default`}>
                <span className={`text-[28px] sm:text-[34px] md:text-[40px] font-black ${textColor1} tracking-tighter`}>{title1}</span>

                {/* Blue Target Indicator (matching user prompt) */}
                <div className="absolute -top-3 -left-3 md:-top-5 md:-left-5 z-20">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-brand-blue/30 bg-white shadow-soft flex items-center justify-center">
                        <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-brand-blue shadow-[0_0_10px_rgba(116,185,255,0.8)]" />
                    </div>
                </div>
            </div>

            {/* Second Sticker */}
            <div className={`relative transform rotate-2 ${title2Color} px-6 py-3 md:px-9 md:py-4 rounded-xl md:rounded-2xl shadow-lg border-2 border-brand-dark/10 -ml-2 sm:-ml-3 hover:scale-105 hover:-rotate-2 transition-all duration-300 z-20 cursor-default`}>
                <span className={`text-[28px] sm:text-[34px] md:text-[40px] font-black ${textColor2} tracking-tighter`}>{title2}</span>

                {/* Star Decoration */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-4 -right-4 md:-top-6 md:-right-6 drop-shadow-md"
                >
                    <svg className="w-8 h-8 md:w-12 md:h-12" viewBox="0 0 24 24" fill="white">
                        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                    </svg>
                </motion.div>
            </div>
        </motion.h2>
    );
};

export default SectionHeading;
