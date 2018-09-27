import Sequelize from 'sequelize';
import User from './user';

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];
const models = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

const modelModules = [
  User,
];

modelModules.forEach((modelModule) => {
  const model = modelModule(sequelize, Sequelize);
  models[model.name] = model;
})

Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;
