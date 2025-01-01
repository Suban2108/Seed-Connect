import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import { AuthContext } from '../../Context/AuthContext'; // Import AuthContext
import toast from 'react-hot-toast';

const Item = (props) => {
  const { addToCart } = useContext(ShopContext);
  const { isLoggedIn } = useContext(AuthContext); // Get authentication status
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const hideModal = () => {
    setIsModalOpen(false);
  };

  // Custom smooth scroll function
  const smoothScrollToTop = () => {
    const startPosition = window.pageYOffset; // Current scroll position
    const targetPosition = 0; // Target scroll position (top of the page)
    const distance = targetPosition - startPosition; // Distance to scroll
    const duration = 500; // Duration of the scroll in milliseconds
    let startTime = null;

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime; // Initialize start time
      const elapsed = currentTime - startTime; // Calculate elapsed time
      const progress = Math.min(elapsed / duration, 1); // Calculate progress ratio

      // Ease-in-out scroll calculation
      const ease = progress < 0.5
        ? 4 * progress * progress * progress
        : (progress - 1) * (2 * progress - 2) * (2 * progress - 2) + 1;

      window.scrollTo(0, startPosition + distance * ease); // Scroll to position based on progress

      if (elapsed < duration) {
        requestAnimationFrame(animation); // Continue animation until duration is reached
      }
    };

    requestAnimationFrame(animation); // Start animation
  };

  const handleAddToCart = (e) => {
    e.stopPropagation(); // Prevent click from triggering the Link navigation
    if (!isLoggedIn) {
      // If the user is not logged in, show an error message
      // alert('First Login or Create Account for Adding Product to cart')
      toast.error('Please log in or create an account to add products to the cart!', {
        style: { background: '#e63946', color: '#fff' },
        duration: 3000 // Display duration for error message
    });
      return; // Exit the function early
    }
    // If the user is authenticated, proceed to add the product to the cart
    addToCart(props.id);
  };

  return (
    <div className="item bg-gray-800 border border-green-700 rounded-lg shadow-lg overflow-visible mt-4 relative" id={props.category}>
      <div className="item-img h-48 w-full overflow-hidden">
        <Link to={`/shop/${props.id}`}>
          <img
            src={props.imageurl}
            alt={props.name}
            onClick={(e) => {
              smoothScrollToTop(); // Call custom smooth scroll function
            }}
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          />
        </Link>
        {/* Circle Button */}
        <div
          className="absolute top-2 right-2 w-10 h-10 border border-black-800 bg-blue-600 text-white rounded-full flex items-center justify-center cursor-pointer transition-transform duration-200 hover:scale-110"
          onMouseEnter={showModal}
          onMouseLeave={hideModal}
        >
          A
        </div>
      </div>

      <div className="item-detail text-left p-4">
        <Link to={`/shop/${props.id}`}>
          <p className="item-title font-bold text-lg text-white truncate hover:underline">{props.name}</p>
        </Link>
        <div className="item-prices flex items-center justify-between mt-2">
          <div className="item-price-new text-green-400 font-semibold">
            Rs.{props.new_price}
          </div>
          <div className="item-price-old text-gray-400 line-through ml-2">
            Rs.{props.old_price}
          </div>
        </div>
        <div className="item-price-old mt-1 text-gray-400 flex justify-between item-center">
         <span className='text-red-600'>Shipping Cost:</span><p className='text-[15px]'>Rs.10</p>
        </div>
        <div className="item-cart-button mt-4">
          <button
            onClick={handleAddToCart} // Call the updated function
            className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition duration-200"
          >
            ADD TO CART
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="absolute top-16 right-[-100px] bg-blue-400 text-white p-4 text-center rounded-lg shadow-lg w-50 z-50"
          onMouseEnter={showModal}
          onMouseLeave={hideModal}
          style={{ transform: 'translateY(-50%)' }}
        >
          <p className="font-semibold">Uploaded by:</p>
          <Link to={`/profile/${props.uploaderId}`}>
            <p className='text-[20px] hover:underline'>Abdul Suban</p>
          </Link>
          <p className="text-sm mt-2">Contact: 7208718064</p>
          <p className="text-sm mt-2">Email: suban14925@gmail.com</p>
        </div>
      )}
    </div>
  );
};

export default Item;
