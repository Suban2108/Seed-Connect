import React, { createContext, useState } from 'react';
import all_product from '../Assets/allproduct';
import Notification from '../Notification/Notification'; // Adjust path as necessary

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length + 1; index++) {
        cart[index] = 0;
    }
    return cart;
};

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
    const [notification, setNotification] = useState(''); // State for notification message

    const addToCart = (itemId) => {
        const product = all_product.find(product => product.id === itemId); // Find the product by itemId
        if (product) {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
            setNotification(`${product.name} added to cart successfully!`); // Set notification message
            setTimeout(() => setNotification(''), 3000); // Clear message after 3 seconds
        } else {
            console.warn('Product not found for itemId:', itemId);
        }
    };


    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                if (itemInfo) {
                    totalAmount += itemInfo.new_price * cartItems[item];
                }
            }
        }
        return totalAmount.toFixed(2);
    };

    const removeCartItem = (itemId) => {
        setCartItems((prev) => {
            const updatedCart = { ...prev };
            delete updatedCart[itemId];
            return updatedCart;
        });
    };

    const getTotalCartItem = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    };

    const contextValue = { removeCartItem, getTotalCartItem, all_product, cartItems, addToCart, removeFromCart, getTotalCartAmount };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
            {notification && <Notification message={notification} onClose={() => setNotification('')} />} {/* Render notification */}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
