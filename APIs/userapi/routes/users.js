const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const User = require('../models/user');
const authenticateToken = require('../middleware/auth');

dotenv.config();
const router = express.Router();

// User Registration
router.post('/users', (req, res) => {
  const { username, email, password } = req.body;
  
  User.createUser(username, email, password, (err, result) => {
    if (err) return res.status(500).json({ message: 'Error registering user', error: err });
    res.status(201).json({ message: 'User registered successfully' });
  });
});

// Login
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  User.getUserByEmail(email, (err, results) => {
    if (err || results.length === 0) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const user = results[0];

    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err || !isMatch) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }

      const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRATION });
      res.json({ token });
    });
  });
});

// Fetch all users
router.get('/users', authenticateToken, (req, res) => {
  User.getAllUsers((err, users) => {
    if (err) return res.status(500).json({ message: 'Error fetching users', error: err });
    res.json({ users });
  });
});

// Update user details
router.put('/users/:id', authenticateToken, (req, res) => {
  const { username, email } = req.body;
  const userId = req.params.id;

  User.updateUser(userId, username, email, (err, result) => {
    if (err) return res.status(500).json({ message: 'Error updating user', error: err });
    res.json({ message: 'User updated successfully' });
  });
});

// Delete a user
router.delete('/users/:id', authenticateToken, (req, res) => {
  const userId = req.params.id;

  User.deleteUser(userId, (err, result) => {
    if (err) return res.status(500).json({ message: 'Error deleting user', error: err });
    res.json({ message: 'User deleted successfully' });
  });
});

module.exports = router;
