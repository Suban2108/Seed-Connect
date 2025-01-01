import React from 'react';
import './Quotes.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Quotes = () => {
    const [donationAmount, setDonationAmount] = useState('');

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

    const makePayment = async () => {
        const res = await initializeRazorpay();

        if (!res) {
            alert("Razorpay SDK Failed to load");
            return;
        }

        if (!donationAmount || isNaN(donationAmount) || donationAmount <= 0) {
            alert("Please enter a valid donation amount");
            return;
        }

        const options = {
            key: "rzp_test_RtyUUL2QwvFazU", // Enter the Key ID generated from the Dashboard
            amount: donationAmount * 100, // Amount is in currency subunits. Default currency is INR. Hence, 100 = ₹1.
            currency: "INR",
            name: "Seed Connect",
            description: "Donation",
            handler: function (response) {
                alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
                // You can add your logic here after successful payment
            },
            prefill: {
                name: "Donor Name",
                email: "donor@example.com",
                contact: "9999999999",
            },
            notes: {
                address: "Your Organization Address",
            },
            theme: {
                color: "#33cc70",
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    };

    return (
        <div className="quotes bg-green-800 mb-[80px] p-6 flex flex-col items-center justify-center gap-5">
            <div className='quotes-left text-center'>
                <p className='text-white text-4xl md:text-5xl font-semibold'>
                    Connecting you directly to the roots of fresh, sustainable farming -
                    because every seed sown is a promise grown.
                </p>
                <span className='text-white text-3xl mt-2'>
                    - Walter Scott
                </span>
                <Link style={{ textDecoration: 'none' }} to="/about">
                    <button className="bg-green-600 text-white font-bold py-2 px-4 rounded-md shadow-md hover:bg-green-500 transition duration-300 ml-10 mt-4">
                        Explore
                    </button>
                </Link>
            </div>
            <div className="flex items-center space-x-2">
                <input
                    type="number"
                    value={donationAmount}
                    onChange={(e) => setDonationAmount(e.target.value)}
                    placeholder="Enter amount"
                    className={`rounded-sm border h-[40px] w-[300px] px-4 py-2 text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent`} // Updated styles
                />
                <button
                    onClick={makePayment}
                    className="rounded-lg h-[40px] bg-blue-600 px-8 py-2 font-semibold flex items-center justify-center text-center text-white duration-300 ease-in-out hover:bg-blue-800"
                >
                    Donate ₹{donationAmount || '0'}
                </button>

            </div>
            <p className="text-sm italic text-gray-600 dark:text-gray-300">
                "Your contribution can change a life."
            </p>
        </div>
    );
};

export default Quotes;
