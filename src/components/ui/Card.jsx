import React from 'react';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

const Card = React.forwardRef(({ className, clickable = false, children, ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                'bg-white rounded-3xl border border-gray-100 shadow-soft overflow-hidden p-6 transition-all duration-300',
                clickable && 'cursor-pointer hover:shadow-lg',
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
});

Card.displayName = 'Card';

export { Card };
