const express = require('express');
const router = express.Router();
const axios = require('axios');

// Your actual personal information - UPDATE THESE!
const USER_DATA = {
  email: "talk2ibb2003@gmail.com",  // ← Change this
  name: "Bello Ibrahim",                   // ← Change this
  stack: "Node.js, Express, MongoDB"             // ← Change this
};

// GET /me endpoint
router.get('/me', async (req, res) => {
  try {
    const catFactResponse = await axios.get('https://cat-fact.herokuapp.com/facts/random');
    
    const response = {
      status: "success",
      user: USER_DATA,
      timestamp: new Date().toISOString(),
      fact: catFactResponse.data.text
    };
    
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(response);
    
  } catch (error) {
    console.error('Error fetching cat fact:', error);
    
    const errorResponse = {
      status: "error",
      user: USER_DATA,
      timestamp: new Date().toISOString(),
      fact: "Unable to fetch cat fact at this time.",
      error: error.message
    };
    
    res.setHeader('Content-Type', 'application/json');
    res.status(500).json(errorResponse);
  }
});

module.exports = router;  // This exports the router