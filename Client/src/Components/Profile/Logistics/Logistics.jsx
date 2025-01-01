// LogisticsSection.js
import React from 'react';

const LogisticsSection = () => {
  // Dummy logistics data
  const logisticsData = [
    {
      id: 1,
      shipmentId: 'SH123456',
      status: 'In Transit',
      deliveryDate: '2024-10-20',
    },
    {
      id: 2,
      shipmentId: 'SH789012',
      status: 'Delivered',
      deliveryDate: '2024-10-10',
    },
    {
      id: 3,
      shipmentId: 'SH345678',
      status: 'Pending',
      deliveryDate: 'TBD',
    },
  ];

  return (
    <div className="bg-gray-900 shadow rounded-lg p-6">
      <h4 className="text-xl font-semibold mb-4 text-green-400">Logistics</h4>

      {logisticsData.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-800">
            <thead>
              <tr className="border-b border-gray-600">
                <th className="text-center py-2 border-l border-zinc-600 px-4 text-green-400">Shipment ID</th>
                <th className="text-center py-2 border-l border-zinc-600 px-4 text-green-400">Status</th>
                <th className="text-center py-2 border-l border-zinc-600 px-4 text-green-400">Delivery Date</th>
              </tr>
            </thead>
            <tbody>
              {logisticsData.map((log) => (
                <tr key={log.id} className="border-b border-gray-700">
                  <td className="py-2 border-l border-zinc-600 px-4 text-gray-300">{log.shipmentId}</td>
                  <td className="py-2 border-l border-zinc-600 px-4 text-gray-300">{log.status}</td>
                  <td className="py-2 border-l border-zinc-600 px-4 text-gray-300">{log.deliveryDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-gray-300">
          <p className="mb-2">No logistics data available.</p>
          <p>Shipping and delivery details will appear here once available.</p>
        </div>
      )}
    </div>
  );
};

export default LogisticsSection;
