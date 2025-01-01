import mongoose from 'mongoose';

// Define the Product schema
const productSchema = new mongoose.Schema({
    vendor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    oldPrice: {
        type: Number,
        required: true,
    },
    newPrice: {
        type: Number,
        required: true,
    },
    shippingCost: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    uploadDate: {
        type: Date,
        default: Date.now,
    },
    location: {
        city: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            required: true,
        },
        zip: {
            type: Number,
            required: true,
            min: [100000, 'Pincode should be 6 digits'],
            max: [999999, 'Pincode should be 6 digits'],
        },
    },
    isAvailable: {
        type: Boolean,
        default: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
});

// Create the Product model
const Product = mongoose.model('Product', productSchema);

export default Product;
