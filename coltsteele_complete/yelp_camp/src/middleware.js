import models from '../db/models';

const { Campground, Comment, User } = models;

export const isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  req.flash('fail', 'You need to be logged in for that');
  res.redirect('back');
};

export const isCampgroundOwner = (req, res, next) => {
  if (req.isAuthenticated()) {
    Campground.findById(req.params.id, {
      include: [{
        model: User,
        as: 'user',
      }]
    }).then(campground => {
      if (!campground) {
        req.flash('fail', 'You do not have permission for that');
        return res.redirect(`back`);
      }
      if (campground.user.id === req.user.id) {
        next();
      } else {
        req.flash('fail', 'You do not have permission for that');
        res.redirect(`back`);
      }
    }).catch(err => {
      req.flash('fail', 'Something went wrong');
      res.redirect('back');
    })
  } else {
    req.flash('fail', 'You need to be logged in for that');
    res.redirect('back');
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
      if (!comment) {
        req.flash('fail', 'You do not have permission for that');
        return res.redirect(`back`);
      }
      if (comment.author.id === req.user.id) {
        next();
      } else {
        req.flash('fail', 'You do not have permission for that');
        res.redirect('back');
      }
    }).catch(err => {
      req.flash('fail', 'Something went wrong');
      res.redirect('back');
    })
  } else {
    req.flash('fail', 'You need to be logged in for that');
    res.redirect('back');
  }
};

export const injectUserIntoLocals = (req, res, next) => {
  res.locals.currentUser = req.user;
  next();
};

export const injectMessageIntoLocals = (req, res, next) => {
  res.locals.successMessage = req.flash('success');
  res.locals.failMessage = req.flash('fail');
  next();
}