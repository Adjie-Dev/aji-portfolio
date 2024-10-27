import React, { useState, useEffect } from 'react';
import { CiSaveUp1 } from 'react-icons/ci';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        if(window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
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
                    onClick={scrollToTop}
                    className="fixed right-4 bottom-4 p-3 rounded-full bg-dark/75 dark:bg-light/75 text-light dark:text-dark cursor-pointer hover:bg-dark dark:hover:bg-light transition-all duration-300 z-50"
                    role="button"
                    aria-label="Scroll to top"
                >
                    <CiSaveUp1 className="w-6 h-6" />
                </div>
            )}
        </>
    );
};

export default ScrollToTop;