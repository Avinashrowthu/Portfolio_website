import React from 'react';
import { cn } from '../../lib/utils';

const Badge = ({ className, variant = 'default', children }) => {
    const variants = {
        default: 'bg-gray-100 text-gray-800',
        yellow: 'bg-brand-yellow/10 text-yellow-700 border-brand-yellow/20',
        purple: 'bg-brand-purple/10 text-brand-purple border-brand-purple/20',
        orange: 'bg-brand-orange/10 text-brand-orange border-brand-orange/20',
    };

    return (
        <span className={cn(
            'inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide border border-transparent',
            variants[variant],
            className
        )}>
            {children}
        </span>
    );
};

export { Badge };
