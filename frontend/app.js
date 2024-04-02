// frontend/app.js

const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

// API endpoint
app.get('/users', async (req, res) => {
  try {
    const response = await axios.get('http://backend:3000/users');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Frontend running at http://localhost:${port}`);
});
