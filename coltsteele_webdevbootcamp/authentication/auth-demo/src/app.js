import express from 'express';
import passport from 'passport';
import passportLocal from 'passport-local';
import session from 'express-session';
import flash from 'connect-flash';
import models from '../db/models';

// SETUP

const app = express();
const { User } = models;
const LocalStrategy = passportLocal.Strategy;
app.set('view engine', 'pug');
app.use(express.urlencoded({extended: true}));
app.use(session({
  secret: 'not all who wander are lost',
  resave: false,
  saveUninitialized: false,
}))

// MIDDLEWARE

const isLoggedIn = (req, res, next) => {
  if(req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
};

// PASSPORT

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
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
        return done(null, false, req.flash('signupMessage', 'That username already exists'));
      }
      User.create({
        username,
        password: User.generateHash(password),
      }).then(user => {
        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      })
    }).catch(err => {
      throw err;
    })
  }
));
passport.use('local-login', new LocalStrategy(
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
      if (!user) {
        return done(null, false, req.flash('loginMessage', 'No user found'));
      }
      if (!user.validPassword(password)) {
        return done(null, false, req.flash('loginMessage', 'Password wrong'));
      }
      return done(null, user);
    }).catch(err => {
      throw err;
    })
  }
));

// ROUTES

app.get('/', (req, res) => {
  res.render('home', {isLoggedIn: req.isAuthenticated()});
});

app.get('/register', (req, res) => {
  res.render('register', {message: req.flash('signupMessage')});
});

app.post('/register', passport.authenticate('local-signup', {
  successRedirect: '/secret',
  failureRedirect: '/register',
}));

app.get('/secret', isLoggedIn, (req, res) => {
  res.render('secret');
});

app.get('/login', (req, res) => {
  res.render('login', {message: req.flash('loginMessage')});
});

app.post('/login', passport.authenticate('local-login', {
  successRedirect: '/secret',
  failureRedirect: '/login',
}));

app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

app.listen(3000, () => {
  console.log('Server started');
});
