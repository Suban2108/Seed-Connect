// RightSidebar.js
import React from 'react';
import { Bell, Settings, HelpCircle, UserPlus } from 'lucide-react';
import profile_image from '../../Assets/hellofarmer.png';

const RightSidebar = () => {
  return (
    <aside className="w-64 bg-gray-900 shadow-md">
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center space-x-4">
          <img src={profile_image} alt="User" className="w-10 h-10 rounded-full" />
          <div>
            <h3 className="font-semibold text-white">John Doe</h3>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h4 className="text-lg font-semibold text-white mb-4">Quick Actions</h4>
        <button className="w-full bg-green-500 text-black rounded-md py-2 mb-2 flex items-center justify-center">
          <Bell size={16} className="mr-2" /> Notifications
        </button>
        <button className="w-full bg-green-600 text-white rounded-md py-2 mb-2 flex items-center justify-center">
          <Settings size={16} className="mr-2" /> Settings
        </button>
        <button className="w-full bg-green-700 text-white rounded-md py-2 mb-2 flex items-center justify-center">
          <HelpCircle size={16} className="mr-2" /> Help & Support
        </button>
        <button className="w-full bg-green-800 text-white rounded-md py-2 flex items-center justify-center">
          <UserPlus size={16} className="mr-2" /> Invite Friends
        </button>
      </div>
    </aside>
  );
};

export default RightSidebar;
