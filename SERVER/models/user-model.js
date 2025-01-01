import mongoose from 'mongoose';
import argon2 from 'argon2';
import jwt from 'jsonwebtoken';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
    },
    designation: {
        type: String,
        enum: ['Farmer', 'Customer'],
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    birthDate: {
        type: Date,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'],
    },
    password: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    zip: {
        type: String,
        required: true,
        match: [/^\d{6}$/, 'Please enter a valid zip code'],
    },
    image: {
        type: String,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Hash password before saving
userSchema.pre('save', async function(next) {
    const user = this;

    // Only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) {
        return next();
    }

    try {
        // Hash the password with Argon2
        user.password = await argon2.hash(user.password);
        next();
    } catch (error) {
        next(error);
    }
});

// Method to generate JWT token
userSchema.methods.generateToken = function() {
    const user = this;
    try {
        return jwt.sign(
            {
                userId: user._id.toString(),
                email: user.email,
                isAdmin: user.isAdmin,
            },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn: "30d",
            }
        );
    } catch (error) {
        console.error(error);
    }
};

// Method to verify password
userSchema.methods.verifyPassword = async function(password) {
    return await argon2.verify(this.password, password);
};

const User = mongoose.model('SeedUser', userSchema);

export default User;
