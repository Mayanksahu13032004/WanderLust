import { Router } from "express";
import { Login, userSignup } from "../controllers/user.controller.js";

const router=Router()

router.route("/signup").post(userSignup);
router.route("/login").post(Login);


export default router