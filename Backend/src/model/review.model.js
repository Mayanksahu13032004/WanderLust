import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema(
  {
    rating: { type: Number, required: true },
    comments: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false },
    cardId: { type: mongoose.Schema.Types.ObjectId, ref: 'Card', required: true },
  },
  { timestamps: true }
);

export const Review = mongoose.model('Review', reviewSchema);
