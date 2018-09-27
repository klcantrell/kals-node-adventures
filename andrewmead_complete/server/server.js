const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.resolve('public')));

app.get('/', (req, res) => {
  res.send({
    name: 'Kal',
    likes: ['coding', 'ice cream'],
  });
});

app.get('/about', (req, res) => {
  res.send('About page');
});

app.get('/help', (req, res) => {
  res.send('About page');
});

app.listen(3000, () => {
  console.log('App has started');
});
