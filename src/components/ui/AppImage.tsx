'use client';

import React, { useState, useCallback, useMemo, memo } from 'react';
import Image from 'next/image';

interface AppImageProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
    priority?: boolean;
    quality?: number;
    placeholder?: 'blur' | 'empty';
    blurDataURL?: string;
    fill?: boolean;
    sizes?: string;
    onClick?: () => void;
    fallbackSrc?: string;
    loading?: 'lazy' | 'eager';
    unoptimized?: boolean;
    fetchPriority?: 'high' | 'low' | 'auto';
    [key: string]: any;
}

const AppImage = memo(function AppImage({
    src,
    alt,
    width,
    height,
    className = '',
    priority = false,
    quality = 75,
    placeholder = 'empty',
    blurDataURL,
    fill = false,
    sizes,
    onClick,
    fallbackSrc = '/assets/images/no_image.png',
    loading = 'lazy',
    unoptimized = false,
    fetchPriority: fetchPriorityProp,
    ...props
}: AppImageProps) {
    const [imageSrc, setImageSrc] = useState(src);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    const isExternalUrl = useMemo(() => typeof imageSrc === 'string' && imageSrc.startsWith('http'), [imageSrc]);
    const resolvedUnoptimized = unoptimized;

    const handleError = useCallback(() => {
        if (!hasError && imageSrc !== fallbackSrc) {
            setImageSrc(fallbackSrc);
            setHasError(true);
        }
        setIsLoading(false);
    }, [hasError, imageSrc, fallbackSrc]);

    const handleLoad = useCallback(() => {
        setIsLoading(false);
        setHasError(false);
    }, []);

    const imageClassName = useMemo(() => {
        const classes = [className];
        if (onClick) classes.push('cursor-pointer hover:opacity-90 transition-opacity duration-200');
        return classes.filter(Boolean).join(' ');
    }, [className, onClick]);

    const imageProps = useMemo(() => {
        const baseProps: any = {
            src: imageSrc,
            alt,
            className: imageClassName,
            quality,
            placeholder,
            unoptimized: resolvedUnoptimized,
            onError: handleError,
            onLoad: handleLoad,
            onClick,
        };

        if (priority) {
            baseProps.priority = true;
            // Only set fetchPriority="high" on the explicit LCP/priority image
            baseProps.fetchPriority = fetchPriorityProp || 'high';
            baseProps.loading = 'eager';
        } else {
            // Non-priority images: always lazy, never fetchPriority="high"
            baseProps.loading = loading;
            if (fetchPriorityProp && fetchPriorityProp !== 'high') {
                baseProps.fetchPriority = fetchPriorityProp;
            }
        }

        if (blurDataURL && placeholder === 'blur') {
            baseProps.blurDataURL = blurDataURL;
        }

        return baseProps;
    }, [imageSrc, alt, imageClassName, quality, placeholder, blurDataURL, resolvedUnoptimized, priority, loading, fetchPriorityProp, handleError, handleLoad, onClick]);

    if (fill) {
        return (
            <Image
                {...imageProps}
                fill
                sizes={sizes || '(max-width: 640px) 100vw, (max-width: 1080px) 100vw, 100vw'}
                style={{ objectFit: 'cover' }}
                {...props}
            />
        );
    }

    return (
        <Image
            {...imageProps}
            width={width || 400}
            height={height || 300}
            sizes={sizes || '(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
            {...props}
        />
    );
});

AppImage.displayName = 'AppImage';

export default AppImage;