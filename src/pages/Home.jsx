import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Stack from '../components/home/Stack';
import WorkGrid from '../components/home/WorkGrid';
import Gallery from '../components/home/Gallery';
import Features from '../components/home/Features';
import HowItWorks from '../components/home/HowItWorks';
import Overview from '../components/home/Overview';
import Inside from '../components/home/Inside';
import { useLocation } from 'react-router-dom';

const Home = () => {
    const { hash } = useLocation();

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
            <Hero />
            <Overview />
            <About />
            <Stack />
            <WorkGrid />
            <Gallery />
            <Features />
            <HowItWorks />
            <Inside />
        </main>
    );
};

export default Home;
