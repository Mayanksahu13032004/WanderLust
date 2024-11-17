import mongoose,{Schema} from "mongoose";
// import jwt from "jsonwebtoken"
// import bcrypt from "bcrypt"


const userSchema=new Schema(
  {
  username:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  password:{
    type:Number,
    required:true
  },
  
},{timestamps:true});

export const User=mongoose.model("User",userSchema);