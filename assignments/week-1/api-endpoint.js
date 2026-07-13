const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

app.get('/time', (req, res) => {
  res.json({ time: new Date().toISOString() });
});

const server = app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

server.on('error', (error) => {
  console.error('Server failed to start:', error);
});