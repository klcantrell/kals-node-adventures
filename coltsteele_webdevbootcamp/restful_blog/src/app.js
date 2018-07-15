import express from 'express';
import db from '../db/models';

const app = express();

app.set('view engine', 'pug');
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.redirect('/blogs');
});

app.get('/blogs', (req, res) => {
  db.Blog.all()
    .then(blogs => {
      res.render('index', {blogs});
    })
    .catch(err => res.send(err));
});

app.post('/blogs', (req, res) => {
  const { title, image, body } = req.body.blog;
  db.Blog.create({title, image, body})
    .then(() => {
      res.redirect('/blogs');
    })
    .catch(err => res.send(err));
});

app.get('/blogs/new', (req, res) => {
  res.render('new');
});

app.listen(3000, () => {
  console.log('Restul Blog server is running');
})