const mongoose=require ("mongoose");
const employeeModel = require("../model/employee");

async function connectDb() {
    try{
        const connect = await mongoose.connect(process.env.mongo_url);
        console.log("Database Connected");
    //     await employeeModel.insertOne({fullname:"Rayuga",age:22,email:"user@mail.com",password:"1234"})
    //     console.log("data saved")
    } 
    catch (error) {
        console.log("Failed to connect");
    }
     
}
module.exports=connectDb    // this code is for connection for database to server