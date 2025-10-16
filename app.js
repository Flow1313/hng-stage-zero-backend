const express = require('express');
const meRouter = require('./routes/me');  // Import your router

const app = express();
const PORT = process.env.PORT || 3000;

// Mount the router - this connects /me route to your endpoint
app.use('/', meRouter);

// Optional: Add a root endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Server is running! Visit /me for your user data.' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Test your endpoint at: http://localhost:${PORT}/me`);
});
