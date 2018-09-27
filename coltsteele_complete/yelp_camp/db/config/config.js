require('../../src/env');
const env = process.env.NODE_ENV || 'development';

console.log(env);

const config = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: "yelp_camp",
    host: "127.0.0.1",
    port: "5432",
    dialect: "postgres"
  },
  production: {
    use_env_variable: "DATABASE_URL",
    dialect: "postgres",
  },
  ssh: {
    username: process.env.HEROKUDB_USERNAME,
    password: process.env.HEROKUDB_PASSWORD,
    database: process.env.HEROKUDB_NAME,
    host: process.env.HEROKUDB_HOST,
    port: "5432",
    ssl: true,
    dialect: "postgres",
    dialectOptions: {
      ssl: true,
    },
  },
};

module.exports = config[env];