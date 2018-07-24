import bcrypt from 'bcrypt';

export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {});
  User.associate = models => {
    User.hasMany(models.Comment, {
      foreignKey: 'user_id',
      as: 'comments',
    });
  };
  User.generateHash = password => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  };
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  User.serialize = () => {
    return (user, done) => {
      done(null, user.id);
    };
  }
  User.deserialize = () => {
    return (id, done) => {
      User.findById(id)
        .then(user => {
          if (user) {
            done(null, user.get());
          } else {
            done(user.errors, null);
          }
        });
    };
  }
  return User;
};