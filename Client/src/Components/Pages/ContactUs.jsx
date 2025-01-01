import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import StarRating from '../DetailsPage/StarRating';
import { Link } from 'react-router-dom';


const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact: '', // Changed to lowercase 'contact' for consistency
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const validateForm = () => {
        let tempErrors = {};
        if (!formData.name.trim()) tempErrors.name = "Name is required";
        if (!formData.email.trim()) {
            tempErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = "Email is invalid";
        }
        if (!formData.contact.trim()) tempErrors.contact = "Contact is required"; // Changed to 'contact'
        if (!formData.message.trim()) tempErrors.message = "Message is required";
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Here you would typically send the form data to your backend
            console.log('Form submitted:', formData);
            setSubmitted(true);
            setFormData({ name: '', email: '', contact: '', message: '' }); // Changed to 'contact'
        }
    };

    return (
        <div className="bg-gray-900 min-h-screen text-gray-200">
            <header className="bg-green-600 text-white py-16">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                    <p className="text-xl">Get in touch with our team</p>
                </div>
            </header>

            <main className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-3xl font-semibold mb-8">Send us a message</h2>
                        {submitted ? (
                            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6" role="alert">
                                <strong className="font-bold">Thank you!</strong>
                                <p>Your message has been sent successfully. We'll get back to you soon.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6 text-left">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`mt-1 block w-full rounded-md bg-gray-800 border-gray-700 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50 ${errors.name ? 'border-red-500' : ''}`}
                                    />
                                    {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name}</p>}
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`mt-1 block w-full rounded-md bg-gray-800 border-gray-700 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50 ${errors.email ? 'border-red-500' : ''}`}
                                    />
                                    {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
                                </div>
                                <div>
                                    <label htmlFor="contact" className="block text-sm font-medium">Contact</label> {/* Changed to 'contact' */}
                                    <input
                                        type="tel" // Changed to 'tel' for better UX
                                        id="contact"
                                        name="contact" // Changed to 'contact'
                                        value={formData.contact}
                                        onChange={handleChange}
                                        className={`mt-1 block w-full rounded-md bg-gray-800 p-2 shadow-sm h-[50px] border focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50 ${errors.contact ? 'border-red-500' : ''}`} // Changed to 'contact'
                                    />
                                    {errors.contact && <p className="mt-2 text-sm text-red-600">{errors.contact}</p>}
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="4"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className={`mt-1 block w-full rounded-md bg-gray-800 resize-none border-gray-700 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50 ${errors.message ? 'border-red-500' : ''}`}
                                    ></textarea>
                                    {errors.message && <p className="mt-2 text-sm text-red-600">{errors.message}</p>}
                                </div>
                                <div>
                                    <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                                        <Send className="mr-2 h-5 w-5" />
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                    <div>
                        <h2 className="text-3xl text-left font-semibold mb-8">Contact Information</h2>
                        <div className="mt-6 overflow-hidden border border-gray-500 mb-5 rounded-lg shadow-md">
                            <table className="min-w-full">
                                <thead className="bg-gray-800 text-white">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-sm font-medium">Contact Method</th>
                                        <th className="px-6 py-3 text-left text-sm font-medium border-l border-zinc-500">Details</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-gray-900">
                                    <tr className="border-b border-gray-500 text-left">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <Phone className="mr-2 h-6 w-6 text-green-600" />
                                                <span className="text-lg font-medium">Phone</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap border-l border-zinc-500">+1 (555) 123-4567</td>
                                    </tr>
                                    <tr className="border-b border-gray-500 text-left">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <Mail className="mr-2 h-6 w-6 text-green-600" />
                                                <span className="text-lg font-medium">Email</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap border-l border-zinc-500">contact@yourcompany.com</td>
                                    </tr>
                                    <tr className="border-b border-gray-500 text-left">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <MapPin className="mr-2 h-6 w-6 text-green-600" />
                                                <span className="text-lg font-medium">Address</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap border-l border-zinc-500">
                                            123 Business Ave, Suite 100<br />
                                            Cityville, State 12345<br />
                                            United States
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="relative z-10 rounded-[10px] bg-gray-800 flex flex-col text-left p-8 h-[38%] shadow-three dark:bg-gray-dark sm:p-11 lg:p-8 xl:p-11">
                            <h3 className="mb-4 text-2xl font-bold leading-tight text-black dark:text-white">
                                Review our website
                            </h3>
                            <div className="flex flex-col text-left gap-4">
                                <div className="flex items-center justify-between">
                                    <p className="mb-1 border-body-color pb-1 text-base leading-relaxed text-body-color text-[22px] dark:border-white">
                                        Share your thoughts with us
                                    </p>
                                    <StarRating initialRating={4} />
                                </div>
                                <div className="flex items-center gap-2">
                                    <input
                                        type="text"
                                        placeholder="Your feedback"
                                        className="rounded-md border-b bg-gray-800 w-full p-2 text-white placeholder-gray-500 focus:border-green-500 focus:outline-none"
                                    />
                                </div>
                            </div>
                            <div className="mt-4">
                                <Link
                                    to="#"
                                    className="inline-block w-full rounded-md border border-primary bg-primary px-8 py-3 text-center text-base font-medium text-white transition hover:opacity-80 focus:outline-none"
                                >
                                    Visit our website
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ContactForm;
