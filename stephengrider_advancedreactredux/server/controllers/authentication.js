import jwt from 'jwt-simple';
import models from '../db/models';

const { User } = models;

const tokenForUser = user => {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, process.env.SECRET);
}

const signin = (req, res, next) => {
  res.send({token: tokenForUser(req.user)});
};

const signup = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).send({error: 'You must provide a email and password'});
  }
  // See if a user with given email exists
  User.findOne({
    where: {
      email,
    }
  }).then(user => {
  // If user with email exists, return error
    if (user) {
      return res.status(422).send({error: 'Email is in use'});
    }
  // If a user with email does NOT exist, create and save user
    User.create({
      email,
      password,
    }).then(user => {
  // Respond to request indicating user was created
      res.send({token: tokenForUser(user)});
    }).catch(err => {
      return next(err);
    });
  }).catch(err => {
    return next(err);
  });
};

const getFeature = (req, res, next) => {
  res.send({feature: req.user.email});
};

export { signup, signin, getFeature };