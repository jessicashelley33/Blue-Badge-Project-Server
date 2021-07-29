const Sequelize = require('sequelize');

const sequelize = new Sequelize("postgres://postgres:c188645ec8f3419abf51129081469837@localhost:5432/savedPlaces");

module.exports = sequelize;