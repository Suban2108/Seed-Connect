import Contact from '../models/contact-model.js'; // Ensure the correct path and extension

const contactForm = async (req, res) => {
    try {
        const response = req.body;
        await Contact.create(response);
        return res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Message not delivered' });
    }
};

export default contactForm; // Use export syntax