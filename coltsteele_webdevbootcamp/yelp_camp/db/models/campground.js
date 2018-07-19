export default (sequelize, DataTypes) => {
  const Campground = sequelize.define('Campground', {
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    description: DataTypes.STRING,
  }, {});
  Campground.associate = models => {
    Campground.hasMany(models.Comment, {
      foreignKey: 'campground_id',
      as: 'comments',
    });
  };
  return Campground;
};