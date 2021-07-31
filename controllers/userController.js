const router = require('express').Router();
const  UserModel  = require("../models/user")
const { UniqueConstrainError } = require("sequelize/lib/errors")
const jwt = require("jsonwebtoken")
// var bodyParser = require('body-parser')
const bcrypt = require("bcryptjs");

// var jsonParser = bodyParser.json()
router.post('/register', async (req, res) => {
    let { firstName, lastName, address, email, password } = req.body;
    console.log(UserModel)
    try {
        const user = await UserModel.create({
            firstName,
            lastName,
            address,
            email,
            password: bcrypt.hashSync(password, 13),
        });

        let token = jwt.sign({id: user.id, email: user.email},
        process.env.JWT_SECRET, {expiresIn: 60 * 60 * 24})
        res.status(201).json({
            message: "User registered successfully",
            user: user,
            sessionToken: token
        }) 
    }  catch(err) {
        console.log(err)
       if(err instanceof UniqueConstrainError) {
             res.status(409).json({
             message: "Email already exists"
            })
         }
        console.log(err)
        res.status(500).json({
            message: "Failed to register user"
        })
    }
    
})

 router.post("/login", async(req,res) => {
    let { email, password } = req.body;

    try {
        let loginUser = await UserModel.findOne({
            where: {
                email: email,
            },
        });
        if(loginUser) {

            let passwordComparison = await bcrypt.compare(password, loginUser.password);
        if(passwordComparison){
            let token = jwt.sign({id: loginUser.id}, process.env.JWT_SECRET, {expiresIn: 60 * 60 * 24});
            res.status(200).json({
                user: loginUser,
                message: "User successfully logged in!",
                sessionToken: token
            });
        } else{
            res.status(401).json({
                message: "Incorrect username or password"
            })
        }
    
    } else {
            res.status(401).json({
                message: 'Incorrect username or password'
            });
        }
    } catch(error) {
        res.status(500).json({
            message: "Failed to log user in"
        })
    }
 
});



module.exports = router;