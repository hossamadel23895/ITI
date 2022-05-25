const mongoose=require("mongoose");

//1- build schema with validations
const schema=new mongoose.Schema({
    id:Number,// mongoose.Types.ObjectID
    name:{type:String, required:true,unique:true},
    location:String
});

//2- register for schema in mongoose
module.exports=mongoose.model("departments",schema);

