const express = require('express');
const axios = require('axios');
const router = express.Router();

// Proxy endpoint for OpenStreetMap geocoding
router.get('/search', async (req, res) => {
  try {
    const { q } = req.query;

    // Validate required query parameter
    if (!q || q.length < 3) {
      return res.status(400).json({
        error: 'Query parameter "q" is required and must be at least 3 characters'
      });
    }

    console.log('searchQuery', q);

    // Build the OpenStreetMap API URL
    const params = new URLSearchParams({
      format: 'json',
      q: q,
      countrycodes: 'us',
      limit: '5',
      addressdetails: '1',
      dedupe: '1'
    });

    const openStreetMapUrl = `https://nominatim.openstreetmap.org/search?${params}`;

    // Make request to OpenStreetMap using axios
    const response = await axios.get(openStreetMapUrl, {
      headers: {
        'User-Agent': 'PedalPoint/1.0'
      },
      timeout: 10000 // 10 second timeout
    });

    // Extract display names and remove duplicates
    const names = response.data.map(item => item.display_name);
    const uniqueNames = names.filter((name, index, self) => self.indexOf(name) === index);

    res.json(uniqueNames);

  } catch (error) {
    console.error('Location search error:', error);
    res.status(500).json({
      error: 'Failed to fetch location data',
      details: error.message
    });
  }
});

module.exports = router;
