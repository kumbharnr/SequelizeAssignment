// const sequelize = require("sequelize");
const express = require("express");
const postModel = require("./models").post
const commentModel = require("./models").comment

const app = express();
const port = 8080;

app.get("/",(req,res)=>{
    res.status(200).json({
        status:1,
        message:"Test of one to many"
    });
})

app.get("/posts",(req,res)=>{
    postModel.findAll({
        include:commentModel
        // [{
        //     model:commentModel,
        //     attributes:["userName","commentContent"],
        //     paranoid: true, required: true
        // }]
    }).then((data)=>{
        res.status(200).json({
            status:1,
            data:data
        })
    }).catch((error)=>{
        res.status(500).json({
            status:0,
            message:"something error see the error :"
        })
    })
})

app.get("/comments",(req,res)=>{
    commentModel.findAll({
        include:postModel
        // [{
        //     model:postModel,
        //     attributes:["name","content"]
        // }]
    }).then((data)=>{
        res.status(200).json({
            status:1,
            data:data
        })
    }).catch((error)=>{
        res.status(500).json({
            status:0,
            message:"something error see the error :"
        })
    })
})

app.listen(port,()=>{
    console.log("server runnign at 8080 port");
})
