const express = require('express');
const connectDB = require('./config/db');

// Connect Database
connectDB();

const app = express();

app.get('/', (req, res) => {
  res.send('Server is up and running');
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// just to test server with api call

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from server!' });
});