const mongoose =require("mongoose");

let userSchema= new mongoose.Schema({
    fullName:String,
    Age:Number,
    Email:String,
    Password:String
}) //userschema is raw material

let userModel = mongoose.model("User",userSchema);//userschema store in model

module.exports=userModel;