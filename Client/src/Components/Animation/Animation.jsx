// IntroAnimation.jsx
import React, { useState } from 'react';
import Lottie from 'react-lottie';
import animationData1 from '../Assets/Login1.json';
import animationData2 from '../Assets/DirectConnection.json';
import animationData3 from '../Assets/FreshFarmtoretailer.json';


const IntroAnimation = ({ onComplete,mes,button }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const animations = [
        { data: animationData2, text: 'Experience seamless connections between farmers and retailers.' },
        { data: animationData3, text: 'Enjoy fresh produce delivered straight from farm to your hands!' },
        { data: animationData1, text: `Unlock to access to all the features by ${mes}.` },
    ];

    const handleNext = () => {
        if (currentIndex < animations.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            onComplete(); // Proceed to login after the last animation
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animations[currentIndex].data,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
            <div className="flex items-center justify-center w-full h-full">
                <Lottie options={defaultOptions} height="50vh" width="30vw" />
            </div>
            <p className="text-2xl mt-4">{animations[currentIndex].text}</p>
            <div className="flex items-center mt-6 space-x-4">
                <button 
                    onClick={handlePrev} 
                    disabled={currentIndex === 0} 
                    className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition"
                >
                    Previous
                </button>
                <button 
                    onClick={handleNext} 
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-400 transition"
                >
                    {currentIndex === animations.length - 1 ? button : 'Next'}
                </button>
            </div>
            <div className="flex space-x-2 mt-4">
                {animations.map((_, index) => (
                    <span 
                        key={index} 
                        className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-green-500' : 'bg-gray-500'}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default IntroAnimation;
