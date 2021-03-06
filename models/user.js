const db = require("../db");
const { DataTypes } = require('sequelize')

const UserModel = db.define('user', {
    firstName: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        // validation and constraint to disallow empty entry
        unqiue: true,
        // allows no duplicates
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = UserModel

