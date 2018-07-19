export default (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    text: DataTypes.STRING
  }, {});
  Comment.associate = models => {
    Comment.belongsTo(models.Campground, {
      foreignKey: 'campground_id',
      as: 'campground',
    });
  };
  return Comment;
};