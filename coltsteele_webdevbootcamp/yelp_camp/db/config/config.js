const env = process.env.NODE_ENV || 'development';

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
  }
};

module.exports = config[env];