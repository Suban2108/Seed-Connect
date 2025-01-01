import React from 'react';
import { Heart, Zap, Shield, Users, Code, Headphones } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeatureCard = ({ icon: Icon, title, description }) => (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg border border-zinc-500 flex flex-col items-center text-center transition-shadow duration-300">
        <Icon className="w-12 h-12 text-green-500 mb-4" />
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-gray-300 text-center">{description}</p>
    </div>
);

const About = () => {
    const features = [
        { icon: Heart, title: "Community-Focused", description: "We prioritize connecting farmers and retailers for mutual benefit." },
        { icon: Zap, title: "Instant Connections", description: "Quick and efficient communication to ensure timely transactions." },
        { icon: Shield, title: "Secure Transactions", description: "We guarantee the safety of your information and transactions." },
        { icon: Users, title: "Collaborative Platform", description: "Built for seamless collaboration between farmers and retailers." },
        { icon: Code, title: "Flexible Solutions", description: "Customizable tools that adapt to the needs of farmers and retailers." },
        { icon: Headphones, title: "Support When You Need It", description: "Our team is available around the clock to assist you." },
    ];

    return (
        <div className="bg-gray-900 min-h-screen">
            <header className="bg-green-600 text-white py-16">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold mb-4">About Us</h1>
                    <p className="text-xl">Empowering farmers and retailers with innovative solutions</p>
                </div>
            </header>

            <main className="container mx-auto px-4 py-16">
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold mb-8 text-white">Our Story</h2>
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="md:w-1/2">
                            <p className="text-gray-300 mb-4">
                                Founded in 2020, our company was created to bridge the gap between farmers and retailers. We recognized the challenges faced by farmers in getting their products to market and the difficulties retailers encounter in sourcing fresh produce.
                            </p>
                            <p className="text-gray-300">
                                Today, we're proud to provide a platform that connects farmers directly with retailers, ensuring fair prices for high-quality products. Our team is dedicated to fostering relationships that support the agricultural community and the retailers who rely on their produce.
                            </p>
                        </div>
                        <div className="md:w-1/2">
                            <img src='https://www.agmatix.com/wp-content/uploads/2022/12/Why-Collaboration-is-the-Key-to-Innovation_LObby.jpg'
                                alt="Our team" className="rounded-lg shadow-md w-full" />
                        </div>
                    </div>
                </section>

                <section className="mb-16">
                    <h2 className="text-3xl font-semibold mb-8 text-white">Our Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <FeatureCard key={index} {...feature} />
                        ))}
                    </div>
                </section>

                <section className="mb-16">
                    <h2 className="text-3xl font-semibold mb-8 text-white">Our Mission</h2>
                    <div className="bg-gray-800 p-8 rounded-lg shadow-md">
                        <p className="text-gray-300 text-lg">
                            Our mission is to empower farmers and retailers by providing a user-friendly platform that promotes direct connections, ensuring fair pricing and quality products. We are committed to enhancing the agricultural supply chain and supporting our users with innovative solutions and unparalleled support.
                        </p>
                    </div>
                </section>

                <section>
                    <h2 className="text-3xl font-semibold mb-8 text-white">Get in Touch</h2>
                    <div className="bg-gray-800 p-8 rounded-lg shadow-md">
                        <p className="text-gray-300 mb-4">
                            We’d love to hear from you! Whether you have questions about our platform, need assistance, or want to explore how we can help your business grow, our dedicated team is here to assist you.
                        </p>
                        <Link to='/contact'>
                            <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-500 transition-colors duration-300">
                                Contact Us
                            </button>
                        </Link>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default About;
