const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('home.pug');
});

app.get('/hobbies', (req, res) => {
  const hobbies = ['coding', 'eating', 'gaming'];
  res.render('hobbies.pug', {hobbies})
});

app.listen(3000, () => {
  console.log('server started')
});