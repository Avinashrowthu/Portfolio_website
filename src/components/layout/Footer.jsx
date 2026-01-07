import React from 'react';
import { Button } from '../ui/Button';

const Footer = () => {
    return (
        <footer className="py-32 bg-brand-dark relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20 text-center relative z-10">

                <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-12 tracking-tight">
                    Thank You <br />
                    <span className="text-brand-orange">For Watching!</span>
                </h2>

                <div className="flex justify-center gap-6 mb-16">
                    <Button size="xl" className="rounded-full bg-brand-orange text-white shadow-xl shadow-brand-orange/20 hover:bg-white hover:text-brand-dark transition-all">
                        Start a Project
                    </Button>
                    <Button size="xl" variant="outline" className="rounded-full border-2 border-white/20 bg-transparent text-white hover:bg-brand-yellow hover:text-brand-dark hover:border-brand-yellow transition-all">
                        Say Hello 👋
                    </Button>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm font-medium border-t border-white/10 pt-8">
                    <p>© {new Date().getFullYear()} Antigravity. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-brand-dark transition-colors">Behance</a>
                        <a href="#" className="hover:text-brand-dark transition-colors">Dribbble</a>
                        <a href="#" className="hover:text-brand-dark transition-colors">Instagram</a>
                    </div>
                </div>

            </div>

            {/* Decorative Background Elements */}
            <div className="absolute top-1/2 left-10 w-24 h-24 bg-brand-yellow rounded-full blur-2xl opacity-50" />
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-brand-blue rounded-full blur-2xl opacity-40" />
        </footer>
    );
};

export default Footer;
