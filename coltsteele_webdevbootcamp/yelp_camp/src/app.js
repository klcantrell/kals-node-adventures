import express from 'express';
import db from '../db/models';

const app = express();

app.set('view engine', 'pug');
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.render('landing');
});

app.get('/campgrounds', (req, res) => {
  db.Campground.all()
    .then(campgrounds => {
      res.status(200).render('index', {campgrounds});
    })
    .catch(err => {
      res.status(400).send(error);
    })
});

app.post('/campgrounds', (req, res) => {
  const { name, image, description } = req.body;
  db.Campground.create({ name, image, description })
    .then(() => res.status(200).redirect('/campgrounds'))
    .catch(err => res.status(400).send(err));
});

app.get('/campgrounds/new', (req, res) => {
  res.render('new');
});

app.get('/campgrounds/:id', (req, res) => {
  db.Campground.findById(req.params.id)
    .then(campground => res.status(200).render('show', {campground}))
    .catch(err => res.status(400).send(err));
})

app.listen(3000, () => {
  console.log('YelpCamp server has started');
});