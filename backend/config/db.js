const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  process.env.TABLE_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.TABLE_HOST,
    dialect: process.env.DB_DIALECT
  }
);

module.exports = sequelize;