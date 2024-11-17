import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
// import { U } from "../models/user.model.js";
// import { User } from "../model/user.model.js";
import Card from "../model/card.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import mongoose from "mongoose";


const createCard = asyncHandler(async(req,res)=>{    

 console.log("card cotrollr");
 
const {title,description,price,country,location}=req.body;

if([title,description,price,country,location].some(field=>field?.trim()===""))
{
    throw new ApiError(400, "Tag and title fields are required");
}

const newCardData={
    title,
    description,
    price,
    country,
    location
};
const card=await Card.create(newCardData);

if(!card)
{
    throw new ApiError(500, "Something went wrong while creating the card");
}
console.log("Card created and saved successfully");

return res.status(201).json(
    new ApiResponse(200, card, "Card created successfully!")
  );
})


// get all cards 

const getAllCard=asyncHandler(async(req,res)=>{
    console.log("Get all cards");
    try {
        const cards=await Card.find();
        res.json(cards);
    } catch (error) {
        res.status(500).json({ message: err.message });
    }
    
    
})


export {createCard,getAllCard}