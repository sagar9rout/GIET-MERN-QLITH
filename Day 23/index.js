const express = require("express");
const dotenv=require("dotenv");
const connectDb = require("./dbConfig/db");
const router = require("./routes/employeeRoutes");
dotenv.config()

const app = express();

connectDb();

app.use("/api",router);
// app.get("/api",(req,res)=>{
//     res.send("Welcome to the server");
// })
//api path  app.get,put,post,delete,create

const port=process.env.port;

app.listen(port,()=>{
    console.log("My server is starting...",port)
})