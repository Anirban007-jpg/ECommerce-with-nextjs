const express = require('express');
const { requireSignin, AuthMiddleware } = require('../controllers/auth');
const { getuserById,profileupdate ,read} = require('../controllers/user');

const router = express.Router();

// Create the Register route using validator functions
router.get("/user/:userId", getuserById);


// Update user details with photo
router.get('/profile', requireSignin, AuthMiddleware, read);
router.put("/user/profile", requireSignin, AuthMiddleware, profileupdate);

module.exports = router;