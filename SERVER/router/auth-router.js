import express from 'express';
import passport from '../passport.js'; // Adjust path if necessary
import authcontroller, {upload} from '../controllers/auth-controller.js'; // Import upload from the controller
import isLoggedIn from '../middleware/isloggedin-middleware.js';
// import signupSchema from '../models/user-model.js';

const router = express.Router();

// Home route
router.route('/').get(authcontroller.home);

// Registration route with file upload
router.route('/register')
    .post(upload.single('image'), authcontroller.register); // register a new user with image upload

// Login route
router.route('/login',isLoggedIn)
    .post(authcontroller.login); // Handle user login

// Google authentication route
router.route('/auth/google')
    .get(passport.authenticate('google', { scope: ['email', 'profile'] })); // Start authentication with Google

// Google authentication callback route
router.route('/auth/google/callback')
    .get(passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
        // Successful authentication, redirect to desired route
        res.redirect('/'); // Change to your home route or another route
    });

// Logout route
router.route('/auth/logout')
    .get((req, res, next) => {
        req.logout((err) => {
            if (err) {
                return next(err);
            }
            req.session.destroy(err => {
                if (err) {
                    return next(err);
                }
                res.redirect('/'); // Redirect after logout
            });
        });
    });

// Optional: You can add other routes like password reset, etc. here

export default router;
