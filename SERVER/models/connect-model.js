import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true, // Ensures that each email is unique
        match: /.+\@.+\..+/, // Simple regex for email validation
    },
    phone: {
        type: String,
        required: true,
    },
    designation: {
        type: String,
        enum: ['Farmer', 'Retailer'], // Validates designation to be one of these values
        required: true,
    },
}, {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
});

// Create a model
const Contact = mongoose.model('Contact', contactSchema);

// Export the model
export default Contact;
