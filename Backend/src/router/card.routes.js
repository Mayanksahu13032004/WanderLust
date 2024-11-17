import { Router } from "express";
import { createCard } from "../controllers/card.contreller.js";

const router=Router()

router.route("/create-Card").post(createCard);



export default router