import express from 'express';
import contactForm from '../controllers/contact-controller.js'; // Ensure the correct path and extension

const router = express.Router();

router.route('/contact').post(contactForm);

export default router; // Use export syntax
