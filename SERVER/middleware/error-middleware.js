const errorMiddleware = (err, req, res, next) => {
    const status = err.status || 500; // Use provided status or default to 500
    const message = err.message || "BACKEND ERROR"; // Use provided message or default

    // Optional extra details for debugging
    const extraDetails = err.extraDetails || "Error From Backend";

    // Return the error response in JSON format
    return res.status(status).json({ status, message, extraDetails });
};

export default errorMiddleware; // Use ES module export syntax
