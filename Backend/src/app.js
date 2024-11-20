import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

// Initialize the express app
const app = express();
dotenv.config({
    path: '.env'
});

// Middleware setup
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(cors({
    origin: 'http://localhost:5173', // Replace with your frontend's origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers
  }));



app.get('/', (req, res) => {
    res.send('Hello');
});


app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// Export the app instance

import user from './router/user.routes.js'
import card from './router/card.routes.js'
import review from './router/review.routes.js'


app.use("/api/v1/project/userAuth",user) ;
app.use("/api/v1/project/userCard",card)   
app.use("/api/v1/project/userReview",review)




export { app };