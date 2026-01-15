import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Stack from '../components/home/Stack';
import WorkGrid from '../components/home/WorkGrid';
import Gallery from '../components/home/Gallery';
import Features from '../components/home/Features';
import HowItWorks from '../components/home/HowItWorks';
import { useLocation } from 'react-router-dom';
import SEO from '../components/SEO';

const Home = () => {
    const { hash } = useLocation();

    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Avinash Naidu",
        "url": "https://avinashnaidu.com",
        "jobTitle": "UX/UI Designer",
        "sameAs": [
            "https://www.linkedin.com/in/avinash-rowthu-134371190/",
            "https://www.behance.net/avinashrowthu"
        ]
    };

    useEffect(() => {
        // Prevent browser from restoring scroll position
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }

        if (hash) {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        } else {
            // Force scroll to top on mount
            window.scrollTo(0, 0);
        }
    }, [hash]);

    return (
        <main className="overflow-hidden">
            <SEO
                title="UX/UI Designer & Product Designer Portfolio"
                description="Senior UX/UI Designer & Product Designer based in India. Specializing in SaaS, Dashboard Design, and user-centric digital products. View my portfolio."
                schema={personSchema}
            />
            <Hero />
            <About />
            <Stack />
            <WorkGrid />
            <Gallery />
            <Features />
            <HowItWorks />
        </main>
    );
};

export default Home;
