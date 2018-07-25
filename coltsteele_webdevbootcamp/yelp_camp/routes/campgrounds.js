import express from 'express';
import models from '../db/models';
import { isLoggedIn } from '../src/middleware';

const router = express.Router();
const { Campground, Comment, User } = models;

router.get('/', (req, res) => {
  Campground.findAll()
    .then(campgrounds => {
      res.status(200).render('campgrounds/index', {campgrounds});
    })
    .catch(err => {
      res.status(400).send(error);
    })
});

router.post('/', isLoggedIn, (req, res) => {
  const { name, image, description } = req.body;
  Campground.create({ name, image, description })
    .then(() => res.status(200).redirect('/campgrounds'))
    .catch(err => res.status(400).send(err));
});

router.get('/new', isLoggedIn, (req, res) => {
  res.render('campgrounds/new');
});

router.get('/:id', (req, res) => {
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

export default router;