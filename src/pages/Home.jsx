import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Overview from '../components/home/Overview';
import WorkGrid from '../components/home/WorkGrid';
import Gallery from '../components/home/Gallery';
import Features from '../components/home/Features';
import HowItWorks from '../components/home/HowItWorks';
import { useLocation } from 'react-router-dom';

const Home = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [hash]);

    return (
        <main className="overflow-hidden">
            <Hero />
            <About />
            {/* <Overview /> */}
            <WorkGrid />
            {/* Gallery moved below WorkGrid */}
            <Gallery />
            <Features />
            <HowItWorks />
        </main>
    );
};

export default Home;
