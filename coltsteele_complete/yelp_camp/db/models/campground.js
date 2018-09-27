export default (sequelize, DataTypes) => {
  const Campground = sequelize.define('Campground', {
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    imageId: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.STRING,
  }, {});
  Campground.associate = models => {
    Campground.hasMany(models.Comment, {
      foreignKey: 'campgroundId',
      as: 'comments',
    });
    Campground.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
      onDelete: 'CASCADE',
    })
  };
  return Campground;
};