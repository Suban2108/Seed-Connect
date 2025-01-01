// PaymentsSection.js
import React from 'react';

const PaymentsSection = () => {
  // Dummy payment data
  const paymentData = [
    { id: 1, date: '2024-10-01', amount: '₹1,500', status: 'Completed' },
    { id: 2, date: '2024-09-28', amount: '₹2,000', status: 'Completed' },
    { id: 3, date: '2024-09-15', amount: '₹750', status: 'Pending' },
    { id: 4, date: '2024-09-10', amount: '₹1,200', status: 'Completed' },
  ];

  return (
    <div className="bg-gray-900 shadow rounded-lg p-6">
      <h4 className="text-xl font-semibold mb-4 text-green-400">Your Payment History</h4>

      {paymentData.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-800 text-left text-sm">
            <thead>
              <tr className="bg-gray-700 text-gray-300">
                <th className="py-2 border-l border-zinc-600 px-4">ID</th>
                <th className="py-2 border-l border-zinc-600 px-4">Date</th>
                <th className="py-2 border-l border-zinc-600 px-4">Amount</th>
                <th className="py-2 border-l border-zinc-600 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {paymentData.map((payment) => (
                <tr key={payment.id} className="border-b border-gray-600">
                  <td className="py-2 border-l border-zinc-600 px-4">{payment.id}</td>
                  <td className="py-2 border-l border-zinc-600 px-4">{payment.date}</td>
                  <td className="py-2 border-l border-zinc-600 px-4">{payment.amount}</td>
                  <td className={`py-2 border-l border-zinc-600 px-4 ${payment.status === 'Completed' ? 'text-green-400' : 'text-yellow-400'}`}>
                    {payment.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-gray-300">
          <p className="mb-2">No recent payments recorded.</p>
          <p>Your payment transactions will be listed here.</p>
        </div>
      )}
    </div>
  );
};

export default PaymentsSection;
