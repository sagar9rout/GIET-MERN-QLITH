const mongoose=require("mongoose");

const employeeSchema=new mongoose.Schema({
    fullname:{
        type:String,
        required:true,
        // uppercase:true,
        // lowercase:true
    },
    age:{
        type:Number,
        // min:2,
        // unique:true,
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

const employeeModel = mongoose.model("employee",employeeSchema);

module.exports = employeeModel;