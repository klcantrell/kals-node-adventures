module.exports = (sequelize, DataTypes) => {
  const Campground = sequelize.define('Campground', {
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    description: DataTypes.STRING,
  }, {});
  return Campground;
};