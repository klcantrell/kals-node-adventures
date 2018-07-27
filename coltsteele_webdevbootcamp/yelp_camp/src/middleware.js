import models from '../db/models';

const { Campground, Comment, User } = models;

export const isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  req.flash('loginMessage', 'You need to be logged in for that');
  res.redirect('/login');
};

export const isCampgroundOwner = (req, res, next) => {
  if (req.isAuthenticated()) {
    Campground.findById(req.params.id, {
      include: [{
        model: User,
        as: 'user',
      }]
    }).then(campground => {
      if (campground.user.id === req.user.id) {
        next();
      } else {
        req.flash('showMessage', 'You do not have permission for that');
        res.redirect(`back`);
      }
    }).catch(err => {
      req.flash('showMessage', 'Something went wrong');
      res.redirect('back');
    })
  } else {
    req.flash('loginMessage', 'You need to be logged in for that');
    res.redirect('/login');
  }
}

export const isCommentOwner = (req, res, next) => {
  if (req.isAuthenticated()) {
    Comment.findById(req.params.comment_id, {
      include: [{
        model: User,
        as: 'author',
        attributes: ['id'],
      }]
    }).then(comment => {
      if (comment.author.id === req.user.id) {
        next();
      } else {
        req.flash('showMessage', 'You do not have permission for that');
        res.redirect('back');
      }
    }).catch(err => {
      console.log(err);
      res.redirect('back');
    })
  } else {
    req.flash('loginMessage', 'You need to be logged in for that');
    res.redirect('/login');
  }
};

export const injectUserIntoLocals = (req, res, next) => {
  res.locals.currentUser = req.user;
  next();
};