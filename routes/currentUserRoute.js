import { Router } from "express";
const router = Router();

import { getCurrentUser, updateUser } from "../controllers/currentUser.js";
import { validationUpdateUser } from "../middleware/validationMiddlware.js";
router.route("/current-user").get(getCurrentUser);
router.route("/update-user").patch(validationUpdateUser, updateUser);

export default router;
