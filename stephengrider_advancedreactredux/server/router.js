import * as Auth from './controllers/authentication';

export default app => {
  app.post('/signup', Auth.signup);
};