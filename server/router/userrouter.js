const express=require("express")

const User=require("../models/userschema");

const router=express.Router();

const {userlogin,Usersignin}=require("../controller/usercontroller");

router.post("/login_in",userlogin);

router.post("/sign_in",Usersignin);


module.exports=router;