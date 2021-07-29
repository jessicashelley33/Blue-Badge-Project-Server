const Sequelize = require('sequelize')
//const db = new Sequelize(process.env.DB_CONNECTION_STRING)
const sequelize = new Sequelize("postgres://postgres:Barefootwriter35@localhost:5432/userModel")
// dbType://user:password@ipAddress:port/dbName

module.exports = sequelize;