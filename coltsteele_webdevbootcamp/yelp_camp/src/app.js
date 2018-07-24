import path from 'path';
import express from 'express';
import passport from 'passport';
import passportLocal from 'passport-local';
import models from '../db/models';

const app = express();
const LocalStrategy = passportLocal.Strategy;
const { Campground, Comment, User } = models;

app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname + '/public')));
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.render('landing');
});

app.get('/campgrounds', (req, res) => {
  Campground.findAll()
    .then(campgrounds => {
      res.status(200).render('campgrounds/index', {campgrounds});
    })
    .catch(err => {
      res.status(400).send(error);
    })
});

app.post('/campgrounds', (req, res) => {
  const { name, image, description } = req.body;
  Campground.create({ name, image, description })
    .then(() => res.status(200).redirect('/campgrounds'))
    .catch(err => res.status(400).send(err));
});

app.get('/campgrounds/new', (req, res) => {
  res.render('campgrounds/new');
});

app.get('/campgrounds/:id', (req, res) => {
  Campground.findById(req.params.id, {
    include: [{
      model: Comment,
      as: 'comments',
      include: [{
        model: User,
        as: 'author'
      }]
    }]
  })
    .then(campground => res.status(200).render('campgrounds/show', {campground}))
    .catch(err => res.status(400).send(err));
});

app.get('/campgrounds/:id/comments/new', (req, res) => {
  Campground.findById(req.params.id)
    .then(campground => {
      res.render('comments/new', {campground});
    })
    .catch(err => res.send(err));
});

app.post('/campgrounds/:id/comments', (req, res) => {
  Campground.findById(req.params.id)
    .then(campground => {
      const user_id = 1;
      Comment.create({
        text: req.body.comment.text,
        campground_id: campground.id,
        user_id,
      })
        .then(() => res.redirect(`/campgrounds/${campground.id}`)) 
        .catch(() => res.redirect(`/campgrounds/`));
    })
    .catch(err => {
      res.redirect('/campgrounds');
    });
});

app.listen(3000, () => {
  console.log('YelpCamp server has started');
});