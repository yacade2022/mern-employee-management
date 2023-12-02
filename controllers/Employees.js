import { StatusCodes } from "http-status-codes";
import Employee from "../models/Employee.js";

export const createEmployee = async (req, res) => {
   req.body.createdBy = req.user.userId
  const employee = await Employee.create(req.body);
  res.status(StatusCodes.CREATED).json({ employee });
};

export const getAllEmployees = async (req, res) => {
  const{search,category,sort} = req.query
  const newObj={createdBy:req.user.userId}
  if(search){
    newObj.name= {$regex: search, $options:'i'}
  }
  if(category && category !=='all'){
    newObj.category = category
  }
const sortEmployee = { 
  low_salary:'salary',
  high_salary:'-salary',
  newest:'createdAt'
}
const sortKey = sortEmployee[sort] || sortEmployee.defaultValue

const page = Number(req.query.page) || 1
const limit = Number(req.query.limit) || 10
const skip = (page - 1) * limit



  const employee = await Employee.find(newObj).sort(sortKey).skip(skip).limit(limit);
  const totalEmployees = await Employee.countDocuments(newObj)
  const totalOfPages= Math.ceil(totalEmployees/limit)

  res.status(StatusCodes.OK).json({totalEmployees,totalOfPages,currentPage:page,employee });
};

export const getSingleEmployee = async (req, res) => {
  const { id } = req.params;
  const employee = await Employee.findOne({ _id: id });
  res.status(StatusCodes.OK).json({ employee });
};

export const updateEmployee = async (req, res) => {
  const { id } = req.params;
  const employee = await Employee.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(StatusCodes.OK).json({ employee });
};

export const deleteEmployee = async (req, res) => {
  const { id } = req.params;
  const employee = await Employee.findOneAndDelete({ _id: id });
  res.status(StatusCodes.OK).json({ msg: "employee removed" });
};
