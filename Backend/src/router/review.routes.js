import { Router } from "express";
import { getReview, UserReview } from "../controllers/review.controller.js";


const router=Router()

router.route("/user-review").post(UserReview);
router.route("/get-review/:cardId").get(getReview);


export default router