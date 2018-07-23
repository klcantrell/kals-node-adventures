import express from 'express';
import passport from 'passport';
import LocalStrategy from 'passport-local';
import session from 'express-session';
import models from '../db/models';

const app = express();
const { User } = models;
app.set('view engine', 'pug');
app.use(session({
  secret: 'not all who wander are lost',
  resave: false,
  saveUninitialized: false,
}))
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(User.serialize());
passport.deserializeUser(User.deserialize());

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/secret', (req, res) => {
  res.render('secret');
});

app.listen(3000, () => {
  console.log('Server started');
});
