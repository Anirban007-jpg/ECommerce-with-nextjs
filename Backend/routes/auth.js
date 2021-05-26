const express = require('express');
const { Register } = require('../controllers/auth');

const {userRegisterValidator} = require('../validators/auth');
const {runValidations} = require('../validators/index');

const router = express.Router();

// Create the Register route using validator functions
router.post("/register", userRegisterValidator, runValidations, Register);


module.exports = router;