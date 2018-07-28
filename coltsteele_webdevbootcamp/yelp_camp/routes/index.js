import express from 'express';
import { injectUserIntoLocals, injectMessageIntoLocals } from '../src/middleware';

const router = express.Router();

export default passport => {
  router.use(injectUserIntoLocals, injectMessageIntoLocals);
  
  router.get('/', (req, res) => {
    res.render('landing');
  });
  
  router.get('/register', (req, res) => {
    res.render('register');
  });
  
  router.post('/register', passport.authenticate('local-signup', {
    successRedirect: '/campgrounds',
    failureRedirect: '/register',
  }));
  
  router.get('/login', (req, res) => {
    res.render('login');
  });
  
  router.post('/login', passport.authenticate('local-login', {
    successRedirect: '/campgrounds',
    failureRedirect: '/login',
  }));
  
  router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success', 'You logged out');
    res.redirect('/campgrounds');
  });

  return router;
}