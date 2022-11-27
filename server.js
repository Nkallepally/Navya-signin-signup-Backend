const express = require("express");
const app = express();
const mongoose = require("mongoose");
const listController = require("./routes/list")
const signupModal = require("./models/signup-Modal");
const signinModal=require("./models/signin-Modal");
// const adminModal=require("./models/admin-Modal")
// const listModel = require("./models/list");
const { checkExistinguser, generatePasswordHash } = require("./utility")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs")
require('dotenv').config(); //for setting environment variables on server

const cors = require("cors");
const corsOptions = {
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions))
app.use(express.json());
app.use(express.urlencoded({ extended: false }))


//starting the server
app.listen(process.env.PORT || 3010, (err)=> {
    if(!err) {
        console.log("Server started at port 3010")
    } else {
        console.log(err);
    }
});




//mongoose.connect("mongodb://localhost/realEstate", (data)=> {
    mongoose.connect("mongodb+srv://Navyaa:Navya29@cluster0.vv8toxm.mongodb.net/?retryWrites=true&w=majority",()=>{ 
    console.log("Successfully connected to db");
}, (err)=> {
    console.log(err)
});


app.get('/', (req, res) => {
    res.send("Employee Backend")
})


app.post("/signup", async (req, res) => {
    if (await checkExistinguser(req.body.email)) {
        res.status(200).send("email already exist")
    } else {
        generatePasswordHash(req.body.password).then((passwordHash) => {
            signupModal.create({ email: req.body.email, password: passwordHash }).then((data) => {
                res.status(200).send("user signedup sucessfully")
            }).catch((err) => {
                res.status(400).send(err.message)
            })

        })

    }
})


app.post("/signin", (req, res) => {
    signinModal.find({ email: req.body.email }).then((userData) => {

        if (userData.length) {
            bcrypt.compare(req.body.password, userData[0].password).then((val) => {
                if (val) {
                    const authToken = jwt.sign(userData[0].email, process.env.SECRET_KEY);
                    console.log(1)
                    res.status(200).send({ authToken });
                } else {
                    res.status(400).send("invalid password please enter correct password")
                }
            })
        } else  {
            res.status(400).send("email not exist please signup")
        }
    })
})





app.use("/list", listController);