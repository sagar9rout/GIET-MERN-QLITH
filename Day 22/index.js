const express = require ("express");
const connection = require("./dbConfig/db");

let app = express ();// it is the server (express)

connection();

app.use("/api",(req,res)=>{
    console.log("hii.welcome to backend world");
    res.send("hello yes the app is running");
})//controllinmg code
// api create any search /api then it show

app.listen(8000,()=>
{
    console.log("server is running");// if any reqyest come from server it listen in app.listen
})//base url localhost:8000