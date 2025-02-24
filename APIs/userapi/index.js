require('dotenv').config();  // Load the .env file
const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users');

dotenv.config();
const app = express();

app.use(bodyParser.json());

app.use(userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
