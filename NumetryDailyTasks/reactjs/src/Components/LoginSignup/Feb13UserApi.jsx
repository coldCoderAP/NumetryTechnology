// Full User Management API with JWT Authentication & MySQL
// Tech Stack: Node.js (Express), MySQL, JWT, bcrypt

const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();

dotenv.config();
app.use(express.json());
app.use(cors());

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'userdb'
});

db.connect(err => {
  if (err) throw err;
  console.log('MySQL Connected...');
});

// Middleware for JWT Authentication
const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'Access Denied' });

  jwt.verify(token.split(' ')[1], process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid Token' });
    req.user = user;
    next();
  });
};

// Register a new user
app.post('/users', async (req, res) => {
  const { name, email, password, role } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  
  db.query('INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)', 
    [name, email, hashedPassword, role], 
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'User registered successfully', userId: result.insertId });
    }
  );
});

// Fetch all users (Protected)
app.get('/users', authenticateToken, (req, res) => {
  db.query('SELECT id, name, email, role FROM users', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// Update user details
app.put('/users/:id', authenticateToken, (req, res) => {
  const { name, email, role } = req.body;
  db.query('UPDATE users SET name = ?, email = ?, role = ? WHERE id = ?', 
    [name, email, role, req.params.id], 
    (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'User updated successfully' });
    }
  );
});

// Delete a user
app.delete('/users/:id', authenticateToken, (req, res) => {
  db.query('DELETE FROM users WHERE id = ?', [req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'User deleted successfully' });
  });
});

// Start Server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});

// Frontend (index.html + styles.css)
const frontendHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Management</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h2>User Management</h2>
        <form id="registerForm">
            <input type="text" id="name" placeholder="Name" required>
            <input type="email" id="email" placeholder="Email" required>
            <input type="password" id="password" placeholder="Password" required>
            <input type="text" id="role" placeholder="Role" required>
            <button type="submit">Register</button>
        </form>
        <div id="userList"></div>
    </div>
    <script src="script.js"></script>
</body>
</html>
`;

const frontendCSS = `
body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f4f4f4;
}
.container {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
input, button {
    display: block;
    margin: 10px 0;
    padding: 10px;
    width: 100%;
}
button {
    background-color: #007BFF;
    color: white;
    border: none;
    cursor: pointer;
}
button:hover {
    background-color: #0056b3;
}
`;

const frontendJS = `
document.getElementById('registerForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password, role })
    });

    const data = await response.json();
    alert(data.message);
});
`;

console.log(frontendHTML, frontendCSS, frontendJS);
