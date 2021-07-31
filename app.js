require("dotenv").config();
const Express = require("express");
const controllers = require("./controllers");
const app = Express();
const dbconnection = require("./db");

app.use(Express.json()); //Must be above all routes
app.use(require("./middleware/headers"));
app.use("/save", controllers.savedplacescontroller);
//app.use("/user", controllers.userController);

dbconnection
    .authenticate()
    .then(() => dbconnection.sync())
    .then(() => {
    app.listen(5000, () => {
        console.log(`[Server]: App is listening on 5000.`);
    });
    })
    .catch((err) => {
    console.log(`[Server]: Server crashed. Error = ${err}`);
    });
