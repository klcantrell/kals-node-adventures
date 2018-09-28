const path = require('path');
const express = require('express');

const app = express();

app.set('view engine', 'hbs');
app.use(express.static(path.resolve('public')));

app.get('/', (req, res) => {
  res.render('home', {
    pageTitle: 'Home',
    currentYear: new Date().getFullYear(),
    welcomeMessage: 'Hey there you!',
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    pageTitle: 'About Page',
    currentYear: new Date().getFullYear(),
  });
});

app.listen(3000, () => {
  console.log('App has started');
});
