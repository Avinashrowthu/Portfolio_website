import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);
    const [isHovering, setIsHovering] = useState(false);
    const [isPressed, setIsPressed] = useState(false);

    const springConfig = { damping: 30, stiffness: 500, mass: 0.5 };
    const ringConfig = { damping: 20, stiffness: 300, mass: 0.5 };

    const dotX = useSpring(mouseX, springConfig);
    const dotY = useSpring(mouseY, springConfig);

    const ringX = useSpring(mouseX, ringConfig);
    const ringY = useSpring(mouseY, ringConfig);

    useEffect(() => {
        const updateMousePosition = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleMouseDown = () => setIsPressed(true);
        const handleMouseUp = () => setIsPressed(false);

        const handleMouseOver = (e) => {
            const target = e.target;
            const isClickable = target.closest('a') ||
                target.closest('button') ||
                target.closest('.cursor-pointer') ||
                window.getComputedStyle(target).cursor === 'pointer';

            setIsHovering(!!isClickable);
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <>
            {/* Main Ring */}
            <motion.div
                className="fixed top-0 left-0 w-10 h-10 border border-brand-purple rounded-full pointer-events-none z-[9999] hidden md:block mix-blend-difference"
                style={{
                    x: ringX,
                    y: ringY,
                    translateX: '-50%',
                    translateY: '-50%',
                    scale: isHovering ? 2 : isPressed ? 0.8 : 1,
                    opacity: isHovering ? 0.5 : 1,
                }}
                transition={{ type: 'spring', ...ringConfig }}
            />
            {/* Inner Dot */}
            <motion.div
                className="fixed top-0 left-0 w-1.5 h-1.5 bg-brand-purple rounded-full pointer-events-none z-[9999] hidden md:block mix-blend-difference"
                style={{
                    x: dotX,
                    y: dotY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            />
            {/* Hover Expansion Effect */}
            <motion.div
                className="fixed top-0 left-0 w-20 h-20 bg-brand-purple/10 rounded-full pointer-events-none z-[9998] hidden md:block blur-xl"
                style={{
                    x: ringX,
                    y: ringY,
                    translateX: '-50%',
                    translateY: '-50%',
                    scale: isHovering ? 1.2 : 0,
                    opacity: isHovering ? 0.4 : 0,
                }}
            />
        </>
    );
};

export default CustomCursor;

