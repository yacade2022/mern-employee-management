import { body, param, validationResult } from "express-validator";
import { BadRequestError } from "../errors/customeError.js";
import { JOB_CATEGORY } from "../utils/constants.js";
import User from "../models/User.js";
import mongoose from "mongoose";

const ValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);

        throw new BadRequestError(errorMessages);
      }
      next();
    },
  ];
};

export const validationEmployee = ValidationErrors([
  body("name").notEmpty().withMessage("name is required"),
  body("email").notEmpty().withMessage("email is required"),
  body("salary").notEmpty().withMessage("salary is required"),
  body("category")
    .isIn(Object.values(JOB_CATEGORY))
    .withMessage("invalid job category"),
  body("adress").notEmpty().withMessage("adress is required"),
]);

export const validationId = ValidationErrors([
  param("id")
    .custom((value) => mongoose.Types.ObjectId.isValid(value))
    .withMessage("invalid id"),
]);

export const validationRegister = ValidationErrors([
  body("name").notEmpty().withMessage("name is required"),
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("invalid email format")
    .custom(async (email) => {
      const user = await User.findOne({ email });
      if (user) {
        throw new Error("email already exist");
      }
    }),
  body("password")
    .notEmpty()
    .withMessage("password is required")
    .isLength({ min: 6 })
    .withMessage("possword must be at least 6 characters"),
]);

export const validationLogin = ValidationErrors([
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("invalid email format"),
  body("password")
    .notEmpty()
    .withMessage("password is required")
    .isLength({ min: 6 })
    .withMessage("possword must be at least 6 characters"),
]);

export const validationUpdateUser = ValidationErrors([
  body("name").notEmpty().withMessage("name is required"),
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("invalid email format")
    .custom(async (email) => {
      const user = await User.findOne({ email });
      if (user) {
        throw new Error("email already exist");
      }
    }),
  body("password")
    .notEmpty()
    .withMessage("password is required")
    .isLength({ min: 6 })
    .withMessage("possword must be at least 6 characters"),
]);
