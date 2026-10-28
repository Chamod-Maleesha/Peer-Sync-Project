const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for frontend requests
app.use(cors());

// Parse incoming JSON payloads
app.use(express.json());

// Root welcome endpoint
app.get('/', (req, res) => {
  res.json({
    project: 'Peer Sync API',
    status: 'online',
    message: 'Welcome to the Peer Sync backend server!'
  });
});

// Simple health-check API endpoint to confirm the server works
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'Peer Sync backend is healthy and running',
    timestamp: new Date().toISOString(),
    uptimeSeconds: Math.floor(process.uptime())
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`=========================================`);
  console.log(`Peer Sync Backend Server is running!`);
  console.log(`Local URL: http://localhost:${PORT}`);
  console.log(`Health Check: http://localhost:${PORT}/api/health`);
  console.log(`=========================================`);
});

module.exports = app;

