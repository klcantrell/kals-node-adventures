import passport from 'passport';
import passportService from './services/passport';
import * as Auth from './controllers/authentication';

passportService(passport);

const requireAuth = passport.authenticate('jwt-login', { session: false });
const requireSignin = (req, res, next) => {
  passport.authenticate('local-login', (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(422).send({error: info.message});
    }
    req.login(user, { session: false }, err => {
      if (err) {
        return next(err);
      }
      next();
    })
  })(req, res, next);
};

export default app => {
  app.get('/', requireAuth, (req, res) => {
    res.send({hi: 'there'});
  });
  app.post('/signin', requireSignin, Auth.signin);
  app.post('/signup', Auth.signup);
};