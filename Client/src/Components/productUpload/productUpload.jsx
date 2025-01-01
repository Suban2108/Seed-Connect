import React, { useState } from 'react';

const ProductUpload = () => {
    const [image, setImage] = useState(null);
    const [oldPrice, setOldPrice] = useState('');
    const [newPrice, setNewPrice] = useState('');
    const [description, setDescription] = useState('');
    const [notification, setNotification] = useState('');

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create FormData object to send the image and other product data
        const formData = new FormData();
        formData.append('image', image);
        formData.append('oldPrice', oldPrice);
        formData.append('newPrice', newPrice);
        formData.append('description', description);

        try {
            // Replace with your API endpoint to handle the upload
            const response = await fetch('/api/upload-product', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                setNotification('Product uploaded successfully!');
                // Reset form fields
                setImage(null);
                setOldPrice('');
                setNewPrice('');
                setDescription('');
            } else {
                setNotification('Failed to upload product. Please try again.');
            }
        } catch (error) {
            console.error('Error uploading product:', error);
            setNotification('An error occurred. Please try again.');
        }

        // Clear notification after 3 seconds
        setTimeout(() => setNotification(''), 3000);
    };

    return (
        <div className="max-w-md mx-auto p-4 bg-gray-800 rounded-lg shadow-md">
            <h2 className="text-lg font-bold text-white mb-4">Upload Product</h2>
            {notification && (
                <div className="mb-4 text-white bg-green-500 p-2 rounded">
                    {notification}
                </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-white">Upload Image:</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div>
                    <label className="block text-white">Old Price:</label>
                    <input
                        type="text"
                        value={oldPrice}
                        onChange={(e) => setOldPrice(e.target.value)}
                        required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div>
                    <label className="block text-white">New Price:</label>
                    <input
                        type="text"
                        value={newPrice}
                        onChange={(e) => setNewPrice(e.target.value)}
                        required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div>
                    <label className="block text-white">Description:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
                >
                    Submit Product
                </button>
            </form>
        </div>
    );
};

export default ProductUpload;
