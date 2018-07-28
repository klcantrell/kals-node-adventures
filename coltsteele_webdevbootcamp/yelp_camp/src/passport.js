import passport from 'passport';
import passportLocal from 'passport-local';
import models from '../db/models';

const LocalStrategy = passportLocal.Strategy;
const { User } = models;

export default passport => {
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
          return done(null, false, req.flash('fail', 'That username already exists'));
        }
        User.create({
          username,
          password: User.generateHash(password),
        }).then(user => {
          if (user) {
            return done(null, user, req.flash('success', `Welcome to YelpCamp ${user.username}`));
          } else {
            return done(null, false, req.flash('fail', 'Something went wrong'));
          }
        })
      }).catch(err => {
        console.log(err);
        req.flash('fail', 'Something went wrong');
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
          return done(null, false, req.flash('fail', 'No user found'));
        }
        if (!user.validPassword(password)) {
          return done(null, false, req.flash('fail', 'Password wrong'));
        }
        return done(null, user, req.flash('success', `Welcome back ${user.username}`));
      }).catch(err => {
        console.log(err);
        req.flash('fail', 'Something went wrong');
      })
    }
  ));
}
