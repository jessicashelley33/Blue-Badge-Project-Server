require("dotenv").config();
const Express = require("express");
const app = Express();
const dbconnection = require("./db");
const userController = require("./controllers/userController")
// const bodyparser = require('body-parser')
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


const middleware = require('./middleware');


app.use(Express.json()); //Must be above all routes
 app.use(require("./middleware/headers"));
// app.use(bodyparser.json())
// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
// app.use(bodyParser.json())

app.get('/',(req,res) =>{
  res.send("Hello Wprld")

})
app.use(middleware.CORS);
app.use("/user", userController)


