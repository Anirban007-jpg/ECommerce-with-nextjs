const express = require('express');
const { Register,Login,Logout } = require('../controllers/auth');

const {userRegisterValidator, userSigninValidator} = require('../validators/auth');
const {runValidations} = require('../validators/index');

const router = express.Router();

// Create the Register route using validator functions
router.post("/register", userRegisterValidator, runValidations, Register);
// Create the Login route using validator functions
router.post("/login", userSigninValidator, runValidations, Login);
// Create the Logout Route
router.post("/logout", Logout);

module.exports = router;