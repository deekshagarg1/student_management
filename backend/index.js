const express = require("express")
const cors = require("cors")
const app = express()
const mongoose =require("mongoose")
const User = require("./user")

app.use(express.json())
app.use(cors())

app.post("/signin", async(req , resp)=>{
    let data = new User(req.body)
    let result = await data.save()
    result = result.toObject();
    delete result.password
    resp.send(result)
})


// app.post("/login" , async( req, resp)=>{
//     console.log(req.body)
//     if(req.body.password && req.body.email){
       
//         let user = await user.findOne(req.body).select("-password");
//         if(user){
//             resp.send(user)
//         }
//         else{
//             resp.send({result : "No user found"})
//         }
//     }
// else{
//     resp.send({result : "No user found"})
// }
// })
