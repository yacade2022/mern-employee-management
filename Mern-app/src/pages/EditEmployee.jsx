import React from "react";
import {
  Form,
  Link,
  redirect,
  useLoaderData,
  useNavigation,
} from "react-router-dom";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import { JOB_CATEGORY } from "../../../utils/constants";
import FormPageWrapper from "../components/FormPageWrapper";
import FormRow from "../components/FormRow";
import FormRowSelect from "../components/FormRowSelect";

export const loader = async ({ params }) => {
  try {
    const { data } = await customFetch.get(`/employee/${params.id}`);
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return redirect("/dashboard/all-employees");
  }
};

export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.patch(`/employee/${params.id}`, data);
    toast.success("Employee Updated");
    return redirect("/dashboard/all-employees");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return redirect("/dashboard/all-employees");
  }
};

const EditEmployee = () => {
  const data = useLoaderData();
  const { employee } = data;
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <FormPageWrapper>
      <div className="page-header">
        <h2>Edit employee</h2>
        <p>Update the details for {employee.name}.</p>
      </div>
      <Form method="post" className="card">
        <FormRow
          name="name"
          label="Name"
          defaultValue={employee.name}
          autoComplete="off"
          required
        />
        <FormRow
          type="email"
          name="email"
          label="Email"
          defaultValue={employee.email}
          autoComplete="off"
          required
        />
        <FormRow
          type="number"
          name="salary"
          label="Salary ($)"
          defaultValue={employee.salary}
          min="0"
          step="any"
          inputMode="decimal"
          required
        />
        <FormRowSelect
          name="category"
          label="Category"
          defaultValue={employee.category}
          options={Object.values(JOB_CATEGORY)}
        />
        <div className="span-2">
          <FormRow
            id="adresse"
            name="adress"
            label="Address"
            defaultValue={employee.adress}
            required
          />
        </div>
        <div className="form-actions">
          <Link to="/dashboard/all-employees" className="btn btn-outline">
            Cancel
          </Link>
          <button
            type="submit"
            className="btn"
            disabled={isSubmitting}
            aria-busy={isSubmitting}
          >
            {isSubmitting ? "Saving..." : "Save changes"}
          </button>
        </div>
      </Form>
    </FormPageWrapper>
  );
};

export default EditEmployee;
