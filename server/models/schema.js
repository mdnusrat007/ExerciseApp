const mongoose=require("mongoose");

const newschema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    reps:{
        type:Number,
        required:true
    },
    load:{
        type:Number,
        required:true
    }
},{timestamps:true});

const workout=mongoose.model("workout",newschema);

module.exports= workout;
