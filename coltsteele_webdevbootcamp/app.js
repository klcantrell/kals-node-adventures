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

app.get('/r/:subRedditName', (req, res) => {
  res.send(`Welcome to the ${req.params.subRedditName} subreddit`);
});

app.get('/r/:subRedditName/comments/:id/:title', (req, res) => {
  console.log(req.params);
  res.send('Welcome to the comments page');
});

app.get('*', (req, res) => {
  res.send('You are a star!!');
});

app.listen(3000, () => {
  console.log('server listening on port 3000');
});