import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { Search, PenTool, Monitor, Rocket } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const steps = [
    {
        icon: Search,
        title: "Discovery",
        description: "Understanding the problem, user research, and competitive analysis.",
        color: "bg-blue-100 text-blue-600",
    },
    {
        icon: PenTool,
        title: "Wireframing",
        description: "Sketching low-fidelity layouts to establish structure and flow.",
        color: "bg-purple-100 text-purple-600",
    },
    {
        icon: Monitor,
        title: "Visual Design",
        description: "Crafting high-fidelity UI with pixel-perfect aesthetics and interactions.",
        color: "bg-yellow-100 text-yellow-600",
    },
    {
        icon: Rocket,
        title: "Delivery",
        description: "Handing over assets, style guides, and supporting development.",
        color: "bg-green-100 text-green-600",
    },
];

const Process = () => {
    return (
        <section id="process" className="py-24 bg-brand-bg relative overflow-hidden">
            {/* Decorative Line */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-gray-200 -z-0 hidden lg:block" />

            <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <SectionHeading title1="Creative" title2="Process" />
                    <p className="text-gray-500">
                        From chaotic ideas to polished products, here is how I bring designs to life.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-full flex flex-col items-center text-center p-8 hover:shadow-lg transition-all border-none shadow-sm">
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${step.color} text-xl`}>
                                    <step.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
