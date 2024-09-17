// sequelize.config.js
require('ts-node/register');
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  development: {
    username: process.env.DB_USER || 'your_database_user',
    password: process.env.DB_PASSWORD || 'your_database_password',
    database: process.env.DB_NAME || 'your_database_name',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
    port: Number(process.env.DB_PORT) || 5432,
    logging: false,
    migrationStorage: 'json',
    migrations: {
      path: 'src/migrations', // Correct path to your migrations folder
      pattern: /\.ts$/, // Pattern to match your migration files if they are in TypeScript
    },
  },
  test: {
    username: process.env.DB_USER || 'your_database_user',
    password: process.env.DB_PASSWORD || 'your_database_password',
    database: process.env.DB_NAME || 'your_database_name',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
    port: Number(process.env.DB_PORT) || 5432,
    logging: false,
    migrationStorage: 'json',
    migrations: {
      path: 'src/migrations',
      pattern: /\.ts$/,
    },
  },
  production: {
    username: process.env.DB_USER || 'your_database_user',
    password: process.env.DB_PASSWORD || 'your_database_password',
    database: process.env.DB_NAME || 'your_database_name',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
    port: Number(process.env.DB_PORT) || 5432,
    logging: false,
    migrationStorage: 'json',
    migrations: {
      path: 'src/migrations',
      pattern: /\.ts$/,
    },
  },
};
