'use client';
import React, { useState, useEffect } from 'react';

function ToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const isVisible = currentScrollPos > 100;
            setIsVisible(isVisible);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            {isVisible && (
                <div
                    className="fixed bottom-0 right-0 z-50 mb-5 mr-1 rounded-full p-2 aspect-square btn btn-outline btn-info cursor-pointer"
                    onClick={scrollToTop}
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 1024 1024"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill="#000000"
                            d="M572.235 205.282v600.365a30.118 30.118 0 1 1-60.235 0V205.282L292.382 438.633a28.913 28.913 0 0 1-42.646 0a33.43 33.43 0 0 1 0-45.236l271.058-288.045a28.913 28.913 0 0 1 42.647 0L834.5 393.397a33.43 33.43 0 0 1 0 45.176a28.913 28.913 0 0 1-42.647 0l-219.618-233.23z"
                        />
                    </svg>
                </div>
            )}
        </>
    );
}

export default ToTop;
