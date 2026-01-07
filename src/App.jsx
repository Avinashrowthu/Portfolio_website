import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Preloader from './components/layout/Preloader';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import CustomCursor from './components/ui/CustomCursor';

function App() {
    const [loading, setLoading] = useState(true);

    return (
        <Router>
            <div className={`min-h-screen bg-brand-bg text-brand-text selection:bg-brand-orange selection:text-white ${loading ? 'cursor-wait' : ''}`}>
                <AnimatePresence mode='wait'>
                    {loading && <Preloader onComplete={() => setLoading(false)} key="preloader" />}
                </AnimatePresence>

                {!loading && (
                    <>
                        <CustomCursor />
                        <Navbar />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<AboutPage />} />
                        </Routes>
                        <Footer />
                    </>
                )}
            </div>

        </Router>
    );
}

export default App;
