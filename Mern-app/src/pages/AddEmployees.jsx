import { Form, redirect, useNavigation } from "react-router-dom";
import { JOB_CATEGORY } from "../../../utils/constants";
import customFetch from "../utils/customFetch";
import getErrorMessage from "../utils/getErrorMessage";
import { toast } from "react-toastify";
import FormPageWrapper from "../components/FormPageWrapper";
import FormRow from "../components/FormRow";
import FormRowSelect from "../components/FormRowSelect";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post("/employee", data);
    toast.success("Employee Added");
    return redirect("all-employees");
  } catch (error) {
    toast.error(getErrorMessage(error));
    return error;
  }
};

const AddEmployees = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <FormPageWrapper>
      <div className="page-header">
        <h2>Add employee</h2>
        <p>Fill in the details below. All fields are required.</p>
      </div>
      <Form method="post" className="card">
        <FormRow name="name" label="Name" autoComplete="off" required />
        <FormRow
          type="email"
          name="email"
          label="Email"
          placeholder="name@company.com"
          autoComplete="off"
          required
        />
        <FormRow
          type="number"
          name="salary"
          label="Salary ($)"
          min="0"
          step="any"
          inputMode="decimal"
          required
        />
        <FormRowSelect
          name="category"
          label="Category"
          defaultValue={JOB_CATEGORY.FRONT}
          options={Object.values(JOB_CATEGORY)}
        />
        <div className="span-2">
          <FormRow id="adresse" name="adress" label="Address" required />
        </div>
        <div className="form-actions">
          <button
            type="submit"
            className="btn"
            disabled={isSubmitting}
            aria-busy={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </Form>
    </FormPageWrapper>
  );
};

export default AddEmployees;
