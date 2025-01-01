import React from 'react';
import './NewsLetter.css';
import { Mail } from 'lucide-react';

const NewsLetter = () => {
  return (
    <div className='newsletter w-[80vw] border-gray-900 bg-gradient-to-br from-green-500 to-black-900 border-2 text-white mt-10 px-[100px] pb-[20px] rounded-[120px] shadow-md'>
      <h1 className='text-5xl font-bold mb-2'>Get Exclusive Offers On Your Email</h1>
      <p className='mb-4 text-3xl'>Subscribe to our newsletter and stay updated</p>
      <div className='flex items-center'>
        <div className="cartitems-promocode mt-4">
          <div className="flex items-center relative">
        <Mail size={50} className='text-yellow mr-2' />
            <input
              type="text"
              placeholder='Enter Your Email id'
              className='bg-transparent border border-green-500 text-white p-2 text-[20px] w-full h-[60px] rounded-l-[20px] rounded-r-[20px] focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300 w-full'
            />
            <button className='absolute right-0 bg-green-500 text-white p-2 h-[60px] w-[100px] rounded-r-[20px] hover:bg-green-600 transition duration-200'>
              Submit
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default NewsLetter;
