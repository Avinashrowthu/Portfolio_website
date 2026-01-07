import React from 'react';
import { Layout, Palette, Zap, Smartphone } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const features = [
    {
        icon: <Layout className="w-8 h-8 text-brand-blue" />,
        title: "Creative Layout",
        desc: "Unique grid systems that break the mold."
    },
    {
        icon: <Palette className="w-8 h-8 text-brand-yellow" />,
        title: "Fully Customizable",
        desc: "Colors, typography, and spacing that adapt."
    },
    {
        icon: <Zap className="w-8 h-8 text-brand-red" />,
        title: "High Resolution",
        desc: "Crisp assets ready for 4K displays."
    },
    {
        icon: <Smartphone className="w-8 h-8 text-brand-green" />,
        title: "Device Variations",
        desc: "Responsive designs for all screens."
    }
];

const Features = () => {
    return (
        <section className="py-24 bg-brand-bg">
            <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
                <div className="mb-16 text-center">
                    <SectionHeading title1="Core" title2="Features" />
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-3xl shadow-card border border-gray-50 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 hover:shadow-xl group"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-brand-gray/50 flex items-center justify-center mb-6 group-hover:bg-brand-gray transition-colors">
                                {feature.icon}
                            </div>
                            <h4 className="text-xl font-bold text-brand-dark mb-2">{feature.title}</h4>
                            <p className="text-sm text-gray-500">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
