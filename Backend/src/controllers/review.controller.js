import express from 'express';
import multer from 'multer';
import mongoose from 'mongoose';
import { Review } from '../model/review.model.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';




const UserReview = asyncHandler(async (req, res) => {
  const { rating, comments, cardId, userId } = req.body;

  console.log("request body", req.body);

  if (!rating || !comments || !userId || !cardId) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Validate cardId
  if (!mongoose.isValidObjectId(cardId)) {
    return res.status(400).json({ error: 'Invalid card ID' });
  }

  // Assign a placeholder ObjectId for anonymous users
  const resolvedUserId = userId === 'Anonymous' ? new mongoose.Types.ObjectId() : userId;

  try {
    const newReview = new Review({
      rating,
      comments,
      userId: resolvedUserId,
      cardId,
    });

    const savedReview = await newReview.save(); // Save to database
    res.status(201).json(savedReview);
  } catch (error) {
    console.error('Error adding review:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
const getReview = asyncHandler(async (req, res) => {


  try {
    const reviews = await Review.find({ cardId: req.params.cardId });
    if (!reviews.length) {
      return res.status(404).json({ message: 'No reviews found for this card' });
    }
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



export {UserReview,getReview };
