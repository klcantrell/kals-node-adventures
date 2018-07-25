import express from 'express';

const router = express.Router();

export default passport => {
  router.use((req, res, next) => {
    res.locals.currentUser = req.user;
    next();
  });
  
  router.get('/', (req, res) => {
    res.render('landing');
  });
  
  router.get('/register', (req, res) => {
    res.render('register', {message: req.flash('signupMessage')});
  });
  
  router.post('/register', passport.authenticate('local-signup', {
    successRedirect: '/campgrounds',
    failureRedirect: '/register',
  }));
  
  router.get('/login', (req, res) => {
    res.render('login', {message: req.flash('loginMessage')});
  });
  
  router.post('/login', passport.authenticate('local-login', {
    successRedirect: '/campgrounds',
    failureRedirect: '/login',
  }));
  
  router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/campgrounds');
  });

  return router;
}