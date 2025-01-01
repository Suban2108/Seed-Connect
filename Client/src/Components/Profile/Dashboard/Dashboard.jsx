// DashboardLayout.js
import React, { useState } from 'react';
import SidebarMenu from '../Sidebar/Sidebar';
import RightSidebar from '../Rightsidebar/Rightsidebar';
import ProfileSection from '../Profilesection/Profilesection';
import ProductsSection from '../Productsection/Productsection';
import LogisticsSection from '../Logistics/Logistics';
import MessagesSection from '../Message/Message';
import OrdersSection from '../Orders/Orders';
import PaymentsSection from '../Payments/Payments';
import Deals from '../Deals/Deals'

const DashboardLayout = () => {
    const [activeSection, setActiveSection] = useState('orders'); // Initialize activeSection state

    const renderContent = () => {
        switch (activeSection) {
            case 'orders':
                return <OrdersSection />;
            case 'payments':
                return <PaymentsSection />;
            case 'messages':
                return <MessagesSection />;
            case 'logistics':
                return <LogisticsSection />;
            case 'products':
                return <ProductsSection />;
            case 'profile':
                return <ProfileSection />;
                case 'Deals':
                return <Deals />;
            default:
                return <div className="text-gray-400">Please select a section from the sidebar.</div>;
        }
    };

    return (
        <div className="flex h-screen bg-black text-white">
            <SidebarMenu activeSection={activeSection} setActiveSection={setActiveSection} />
            <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-800">
                <div className="container mx-auto px-6 py-8">
                    <h3 className="text-3xl font-medium text-green-400">Dashboard</h3>
                    <div className="mt-8">{renderContent()}</div>
                </div>
            </main>
            <RightSidebar />
        </div>
    );
};

export default DashboardLayout;
