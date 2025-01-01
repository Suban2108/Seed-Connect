import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CSS/Signup.css';
import gg_img from '../Assets/google-icon.png';
import farmer_image from '../Assets/hellofarmer.png';
import customer_image from '../Assets/customer.png';
import default_image from '../Assets/n-profile.png';
import IntroAnimation from '../Animation/Animation';
import { Eye, EyeOff } from 'lucide-react';

const URL = "http://localhost:4000/register";

const LoginSignup = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    designation: "",
    birthDate: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    image: null,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value, files } = e.target;
    setUser({
      ...user,
      [name]: name === 'image' ? files[0] : value,
    });
  };


  const togglePasswordVisibility = () => setShowPassword(prev => !prev);

  const getDesignationIcon = () => {
    switch (user.designation) {
      case 'Farmer': return farmer_image;
      case 'Customer': return customer_image;
      default: return default_image;
    }
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const requiredFields = ['username', 'email', 'phone', 'password', 'birthDate', 'address', 'city', 'state', 'zip'];
    const missingFields = requiredFields.filter(field => !user[field]);

    if (missingFields.length > 0) {
      alert(`Please fill in the following required fields: ${missingFields.join(', ')}`);
      return;
    }

    try {
      const formData = new FormData();
      Object.keys(user).forEach(key => {
        formData.append(key, user[key]);
      });

      const response = await fetch(URL, {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (!response.ok) {
        alert(data.message);
      } else {
        alert(data.msg);
        navigate('/login');
      }
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };


  //!showLogin pe work karega
  //showLogin pe halt pe rakha hu
  if (!showLogin) {
    return <IntroAnimation mes='Signing in' button='Sign in' onComplete={() => setShowLogin(true)} />;
  }

  return (
    <div className="signup-container signup-neu text-white text-left bg-zinc-800 border border-zinc-500 p-8 rounded-lg">
      <div className="signup-header flex justify-center items-center mb-6">
        <i className="ri-book-line ri-4x mr-4"></i>
        <h1 className='text-5xl text-green-400'>Signup</h1>
        <i className="ri-book-line ri-4x ml-4"></i>
      </div>
      <form onSubmit={submitHandler} className="space-y-6">
        <div className="flex justify-center mb-4">
          <img src={getDesignationIcon()} alt="" className='w-32 h-32 object-cover rounded-full' />
        </div>

        <div>
          <label htmlFor="designation" className="block text-sm font-medium mb-1">Select Your Designation</label>
          <select
            id="designation"
            name="designation"
            value={user.designation}
            onChange={handleInput}
            className='w-full bg-zinc-700 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400'
          >
            <option value="">Select here</option>
            <option value="Farmer">Farmer</option>
            <option value="Customer">Customer</option>
          </select>
        </div>

        <div>
          <label htmlFor="username" className="block text-sm font-medium mb-1">Full Name</label>
          <input
            type="text"
            id="username"
            name="username"
            value={user.username}
            placeholder='Username'
            required
            className='w-full bg-zinc-700 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400'
            onChange={handleInput}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-1">Contact No.</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={user.phone}
              placeholder="1234567890"
              required
              className='w-full bg-zinc-700 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400'
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="birthDate" className="block text-sm font-medium mb-1">Birthdate</label>
            <input
              type="date"
              id="birthDate"
              name="birthDate"
              value={user.birthDate}
              required
              className='w-full bg-zinc-700 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400'
              onChange={handleInput}
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            placeholder='example@gmail.com'
            required
            className='w-full bg-zinc-700 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400'
            onChange={handleInput}
          />
        </div>

        <div className="relative">
          <label htmlFor="password" className="block text-sm font-medium mb-1">Set Password</label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            value={user.password}
            placeholder="Enter your password"
            required
            className='w-full bg-zinc-700 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400'
            onChange={handleInput}
          />
          <button
            type="button"
            className="absolute right-3 top-8 text-gray-400"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        </div>

        <div>
          <label htmlFor="address" className="block text-sm font-medium mb-1">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={user.address}
            placeholder='Street Address'
            required
            className='w-full bg-zinc-700 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 mb-2'
            onChange={handleInput}
          />
          <div className="grid grid-cols-2 gap-2">
            <input
              type="text"
              id="city"
              name="city"
              value={user.city}
              placeholder='City'
              required
              className='w-full bg-zinc-700 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400'
              onChange={handleInput}
            />
            <input
              type="text"
              id="state"
              name="state"
              value={user.state}
              placeholder='State'
              required
              className='w-full bg-zinc-700 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400'
              onChange={handleInput}
            />
          </div>
          <input
            type="text"
            id="zip"
            name="zip"
            value={user.zip}
            placeholder='Pincode'
            required
            className='w-full bg-zinc-700 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 mt-2'
            onChange={handleInput}
          />
        </div>

        <div>
          <label htmlFor="image" className="block text-sm font-medium mb-1">Upload your image</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            className='w-full bg-zinc-700 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400'
            onChange={handleInput}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
        >
          Register
        </button>

        <div className="text-center mt-4">
          <p className="text-sm">
            Already have an account? <Link to="/login" className="text-green-400 hover:underline">Login here</Link>
          </p>
        </div>

        <div className="text-center mt-6">
          <p className="text-sm mb-3">Sign in with social media</p>
          <div className='flex justify-center'>
            <Link to='http://localhost:4000/auth/google/'>
              <img src={gg_img} alt="Google Login" className="w-10 h-10 cursor-pointer" />
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginSignup;



