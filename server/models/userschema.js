const bcrypt=require("bcrypt")

const mongoose=require("mongoose")


const userschema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true})

//static signup function
userschema.statics.signup= async function(email,password){
    const exist=await User.findOne({email});
    if(exist){
        throw new Error("User already exists");
    }
    const salt=await bcrypt.genSalt(10);
    const hash=await bcrypt.hash(password,salt);
    const user=await User.create({email,password:hash});
    return user;
}

//static login function
userschema.statics.login=async function(email,password){
    const user=await User.findOne({email});
    if(!user){
        throw new Error("User not found");
    }
    const Match=await bcrypt.compare(password,user.password);
    if(!Match){
        throw new Error("Invalid credentials");
    }
    return user;
}

const User=mongoose.model("User",userschema)

module.exports=User;