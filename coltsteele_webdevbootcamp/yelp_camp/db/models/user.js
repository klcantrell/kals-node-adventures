export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING
  }, {});
  User.associate = models => {
    User.hasMany(models.Comment, {
      foreignKey: 'user_id',
      as: 'comments',
    });
  };
  return User;
};