// DealsSection.js
import React from 'react';

const DealsSection = () => {
  // Dummy deals data
  const dealsData = [
    {
      id: 1,
      partner: 'Fresh Farms',
      date: '2024-09-15',
      amount: '₹15,000',
      status: 'Completed',
      contact: '9876543210',
      email: 'contact@freshfarms.com',
    },
    {
      id: 2,
      partner: 'Green Valley Suppliers',
      date: '2024-09-10',
      amount: '₹20,500',
      status: 'Pending',
      contact: '9123456789',
      email: 'info@greenvalleysuppliers.com',
    },
    {
      id: 3,
      partner: 'Organic Goods Co.',
      date: '2024-08-25',
      amount: '₹12,000',
      status: 'Completed',
      contact: '9988776655',
      email: 'support@organicgoods.com',
    },
  ];

  return (
    <div className="bg-gray-900 shadow rounded-lg p-6">
      <h4 className="text-xl font-semibold mb-4 text-green-400">Deals Overview</h4>

      {dealsData.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-800">
            <thead>
              <tr className="border-b border-gray-600">
                <th className="text-center py-2 border-l border-zinc-600 px-4 text-green-400">Partner</th>
                <th className="text-center py-2 border-l border-zinc-600 px-4 text-green-400">Deal Date</th>
                <th className="text-center py-2 border-l border-zinc-600 px-4 text-green-400">Amount</th>
                <th className="text-center py-2 border-l border-zinc-600 px-4 text-green-400">Status</th>
                <th className="text-center py-2 border-l border-zinc-600 px-4 text-green-400">Contact</th>
                <th className="text-center py-2 border-l border-zinc-600 px-4 text-green-400">Email</th>
              </tr>
            </thead>
            <tbody>
              {dealsData.map((deal) => (
                <tr key={deal.id} className="border-b border-gray-700">
                  <td className="py-2 border-l border-zinc-600 px-4 text-gray-300">{deal.partner}</td>
                  <td className="py-2 border-l border-zinc-600 px-4 text-gray-300">{deal.date}</td>
                  <td className="py-2 border-l border-zinc-600 px-4 text-gray-300">{deal.amount}</td>
                  <td className="py-2 border-l border-zinc-600 px-4 text-gray-300">{deal.status}</td>
                  <td className="py-2 border-l border-zinc-600 px-4 text-gray-300">{deal.contact}</td>
                  <td className="py-2 border-l border-zinc-600 px-4 text-gray-300">{deal.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-gray-300">
          <p className="mb-2">No deals recorded yet.</p>
          <p>All your past transactions will be displayed here.</p>
        </div>
      )}
    </div>
  );
};

export default DealsSection;
