import jwt from 'jsonwebtoken';

// Middleware to check if the user is logged in
const isLoggedIn = (req, res, next) => {
    const token = req.cookies.token; // Get token from cookies

    if (!token) {
        return res.redirect('/login'); // Redirect to login if no token
    }

    try {
        const data = jwt.verify(token, process.env.JWT_SECRET_KEY); // Verify token
        req.user = data; // Attach user data to the request
        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        console.error("Token verification failed:", error);
        return res.redirect('/login'); // Redirect to login if token is invalid
    }
}

export default isLoggedIn

