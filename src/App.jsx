import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import CustomCursor from './components/ui/CustomCursor';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Navbar from './components/layout/Navbar';
import Preloader from './components/layout/Preloader';

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
                        </Routes>
                        <Footer />
                    </>
                )}
            </div>

        </Router>
    );
}

export default App;
