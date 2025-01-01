const validate = (schema) => async (req, res, next) => {
    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody; // Corrected variable name to `parseBody`
        next();
    } catch (err) {
        const status = 422;
        const message = 'Fill the input properly';

        // Check if `err.errors` exists and has at least one element
        const extraDetails = err.errors && err.errors.length > 0 
            ? err.errors[0].message 
            : 'Unknown validation error';

        const error = {
            status,
            message,
            extraDetails
        };

        console.log(error.extraDetails);
        next(error); // Pass the error to the next middleware or error handler
    }
};

// Use export syntax
export default validate;
