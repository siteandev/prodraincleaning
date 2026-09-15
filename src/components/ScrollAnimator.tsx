'use client';
import React, { useEffect, useRef } from 'react';

export default function ScrollAnimator() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized?.current) return;
    initialized.current = true;

    const elements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -60px 0px', threshold: 0.1 }
    );

    elements?.forEach((el) => observer?.observe(el));

    return () => observer?.disconnect();
  }, []);

  return null;
}