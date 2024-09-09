const express = require('express');
const cors = require('cors'); // Import cors to handle cross-origin requests
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON and enable CORS
app.use(express.json());
app.use(cors());

// Simple route for testing
app.get('/', (req, res) => {
  res.send('Trip Matchmaker API is running');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

