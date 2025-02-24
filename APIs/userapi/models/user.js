const bcrypt = require('bcryptjs');
const db = require('../config/db');

// Register a new user
const createUser = (username, email, password, callback) => {
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) return callback(err);

    const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    db.query(query, [username, email, hashedPassword], callback);
  });
};

// Fetch all users
const getAllUsers = (callback) => {
  const query = 'SELECT id, username, email, created_at FROM users';
  db.query(query, callback);
};

// Update user details
const updateUser = (id, username, email, callback) => {
  const query = 'UPDATE users SET username = ?, email = ? WHERE id = ?';
  db.query(query, [username, email, id], callback);
};

// Delete a user
const deleteUser = (id, callback) => {
  const query = 'DELETE FROM users WHERE id = ?';
  db.query(query, [id], callback);
};

// Find user by email for login
const getUserByEmail = (email, callback) => {
  const query = 'SELECT * FROM users WHERE email = ?';
  db.query(query, [email], callback);
};

module.exports = {
  createUser,
  getAllUsers,
  updateUser,
  deleteUser,
  getUserByEmail
};
