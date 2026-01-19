const mongoose = require("mongoose");
const userModel= require("../models/userModel");

async function connection(){
    try {
        let conn =  await mongoose.connect("mongodb://127.0.0.1:27017/NameDb");
        console.log("database connected");
        // userModel.insertOne({fullName:"hi",age:30,email:"hi@gmail.com",password:"enter"});
        // console.log("data save");
    } catch (error) {
        console.log("Database not connected");
    }
}

module.exports=connection  //async function [connection] is called in modulo.exports