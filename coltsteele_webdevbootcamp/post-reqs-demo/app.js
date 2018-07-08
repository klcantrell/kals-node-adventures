const path = require('path');
const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));
app.set('view engine', 'pug');
app.use(express.static('public'));

let friends = ['Cloud', 'Squall', 'Vincent', 'Tifa'];

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/friends', (req, res) => {
  res.render('friends', {friends});
});

app.post('/addfriend', (req, res) => {
  const { newfriend } = req.body;
  friends.push(newfriend);
  res.redirect('/friends');
});

app.listen(3000, () => {
  console.log('server started');
});