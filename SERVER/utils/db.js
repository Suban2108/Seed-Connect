import mongoose from 'mongoose'; // Use ES module syntax

// Use the MongoDB URI from the environment variables
const URI = process.env.MONGODB_URI;

const connectDb = async () => {
    try {
        // Connect to the MongoDB database with proper options
        await mongoose.connect(URI, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            w: 'majority', // Correct write concern mode
        });
        console.log("Connection successful to the database");
    } catch (error) {
        console.error("Database connection failed:", error.message); // Log the actual error
        process.exit(1); // Exit the process with a failure code
    }
};

export default connectDb; // Use ES module export syntax
