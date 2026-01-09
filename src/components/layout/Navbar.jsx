import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ArrowRight, Download } from 'lucide-react';
import { Button } from '../ui/Button';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { name: 'About Me', href: '/#about' },
        { name: 'Work', href: '/#work' },
        { name: 'Gallery', href: '/#gallery' },
    ];

    // Helper to scroll if on same page
    const handleNavClick = (href) => {
        if (href.startsWith('/#')) {
            const id = href.replace('/#', '');
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <nav className={`fixed top-6 left-0 right-0 z-50 transition-all duration-300`}>
            <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
                <div className={`mx-auto max-w-7xl rounded-full transition-all duration-300 ${isScrolled
                    ? 'bg-white/90 backdrop-blur-xl shadow-card border border-gray-100 py-3 px-6'
                    : 'bg-transparent py-4 px-0'
                    }`}>
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-2 group">
                            <div className="w-10 h-10 rounded-xl bg-brand-dark text-white flex items-center justify-center font-bold text-xl relative overflow-hidden">
                                <span className="relative z-10 group-hover:-translate-y-8 transition-transform duration-300 block">A</span>
                                <span className="absolute z-10 translate-y-8 group-hover:translate-y-0 transition-transform duration-300 block text-brand-yellow">A</span>
                            </div>
                            <span className="font-bold text-xl tracking-tight text-brand-dark hidden sm:block">
                                Avinash Naidu
                            </span>
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center gap-1 lg:gap-2 bg-white/50 backdrop-blur-lg rounded-full p-1 border border-white/50 shadow-sm">
                            {links.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    onClick={() => handleNavClick(link.href)}
                                    className={`px-4 lg:px-6 py-2 md:py-2.5 text-xs lg:text-sm font-semibold rounded-full transition-all duration-300 ${location.pathname === link.href
                                        ? 'bg-brand-dark text-white'
                                        : 'text-brand-dark hover:text-white hover:bg-brand-dark'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="hidden md:flex items-center gap-2 lg:gap-3">
                            <Button
                                className="rounded-full border-2 border-brand-yellow bg-transparent text-brand-dark px-6 hover:bg-brand-yellow hover:text-brand-dark transition-all duration-300 flex items-center gap-2 font-bold group/resume"
                            >
                                <Download className="w-4 h-4 group-hover/resume:-translate-y-1 transition-transform" />
                                Resume
                            </Button>

                            <Button className="rounded-full bg-brand-orange text-white hover:bg-brand-dark transition-colors shadow-lg shadow-brand-orange/20 hover:shadow-brand-dark/30">
                                Let's Talk <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </div>

                        {/* Mobile Toggle */}
                        <button
                            className="md:hidden p-3 rounded-full bg-white shadow-sm border border-gray-100"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu (simplified for briefness, could be expanded) */}
            {isMobileMenuOpen && (
                <div className="absolute top-24 left-6 right-6 p-6 bg-white rounded-3xl shadow-2xl md:hidden border border-gray-100">
                    <div className="flex flex-col gap-4">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-xl font-bold text-brand-dark py-2"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
