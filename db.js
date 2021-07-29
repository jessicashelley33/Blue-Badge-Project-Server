const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  `postgres://postgres:${process.env.DB_PASS}@${process.env.DB_HOST}${process.env.DB_USER}/`
);
module.exports = sequelize;
