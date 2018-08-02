import PassportJwt from 'passport-jwt';
import models from '../db/models';

const { User } = models;

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
};