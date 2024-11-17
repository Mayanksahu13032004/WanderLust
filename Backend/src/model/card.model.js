import mongoose from "mongoose";

const CardSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      maxlength: [100, "Title cannot exceed 100 characters"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
      maxlength: [500, "Description cannot exceed 500 characters"],
    },
    // image: {
    //   type: String, // This will store the file path or URL
    //   required: [true, "Listing image is required"],
    // },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price must be a positive number"],
    },
    country: {
      type: String,
      required: [true, "Country is required"],
      default: "India", // Default value as per the form
    },
    location: {
      type: String,
      required: [true, "Location is required"],
      trim: true,
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
);

const Card = mongoose.model("Card", CardSchema);

export default Card;
