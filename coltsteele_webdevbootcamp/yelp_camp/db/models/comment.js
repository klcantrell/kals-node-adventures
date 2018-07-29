export default (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    text: DataTypes.STRING
  }, {});
  Comment.associate = models => {
    Comment.belongsTo(models.Campground, {
      foreignKey: 'campgroundId',
      as: 'campground',
    });
    Comment.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'author'
    });
  };
  return Comment;
};