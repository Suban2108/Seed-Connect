import React from 'react';

const Notification = ({ message, onClose }) => {
    return (
        <div className="fixed top-[100px] right-5 bg-green-500 text-white p-4 rounded shadow-lg transition duration-300 ease-in-out">
            {message}
            <button className="ml-4 text-white font-semibold" onClick={onClose}>Close</button>
        </div>
    );
};

export default Notification;
