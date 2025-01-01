// Components/Login.jsx
import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CSS/Login.css';
import gg_img from '../Assets/google-icon.png';
import farmer_image from '../Assets/hellofarmer.png';
import customer_image from '../Assets/customer.png';
import default_image from '../Assets/n-profile.png';
import IntroAnimation from '../Animation/Animation'; // Import the IntroAnimation component
import { Eye, EyeOff } from 'lucide-react'; // Importing Eye and EyeOff icons
import { AuthContext } from '../Context/AuthContext'; // Import authentication context
import toast, { Toaster } from 'react-hot-toast'; // Import react-hot-toast

const URL = "http://localhost:4000/login";

const Login = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [user, setUser] = useState({
        email: "",
        password: "",
        designation: "",
    });

    const [showPassword, setShowPassword] = useState(false); // State for password visibility
    const [error, setError] = useState(""); // State for error message
    const { login } = useContext(AuthContext); // Get the login function from the context
    const navigate = useNavigate();

    const handleInput = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev); // Toggle password visibility
    };

    const getDesignationIcon = () => {
        switch (user.designation) {
            case 'Farmer':
                return farmer_image;
            case 'Customer':
                return customer_image;
            default:
                return default_image;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(""); // Reset the error state

        // Convert email to lowercase before sending the request
        const loginData = {
            email: user.email.toLowerCase(),
            password: user.password,
        };

        try {
            const response = await fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            });

            const responseData = await response.json();
            console.log("Response Data:", responseData);

            if (response.ok) {
                // Login successful, update the authentication state
                //  Call the login function from the context
                login();
                toast.success("Login Successful", {
                    style: {
                        background: '#1F2937', // bg-zinc-800
                        color: '#fff'
                    },
                    icon: '✅'
                });
                alert('Login Successful')
                navigate('/profile');
                setUser({ email: "", password: "", designation: "" });
            } else {
                // Show error message returned from the server
                setError(responseData.msg || "Login Failed");
            }
        } catch (error) {
            setError("An error occurred. Please try again."); // Handle any other errors
            console.log("Error:", error);
        }
    };

    if (!showLogin) {
        return <IntroAnimation mes='Signing in' button='Sign in' onComplete={() => setShowLogin(true)} />;
    }

    return (
        <div className="flex items-center min-h-screen bg-zinc-900">
             <Toaster /> {/*Add Toaster component for react-hot-toast */}
            <div className="login-container bg-zinc-800 w-[800px] border border-zinc-700 text-white rounded-lg p-8 shadow-lg">
                <div className="login-header flex items-center justify-center space-x-4 mb-8">
                    <i className="ri-book-line ri-3x text-green-400"></i>
                    <h2 className="text-5xl font-bold text-green-400">Login</h2>
                    <i className="ri-book-line ri-3x text-green-400"></i>
                </div>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="flex justify-center mb-4">
                        <img src={getDesignationIcon()} alt="" className='w-[150px] h-[150px]' />
                    </div>
                    <article className='signup-dropdown'>
                        <h3>Select Your Designation</h3>
                        <select
                            name="designation"
                            className='bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-green-400'
                            onChange={handleInput}
                            value={user.designation}
                            required
                        >
                            <option value="">Select here</option>
                            <option value="Farmer">Farmer</option>
                            <option value="Customer">Customer</option>
                        </select>
                    </article>
                    <article>
                        <section>
                            <h3 className="text-lg font-semibold mb-2">Email</h3>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter your email"
                                required
                                className="w-full bg-zinc-700 text-white p-2 rounded border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                                onChange={handleInput}
                                value={user.email}
                            />
                        </section>
                    </article>
                    <article>
                        <section className="relative">
                            <h3 className="text-lg font-semibold mb-2">Password</h3>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                id="password"
                                placeholder="Enter your password"
                                required
                                className="w-full bg-zinc-700 text-white p-2 rounded border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                                onChange={handleInput}
                                value={user.password}
                            />
                            <div
                                className="absolute top-[70px] right-3 cursor-pointer text-white"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? <EyeOff className="w-6 h-6" /> : <Eye className="w-6 h-6" />}
                            </div>
                        </section>
                    </article>
                    <article className="text-right">
                        <Link to="#" className="text-green-400 hover:underline">Forgot Password?</Link>
                    </article>
                    <div className="flex justify-between items-center mt-6">
                        <Link to="/signup" className="text-green-400 hover:underline">Don't have an Account? Signup here</Link>
                        <button
                            type="submit"
                            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                        >
                            Login
                        </button>
                    </div>
                    {error && <p className="text-red-500 text-center mt-4">{error}</p>}
                    <div className="login-thru_social_icons text-center mt-6">
                        <p className="text-sm mb-3">Login with social media</p>
                        <div className='justify-center ml-[20px]'>
                            <Link to='http://localhost:4000/auth/google/'>
                                <img src={gg_img} alt="Google Login" className="w-10 h-10 cursor-pointer" />
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
