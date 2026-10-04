'use client';

import React from 'react';
import { ArrowLeftIcon, HomeIcon, QuestionMarkCircleIcon, SparklesIcon } from '@heroicons/react/24/outline';

const ICONS: Record<string, React.ComponentType<any>> = {
    SparklesIcon,
    QuestionMarkCircleIcon,
    ArrowLeftIcon,
    HomeIcon,
};

interface IconProps {
    name: string; // Changed to string to accept dynamic values
    size?: number;
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
    [key: string]: any;
}

function Icon({
    name,
    size = 24,
    className = '',
    onClick,
    disabled = false,
    ...props
}: IconProps) {
    const IconComponent = ICONS[name];

    if (!IconComponent) {
        return (
            <QuestionMarkCircleIcon
                width={size}
                height={size}
                className={`text-gray-400 ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
                onClick={disabled ? undefined : onClick}
                {...props}
            />
        );
    }

    return (
        <IconComponent
            width={size}
            height={size}
            className={`${disabled ? 'opacity-50 cursor-not-allowed' : onClick ? 'cursor-pointer hover:opacity-80' : ''} ${className}`}
            onClick={disabled ? undefined : onClick}
            {...props}
        />
    );
}

export default Icon; 