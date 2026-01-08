import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Instagram, Linkedin, Dribbble, Globe, ArrowUpRight, Github, ArrowUp } from 'lucide-react';
import { Button } from '../ui/Button';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { label: 'Instagram', icon: <Instagram size={20} />, href: '#', color: 'hover:bg-[#E1306C] hover:text-white' },
        { label: 'LinkedIn', icon: <Linkedin size={20} />, href: '#', color: 'hover:bg-[#0077b5] hover:text-white' },
        { label: 'Dribbble', icon: <Dribbble size={20} />, href: '#', color: 'hover:bg-[#ea4c89] hover:text-white' },
        { label: 'GitHub', icon: <Github size={20} />, href: '#', color: 'hover:bg-white hover:text-brand-dark' },
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative pt-20 pb-10 bg-brand-dark overflow-hidden" id="contact">
            {/* Premium Background Decorations */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden text-center md:text-left">
                <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] bg-brand-orange/15 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[120px]" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
            </div>

            <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
                {/* Big CTA Section */}
                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h2 className="text-[40px] sm:text-[64px] md:text-[76px] lg:text-[100px] font-black text-white mb-10 tracking-tighter leading-[0.9] text-center md:text-left">
                            Let’s make <br className="hidden sm:block" />
                            something <span className="text-brand-orange">iconic.</span>
                        </h2>

                        <div className="flex flex-col lg:flex-row items-center gap-6 mt-12">
                            <motion.a
                                href="mailto:hello@avinash.design"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="group relative bg-white text-brand-dark px-6 py-4 md:px-8 md:py-6 rounded-2xl md:rounded-[1.5rem] text-lg md:text-2xl font-black flex items-center gap-3 hover:shadow-[0_20px_50px_rgba(255,121,63,0.2)] transition-all duration-500 w-full md:w-auto overflow-hidden text-center md:text-left justify-center md:justify-start"
                            >
                                <div className="absolute inset-0 bg-brand-orange translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500"></div>
                                <Mail className="w-6 h-6 md:w-7 md:h-7 relative z-10 group-hover:text-white transition-colors duration-500" />
                                <span className="relative z-10 group-hover:text-white transition-colors duration-500">hello@avinash.design</span>
                                <div className="relative z-10 w-8 h-8 md:w-10 md:h-10 rounded-full bg-brand-blue flex items-center justify-center text-white transition-all duration-500 group-hover:bg-white group-hover:text-brand-orange">
                                    <ArrowUpRight size={20} />
                                </div>
                            </motion.a>

                            <div className="flex flex-wrap justify-center gap-3">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        whileHover={{ y: -5, scale: 1.1 }}
                                        className={`w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 backdrop-blur-md group`}
                                        aria-label={social.label}
                                    >
                                        <div className="transform transition-transform duration-300 group-hover:scale-110">
                                            {social.icon}
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Footer Bottom Bar */}
                <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-10 relative">
                    {/* Back to Top */}
                    <motion.button
                        onClick={scrollToTop}
                        whileHover={{ y: -5, scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="absolute -top-6 right-0 md:right-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-brand-orange text-white flex items-center justify-center shadow-xl z-20 hover:bg-white hover:text-brand-dark transition-colors border-2 md:border-4 border-brand-dark"
                    >
                        <ArrowUp size={24} />
                    </motion.button>

                    <div className="text-gray-500 font-bold text-center md:text-left max-w-[280px]">
                        <p className="text-white text-base md:text-lg mb-1">Avinash Naidu</p>
                        <p className="text-xs leading-relaxed opacity-60">Crafting deliberate digital experiences through empathy and precision.</p>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                        <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-[10px] md:text-xs uppercase tracking-[0.2em] font-black text-gray-500">
                            <a href="#about" className="hover:text-white transition-colors">About</a>
                            <a href="#work" className="hover:text-white transition-colors">Work</a>
                            <a href="#gallery" className="hover:text-white transition-colors">Gallery</a>
                        </div>
                        <p className="text-[9px] md:text-[10px] text-gray-600 font-bold uppercase tracking-widest">© {currentYear} All Rights Reserved</p>
                    </div>

                    <div className="flex items-center gap-4 text-[10px] md:text-xs font-bold text-gray-500">
                        <div className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white/5 rounded-full border border-white/5">
                            <Globe size={12} className="text-green-400 animate-pulse" />
                            <span>India, GMT +5:30</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
