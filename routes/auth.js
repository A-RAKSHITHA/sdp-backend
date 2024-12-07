const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Login Route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    // Save the user to MongoDB
    const newUser = new User({ email, password });
    await newUser.save();

    return res.status(200).json({ message: 'Login successful and details stored!' });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
