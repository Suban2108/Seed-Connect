import React, { useState, useContext, useEffect } from 'react';
import './CSS/Shop.css';
import Carousel from '../Shop/CoursesCarousel/CoursesCarousel';
import { Search } from 'lucide-react';
import all_courses from '../Assets/allproduct'; // Assuming the course data is stored here
import { AuthContext } from '../Context/AuthContext'; // Import AuthContext
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast'; // Import Toaster for notifications
import { ShopContext } from '../Context/ShopContext';

// Helper function to group courses by category
const groupByCategory = (courses) => {
    return courses.reduce((groupedCourses, course) => {
        const { category } = course;
        if (!groupedCourses[category]) {
            groupedCourses[category] = [];
        }
        groupedCourses[category].push(course);
        return groupedCourses;
    }, {});
};

const categories = [
    "Perishable Fruits","Perishable Vegies", "Fresh Vegies",
    "Natural Vegies", "Non-Perishable Fruits", "Leafy Greens",
    "Root Vegies", "Fresh Fruits", "Non-Perishable Vegies"
];

const Courses = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [showUploadForm, setShowUploadForm] = useState(false); // State to toggle the upload form
    const [newProduct, setNewProduct] = useState({
        imageUrl: '',
        oldPrice: '',
        newPrice: '',
        ShippingPrice: '',
        description: '',
        category: '',
        name: '',
        vendorName: ''
    });

    // Fetch products from the database
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('/api/products'); // Adjust this URL to your API endpoint
                const data = await response.json();
                if (data.length > 0) {
                    setProducts(data); // Set products from the database
                } else {
                    setProducts(all_courses); // Fallback to hardcoded products
                }
            } catch (error) {
                console.error('Error fetching products:', error);
                setProducts(all_courses); // Fallback to hardcoded products on error
            } finally {
                setLoading(false); // Stop loading
            }
        };

        fetchProducts();
    }, []);

    const { isLoggedIn } = useContext(AuthContext); // Get authentication status
    const { addToCart } = useContext(ShopContext);

    const navigate = useNavigate();

    // Grouping the courses by their category
    const coursesByCategory = groupByCategory(all_courses);

    // Handle search term change
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    // Filter courses by search term
    const filterCourses = (courses) => {
        return courses.filter((course) => {
            const name = course.name || '';
            const description = course.description || '';
            return (
                name.toLowerCase().includes(searchTerm) ||
                description.toLowerCase().includes(searchTerm)
            );
        });
    };

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    // Handle image upload
    const handleImageUpload = (e) => {
        setNewProduct((prev) => ({
            ...prev,
            imageUrl: URL.createObjectURL(e.target.files[0])
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('New Product Added:', newProduct);

        // Reset the form after submission
        setNewProduct({
            imageUrl: '',
            oldPrice: '',
            newPrice: '',
            ShippingPrice: '',
            description: '',
            category: '',
            name: '',
            vendorName: ''
        });
        setShowUploadForm(false); // Hide the form after submission
    };

    const handleAddToCart = (e, productId) => {
        if (!isLoggedIn) {
            // If the user is not logged in, show an error message
            toast.error('Please log in or create an account to add products to the cart!', {
                style: { background: '#e63946', color: '#fff' },
                duration: 3000 // Display duration for error message
            });
            // navigate('/login');
            return; // Exit the function early
        }
        // If the user is authenticated, proceed to add the product to the cart
        addToCart(productId);
        setTimeout(() => {
            toast.success('Product added to cart!', {
                style: { background: '#2a9d8f', color: '#fff' },
                duration: 4000 // Display duration for success message
            });
        }, 3000);
    };

    return (
        <div className='courses bg-black p-5'>
            <Toaster position="top-center" reverseOrder={false} />
            <div className='searchbar flex items-center text-white justify-center mb-5'>
                <input
                    type="text"
                    className='outline-none bg-zinc-800 text-white p-3 rounded-md shadow-md transition duration-300 hover:bg-zinc-700 focus:bg-zinc-700'
                    placeholder='Search Here'
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <Search size={35} className="text-green-500 relative right-[50px]" />
            </div>

            {/* Button to toggle upload form */}
            <button
                onClick={() => setShowUploadForm(!showUploadForm)}
                className="bg-green-600 text-white py-2 px-4 rounded-md mb-5"
            >
                {showUploadForm ? 'Cancel Upload' : 'Upload New Product'}
            </button>

            {/* Upload Form */}
            {showUploadForm && (
                <div className='flex justify-center items-center h-full'>
                    <form onSubmit={handleSubmit} className="bg-zinc-800 p-5 rounded-md mb-5 w-[80%] text-white">
                        <h3 className="text-white mb-4">Upload New Product</h3>
                        <div className='flex gap-4'>
                            <p className='inline'>Insert the Image of Product:</p>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                className="mb-4 cursor-pointer"
                            />
                        </div>

                        <input
                            type="text"
                            name="name"
                            placeholder="Product Name"
                            value={newProduct.name}
                            onChange={handleInputChange}
                            className="bg-gray-700 text-white p-2 rounded-md mb-4 w-full"
                        />

                        {/* Flexbox for Old and New Price */}
                        <div className="flex space-x-2 mb-4">
                            <input
                                type="number"
                                name="oldPrice"
                                placeholder="Old Price"
                                value={newProduct.oldPrice}
                                onChange={handleInputChange}
                                className="bg-gray-700 text-white p-2 rounded-md w-[100px]"
                            />
                            <input
                                type="number"
                                name="newPrice"
                                placeholder="New Price"
                                value={newProduct.newPrice}
                                onChange={handleInputChange}
                                className="bg-gray-700 text-white p-2 rounded-md w-full"
                            />
                            <input
                                type="number"
                                name="ShippingPrice"
                                placeholder="Shipping Cost"
                                value={newProduct.ShippingPrice}
                                onChange={handleInputChange}
                                className="bg-gray-700 text-white p-2 rounded-md w-full"
                            />
                        </div>
                        <div className="flex space-x-4 mb-4">
                            <input
                                type="text"
                                name="vendorName"
                                placeholder="Vendor Name"
                                value={newProduct.vendorName}
                                onChange={handleInputChange}
                                className="bg-gray-700 text-white p-2 border rounded-md mb-4 w-full"
                            />
                            <select name="" className="bg-gray-700 p-2 rounded text-zinc-400 text-[15px]" id="">
                                <option value="">Select Category</option>
                                <option value="Farmer">Farmer</option>
                                <option value="Customer">Customer</option>
                            </select>

                            <select className="bg-gray-700 p-2 rounded text-zinc-400 text-[15px]">
                                <option value="" disabled selected>Select a Category</option>
                                {categories.map((category, index) => (
                                    <option key={index} value={category}>
                                        {category}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <textarea
                            name="description"
                            placeholder="Product Description"
                            value={newProduct.description}
                            onChange={handleInputChange}
                            className="bg-gray-700 text-white p-2 rounded-md mb-4 w-full"
                        />

                        <button
                            type="submit"
                            onClick={(e) => handleAddToCart(e, newProduct.id)} // Adjust accordingly if `newProduct` has an ID
                            className="bg-green-600 text-white py-2 px-4 rounded-md w-full"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            )}

            {/* Display courses */}
            {loading ? (
                <div className="text-white text-center">Loading products...</div>
            ) : (
                categories.map((category) => (
                    <div key={category} className='course-category text-left'>
                        <hr className='mb-2 border-t border-green-500 w-full' />
                        <h2 className='mb-4 m-3 ml-[5%] text-4xl text-green-400 transition duration-300 hover:scale-105'>{category.toUpperCase()}</h2>
                        <hr className='mb-3 border-t border-green-500 w-full' />
                        <Carousel slides={filterCourses(coursesByCategory[category] || [])} onAddToCart={handleAddToCart} />
                    </div>
                )
                ))}
        </div>
    );
};

export default Courses;
