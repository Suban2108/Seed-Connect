import React, { useState } from 'react';
import {
    Phone,
    Mail,
    MapPin,
    MessageSquare,
    Facebook,
    Twitter,
    Instagram,
    ChevronDown,
    ChevronUp,
    Star
} from 'lucide-react';

import farmer_image from '../Assets/hellofarmer.png'
import customer_image from '../Assets/customer.png'
import default_image from '../Assets/n-profile.png'
import GlobalChat from '../Connect/GlobalChat/GlobalChat';
import { Link } from 'react-router-dom';


const ContactPage = () => {
    const [isLiveChatOpen, setIsLiveChatOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState(null);

    const contacts = [
        { name: "John Doe", role: "Farmer", email: "john@example.com", phone: "+1234567890", image: farmer_image },
        { name: "Dhruv Sharma", role: "Retailer", email: "Dhruv@example.com", phone: "+1987654321", image: customer_image },
        { name: "Jane Smith", role: "Retailer", email: "jane@example.com", phone: "+1987654321", image: customer_image },
        { name: "Mannar Singh", role: "Farmer", email: "Mannar@example.com", phone: "+1234567890", image: farmer_image },
    ];

    const faqs = [
        { question: "How do I connect with farmers?", answer: "You can use our contact form or direct messaging system to reach out to farmers listed on our platform." },
        { question: "What payment methods are accepted?", answer: "We support various payment methods including credit cards, bank transfers, and mobile payments." },
        { question: "How is delivery handled?", answer: "Delivery is managed by our logistics partners. You can track your order through our platform once it's shipped." },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log("Form submitted");
    };

    return (
        <div className="bg-black text-white min-h-screen">
            <header className="bg-green-600 py-12 px-4 text-center">
                <h1 className="text-4xl font-bold mb-2">Connect with Farmers and Retailers</h1>
                <p className="text-xl">Reach out for inquiries, support, or partnerships</p>
            </header>

            <main className="container mx-auto px-4 py-8">
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 text-green-400">Contact Information</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {contacts.map((contact, index) => (
                            <div key={index} className="bg-gray-800 p-6 rounded-lg flex items-start space-x-4">
                                <img src={contact.image} alt={contact.name} className="w-16 h-16 rounded-full" />
                                <div>
                                    <h3 className="text-xl font-semibold">{contact.name}</h3>
                                    <p className="text-green-400">{contact.role}</p>
                                    <Link to={`mailto:${contact.email}`} className="flex items-center space-x-2 hover:text-green-400">
                                        <Mail size={16} />
                                        <span>{contact.email}</span>
                                    </Link>
                                    <Link to={`tel:${contact.phone}`} className="flex items-center space-x-2 hover:text-green-400">
                                        <Phone size={16} />
                                        <span>{contact.phone}</span>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mb-12 text-left">
                    <h2 className="text-2xl font-bold mb-4 text-green-400">Add your Contact</h2>
                    <form onSubmit={handleSubmit} className=" bg-gray-800 p-6 rounded-lg">
                        <div className="mb-4">
                            <label htmlFor="name" className="block mb-2">Name</label>
                            <input type="text" id="name" required className="w-full p-2 bg-gray-800 rounded" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block mb-2">Email</label>
                            <input type="email" id="email" required className="w-full p-2 bg-gray-800 rounded" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="phone" className="block mb-2">Phone Number</label>
                            <input type="number" id="phone" className="w-full p-2 bg-gray-800 rounded" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block mb-2">Designation: </label>
                            <select name="" id=""
                                className='bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400 px-4'>
                                <option value="">Select here</option>
                                <option value="Farmer">Farmer</option>
                                <option value="Retailer">Retailer</option>
                            </select>
                        </div>
                        <button type="submit" className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                            Submit
                        </button>
                    </form>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 text-green-400">Live Chat</h2>
                    <button
                        onClick={() => setIsLiveChatOpen(!isLiveChatOpen)}
                        className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex items-center space-x-2"
                    >
                        <MessageSquare size={20} />
                        <span>{isLiveChatOpen ? 'Close Chat' : 'Start Live Chat'}</span>
                    </button>
                    {isLiveChatOpen && (
                        <GlobalChat />
                    )}
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 text-green-400">Our Location</h2>
                    <div className="bg-gray-800 p-4 rounded-lg flex items-center space-x-4">
                        <MapPin size={24} className="text-green-400" />
                        <span>123 Farm Street, Assam City, AC 12345</span>
                    </div>
                    <div className="mt-4 bg-gray-800 h-64 rounded-lg flex items-center justify-center">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671157.812178588!2d90.2174681013855!3d26.02979136262661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374516c94c312d63%3A0xd11a73bb736719fb!2sAssam!5e0!3m2!1sen!2sin!4v1729106659810!5m2!1sen!2sin"
                            className="w-full h-full"
                            title="Map of Assam"  // Added title attribute for accessibility
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>

                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 text-green-400">Frequently Asked Questions</h2>
                    {faqs.map((faq, index) => (
                        <div key={index} className="mb-4">
                            <button
                                onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                                className="flex justify-between items-center w-full bg-gray-800 p-4 rounded-lg hover:bg-gray-800"
                            >
                                <span>{faq.question}</span>
                                {expandedFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                            </button>
                            {expandedFaq === index && (
                                <div className="mt-2 p-4 bg-gray-800 rounded-lg">
                                    <p>{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 text-green-400">Connect With Us</h2>
                    <div className="flex space-x-4">
                        <Link to="#" className="text-green-400 hover:text-green-300">
                            <Facebook size={24} />
                        </Link>
                        <Link to="#" className="text-green-400 hover:text-green-300">
                            <Twitter size={24} />
                        </Link>
                        <Link to="#" className="text-green-400 hover:text-green-300">
                            <Instagram size={24} />
                        </Link>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 text-green-400">Testimonials</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[1, 2].map((_, index) => (
                            <div key={index} className="bg-gray-800 p-6 rounded-lg">
                                <div className="flex items-center mb-4">
                                    <img src={default_image} alt="User" className="w-10 h-10 rounded-full mr-4" />
                                    <div>
                                        <h3 className="font-semibold">Happy User</h3>
                                        <div className="flex text-yellow-400">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} size={16} fill="currentColor" />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <p>"Great platform for connecting farmers and retailers. Highly recommended!"</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 text-green-400">Privacy Policy</h2>
                    <p className="bg-gray-800 p-4 rounded-lg">
                        Your privacy is important to us. We handle all information in accordance with our privacy policy, which you can view in full on our Privacy Policy page.
                    </p>
                </section>
            </main>
        </div>
    );
};

export default ContactPage;