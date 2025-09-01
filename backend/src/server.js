const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

// Start server function
async function startServer() {
  const app = express();

  // Enable CORS
  app.use(cors({
    origin: ['http://localhost:5173', 'http://localhost:3000', 'http://localhost:3001', 'http://192.168.86.59:5173'],
    credentials: true
  }));

  // Location search endpoint
  app.get('/api/location/search', async (req, res) => {
    try {
      const { q: searchQuery } = req.query;

      if (!searchQuery || searchQuery.length < 3) {
        return res.json([]);
      }

      console.log('searchQuery', searchQuery);

      const response = await axios.get('https://nominatim.openstreetmap.org/search', {
        params: {
          format: 'json',
          q: searchQuery,
          countrycodes: 'us',
          limit: 5,
          addressdetails: 1,
          dedupe: 1
        },
        headers: {
          'User-Agent': 'PedalPoint/1.0'
        },
        timeout: 10000 // 10 second timeout
      });
      return res.json(response.data);
    } catch (error) {
      console.error('Location search error:', error);

      // If OpenStreetMap is down, return empty array instead of error
      if (error.response?.status === 503) {
        console.log('OpenStreetMap API is temporarily unavailable, returning empty results');
        return res.json([]);
      }

      res.status(500).json({
        error: 'Failed to fetch location data',
        message: error.message
      });
    }
  });

  // Start Express server
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚴‍♂️ Pedal Point API server running on port ${PORT}`);
    console.log(`🔍 Location search endpoint: http://localhost:${PORT}/api/location/search`);
    console.log(`🌐 Network access: http://192.168.86.59:${PORT}/api/location/search`);
  });
}

// Start the server
startServer().catch(console.error);
