const express = require("express");
const jwt = require("jsonwebtoken")
const router = express.Router();
const signupModal = require("../models/signup-Modal");
const  listModel=require("../models/list");


router.get("/list", (req, res) => {

    if (req.headers.authorization) {
        try {
            user_mail = jwt.verify(req.headers.authorization, process.env.SECRET_KEY);
            signupModal.find({ email: user_mail }).then((userData) => {
                if (userData.length) {
                    // console.log(user_mail)
                             listModel.find().then((propertyData) => {
                               const value= propertyData.reverse()
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
        res.status(200).send("header is empty please add header")
    }
})


router.get("/search/:id", (req, res) => {
    listModel.find({_id:req.params.id}).then((propertyData) => {
        // console.log(propertyData)
        res.status(200).send(propertyData)
    }).catch(err=>{
        console.log("error occured")
        res.status(400).send("no id matching with the entered id")
    })



    // if (req.headers.authorization) {

    //     try {
    //         user_mail = jwt.verify(req.headers.authorization, process.env.SECRET_KEY);
    //         signupModal.find({ email: user_mail }).then((userData) => {

    //             if (userData.length) {
    //                 console.log(user_mail)
                    
    //                 PropertyDetailsModel.find({_id:req.params.id}).then((propertyData) => {
    //                     res.status(200).send(propertyData)
    //                 //   if(propertyData.length) {
    //                 //      res.status(200).send(propertyData)
    //                 //     }else{
    //                 //     res.status(203).send("No such post exist")
    //                 //    }
    //                 })

    //             } else {
    //                 res.status(403).send("No such user exist with the mentioned email id")
    //             }

    //         }).catch((err) => {
    //             res.status(403).send(err.message)
    //         })
    //     } catch (err) {
    //         res.status(500).send("User not authorized")
    //     }

    // } else {
    //     res.status(200).send("header is empty please add header")
    // }

})



module.exports = router;