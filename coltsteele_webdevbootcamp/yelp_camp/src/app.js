import path from 'path';
import express from 'express';
import passport from 'passport';
import passportLocal from 'passport-local';
import session from 'express-session';
import flash from 'connect-flash';
import models from '../db/models';

// SETUP

const app = express();
const LocalStrategy = passportLocal.Strategy;
const { Campground, Comment, User } = models;
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname + '/public')));
app.use(express.urlencoded({extended: true}));
app.use(session({
  secret: 'not all who wander are lost',
  resave: false,
  saveUninitialized: false,
}));

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
      console.log(err);
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
  res.render('landing');
});

app.get('/campgrounds', (req, res) => {
  Campground.findAll()
    .then(campgrounds => {
      res.status(200).render('campgrounds/index', {campgrounds});
    })
    .catch(err => {
      res.status(400).send(error);
    })
});

app.post('/campgrounds', isLoggedIn, (req, res) => {
  const { name, image, description } = req.body;
  Campground.create({ name, image, description })
    .then(() => res.status(200).redirect('/campgrounds'))
    .catch(err => res.status(400).send(err));
});

app.get('/campgrounds/new', isLoggedIn, (req, res) => {
  res.render('campgrounds/new');
});

app.get('/campgrounds/:id', (req, res) => {
  Campground.findById(req.params.id, {
    include: [{
      model: Comment,
      as: 'comments',
      include: [{
        model: User,
        as: 'author'
      }]
    }]
  })
    .then(campground => res.status(200).render('campgrounds/show', {campground}))
    .catch(err => res.status(400).send(err));
});

app.get('/campgrounds/:id/comments/new', isLoggedIn, (req, res) => {
  Campground.findById(req.params.id)
    .then(campground => {
      res.render('comments/new', {campground});
    })
    .catch(err => res.send(err));
});

app.post('/campgrounds/:id/comments', isLoggedIn, (req, res) => {
  Campground.findById(req.params.id)
    .then(campground => {
      const user_id = 1;
      Comment.create({
        text: req.body.comment.text,
        campground_id: campground.id,
        user_id,
      })
        .then(() => res.redirect(`/campgrounds/${campground.id}`)) 
        .catch(() => res.redirect(`/campgrounds/`));
    })
    .catch(err => {
      res.redirect('/campgrounds');
    });
});

app.get('/register', (req, res) => {
  res.render('register', {message: req.flash('signupMessage')});
});

app.post('/register', passport.authenticate('local-signup', {
  successRedirect: '/campgrounds',
  failureRedirect: '/register',
}));

app.get('/login', (req, res) => {
  res.render('login', {message: req.flash('loginMessage')});
});

app.post('/login', passport.authenticate('local-login', {
  successRedirect: '/campgrounds',
  failureRedirect: '/login',
}));

app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/campgrounds');
});

app.listen(3000, () => {
  console.log('YelpCamp server has started');
});