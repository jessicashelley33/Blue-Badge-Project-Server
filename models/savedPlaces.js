const { DataTypes } = require("sequelize");
const db = require("../db");

const SavedPlaces = db.define("savedPlaces", {
    destination: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        //unique: true,
    } ,
    description: {
        type: DataTypes.STRING,
        allowNull: false,
        //unique: true,
    } ,
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        //unique: true,
    } ,
    attractions: {
        type: DataTypes.STRING,
        allowNull: false,
        //unique: true,
    } ,
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
        //unique: true,
    },
});

module.exports = SavedPlaces;