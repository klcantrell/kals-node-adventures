import express from 'express';

const app = express();
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/secret', (req, res) => {
  res.render('secret');
});

app.listen(3000, () => {
  console.log('Server started');
});