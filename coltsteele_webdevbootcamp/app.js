const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/fallinlovewith/:thing', (req, res) => {
  const { thing } = req.params;
  res.render('love', {thing});
});

app.get('/posts', (req, res) => {
  const posts = [
    {title: 'coding', author: 'admin'},
    {title: 'eating', author: 'kal'},
    {title: 'gaming', author: 'cloud'},
  ];
  res.render('posts', {posts})
});

app.listen(3000, () => {
  console.log('server started')
});