import mongoose, { Types } from "mongoose";
import { JOB_CATEGORY } from "../utils/constants.js";

const EmployeeSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    salary: Number,
    category: {
      type: String,
      enum: Object.values(JOB_CATEGORY),
      default: JOB_CATEGORY.FRONT,
    },
    adress: String,
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },

  { timestamps: true }
);

export default mongoose.model("Employee", EmployeeSchema);
