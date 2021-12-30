// const sequelize = require("sequelize");
const express = require("express");
const autherModel = require("./models").auther
const bookModel = require("./models").book

const app = express();
const port = 8000;

app.get("/",(req,res)=>{
    res.status(200).json({
        status:1,
        message:"Test of many to many"
    });
})

app.get("/books",(req,res)=>{
    autherModel.findAll({
        include:autherModel
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

app.get("/authers",(req,res)=>{
    autherModel.findAll({
        include:bookModel
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
    console.log("server runnign at 8000 port");
})
