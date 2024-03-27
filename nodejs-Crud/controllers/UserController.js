import User from "../model/User.js";
import bcrypt from 'bcryptjs'
import jwt from "jsonwebtoken"
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";

dotenv.config();

async function signUp(req,res) {
    //get email and password from req body
    const {email,password}= req.body
//hash password 
 const hashedPassword=bcrypt.hashSync(password,8)

    //create user with data
    await User.create({email,password:hashedPassword})
    res.status(200).json({message:"registered successfully"})
  
}

async function logIn(req,res) {
  //get email and password from req body
  const {email,password}= req.body 

  //find user
 const user= await User.findOne({email})

 //compare password with passwordHash
 const passwordMatch=bcrypt.compareSync(password,user.password)

 //create jwt token
 const expTime=Date.now()+1000*60*60*24
 const token = jwt.sign({sub:user._id,exp:expTime},process.env.SECRET_KEY)

 //send a cookie
 res.cookie("Authorization",token,{
    expires:new Date(expTime),
    httpOnly:true,
    sameSite:"lax",
    secure:process.env.NODE_ENV==="production"
 })
 res.status(200).json({token})

}

function logOut(req,res) {
    res.clearCookie("Authorization")
    res.status(200).send("ok")
}

function checkAuth(req,res){
  res.status(200).send("ok")
}

export {signUp,logIn,logOut, checkAuth}