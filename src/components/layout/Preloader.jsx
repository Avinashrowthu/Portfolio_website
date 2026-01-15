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
                const diff = Math.random() * 10;
                return Math.min(prev + diff, 100);
            });
        }, 30);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if (progress === 100) {
            setTimeout(() => {
                onComplete();
            }, 300);
        }
    }, [progress, onComplete]);

    const loadingMessages = [
        "Setting the stage...",
        "Bringing ideas to life..."
    ];

    const currentMessage = loadingMessages[Math.min(Math.floor(progress / 50), loadingMessages.length - 1)];

    return (
        <motion.div
            className="fixed inset-0 z-[100] bg-brand-dark flex flex-col justify-center items-center text-white"
            initial={{ y: 0 }}
            exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
        >
            <div className="w-full max-w-md px-6">
                <div className="flex justify-between items-end mb-4">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
                        Avinash Naidu<span className="text-brand-purple">.</span>
                    </h1>
                    <span className="text-2xl md:text-3xl font-light font-mono text-gray-400 w-24 text-right">
                        {Math.round(progress)}%
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

                <div className="mt-4 flex justify-between text-[11px] uppercase tracking-widest text-gray-500 font-mono">
                    <motion.span
                        key={currentMessage}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-brand-purple font-bold"
                    >
                        {currentMessage}
                    </motion.span>
                    <span className="animate-pulse">Articulating Vision</span>
                </div>
            </div>
        </motion.div>
    );
};

export default Preloader;
