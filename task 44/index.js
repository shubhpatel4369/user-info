const express = require('express')
const mongoose = require("mongoose")
var cors = require('cors')
const path = require("path")


const userController = require("./Controller/user_Controller")

const app = express()
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:true}))

mongoose.connect('mongodb+srv://ShubhPatel:<password>@user.ch4rt1m.mongodb.net/User?retryWrites=true&w=majority',function(err){
  if(err){
    console.log("db connection fai .. .. .. ..");
    console.log(err);
  }else{
    console.log("db Connected....");
  }
})

app.get("/",function(req,res){
    res.write("welcome")
    res.end()
})


app.post("/users",userController.addUser)
app.get("/users",userController.getAllUsers)
app.delete("/users/:userId",userController.deleteUsers)
app.put("/users/:userId",userController.updateUsers)
app.get("/users/:userId",userController.getUserById)

app.use(express.static(path.join(___dirname,"../frontend/build")));

app.get("*",(req,res)=>{
  res.sendFile(path.join(___dirname,"../frontend/build/index.html"))
})

app.listen(4000,function(){
    console.log("Server started on 4000");
})