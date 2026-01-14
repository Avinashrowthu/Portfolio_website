import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';

// Lazy load pages for better performance (Code Splitting)
const Home = lazy(() => import('./pages/Home'));
const ProjectDetails = lazy(() => import('./pages/ProjectDetails'));

// Loading fallback for lazy routes
const PageLoader = () => (
    <div className="min-h-screen flex items-center justify-center bg-brand-bg">
        <div className="w-10 h-10 border-4 border-brand-orange border-t-transparent rounded-full animate-spin"></div>
    </div>
);

function App() {
    return (
        <Router>
            <Layout>
                <Suspense fallback={<PageLoader />}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/project/:id" element={<ProjectDetails />} />
                    </Routes>
                </Suspense>
            </Layout>
        </Router>
    );
}

export default App;
