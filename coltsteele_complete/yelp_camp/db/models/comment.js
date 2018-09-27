export default (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    text: DataTypes.STRING
  }, {});
  Comment.associate = models => {
    Comment.belongsTo(models.Campground, {
      foreignKey: 'campgroundId',
      as: 'campground',
      onDelete: 'CASCADE',
    });
    Comment.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'author',
      onDelete: 'CASCADE',
    });
  };
  return Comment;
};