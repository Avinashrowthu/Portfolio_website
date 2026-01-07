import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(timer);
                    return 100;
                }
                return prev + 1;
            });
        }, 20);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if (progress === 100) {
            setTimeout(() => {
                onComplete();
            }, 500);
        }
    }, [progress, onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[100] bg-brand-dark flex flex-col justify-center items-center text-white"
            initial={{ y: 0 }}
            exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
        >
            <div className="w-full max-w-md px-6">
                <div className="flex justify-between items-end mb-4">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
                        Antigravity<span className="text-brand-purple">.</span>
                    </h1>
                    <span className="text-2xl md:text-3xl font-light font-mono text-gray-400">
                        {progress}%
                    </span>
                </div>

                <div className="w-full h-[2px] bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-brand-purple"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ ease: "linear", duration: 0.02 }}
                    />
                </div>

                <div className="mt-4 flex justify-between text-sm text-gray-500 font-mono">
                    <span>Loading Experience</span>
                    <span>High Fidelity Mode</span>
                </div>
            </div>
        </motion.div>
    );
};

export default Preloader;
