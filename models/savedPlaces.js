const { DataTypes } = require("sequelize");
const db = require("../db");

const SavedPlaces = db.define("savedPlaces", {
<<<<<<< HEAD
    destination: {
        type: DataTypes.STRING,
        allowNull: false,
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
=======
    places: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
>>>>>>> 91b0ee3 (1)
    } ,
});

module.exports = SavedPlaces;