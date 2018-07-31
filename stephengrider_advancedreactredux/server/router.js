import models from './db/models';
import * as Auth from './controllers/authentication';

const { User } = models;

export default app => {
  app.post('/signup', Auth.signUp);
};