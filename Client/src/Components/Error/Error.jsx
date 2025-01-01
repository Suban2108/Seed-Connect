import React from 'react';
import { NavLink } from 'react-router-dom'; // Ensure NavLink is imported

const Error = () => {
    return (
        <section className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
            <div className="text-center p-8 bg-gray-800 rounded-lg shadow-lg">
                <h2 className="text-6xl font-bold gradient-text mb-4">404</h2> 
                <h4 className="text-2xl mb-2">Sorry! Page not found</h4>
                <p className="mb-4">
                    Oops! It seems like the page you're trying to access doesn't exist.
                    If you believe there's an issue, feel free to report it, and we'll look into it.
                </p>
                <div className="flex justify-center gap-4">
                    <NavLink
                        to="/"
                        className="inline-block px-6 py-3 text-base font-medium text-green-600 bg-green-500 rounded-md transition duration-200 hover:bg-green-400 focus:outline-none focus:ring focus:ring-green-300"
                    >
                        Return Home
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className="inline-block px-6 py-3 text-base font-medium text-green-600 bg-green-500 rounded-md transition duration-200 hover:bg-green-400 focus:outline-none focus:ring focus:ring-green-300"
                    >
                        Report Problem
                    </NavLink>
                </div>
            </div>
        </section>
    );
}

export default Error;
