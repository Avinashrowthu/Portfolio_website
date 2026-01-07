import React from 'react';
import { Play } from 'lucide-react';

const Inside = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20 text-center">
                <div className="inline-block bg-brand-yellow px-6 py-2 rounded-full font-bold text-brand-dark mb-8 border border-brand-dark/10 shadow-sm">
                    What's inside
                </div>

                {/* Big Gradient Card */}
                <div className="relative w-full max-w-5xl mx-auto aspect-video rounded-[3rem] overflow-hidden shadow-2xl group cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#A29BFE] via-[#74B9FF] to-[#FC6B00] opacity-90 transition-opacity duration-300 group-hover:opacity-100" />

                    <div className="absolute inset-0 flex items-center justify-center">

                        {/* Play Button */}
                        <div className="relative">
                            <div className="w-24 h-24 rounded-full border-2 border-white/40 border-dashed animate-[spin_10s_linear_infinite]" />
                            <div className="absolute top-0 left-0 w-24 h-24 flex items-center justify-center">
                                <div className="flex flex-col items-center">
                                    <Play fill="white" className="w-8 h-8 text-white translate-x-1" />
                                    <span className="text-white font-bold text-sm mt-1">Play</span>
                                </div>
                            </div>
                        </div>

                    </div>

                    <h2 className="absolute bottom-10 left-0 right-0 text-white text-3xl md:text-5xl font-bold drop-shadow-md">
                        What Inside the File
                    </h2>
                </div>
            </div>
        </section>
    );
};

export default Inside;
