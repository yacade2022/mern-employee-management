import React from "react";
import styled from "styled-components";
import { AiOutlineMail, AiOutlineUser, AiFillLock } from "react-icons/ai";
import { Form, redirect, useNavigation, Link } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

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
    <Wrapper>
      <div className="register-container">
        <div className="container">
          <h2>Register</h2>
          <Form method="post">
            <div className="input-field">
              <span>
                <AiOutlineUser />
              </span>

              <input type="text" placeholder="name" name="name" />
            </div>
            <div className="input-field">
              <span>
                <AiOutlineMail />
              </span>

              <input type="email" placeholder="email" name="email" />
            </div>
            <div className="input-field">
              <span>
                <AiFillLock />
              </span>

              <input type="password" placeholder="password" name="password" />
            </div>
            <button className="submit" disabled={isSubmitting}>
              {isSubmitting ? "submitting..." : "submit"}
            </button>
          </Form>

          <div>
            <p>Already member?</p>
            <Link to="/login" className="login">
              Login
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .register-container {
    width: 100vw;
    height: 100vh;

    position: relative;
    background-image: url("images/telechargement.jpg");
    background-position: center;
    background-size: cover;
  }

  .container {
    position: absolute;
    left: 5%;
    width: 90%;
    margin: 100px auto;
    background-color: #fff;
    border: 2px solid #9510ca;
    border-radius: 8px;
    padding: 10px;
    text-align: center;
  }
  h2 {
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 50px;
    color: #9510ca;
  }
  .input-field {
    display: flex;
    align-items: center;
    background-color: #eaeaea;
    margin-bottom: 10px;
    font-size: 20px;
    border-radius: 4px;
    padding: 0 5px;
  }
  input {
    outline: none;
    border: none;
    background-color: transparent;
    margin-left: 5px;
    padding: 12px 5px;
  }
  span {
    color: #999;
  }
  .submit {
    width: 100%;
    font-size: 15px;
    font-weight: 600;
    margin: 40px 0 20px;
    padding: 5px 0;
    color: #fff;
    background-color: #9510ca;
    outline: none;
    border: none;
    border: 1px solid #9510ca;
    border-radius: 4px;
    cursor: pointer;
  }
  .login {
    color: #9510ca;

    background-color: transparent;
    font-size: 18px;
    font-weight: 600;
    text-decoration: none;
    margin-left: 5px;
  }
  p {
    display: inline-block;
  }
  @media (min-width: 768px) {
    .container {
      width: 40%;
      left: 30%;
    }
  }
`;
export default Register;
