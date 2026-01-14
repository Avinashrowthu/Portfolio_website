import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2 } from 'lucide-react';

const FigmaEmbed = ({ url, title }) => {
    const [iframeLoaded, setIframeLoaded] = useState(false);

    // Ensure we are using the embed URL format
    const embedUrl = `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(url)}`;

    return (
        <div className="w-full h-full relative bg-gray-50 rounded-xl overflow-hidden border border-gray-100">
            <AnimatePresence>
                {!iframeLoaded && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-gray-50"
                    >
                        <Loader2 className="w-8 h-8 text-brand-orange animate-spin mb-2" />
                        <span className="text-sm font-medium text-gray-500">Loading Prototype...</span>
                    </motion.div>
                )}
            </AnimatePresence>

            <iframe
                className={`w-full h-full transition-opacity duration-500 ${iframeLoaded ? 'opacity-100' : 'opacity-0'}`}
                src={embedUrl}
                allowFullScreen
                allow="fullscreen; clipboard-read; clipboard-write"
                sandbox="allow-same-origin allow-scripts allow-pointer-lock allow-forms allow-popups allow-popups-to-escape-sandbox"
                title={title || "Figma Prototype"}
                onLoad={() => setIframeLoaded(true)}
            />
        </div>
    );
};

export default FigmaEmbed;
