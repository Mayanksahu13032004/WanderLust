import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
// import { U } from "../models/user.model.js";
import { User } from "../model/user.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import mongoose from "mongoose";


const userSignup = asyncHandler(async(req,res)=>{    

    const {username,email,password}=req.body
    if(
       [username,email,password].some((field)=>
       field?.trim()==="")
    )
    {
       throw new ApiError(400,"All fields are required")
    }
    
    const existeduser=await User.findOne({
       $or:[{email}]
    })
    if (existeduser) {
        return res.status(203).json({message : "User already exists! Please try with another email" })
    }
    
    const user=await User.create({
       username,
       email,
       password
    })
    const createUser=await User.findById(user._id).select("")
    
    if (!createUser) {
       throw new ApiError(500,"Something went wrong  while register User")
    }
    
    return res.status(201).json(
       new ApiResponse(200,createUser,"User Sign-up sucessfully")
    )
    })


const Login=asyncHandler(async(req,res)=>{
    const {email,password}=req.body

    if(!email || !password)
    {
        throw new ApiError(400,"Email or Password is required")
    }
const user=await User.findOne({
    $and:[{email},{password}]
})

if(!user)
{
    throw new ApiError(404,"Notexits")
}

return res.status(200).json({message:"Login successfully"});

})


export {userSignup,Login}