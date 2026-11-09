import React from "react";
import { Form, redirect, useNavigation, Link } from "react-router-dom";
import customFetch from "../utils/customFetch";
import getErrorMessage from "../utils/getErrorMessage";
import { toast } from "react-toastify";
import AuthWrapper from "../components/AuthWrapper";
import FormRow from "../components/FormRow";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post("/auth/login", data);
    toast.success("Login Successful");
    return redirect("/dashboard");
  } catch (error) {
    toast.error(getErrorMessage(error));
    return error;
  }
};

const Login = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <AuthWrapper>
      <div className="card auth-card">
        <Link to="/" className="brand">
          Employees Management
        </Link>
        <h1>Login</h1>
        <p className="subtitle">Welcome back. Sign in to your account.</p>

        <Form method="post">
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
            autoComplete="current-password"
            minLength={6}
            required
          />
          <button
            type="submit"
            className="btn btn-block"
            disabled={isSubmitting}
            aria-busy={isSubmitting}
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </Form>

        <p className="switch">
          Not a member yet?
          <Link to="/register">Register</Link>
        </p>
      </div>
    </AuthWrapper>
  );
};

export default Login;
