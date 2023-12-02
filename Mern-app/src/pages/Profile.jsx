import styled from "styled-components";
import { Form, redirect, useNavigation } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.patch("/users/update-user", data);
    toast.success("User Updated");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
  }
  return redirect("/dashboard");
};

const Profile = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation === "submitting";
  return (
    <Wrapper>
      <div className="container">
        <h2>profile</h2>
        <div className="form">
          <Form method="post">
            <div className="input-field">
              <label htmlFor="name">name</label>
              <br />
              <input type="text" id="name" name="name" />
            </div>
            <div className="input-field">
              <label htmlFor="email">email</label>
              <br />
              <input type="email" id="email" name="email" />
            </div>
            <div className="input-field">
              <label htmlFor="password">password</label>
              <br />
              <input type="password" id="password" name="password" />
            </div>

            <div className="btn">
              <button type="submit" className="submit" disabled={isSubmitting}>
                {isSubmitting ? "submitting..." : "Save changes"}
              </button>
            </div>
          </Form>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  .container {
    width: 70%;
    margin-top: 25px;
    box-shadow: 0 0 5px black;
    padding: 20px 0;
    border-radius: 8px;
  }
  h2 {
    text-align: center;
    text-transform: capitalize;
    color: #9510ca;
  }
  .input-field {
    width: 90%;
    margin: 0 auto;
    margin-bottom: 16px;
  }
  label {
    font-size: 18px;
    font-weight: 500;
    text-transform: capitalize;
    color: #9510ca;
  }
  input {
    width: 100%;
    padding: 10px;
    outline: none;
    border: none;
    border-radius: 4px;
    background-color: #eaeaea;
  }
  .btn {
    width: 90%;
    margin: 0 auto;
  }
  .submit {
    width: 100%;
    display: block;

    font-size: 15px;
    font-weight: 600;
    margin: 20px 0;
    padding: 5px 0;
    color: #fff;
    background-color: #9510ca;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
`;
export default Profile;
