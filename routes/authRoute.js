const express = require('express');
const router = express.Router();
const {registerUser, loginUser} = require('../controllers/authControllers');

// Route to register a new user
router.post('/register', registerUser);

// Route to login a user
router.post('/login', loginUser);

// Route to logout a user
router.get('/logout', (req, res) => {
    res.clearCookie('token');
    res.redirect('/');
    });


module.exports = router;