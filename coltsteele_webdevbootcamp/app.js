const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hi there!');
});

app.get('/bye', (req, res) => {
  res.send('Goodbye!');
});

app.get('/dog', (req, res) => {
  res.send('Meow!');
});

app.listen(3000, () => {
  console.log('server listening on port 3000');
});