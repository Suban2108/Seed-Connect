import React from 'react';
import './Popular.css';
import data_product from '../../Assets/data';
import Item from '../../Shop/Item/Item';


const Popular = () => {
  return (
    <div className='popular-container bg-gray-900 p-8 m-[120px] rounded-lg shadow-lg'>
      <h1 className='text-3xl text-white font-bold text-center mb-5 font-serif'>BEST OFFERS IN MARKET</h1>
      <hr className='border-t border-green-500 mb-5' />
      <div className="popular-item grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data_product.map((item, i) => (
          <Item 
            key={i} 
            id={item.id} 
            name={item.name} 
            imageurl={item.image} 
            new_price={item.new_price} 
            old_price={item.old_price} 
          />
        ))}
      </div>
    </div>
  );
}

export default Popular;
