const express = require('express');
const { Register,Login,Logout,googleLogin,forgotpassword,resetPassword } = require('../controllers/auth');

const {userRegisterValidator, userSigninValidator,forgotPasswordValidator,resetPasswordValidator} = require('../validators/auth');
const {runValidations} = require('../validators/index');

const router = express.Router();

// Create the Register route using validator functions
router.post("/register", userRegisterValidator, runValidations, Register);
// Create the Login route using validator functions
router.post("/login", userSigninValidator, runValidations, Login);
// Create the Logout Route
router.post("/logout", Logout);

// forgot password
router.put('/forgot-password', forgotPasswordValidator, runValidations, forgotpassword)

// reset password
router.put("/reset-password", resetPasswordValidator, runValidations, resetPassword)

// google login
router.post('/google-login', googleLogin);

module.exports = router;