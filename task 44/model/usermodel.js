const mongoose=require("mongoose")

const UserSchema = new mongoose.Schema({
    Id:{
        type:String
    },
    Name:{
        type:String,
        required:true
    },
    color:{
        type:String,
        required:true

    }
    })

    const UserModel = new mongoose.model("user",UserSchema)

    module.exports = UserModel