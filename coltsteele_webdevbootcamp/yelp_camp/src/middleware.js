import models from '../db/models';

const { Campground, User } = models;

export const isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  req.flash('loginMessage', 'You need to be logged in for that');
  res.redirect('/login');
};

export const isResourceOwner = (req, res, next) => {
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
        res.redirect(`/campgrounds/${req.params.id}`);
      }
    }).catch(err => {
      console.log(err);
      res.redirect('/login');
    })
  } else {
    req.flash('loginMessage', 'You need to be logged in for that');
    res.redirect('/login');
  }
}

export const injectUserIntoLocals = (req, res, next) => {
  res.locals.currentUser = req.user;
  next();
};