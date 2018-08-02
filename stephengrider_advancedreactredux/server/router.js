import passport from 'passport';
import passportService from './services/passport';
import * as Auth from './controllers/authentication';

passportService(passport);

const requireAuth = passport.authenticate('jwt-login', { session: false });

export default app => {
  app.get('/', requireAuth, (req, res) => {
    res.send({hi: 'there'});
  });
  app.post('/signup', Auth.signup);
};