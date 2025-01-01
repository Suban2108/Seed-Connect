import React, { useState } from 'react';
import ReactStars from 'react-stars';

const StarRating = ({ initialRating = 0 }) => {
  const [ratingVal, setRatingVal] = useState(initialRating);

  const ratingChanged = (newRating) => {
    setRatingVal(newRating);
  };

  return (
    <div className="mb-4 flex justify-center items-center flex-row">
      <ReactStars
        value={ratingVal}
        count={5}
        size={25}
        color2={'gold'}
        onChange={ratingChanged}
      />
      <div className="ml-2">
        {ratingVal}
      </div>
    </div>
  );
};

export default StarRating;
