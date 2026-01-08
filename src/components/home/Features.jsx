import React from 'react';
import { Search, Layout, Palette, UserCheck } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';

const features = [
    {
        icon: <Search className="w-6 h-6" />,
        title: "User Research",
        color: "bg-blue-100 text-blue-600",
    },
    {
        icon: <Layout className="w-6 h-6" />,
        title: "Interaction",
        color: "bg-purple-100 text-purple-600",
    },
    {
        icon: <Palette className="w-6 h-6" />,
        title: "Visual Identity",
        color: "bg-yellow-100 text-yellow-600",
    },
    {
        icon: <UserCheck className="w-6 h-6" />,
        title: "Usability Testing",
        color: "bg-green-100 text-green-600",
    },
    {
        icon: <PenTool className="w-6 h-6" />,
        title: "Prototyping",
        color: "bg-orange-100 text-orange-600",
    },
    {
        icon: <Zap className="w-6 h-6" />,
        title: "Motion Design",
        color: "bg-red-100 text-red-600",
    }
];

const Features = () => {
    return (
        <section id="expertise" className="py-24 bg-brand-bg relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <SectionHeading title1="Core" title2="Expertise" className="mb-4" />
                    <p className="text-gray-500 text-lg font-medium max-w-2xl mx-auto leading-relaxed italic">
                        The pillars of my creative approach and technical execution.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <Card className="h-full flex flex-col items-center text-center p-5 md:p-6 hover:shadow-xl transition-all border border-gray-100/50 shadow-soft rounded-3xl bg-white hover:-translate-y-1 duration-300">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 ${feature.color} shadow-inner`}>
                                    {feature.icon}
                                </div>
                                <h3 className="text-sm md:text-base font-black text-brand-dark tracking-tighter leading-tight">{feature.title}</h3>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
