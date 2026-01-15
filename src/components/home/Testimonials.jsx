import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import dottedBg from '../../assets/dotted-bg.png';

const testimonials = [
    {
        name: "Sarah Jenkins",
        role: "Product Lead at Google",
        period: "Project: Cloud UX",
        description: "Avinash has an incredible eye for detail. His ability to transform complex requirements into intuitive designs is a game-changer for our team. Truly professional.",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
        rotation: -10,
        x: -420,
        y: 40
    },
    {
        name: "David Chen",
        role: "CEO of TechFlow",
        period: "Project: SaaS Redesign",
        description: "The design system Avinash built for our platform has significantly reduced our development time while doubling our user engagement. He understands business goals deeply.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
        rotation: -5,
        x: -210,
        y: 10
    },
    {
        name: "Emily Rodriguez",
        role: "Design Manager at Amazon",
        period: "Project: Retail CX",
        description: "Working with Avinash was a seamless experience. He doesn't just design interfaces; he designs solutions that truly resonate with users and boost conversion rates.",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150&h=150",
        rotation: 0,
        x: 0,
        y: 0
    },
    {
        name: "Michael Rossi",
        role: "Founder of Spark Labs",
        period: "Project: Fintech App",
        description: "Exceptional design thinking and technical execution. Avinash delivered a product that exceeded our expectations. His interactive prototypes are highly detailed.",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
        rotation: 5,
        x: 210,
        y: 10
    },
    {
        name: "Anjali Gupta",
        role: "Senior Designer at Incture",
        period: "Project: Enterprise UI",
        description: "A rare talent who bridges the gap between aesthetics and usability perfectly. His work has been instrumental in our latest product's massive market success.",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150",
        rotation: 10,
        x: 420,
        y: 40
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-20 bg-white text-brand-dark overflow-hidden relative flex flex-col items-center">
            {/* Themed Background */}
            <div className="absolute inset-0 z-0">
                {/* HD Dot Image Pattern */}
                <div className="absolute inset-0 opacity-[0.8]"
                    style={{
                        backgroundImage: `url(${dottedBg})`,
                        backgroundSize: '400px 400px',
                        backgroundRepeat: 'repeat'
                    }}
                />

                {/* Soft Gradient Overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />

                {/* Decorative Color Blobs & Bright Edges */}
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[150px] pointer-events-none animate-pulse" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[150px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-purple/5 rounded-full blur-[150px] pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-yellow/5 rounded-full blur-[150px] pointer-events-none" />
            </div>

            <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20 relative z-10 w-full">
                <div className="flex flex-col md:flex-row justify-between items-end gap-8">
                    <div className="text-left">
                        <SectionHeading
                            title1="Client"
                            title2="Kind Words"
                            title1Color="bg-brand-yellow"
                            textColor1="text-brand-dark"
                        />
                    </div>
                    <motion.p
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-lg text-gray-500 max-w-sm text-right md:text-left leading-relaxed font-medium italic hidden md:block"
                    >
                        — Trusted by design leaders and product owners from global tech giants to high-growth startups.
                    </motion.p>
                </div>
            </div>

            {/* Horizontal Scroll/Wide Container */}
            <div className="relative w-full overflow-visible flex justify-center px-4">
                <div className="relative w-full max-w-[1200px] h-[450px] flex justify-center items-center">
                    {testimonials.map((testi, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50, rotate: 0 }}
                            whileInView={{
                                opacity: 1,
                                y: testi.y,
                                x: testi.x,
                                rotate: testi.rotation
                            }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.8,
                                delay: index * 0.1,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                            whileHover={{
                                y: testi.y - 20,
                                scale: 1.02,
                                rotate: 0,
                                zIndex: 100,
                                boxShadow: "0 40px 80px rgba(0,0,0,0.1)",
                                transition: { duration: 0.3, ease: "easeOut" }
                            }}
                            className="absolute w-[280px] md:w-[320px] bg-white rounded-[2rem] p-8 md:p-10 border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.04)] cursor-pointer flex flex-col group backdrop-blur-sm bg-white/90 will-change-transform"
                            style={{ zIndex: index }}
                        >
                            {/* Card Header */}
                            <div className="flex justify-between items-start mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-brand-gray/50 shadow-sm">
                                        <img
                                            src={testi.avatar}
                                            alt={testi.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <span className="text-sm font-semibold text-gray-500">{testi.name}</span>
                                </div>
                                <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">{testi.period}</span>
                            </div>

                            {/* Role Title */}
                            <h3 className="text-lg font-bold text-brand-dark mb-4 leading-tight">{testi.role}</h3>

                            {/* Description */}
                            <p className="text-[13px] text-gray-400 leading-relaxed font-medium">
                                "{testi.description}"
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
