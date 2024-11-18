import express from 'express';
import multer from 'multer';
import mongoose from 'mongoose';
import Card from '../model/card.model.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';


// Create Card Controller
const createCard = asyncHandler(async (req, res) => {
    console.log('card controller');

    const { title, image, description, price, country, location } = req.body;

    if ([title, image, description, price, country, location].some(field => field?.trim() === '')) {
        throw new ApiError(400, 'All fields are required');
    }

    // const imageUrl = `https://example.com/${req.file.filename}`;
    const newCardData = {
        title,
        image,
        description,
        price,
        country,
        location,
    };

    const card = await Card.create(newCardData);

    if (!card) {
        throw new ApiError(500, 'Something went wrong while creating the card');
    }
    console.log('Card created and saved successfully');

    return res.status(201).json(new ApiResponse(200, card, 'Card created successfully!'));
});

// Get All Cards Controller
const getAllCard = asyncHandler(async (req, res) => {
    console.log('Get all cards');
    try {
        const cards = await Card.find();
        res.json(cards);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export { createCard, getAllCard };
