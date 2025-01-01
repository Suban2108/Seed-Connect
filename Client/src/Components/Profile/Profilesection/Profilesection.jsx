// ProfileSection.js
import React from 'react';
import image from '../../Assets/new (1).png'

const ProfileSection = () => {
    return (
        <div className="bg-gray-900 shadow-md rounded-lg p-8 max-w-3xl mx-auto">
            <h4 className="text-2xl font-bold mb-6 text-green-400 text-center">
                Profile Overview
            </h4>
            {/* Image Section */}
            <div className="flex justify-center mb-8">
                <img
                    src={image}
                    alt="Farmer"
                    className="w-32 h-32 rounded-full shadow-lg object-cover"
                />
            </div>

            {/* Farmer ID */}
            <div className="text-center mb-8">
                <p className="text-green-300 font-medium">Farmer ID:</p>
                <p className="text-lg font-semibold text-gray-300">SUBAN-MH-8064F</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-300">
                {/* Profile Details */}
                <ProfileDetail label="Name" value="Abdul Suban" />
                <ProfileDetail label="Contact" value="+91 7208718064" />
                <ProfileDetail label="Email" value="suban14925@gmail.com" />
                <ProfileDetail label="Location" value="Maharashtra, India" />
                <ProfileDetail label="User Type" value="Farmer" />
            </div>
            <div className="mt-8 flex justify-center">
                <button className="bg-green-500 hover:bg-green-600 text-black font-semibold rounded-md py-2 px-6 transition-colors duration-200">
                    Edit Profile
                </button>
            </div>
        </div>
    );
};

// Sub-component for individual profile details
const ProfileDetail = ({ label, value }) => (
    <div className="flex flex-col text-center sm:text-left">
        <p className="text-green-300 font-medium">{label}:</p>
        <p className="font-semibold mt-1">{value}</p>
    </div>
);

export default ProfileSection;
