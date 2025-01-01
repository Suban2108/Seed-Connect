// OrdersSection.js
import React from 'react';

const mockOrders = [
  {
    id: 1,
    productName: 'Organic Tomatoes',
    quantity: '5 kg',
    price: 'Rs. 100',
    status: 'Delivered',
    date: '2024-10-10',
  },
  {
    id: 2,
    productName: 'Fresh Cucumbers',
    quantity: '3 kg',
    price: 'Rs. 60',
    status: 'Pending',
    date: '2024-10-12',
  },
  {
    id: 3,
    productName: 'Premium Potatoes',
    quantity: '10 kg',
    price: 'Rs. 150',
    status: 'Cancelled',
    date: '2024-10-15',
  },
];

const OrdersSection = () => (
  <div className="bg-gray-900 shadow rounded-lg p-6">
    <h4 className="text-xl font-semibold mb-4 text-green-400">Orders Overview</h4>
    
    {mockOrders.length === 0 ? (
      <div className="text-gray-300">
        <p className="mb-2">You currently have no new orders.</p>
        <p>All previous orders will appear here once available.</p>
      </div>
    ) : (
      <table className="min-w-full divide-y divide-gray-700">
        <thead className="bg-gray-800">
          <tr>
            <th className="px-6 py-3 text-center text-xs font-medium text-green-300 uppercase tracking-wider">Order ID</th>
            <th className="px-6 py-3 text-center text-xs font-medium text-green-300 uppercase tracking-wider">Product Name</th>
            <th className="px-6 py-3 text-center text-xs font-medium text-green-300 uppercase tracking-wider">Quantity</th>
            <th className="px-6 py-3 text-center text-xs font-medium text-green-300 uppercase tracking-wider">Price</th>
            <th className="px-6 py-3 text-center text-xs font-medium text-green-300 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-center text-xs font-medium text-green-300 uppercase tracking-wider">Order Date</th>
          </tr>
        </thead>
        <tbody className="bg-gray-900 divide-y divide-gray-700">
          {mockOrders.map(order => (
            <tr key={order.id} className="hover:bg-gray-800 transition-colors duration-200">
              <td className="px-6 py-4 whitespace-nowrap text-gray-300 text-sm">{order.id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-300 text-sm">{order.productName}</td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-300 text-sm">{order.quantity}</td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-300 text-sm">{order.price}</td>
              <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${order.status === 'Delivered' ? 'text-green-400' : order.status === 'Pending' ? 'text-yellow-400' : 'text-red-500'}`}>
                {order.status}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-300 text-sm">{order.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>
);

export default OrdersSection;
