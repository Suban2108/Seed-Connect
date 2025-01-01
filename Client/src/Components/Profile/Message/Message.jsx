// MessagesSection.js
import React from 'react';

const MessagesSection = () => {
  // Dummy messages data
  const messages = [
    {
      id: 1,
      sender: 'John Doe',
      date: '2024-10-01',
      content: 'Hey! Are you available for a meeting this week?',
    },
    {
      id: 2,
      sender: 'Jane Smith',
      date: '2024-09-30',
      content: 'Your order has been shipped! Track it using the link provided.',
    },
    {
      id: 3,
      sender: 'Admin',
      date: '2024-09-29',
      content: 'Reminder: Update your profile information.',
    },
  ];

  return (
    <div className="bg-gray-900 shadow rounded-lg p-6">
      <h4 className="text-xl font-semibold mb-4 text-green-400">Messages</h4>

      {messages.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {messages.map((message) => (
            <div key={message.id} className="bg-gray-800 rounded-lg p-4 flex justify-between">
              <div className="flex-1">
                <h5 className="text-green-400 font-semibold text-sm">{message.sender}</h5>
                <p className="text-gray-300 text-xs">{message.content}</p>
              </div>
              <span className="text-gray-400 text-xs ml-4">{message.date}</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-gray-300">
          <p className="mb-2">You have no new messages.</p>
          <p>All your messages will be displayed here.</p>
        </div>
      )}
    </div>
  );
};

export default MessagesSection;
