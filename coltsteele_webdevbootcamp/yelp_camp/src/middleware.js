export const isLoggedIn = (req, res, next) => {
  if(req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
};

export const injectUserIntoLocals = (req, res, next) => {
  res.locals.currentUser = req.user;
  next();
};