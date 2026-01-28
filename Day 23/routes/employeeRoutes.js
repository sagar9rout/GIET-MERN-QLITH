const express=require("express");

const router=express.Router();

router.get("/",(req,res)=>{
    res.send("get request called");
})

router.post("/create",(req,res)=>{
    res.send("post request called");
})

router.put("/update",(req,res)=>{
    res.send("update request called");
})

module.exports=router