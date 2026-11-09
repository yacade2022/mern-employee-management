import { Form, redirect, useNavigation } from "react-router-dom";
import customFetch from "../utils/customFetch";
import getErrorMessage from "../utils/getErrorMessage";
import { toast } from "react-toastify";
import FormPageWrapper from "../components/FormPageWrapper";
import FormRow from "../components/FormRow";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.patch("/users/update-user", data);
    toast.success("User Updated");
  } catch (error) {
    toast.error(getErrorMessage(error));
  }
  return redirect("/dashboard");
};

const Profile = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <FormPageWrapper>
      <div className="page-header">
        <h2>Profile</h2>
        <p>Update your account name, email and password.</p>
      </div>
      <Form method="post" className="card">
        <FormRow name="name" label="Name" autoComplete="name" required />
        <FormRow
          type="email"
          name="email"
          label="Email"
          autoComplete="email"
          required
        />
        <div className="span-2">
          <FormRow
            type="password"
            name="password"
            label="Password"
            autoComplete="new-password"
            minLength={6}
            hint="At least 6 characters."
            required
          />
        </div>
        <div className="form-actions">
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

export default Profile;
