const User=require("../models/userschema");

const createToken=require("../util/token");

//login user

const userlogin=async(req,res)=>{
    // res.status(200).json({message:"User logged in successfully"});
     const {_id,email,password}=req.body;
    try {
        const user=await User.login(email,password);

        //create token
        const token=createToken(user._id);
        res.status(200).json({email,password,token});
    } catch (error) {
        res.status(400).json({message:error.message});
    }
}

//sign in user

const Usersignin=async(req,res)=>{
    // res.status(200).json({message:"User signed in successfully"});
    const {_id,email,password}=req.body;
    try {
        const user=await User.signup(email,password);

        //create token
        const token=createToken(_id);

        res.status(200).json({email,password,token});
    } catch (error) {
        res.status(400).json({message:error.message});
    }
}

module.exports={userlogin,Usersignin};