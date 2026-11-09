import React from "react";
import customFetch from "../utils/customFetch";
import getErrorMessage from "../utils/getErrorMessage";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";

export const action = async ({ params }) => {
  try {
    await customFetch.delete(`/employee/${params.id}`);
    toast.success("employee deleted");
    return redirect("/dashboard/all-employees");
  } catch (error) {
    toast.error(getErrorMessage(error));
    return redirect("/dashboard/all-employees");
  }
};
