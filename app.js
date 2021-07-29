<<<<<<< HEAD
require('dotenv').config()
=======
>>>>>>> 91b0ee3 (1)
const Express = require("express");
const app = Express();
const dbConnection = require("./db");

//const controllers = require("./controllers");

//app.use("/journal", controllers.journalController);
//app.use("/user", controllers.userController);

dbConnection.authenticate()
    .then(() => dbConnection.sync())
    .then(() => {
        app.listen(3000, () => {
            console.log(`[Server]: App is listening on 3000.`);
        });
    })
    .catch((err) => {
        console.log(`[Server]: Server crashed. Error = ${err}`);
    });