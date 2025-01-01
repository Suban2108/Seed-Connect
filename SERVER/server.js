import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import session from 'express-session'; 
import passport from './passport.js'; // Adjust the path to your passport config
import connectDb from './utils/db.js';
import errorMiddleware from './middleware/error-middleware.js';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import isLoggedIn from './middleware/isloggedin-middleware.js';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cookieParser());

// Define __filename and __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const corsOptions = {
    origin: "http://localhost:3001",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session middleware
app.use(session({
    secret: process.env.SESSION_SECRET || 'SECRET_KEY',
    resave: false,
    saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../Client/build')));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
import authRouter from './router/auth-router.js'; 
import contactRouter from './router/contact-router.js';
import userRouter from './router/user-router.js'; // Import the user router

app.use('/', authRouter);
app.use('/form', contactRouter);
app.use('/api/users', userRouter); // Use the user router for user-related API routes

// Error middleware
app.use(errorMiddleware);

// Catch-all handler for serving React's index.html for all other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../Client/build/index.html'));
});

// Dashboard route example (protected)
app.get('/dashboard', isLoggedIn, (req, res) => {
    res.send('Welcome to your dashboard, ' + req.user.email); // Access user data
});

const port = 4000;

// Connect to the database and start the server
connectDb().then(() => {
    app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`);
    });
});
