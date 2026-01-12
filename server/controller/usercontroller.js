const User=require("../models/userschema");

const createToken=require("../util/token");

//login user

const userlogin=async(req,res)=>{
    // res.status(200).json({message:"User logged in successfully"});
     const {email,password}=req.body;
    try {
        const user=await User.login(email,password);

        //create token
        const token=createToken(user._id);
        res.status(200).json({email:user.email,token});
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}

//sign in user

const Usersignin=async(req,res)=>{
    // res.status(200).json({message:"User signed in successfully"});
    const {email,password}=req.body;
    try {
        const user=await User.signup(email,password);

        //create token
        const token=createToken(user._id);

        res.status(200).json({email:user.email,token});
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}

module.exports={userlogin,Usersignin};