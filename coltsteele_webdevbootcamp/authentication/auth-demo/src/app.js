import express from 'express';
import passport from 'passport';
import LocalStrategy from 'passport-local';
import session from 'express-session';
import models from '../db/models';

// SETUP

const app = express();
const { User } = models;
app.set('view engine', 'pug');
app.use(express.urlencoded({extended: true}));
app.use(session({
  secret: 'not all who wander are lost',
  resave: false,
  saveUninitialized: false,
}))

// PASSPORT

app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(User.serialize());
passport.deserializeUser(User.deserialize());
passport.use('local-signup', new LocalStrategy(
  {
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true,
  },
  (req, username, password, done) => {
    User.findOne({
      where: {
        username,
      }
    }).then(user => {
      if (user) {
        return done(null, false, req.flash('signupMessage'), 'That username already exists');
      }
      User.create({
        username,
        password: User.generateHash(password),
      }).then(user => {
        if (user) {
          return done(null, user);
        }
        return done(null, false);
      })
    }).catch(err => {
      console.log(err);
    })
  }
));

// ROUTES

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/register', (req, res) => {
  res.render('register')
});

app.post('/register', passport.authenticate('local-signup', {
  successRedirect: '/secret',
  failureRedirect: '/',
}));

app.get('/secret', (req, res) => {
  res.render('secret');
});

app.listen(3000, () => {
  console.log('Server started');
});
