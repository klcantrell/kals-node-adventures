import bcrypt from 'bcrypt';

export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: DataTypes.STRING
  }, {});
  User.beforeCreate((user, options) => {
    return bcrypt.genSalt(10)
      .then(salt => {
        bcrypt.hash(user.password, salt)
          .then(hash => {
            user.password = hash;
          }).catch(err => {
            return sequelize.Promise.reject(err);
          })
      }).catch(err => {
        return sequelize.Promise.reject(err);
      })
  });
  return User;
};