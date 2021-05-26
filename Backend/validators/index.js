const {validationResult} = require('express-validator');


exports.runValidations = (req,res,next) => {
    // Catch all the errors
    const errors = validationResult(req);
    // Check if errors array is empty or not
    if (!errors.isEmpty()) {
        return res.status(400).json({
            // catch the first error from the error array
            error: errors.array()[0].msg
        });
    }

    next();
}