const { sequelize} = require("./models");
const express = require("express");
const CredentialModel = require('./models').Credentials
const UserModel = require('./models').UserDetail

const app = express();
const port = 8000;

app.get("/",(req,res)=>{
    res.status(200).json({
        status:1,
        message:"welcome to web"
    });
})

app.get("/users",(req,res)=>{
    CredentialModel.findAll().then(data=>{
        res.status(200).json({
            status:1,
            data:data
        })
        }).catch(err=>{
            console.log("something error"+err);
    })
})

app.listen(port,()=>{
    console.log("at 80000");
})

async function main(){
    await sequelize.sync({force:true})
}

main()