import * as Auth from './controllers/authentication';
import { requireAuth, requireSignin, requireAuthorizationHeader } from './middlewares';

export default app => {
  app.get('/feature', requireAuthorizationHeader, requireAuth, Auth.getFeature);
  app.post('/signin', requireSignin, Auth.signin);
  app.post('/signup', Auth.signup);
};