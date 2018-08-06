import PassportJwt from 'passport-jwt';
import LocalStrategy from 'passport-local';
import models from '../db/models';

const { User } = models;

const localOptions = { usernameField: 'email' };
const localLogin = new LocalStrategy(localOptions, (email, password, done) => {
  User.findOne({
    where: {
      email,
    }
  }).then(user => {
    if (!user) {
      return done(null, false, { message: 'Invalid credentials' });
    }
    user.validPassword(password)
      .then(isMatch => {
        if (!isMatch) {
          return done(null, false, { message: 'Incorrect password' });
        }
        return done(null, user);
      })
  }).catch(err => {
    return done(err);
  })
});

const JwtStrategy = PassportJwt.Strategy;
const ExtractJwt= PassportJwt.ExtractJwt;

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: process.env.SECRET,
};

const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
  User.findById(payload.sub)
    .then(user => {
      if (user) {
        done(null, user);
      } else {
        done(null, false);
      }
    }).catch(err => {
      done(err, false);
    })
});


export default passport => {
  passport.use('jwt-login', jwtLogin);
  passport.use('local-login', localLogin);
};