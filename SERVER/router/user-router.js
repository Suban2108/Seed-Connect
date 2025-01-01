import express from 'express';
import mongoose from 'mongoose';
import User from '../models/user-model.js'; // Make sure to import your User model
import isLoggedIn from '../middleware/isloggedin-middleware.js';

const route = express.Router();

// Dashboard route (protected)
route.get('/dashboard', isLoggedIn, (req, res) => {
    res.send('Welcome to your dashboard, ' + req.user.email); // Access user data
});

// Get user profile (protected)
route.get('/profile/:id', isLoggedIn, async (req, res) => {
    const userId = req.params.id;
    try {
        const user = await User.findOne({email});// Exclude the password field
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

// Update user profile (protected)
route.put('/profile/:id', isLoggedIn, async (req, res) => {
    const userId = req.params.id;
    const { name, email, contact, location } = req.body; // Add other fields as needed

    try {
        const user = await User.findOne({email});
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Update user fields
        user.name = name || user.name;
        user.email = email || user.email;
        user.contact = contact || user.contact;
        user.location = location || user.location;

        // Save the updated user
        const updatedUser = await user.save();
        res.json(updatedUser);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

export default route;
