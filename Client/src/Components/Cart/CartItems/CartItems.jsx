import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../../Assets/cart_cross_icon.png';
// import { Link } from 'react-router-dom';

const CartItems = () => {
    const { all_product, cartItems, removeFromCart, getTotalCartAmount, addToCart, removeCartItem } = useContext(ShopContext);

    // Razorpay initialization function
    const initializeRazorpay = () => {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = "https://checkout.razorpay.com/v1/checkout.js";
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    };

   // Payment handling function
const makePayment = async () => {
    const res = await initializeRazorpay();

    if (!res) {
        alert("Razorpay SDK failed to load");
        return;
    }

    const amount = getTotalCartAmount()-10;

    if (!amount || isNaN(amount) || amount <= 0) {
        alert("First Add Some products to your cart");
        return;
    }

    const options = {
        key: "rzp_test_RtyUUL2QwvFazU", // Replace with your actual Razorpay Key ID
        amount: amount * 100, // Amount in currency subunits
        currency: "INR",
        name: "Seed Connect",
        description: "Order Payment",
        handler: function (response) {
            alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
            // Additional logic for successful payment (e.g., clear cart)
        },
        prefill: {
            name: "Customer Name",
            email: "customer@example.com",
            contact: "9999999999",
        },
        notes: {
            address: "Your Store Address",
        },
        theme: {
            color: "#33cc70",
        },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
};


    return (
        <div className='text-white bg-zinc-800 p-10 border-2 border-zinc-600 rounded-lg mt-5 cart'>
            <div className='text-left text-4xl block border-b-2 border-green-500'>
                <h1 className='inline-block mb-3 text-zinc-400'>Shopping Cart</h1>
            </div>
            <div className='cartitems'>
                <div className="cartitems-format-main text-3xl">
                    <p>Products</p>
                    <p>Title</p>
                    <p>Price(Rs.)</p>
                    <p></p>
                    <p>Quantity</p>
                    <p></p>
                    <p>Total(Rs.)</p>
                    <p>Remove</p>
                </div>
                <div className="cartitems-hr"></div>
                {all_product.map((e) => {
                    if (cartItems[e.id] > 0) {
                        return (
                            <div key={e.id}>
                                <div className="cartitems-format text-zinc-400 cartitems-format-main">
                                    <img src={e.image} className='carticon-product-icon' alt="" />
                                    <p>{e.name}</p>
                                    <p className='ml-4'>{e.new_price}</p>
                                    <button className='cartitems-addon bg-green-500 text-white rounded-lg' onClick={() => addToCart(e.id)}>+</button>
                                    <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                                    <button className='cartitems-addon bg-red-500 text-white rounded-lg' onClick={() => removeFromCart(e.id)}> - </button>
                                    <p className='cartitems-totals ml-4'>{(e.new_price * cartItems[e.id]).toFixed(2)}</p>
                                    <img className='cartitems-remove-icon mr-4' src={remove_icon} onClick={() => { removeCartItem(e.id) }} alt="" />
                                </div>
                                <div className='cartitems-format-main-hr'></div>
                            </div>
                        );
                    }
                    return null;
                })}
                <div className="cartitems-down">
                    <div className="cartitems-total">
                        <h1 className='text-5xl'>Cart Totals</h1>
                        <div>
                            <div className="cartitems-total-item">
                                <p>Subtotal</p>
                                <p>Rs. {getTotalCartAmount()}</p>
                            </div>
                            <div className="cartitems-total-item-hr"></div>

                            <div className="cartitems-total-item">
                                <p>Other Cost</p>
                                <p>10</p>
                            </div>
                            <div className="cartitems-total-item-hr"></div>

                            <div className="cartitems-total-item">
                                <h3>Total</h3>
                                <h3>Rs. {getTotalCartAmount()-10}</h3>
                            </div>
                        </div>
                        <button onClick={makePayment} className="checkout-button">PROCEED TO CHECKOUT</button>
                    </div>
                    <div className="cartitems-promocode">
                        <p>If you have a promo code, Enter it here</p>
                        <div className="cartitems-promobox text-black">
                            <input type="text" placeholder='promo code' className='text-black' />
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItems;
