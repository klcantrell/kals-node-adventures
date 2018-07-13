import db from '../db/models';
import express from 'express';
const app = express();

app.set('view engine', 'pug');
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.render('landing');
});

app.get('/campgrounds', (req, res) => {
  res.render('campgrounds', {campgrounds: CAMPGROUNDS});
});

app.post('/campgrounds', (req, res) => {
  const { name, img } = req.body;
  CAMPGROUNDS.push({
    name,
    img,
  });
  res.redirect('/campgrounds');
});

app.get('/campgrounds/new', (req, res) => {
  res.render('new');
});

app.listen(3000, () => {
  console.log('YelpCamp server has started');
});