import models from '../db/models';

const { User } = models;

const signUp = (req, res, next) => {
  const { email, password } = req.body;
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
      res.json(user);
    }).catch(err => {
      return next(err);
    });
  }).catch(err => {
    return next(err);
  });

};

export { signUp };