// SidebarMenu.js
import React from 'react';
import {
  User,
  Package,
  DollarSign,
  MessageSquare,
  Truck,
  UsersRoundIcon,
  ReceiptTextIcon
} from 'lucide-react';

const menuItems = [
  { name: 'Profile', icon: <User size={20} />, key: 'profile' },
  { name: 'Products', icon: <Package size={20} />, key: 'products' },
  { name: 'Orders', icon: <ReceiptTextIcon size={20} />, key: 'orders' },
  { name: 'Payments', icon: <DollarSign size={20} />, key: 'payments' },
  { name: 'Messages', icon: <MessageSquare size={20} />, key: 'messages' },
  { name: 'Deals', icon: <UsersRoundIcon size={20} />, key: 'Deals' },
  { name: 'Logistics', icon: <Truck size={20} />, key: 'logistics' },
];

const SidebarMenu = ({ activeSection, setActiveSection }) => {
  return (
    <aside className="w-64 bg-gray-900 shadow-md">
      <div className="p-4">
        <h1 className="text-2xl font-bold border-green-600 border-b-[2px] text-green-500">Seed Connect</h1>
      </div>
      <nav className="mt-8">
        {menuItems.map((item) => (
          <a
            key={item.key}
            href={`#${item.key}`}
            className={`flex items-center px-4 py-2 text-gray-300 hover:bg-green-500 hover:text-black ${
              activeSection === item.key ? 'bg-green-500 text-black' : ''
            }`}
            onClick={() => setActiveSection(item.key)}
          >
            {item.icon}
            <span className="mx-4">{item.name}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default SidebarMenu;
