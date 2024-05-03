const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

// Endpoint for refreshing the access token
app.post('/refresh-token', (req, res) => {
  const refreshToken = req.body.refreshToken;
  const newAccessToken = 'NEW_ACCESS_TOKEN';

  res.json({ accessToken: newAccessToken });
});

// Serve 'index.html' as the default document
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
