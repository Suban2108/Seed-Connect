import React from 'react';
import CourseItem from '../../Shop/Item/Item';


const Carousel = ({ slides = [] }) => {
  return (
    <div className="carousel-container mx-auto px-4">
      <div className="carousel flex overflow-x-scroll space-x-4">
        {slides.map((item, i) => (
          <div className="min-w-[250px] max-w-[260px] bg-zinc-00 shadow-md rounded-lg p-4 transform transition-transform hover:scale-105" key={item.id}>
            <CourseItem 
              key={i}
              id={item.id}
              name={item.name}
              imageurl={item.image}
              description={item.description}
              new_price={item.new_price}
              old_price={item.old_price}
              category={item.category}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
