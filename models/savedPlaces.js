const { DataTypes } = require("sequelize");
const db = require("../db");

const SavedPlaces = db.define("savedPlaces", {
    places: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
    } ,
});

module.exports = SavedPlaces;