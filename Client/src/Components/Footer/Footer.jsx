import React from 'react';
import footer_logo from '../Assets/logo_big.png';
import instagram_icon from '../Assets/instagram_icon.png';
import pintester_icon from '../Assets/pintester_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    const smoothScrollToTop = () => {
        const startPosition = window.pageYOffset; // Current scroll position
        const targetPosition = 0; // Target scroll position (top of the page)
        const distance = targetPosition - startPosition; // Distance to scroll
        const duration = 500; // Duration of the scroll in milliseconds
        let startTime = null;

        const animation = (currentTime) => {
            if (startTime === null) startTime = currentTime; // Initialize start time
            const elapsed = currentTime - startTime; // Calculate elapsed time
            const progress = Math.min(elapsed / duration, 1); // Calculate progress ratio

            // Ease-in-out scroll calculation
            const ease = progress < 0.5
                ? 4 * progress * progress * progress
                : (progress - 1) * (2 * progress - 2) * (2 * progress - 2) + 1;

            window.scrollTo(0, startPosition + distance * ease); // Scroll to position based on progress

            if (elapsed < duration) {
                requestAnimationFrame(animation); // Continue animation until duration is reached
            }
        };

        requestAnimationFrame(animation); // Start animation
    };

    return (
        <footer className="bg-zinc-800 py-10 mt-5">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
                {/* Footer Logo */}
                <div className="flex flex-col items-center md:items-start">
                    <img src={footer_logo} alt="SEED CONNECT Logo" className="w-24 h-auto mb-2" />
                    <p className="text-xl font-semibold text-green-600 dark:text-green-600 relative right-[30px]">SEED CONNECT</p>
                </div>

                {/* Footer Links */}
                <ul className="flex flex-wrap justify-center md:justify-start space-x-6 text-green-600 dark:text-green-400">
                    <Link to='/' onClick={smoothScrollToTop}>
                        <li className="hover:text-gray-900 dark:hover:text-white cursor-pointer">Home</li>
                    </Link>
                    <Link to='/shop' onClick={smoothScrollToTop}>
                        <li className="hover:text-gray-900 dark:hover:text-white cursor-pointer">Products</li>
                    </Link>
                    <Link to='connect' onClick={smoothScrollToTop}>
                        <li className="hover:text-gray-900 dark:hover:text-white cursor-pointer">Connect</li>
                    </Link>
                    <Link to='about' onClick={smoothScrollToTop}>
                        <li className="hover:text-gray-900 dark:hover:text-white cursor-pointer">About</li>
                    </Link>
                    <Link to='contact' onClick={smoothScrollToTop}>
                        <li className="hover:text-gray-900 dark:hover:text-white cursor-pointer">Contact</li>
                    </Link>
                </ul>

                {/* Social Media Icons */}
                <div className="flex space-x-4">
                    <Link to="#" className="hover:opacity-80">
                        <img src={instagram_icon} alt="Instagram" className="w-6 h-6 bg-zinc-400 rounded-[20px]" />
                    </Link>
                    <Link to="#" className="hover:opacity-80">
                        <img src={pintester_icon} alt="Pinterest" className="w-6 h-6 bg-zinc-400 rounded-[20px]" />
                    </Link>
                    <Link to="#" className="hover:opacity-80">
                        <img src={whatsapp_icon} alt="WhatsApp" className="w-6 h-6 bg-zinc-400 rounded-[20px]" />
                    </Link>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="mt-8 text-center">
                <hr className="border-gray-300 dark:border-gray-600" />
                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                    © 2024 SEED CONNECT - All Rights Reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer;
