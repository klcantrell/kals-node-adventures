const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('home.pug');
});

app.get('/fallinlovewith/:thing', (req, res) => {
  const { thing } = req.params;
  res.render('love.pug', {thing})
});

app.listen(3000, () => {
  console.log('server started')
});