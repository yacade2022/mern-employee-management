import { Router } from "express";
const router = Router();

import { register, login, logout } from "../controllers/authController.js";
import {
  validationRegister,
  validationLogin,
} from "../middleware/validationMiddlware.js";

router.route("/register").post(validationRegister, register);
router.route("/login").post(validationLogin, login);
router.route("/logout").get(logout);

export default router;
