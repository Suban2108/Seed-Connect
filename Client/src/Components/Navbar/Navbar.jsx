import React, { useContext } from 'react';
import { ShoppingCart } from 'lucide-react';
import logo from '../Assets/logo.png';
import { ShopContext } from '../Context/ShopContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import toast from 'react-hot-toast'; 

const Navbar = () => {
    const { getTotalCartItem } = useContext(ShopContext);
    const { isLoggedIn, logout } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const navItems = [
        { name: "Home", to: "/" },
        { name: "Shop", to: "/shop" },
        { name: "Connect", to: "/connect" },
        { name: "About", to: "/about" },
        { name: "Contact us", to: "/contact" },
    ];

    const isActive = (path) => location.pathname === path;


    const handleLogout = async () => {
        try {
            const response = await fetch('http://localhost:4000/auth/logout', {
                method: 'GET',
                credentials: 'include',
            });

            if (response.ok) {
                logout();
                navigate('/');
            } else {
                console.error('Failed to log out');
            }
        } catch (error) {
            console.error('An error occurred during logout:', error);
        }
    };

    return (
        <nav className="bg-zinc-800 text-white py-4 px-6 flex items-center justify-between">
            <div className="flex items-center space-x-4">
                <Link to="/" className="flex items-center space-x-2">
                    <img src={logo} alt="Logo" className="w-12 h-12" />
                    <span className="text-3xl font-extrabold text-green-400 main-name" style={{ fontFamily: '-moz-initial' }}>Seed Connect</span>
                </Link>
            </div>

            <ul className="flex space-x-8">
                {navItems.map((item) => (
                    <li key={item.name}>
                        <Link
                            to={item.to}
                            className={`text-xl font-semibold hover:text-green-400 transition-colors ${isActive(item.to) ? 'text-green-400 border-b-2 border-green-400 pb-1' : 'text-white'}`}
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>

            <div className="flex items-center space-x-6">
                {isLoggedIn ? (
                    <>
                        <button onClick={handleLogout} className="font-bold py-2 px-4 rounded bg-red-600 hover:bg-red-500 text-white">
                            Logout
                        </button>
                        <Link to="/profile">
                            <div className={`rounded-[60%] ${isActive('/profile') ? 'border-[2px] border-green-700 p-[5px]' : ''}`}>
                                <div className={`bg-gradient-to-br from-white to-green-300 p-1 rounded-[50%] w-[40px]`}>
                                    <p className={`text-2xl text-zinc-700 ${isActive('/profile') ? 'text-green-500' : 'text-zinc-700'}`}>S</p>
                                </div>
                            </div>
                        </Link>
                    </>
                ) : (
                    <>
                        <Link to="/login">
                            <button className={`font-bold py-2 px-4 rounded transition-colors ${isActive('/login') ? 'bg-green-700 border border-green-400 border-[4px] text-white ' : 'bg-green-700 hover:bg-green-600 text-white'}`}>
                                Login
                            </button>
                        </Link>
                        <Link to="/signup">
                            <button className={`font-bold py-2 px-4 rounded transition-colors ${isActive('/signup') ? 'bg-green-700 border border-green-400 border-[4px] text-white ' : 'bg-green-700 hover:bg-green-600 text-white'}`}>
                                Signup
                            </button>
                        </Link>
                    </>
                )}
                <div className="relative">
                    <Link to="/cart">
                        <ShoppingCart size={35} className={`text-green-400 ${isActive('/cart') ? 'text-green-500 border-b-[2px] p-1' : 'text-white'}`} />
                    </Link>
                    {isLoggedIn && getTotalCartItem() > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                            {getTotalCartItem()}
                        </span>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
