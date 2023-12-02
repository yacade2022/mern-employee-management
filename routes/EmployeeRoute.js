import { Router } from "express";
const router = Router();

import {
  getAllEmployees,
  updateEmployee,
  deleteEmployee,
  getSingleEmployee,
  createEmployee,
} from "../controllers/Employees.js";
import {
  validationEmployee,
  validationId,
} from "../middleware/validationMiddlware.js";

router.route("/").post(validationEmployee, createEmployee).get(getAllEmployees);
router
  .route("/:id")
  .get(validationId, getSingleEmployee)
  .patch(validationEmployee, updateEmployee)
  .delete(validationId, deleteEmployee);

export default router;
