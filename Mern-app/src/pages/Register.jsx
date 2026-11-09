import React from "react";
import { Form, redirect, useNavigation, Link } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import AuthWrapper from "../components/AuthWrapper";
import FormRow from "../components/FormRow";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post("/auth/register", data);
    toast.success("Registration Successful");
    return redirect("/login");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Register = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <AuthWrapper>
      <div className="card auth-card">
        <Link to="/" className="brand">
          Employees Management
        </Link>
        <h1>Register</h1>
        <p className="subtitle">Create an account to manage your employees.</p>

        <Form method="post">
          <FormRow
            name="name"
            label="Name"
            autoComplete="name"
            required
          />
          <FormRow
            type="email"
            name="email"
            label="Email"
            placeholder="you@example.com"
            autoComplete="email"
            required
          />
          <FormRow
            type="password"
            name="password"
            label="Password"
            autoComplete="new-password"
            minLength={6}
            hint="At least 6 characters."
            required
          />
          <button
            type="submit"
            className="btn btn-block"
            disabled={isSubmitting}
            aria-busy={isSubmitting}
          >
            {isSubmitting ? "Creating account..." : "Register"}
          </button>
        </Form>

        <p className="switch">
          Already a member?
          <Link to="/login">Login</Link>
        </p>
      </div>
    </AuthWrapper>
  );
};

export default Register;
