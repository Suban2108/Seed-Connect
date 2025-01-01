// ProductsSection.js
import React from 'react';
import { Link } from 'react-router-dom';

const ProductsSection = () => (
  <div className="bg-gray-900 shadow rounded-lg p-6">
    <h4 className="text-xl font-semibold mb-4 text-green-400">Product Management</h4>
    <table className="min-w-full divide-y divide-gray-700">
      <thead className="bg-gray-800">
        <tr>
          <th className="px-6 py-3 text-center text-xs font-medium text-green-300 uppercase tracking-wider border-l border-gray-700">Name</th>
          <th className="px-6 py-3 text-center text-xs font-medium text-green-300 uppercase tracking-wider border-l border-gray-700">Category</th>
          <th className="px-6 py-3 text-center text-xs font-medium text-green-300 uppercase tracking-wider border-l border-gray-700">Price</th>
          <th className="px-6 py-3 text-center text-xs font-medium text-green-300 uppercase tracking-wider border-l border-gray-700">Stock</th>
          <th className="px-6 py-3 text-center text-xs font-medium text-green-300 uppercase tracking-wider border-l border-gray-700">Actions</th>
        </tr>
      </thead>
      <tbody className="bg-gray-900 divide-y divide-gray-700">
        <tr className="hover:bg-gray-800 transition-colors duration-200">
          <td className="px-6 py-4 whitespace-nowrap text-gray-300 text-sm border-l border-gray-700">Organic Tomatoes</td>
          <td className="px-6 py-4 whitespace-nowrap text-gray-300 text-sm border-l border-gray-700">Vegetables</td>
          <td className="px-6 py-4 whitespace-nowrap text-gray-300 text-sm border-l border-gray-700">Rs. 20</td>
          <td className="px-6 py-4 whitespace-nowrap text-gray-300 text-sm border-l border-gray-700">500 gm</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border-l border-gray-700">
            <Link to="#" className="text-green-400 hover:text-green-300 mr-2">Edit</Link>
            <Link to="#" className="text-red-500 hover:text-red-400">Delete</Link>
          </td>
        </tr>
        {/* Additional rows can be added here */}
      </tbody>
    </table>
  </div>
);

export default ProductsSection;
