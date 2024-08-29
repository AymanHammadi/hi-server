const express = require('express');
const connectDB = require('./config/db');

// Connect Database
connectDB();

const app = express();
app.use(express.json());

// Define Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/posts', require('./routes/posts'));
app.use('/api/profile', require('./routes/profile'));
app.use('/api/users', require('./routes/users'));


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