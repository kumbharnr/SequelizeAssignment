const { sequelize} = require("./models");
const express = require("express");
const CredentialModel = require('./models').Credentials
const UserModel = require('./models').UserDetail;
// const credentials = require("./models/credentials");

const app = express();
const port = 8000;

app.get("/",(req,res)=>{
    res.status(200).json({
        status:1,
        message:"welcome to web"
    });
})

app.get("/users",(req,res)=>{
    UserModel.findAll({
        include:CredentialModel
        // where:{id:5}
    }).then(data=>{
        res.status(200).json({
            status:1,
            data:data
        })
        }).catch(err=>{
            console.log("something error"+err);
    })
})
app.get("/credentials",(req,res)=>{
    CredentialModel.findAll({
        include:UserModel
    }).then(data=>{
        res.status(200).json({
            status:1,
            data:data
        })
        }).catch(err=>{
            console.log("something error"+err);
    })
})

// app.post("/insert",(req,res)=>{
//     UserModel.bulkCreate([
//             {name:"Navnath",PhoneNo:"12312321"},
//             {name:"111",PhoneNo:"1231231231"},
//             {name:"112",PhoneNo:"5464564564"}
//         ]).then((data)=>{
//             console.log("records is inserted ");
//         }).catch((err)=>{
//             console.error("the error is :"+ err);
//         })
// })

// app.delete("/deletes",(req,res)=>{
//     CredentialModel.destroy(
//             {where :{name:"112"}}
//         ).then((data)=>{
//             console.log("deleted");
//         }).catch((err)=>{
//             console.error("error is :"+err);
//         });
// })

app.listen(port,()=>{
    console.log("at 80000");
})

// async function main(){
//     await sequelize.sync({force:true})
// }

// main()