const UserModel = require("../model/usermodel")

module.exports.addUser=function(req,res){
    let Name=req.body.Name
    let color =req.body.color
    let user = new UserModel({
        Name:Name,
        color:color,
    })
    user.save(function(err,data){
        if(err){
                 res.json({msg:"nathi malyo", status:-1, data:err})
               }else{
                 res.json({msg:"mali gaya data", status:200, data:data})
                    }
    })
}

module.exports.getAllUsers = function(req,res){
    UserModel.find(function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"mali gai",status:200,data:data})
        }

    })
}

module.exports.getUserById=function(req,res){
    let userId = req.params.userId
    UserModel.findById({"_id":userId},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"users....",status:200,data:data})
        }
    })
}
//delete
module.exports.deleteUsers = function(req,res){
    let userId = req.params.userId
    
    //delete from role where roleId = 1
    UserModel.deleteOne({"_id":userId},function(err,success){
     if(err){
        res.json({msg:"Something went wrong!!!",status:-1,data:err})
    }else{
        res.json({msg:"user deleted....",status:200,data:success})
    }
})

}

//update
module.exports.updateUsers = function(req,res){

    let userId = req.params.userId
    let Name = req.body.Name
    let color = req.body.color
    

    UserModel.updateOne({_id:userId},{Name:Name},function(err,success){
        if(err){
            res.json({msg:" not updated!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated....",status:200,data:success})
        }
    })
    }

