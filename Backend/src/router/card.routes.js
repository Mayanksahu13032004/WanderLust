import { Router } from "express";
import { createCard, getAllCard } from "../controllers/card.contreller.js";

const router=Router()

router.route("/create-Card").post(createCard);
router.route("/get-Card").get(getAllCard);




export default router