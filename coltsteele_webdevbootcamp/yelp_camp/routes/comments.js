import express from 'express';
import models from '../db/models';
import { isLoggedIn, isCommentOwner } from '../src/middleware';

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
        campgroundId: campground.id,
        userId: req.user.id,
      })
        .then(() => res.redirect(`/campgrounds/${campground.id}`)) 
        .catch(() => res.redirect(`/campgrounds/`));
    })
    .catch(err => {
      res.redirect('/campgrounds');
    });
});

router.get('/:comment_id/edit', isCommentOwner, (req, res) => {
  Comment.findById(req.params.comment_id, {
    include: [{
      model: Campground,
      as: 'campground',
    }]
  })
    .then(comment => {
      res.render('comments/edit', {comment})
    })
    .catch(err => {
      console.log(err);
      res.redirect('campgrounds');
    })
});

router.put('/:comment_id', isCommentOwner, (req, res) => {
  Comment.findById(req.params.comment_id)
    .then(comment => {
      if (!comment) {
        req.flash('fail', 'Comment not found');
        return res.redirect('back');
      }
      return comment
        .update(req.body.comment)
        .then(() => {
          res.redirect(`/campgrounds/${req.params.id}`);
        })
        .catch(err => {
          req.flash('fail', 'Something went wrong');
          res.redirect('back');
        })
    })
    .catch(err => {
      req.flash('fail', 'Something went wrong');
      res.redirect('back');
    })
});

router.delete('/:comment_id', isCommentOwner, (req, res) => {
  Comment.findById(req.params.comment_id)
    .then(comment => {
      if (!comment) {
        req.flash('fail', 'Something went wrong');
        return res.redirect('back');
      }
      return comment
        .destroy()
        .then(() => {
          req.flash('sucess', 'Successfully deleted');
          res.redirect(`/campgrounds/${req.params.id}`);
        })
        .catch(err => {
          req.flash('fail', 'Something went wrong');
          res.redirect('back');
        })
    })
    .catch(err => {
      req.flash('fail', 'Something went wrong');
      res.redirect('back');
    })
});

export default router;