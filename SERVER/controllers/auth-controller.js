import User from '../models/user-model.js';
import argon2 from 'argon2';
import multer from 'multer';
import path from 'path';

// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images'); // Set the directory for storing uploaded files
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

// Register Function
const register = async (req, res) => {
    try {
        const {
            username,
            password,
            email,
            phone,
            designation,
            birthDate,
            address,
            city,
            state,
            zip,
        } = req.body;

        // Check if user already exists
        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash the password before saving
        const hashedPassword = await argon2.hash(password);

        // Create new user with all fields
        const newUser = await User.create({
            username,
            password: hashedPassword,
            email,
            phone,
            designation,
            birthDate,
            address,
            city,
            state,
            zip,
            image: req.file ? req.file.path : null, // Save file path if image is uploaded
        });

        res.status(201).json({
            msg: "Registration successful",
            userId: newUser._id.toString(),
        });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

// Home Function
const home = async (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../Client/public/index.html'));
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

// Login Function
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const trimmedEmail = email.trim();
        console.log("Trimmed Email:", trimmedEmail); // Log the trimmed email

        const userExist = await User.findOne({ email: trimmedEmail });

        // Check if user exists
        if (!userExist) {
            console.log("User not found for email:", trimmedEmail);
            return res.status(400).json({ msg: "Invalid Credentials" });
        }

        console.log("Password from request:", password);
        console.log("Hashed password from DB:", userExist.password);

        // Compare password
        const isMatch = (password) => {
            return password === password;
        }
        console.log(isMatch);

        if (isMatch) {
            res.status(200).send({
                data: "Login Successful",
                token: await userExist.generateToken(),
                userId: userExist._id.toString(),
            });
        } else {
            console.log("Password mismatch for user:", trimmedEmail);
            res.status(401).json({ msg: "Invalid email or password" });
        }

    } catch (err) {
        console.error("Error during login:", err);
        res.status(500).send({ message: err.message });
    }
};

export default { home, register, login };
export { upload };
