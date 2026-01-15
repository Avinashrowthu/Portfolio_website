import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CustomCursor from '../ui/CustomCursor';
import Preloader from './Preloader';

const Layout = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const { pathname } = useLocation();
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className={`min-h-screen bg-brand-bg text-brand-text selection:bg-brand-orange selection:text-white ${loading ? 'cursor-wait' : ''}`}>
            {/* Preloader */}
            <AnimatePresence mode='wait'>
                {loading && <Preloader onComplete={() => setLoading(false)} key="preloader" />}
            </AnimatePresence>

            {!loading && (
                <>


                    {/* Custom Cursor */}
                    <div className="hidden md:block">
                        <CustomCursor />
                    </div>

                    {/* Navigation */}
                    <Navbar />

                    {/* Main Content */}
                    <motion.main
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.5 }}
                        className="min-h-screen flex flex-col"
                    >
                        {children}
                    </motion.main>

                    {/* Footer Component - Called on every page via Layout */}
                    <Footer />
                </>
            )}
        </div>
    );
};

export default Layout;
