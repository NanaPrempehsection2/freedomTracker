const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const generateToken=require("../config/generateToken")

//Register user
const registerUser= async (req,res)=>{
  
  const {username,email,password}=req.body;
  //create user
  const user = await User.create({username,email,password})

  //create token
  const token = user.getSignedJwtToken()
  res.status(200).json({success:true,token})

}

//Login
const loginUser= async(req,res)=>{
const {email,password}=req.body
//validate email and password
if(!email || !password){
  return res.status(400).json({success:false,message:"invalid credential"})
}
//check if user exist
const user = await User.findOne({email})
if(!user){
  return res.status(401).json({success:false,message:"user exists"})
}
//check if password matches
const isMatch=await user.matchPassword(password)
if (!isMatch){
  return res.status(401).json({success:false,message:"invalid credentials"})
}
const token = user.getSignedJwtToken()
res.status(200).json({ success: true, token, message: "Log in successful" });
}

module.exports = { registerUser, loginUser };



