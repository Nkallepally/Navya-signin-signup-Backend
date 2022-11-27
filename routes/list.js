const express = require("express");
const jwt = require("jsonwebtoken")
const router = express.Router();
const signupModal = require("../models/signup-Modal");
// const signinModal=require("../models/signin-Modal");
const adminModal=require("../models/admin-Modal");
const signinModal = require("../models/signin-Modal");


router.get("/list", (req, res) => {

    if (req.headers.authorization) {
        try {
            user_mail = jwt.verify(req.headers.authorization, process.env.SECRET_KEY);
            signupModal.find({ email: user_mail }).then((userData) => {
                if (userData.length) {
                    // console.log(user_mail)
                             signinModal.find().then((signinData) => {
                               const value= signinData.reverse()
                        res.status(200).send(value)                
                    })
                } else {
                    res.status(403).send("No such user exist with the mentioned email id")
                   }
            }).catch((err) => {
                res.status(403).send(err.message)
            })
        } catch (err) {
            res.status(500).send("User not authorized")
        }
    } else {
        res.status(200).send("Empty")
    }
})





router.post("/admin",(req,res)=>{
    // (title, description, video Url, topics array, duration, category, )
    adminModal.create({title:req.body.title,description:req.body.description,videoUrl:req.body.videoUrl,topicsArray:req.body.topicsArray,duration:req.body.duration,category:req.body.category}).then((use)=>{
        res.send(`course created succesfully`)
    }).catch((err)=>{
        console.log(err)
    })
})

router.get("/admin/get",(req,res)=>{
    adminModal.find().then((userDatas)=>{
        res.send(userDatas)

    })
    }
)

router.put("/reset",(req,res)=>{
    adminModal.updateOne({title:req.body.title},{description:req.body.description},{category:req.body.newcategory}).then((datas)=>{
        res.send(`Course got updated Successfully`)
    })
})

router.delete("/delete",(req,res)=>{
    adminModal.deleteOne({category:req.body.category}).then((data)=>{
        res.send(`Course got deleted Successfully`)
    })
})



module.exports = router;