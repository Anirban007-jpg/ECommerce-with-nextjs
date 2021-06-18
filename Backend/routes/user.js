const express = require('express');
const { getuserById } = require('../controllers/user');

const router = express.Router();

// Create the Register route using validator functions
router.get("/user/:userId", getuserById);

module.exports = router;