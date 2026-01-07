import React, { useEffect } from 'react';
import About from '../components/home/About';

const AboutPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="pt-20 bg-brand-bg min-h-screen">
            <About />
        </main>
    );
};

export default AboutPage;
