import { Router } from "express";
import multer from "multer";
import { createCard, getAllCard } from "../controllers/card.contreller.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const router = Router();

// Initialize multer
const upload = multer({ dest: "uploads/" });

// Middleware to upload image to Cloudinary
const cloudinaryMiddleware = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "Image file is required" });
    }

    // Upload to Cloudinary
    const result = await uploadOnCloudinary(req.file.path);

    if (!result) {
      return res.status(500).json({ message: "Cloudinary upload failed" });
    }

    // Add the image URL to the request body
    req.body.image = result.secure_url;

    // Proceed to the next middleware/controller
    next();
  } catch (error) {
    return res.status(500).json({ message: "Error processing image", error });
  }
};

// Routes
router
  .route("/create-Card")
  .post(upload.single("image"), cloudinaryMiddleware, createCard);

router.route("/get-Card").get(getAllCard);

export default router;
