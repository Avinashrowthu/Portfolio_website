import React from 'react';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

const Button = React.forwardRef(({ className, variant = 'primary', size = 'default', children, ...props }, ref) => {
    const variants = {
        primary: 'bg-brand-dark text-white hover:bg-black/90 shadow-lg hover:shadow-xl',
        secondary: 'bg-white text-brand-dark border border-gray-100/50 hover:bg-gray-50 shadow-sm hover:shadow-md',
        ghost: 'hover:bg-gray-100 text-gray-600 hover:text-gray-900',
        accent: 'bg-brand-yellow text-brand-dark hover:bg-[#FFD025] shadow-lg hover:shadow-orange-200/50',
    };

    const sizes = {
        default: 'h-11 px-6 py-2',
        sm: 'h-9 px-4 text-sm',
        lg: 'h-14 px-8 text-lg',
        icon: 'h-10 w-10',
    };

    return (
        <motion.button
            ref={ref}
            whileTap={{ scale: 0.96 }}
            whileHover={{ scale: 1.02 }}
            className={cn(
                'inline-flex items-center justify-center rounded-2xl font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-purple focus:ring-offset-2',
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        >
            {children}
        </motion.button>
    );
});

Button.displayName = 'Button';

export { Button };
