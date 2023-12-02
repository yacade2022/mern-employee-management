import React from "react";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";

export const action = async ({ params }) => {
  try {
    await customFetch.delete(`/employee/${params.id}`);
    toast.success("employee deleted");
    return redirect("/dashboard/all-employees");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return redirect("/dashboard/all-employees");
  }
};
