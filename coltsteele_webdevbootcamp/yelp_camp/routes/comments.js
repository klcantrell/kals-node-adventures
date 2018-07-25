import express from 'express';
import models from '../db/models';
import { isLoggedIn } from '../src/middleware';

const router = express.Router({mergeParams: true});
const { Campground, Comment, User } = models;

router.get('/new', isLoggedIn, (req, res) => {
  Campground.findById(req.params.id)
    .then(campground => {
      res.render('comments/new', {campground});
    })
    .catch(err => res.send(err));
});

router.post('/', isLoggedIn, (req, res) => {
  Campground.findById(req.params.id)
    .then(campground => {
      Comment.create({
        text: req.body.comment.text,
        campground_id: campground.id,
        user_id: req.user.id,
      })
        .then(() => res.redirect(`/campgrounds/${campground.id}`)) 
        .catch(() => res.redirect(`/campgrounds/`));
    })
    .catch(err => {
      res.redirect('/campgrounds');
    });
});

export default router;