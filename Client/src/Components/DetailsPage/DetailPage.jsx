import React, { useContext, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import { AuthContext } from '../Context/AuthContext'; // Import AuthContext
import StarRating from './StarRating';
import data from '../Assets/allproduct'; // Assuming the file name is allproduct.js
import './detail.css';
import NewCollections from '../Home/NewCollections/NewCollections';
import toast, { Toaster } from 'react-hot-toast'; // Import Toaster for notifications


const ProductDisplay = () => {
    const { id } = useParams();
    const { addToCart } = useContext(ShopContext);
    const { isAuthenticated } = useContext(AuthContext); // Access authentication state


    // Find the product in the data array using the ID from the URL
    const product = data.find((item) => item.id === parseInt(id));

    const reviews = [
        { id: 1, user: "User 1", text: "Great platform for connecting farmers and retailers. Highly recommended!" },
        { id: 2, user: "User 2", text: "The products are always fresh and delivered on time." },
        { id: 3, user: "User 3", text: "I love supporting local farmers through this platform." },
        { id: 4, user: "User 4", text: "Fantastic service and excellent quality!" },
        { id: 5, user: "User 5", text: "Best experience I've had with online grocery shopping." },
        { id: 6, user: "User 6", text: "Wide variety of products to choose from!" },
    ];

    // If the product is not found, display an error message
    if (!product) {
        return (
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold">Product Not Found</h1>
                <p className="text-gray-600">Sorry, we couldn't find the product you're looking for.</p>
            </div>
        );
    }

    const handleAddToCart = () => {
        if (isAuthenticated) {
            addToCart(product.id);
            // Optionally show a success notification here
            alert('Product added to cart!');
        } else {
            // Optionally show a warning notification or redirect to login
            toast.error('Please log in or create an account to add products to the cart!', {
                style: { background: '#e63946', color: '#fff' },
                duration: 3000 // Display duration for error message
            });
        }
    };

    return (
        <div>
            <div className="flex flex-col md:flex-row mx-[60px] md:mx-[170px] mt-20 gap-10">
            <Toaster position="top-center" reverseOrder={false} />
                {/* Image Gallery */}
                <div className="flex gap-5 md:gap-10 w-full md:w-[40%]">
                    <div className="flex flex-col gap-4 md:gap-[16px]">
                        {[...Array(3)].map((_, index) => (
                            <img
                                key={index}
                                className="h-[80px] md:h-[120px] lg:h-[163px] max-w-[150px] max-h-[200px] p-2 bg-gray-600 rounded-lg"
                                src={product.image}
                                alt={product.name}
                            />
                        ))}
                    </div>
                    <div className="flex-1">
                        <img
                            className="w-full h-[350px] md:h-[510px] lg:h-[520px] max-w-[600px] max-h-[520px] object-cover p-5 bg-gray-600 rounded-lg"
                            src={product.image}
                            alt={product.name}
                        />
                    </div>
                </div>

                {/* Divider */}
                <div className="hidden md:block w-[3px] bg-green-700 ml-10"></div>

                {/* Product Details */}
                <div className="w-full md:w-[50%] flex flex-col text-left px-10">
                    <h1 className="text-[18px] w-[750px] md:text-[22px] lg:text-[40px] font-bold text-green-600">
                        Freshly Harvested <span className='text-green-400'>{product.name}</span> - Nature's Best!
                    </h1>
                    <div className="content-left flex mt-5 text-yellow-500">
                        <StarRating initialRating={4} />
                        <p className=' ml-5 text-white relative top-[5px] text-red-400'>(122)</p>
                    </div>
                    <div className="flex items-center gap-[60px] my-4 mt-20">
                        <div className="text-[18px] md:text-[24px] lg:text-[20px] font-semibold text-gray-500 line-through">
                            ₹{product.old_price}/kg
                        </div>
                        <div className="text-[18px] md:text-[24px] lg:text-[20px] font-semibold text-green-400">
                            ₹{product.new_price}/kg
                        </div>
                    </div>
                    <div className="item-price-old mt-1 text-gray-400 flex gap-10 item-center">
                        <span className='text-red-600 text-[20px]'>Shipping Cost:</span>
                        <p className='text-[20px]'>Rs.10</p>
                    </div>
                    <p className="text-[12px] md:text-[14px] lg:text-[25px] w-[800px] text-gray-600">
                        Fresh and delicious {product.name} from the {product.category} category! Perfect for healthy meals, this product is sourced directly from local farms, ensuring maximum freshness and flavor. Whether you're preparing a hearty salad, a delightful stir-fry, or a nutritious smoothie, {product.name} adds a vibrant touch to your dishes.
                    </p>
                    <button
                        onClick={handleAddToCart}
                        className="mt-5 w-[120px] md:w-[150px] lg:w-[200px] bg-green-500 text-white py-2 md:py-3 rounded-md hover:bg-green-600 transition duration-200 font-semibold text-sm lg:text-base"
                    >
                        ADD TO CART
                    </button>

                    {/* Farmer Provider Information */}
                    <div className="productdisplay-right-size w-[800px] text-white p-6 mt-10 bg-gray-800 rounded-lg">
                        <h1 className="text-4xl font-semibold mb-4 text-center">Farmer Provider Information</h1>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm border border-zinc-500 text-white">
                                <tbody>
                                    <tr className="border-b border-gray-600">
                                        <th className="py-2 px-4 font-medium">Provider's Name:</th>
                                        <td className="py-2 px-4 text-center border-l border-zinc-500 text-green-500">Abdul Suban</td>
                                    </tr>
                                    <tr className="border-b border-gray-600">
                                        <th className="py-2 px-4 font-medium">Contact:</th>
                                        <td className="py-2 px-4 text-center border-l border-zinc-500 text-green-500">+91 7208718064</td>
                                    </tr>
                                    <tr className="border-b border-gray-600">
                                        <th className="py-2 px-4 font-medium">Email:</th>
                                        <td className="py-2 px-4 text-center border-l border-zinc-500 text-green-500">suban14925@gmail.com.com</td>
                                    </tr>
                                    <tr className="border-b border-gray-600">
                                        <th className="py-2 px-4 font-medium">Farm Location:</th>
                                        <td className="py-2 px-4 text-center border-l border-zinc-500 text-green-500">Maharastra,Pune<Link to='https://maps.app.goo.gl/F2poDKZyN9qCVdQT7'><span className='font-bold relative text-blue-500 right-[-30px]'>[Click here: Map]</span></Link></td>
                                    </tr>
                                    <tr className="border-b border-gray-600">
                                        <th className="py-2 px-4 font-medium">Farm Size:</th>
                                        <td className="py-2 px-4 text-center border-l border-zinc-500 text-green-500">50 acres</td>
                                    </tr>
                                    <tr className="border-b border-gray-600">
                                        <th className="py-2 px-4 font-medium">Farming Practices:</th>
                                        <td className="py-2 px-4 text-center border-l border-zinc-500 text-green-500">Organic Certified, No Pesticides</td>
                                    </tr>
                                    <tr className="border-b border-gray-600">
                                        <th className="py-2 px-4 font-medium">Harvest Season:</th>
                                        <td className="py-2 px-4 text-center border-l border-zinc-500 text-green-500">June - September</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product Reviews */}
            <div className="my-20 mx-[60px] md:mx-[170px]">
                <h1 className="text-2xl md:text-3xl font-bold mb-5 text-center">Product Reviews</h1>
                <div className="flex flex-wrap justify-center">
                    {reviews.map((review) => (
                        <div key={review.id} className="bg-gray-800 text-white rounded-lg p-4 m-2 shadow-md w-full md:w-[300px]">
                            <h2 className="font-bold">{review.user}</h2>
                            <p>{review.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* New Collections Section */}
            <div className="mb-20">
                <NewCollections />
            </div>
        </div>
    );
};

export default ProductDisplay;
