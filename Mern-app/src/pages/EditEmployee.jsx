import React from "react";
import { redirect, useLoaderData, useNavigation } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { Form } from "react-router-dom";
import styled from "styled-components";
import { toast } from "react-toastify";
import { JOB_CATEGORY } from "../../../utils/constants";

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
  const isSubmitting = navigation === "submitting";

  return (
    <Wrapper>
      <div className="container">
        <h2>Edit employee</h2>
        <div className="form">
          <Form method="post">
            <div className="input-field">
              <label htmlFor="name">name</label>
              <br />
              <input
                type="text"
                id="name"
                name="name"
                defaultValue={employee.name}
              />
            </div>
            <div className="input-field">
              <label htmlFor="email">email</label>
              <br />
              <input
                type="email"
                id="email"
                name="email"
                defaultValue={employee.email}
              />
            </div>

            <div className="input-field">
              <label htmlFor="salary">salary</label>
              <br />
              <input
                type="text"
                id="salary"
                name="salary"
                defaultValue={employee.salary}
              />
            </div>
            <div className="input-field">
              <label htmlFor="category">category</label>
              <select name="category" defaultValue={employee.category}>
                <option>{JOB_CATEGORY.FRONT}</option>
                <option>{JOB_CATEGORY.BACK}</option>
                <option>{JOB_CATEGORY.FULL}</option>
              </select>
            </div>
            <div className="input-field">
              <label htmlFor="adresse">adresse</label>
              <br />
              <input
                type="text"
                id="adresse"
                name="adress"
                defaultValue={employee.adress}
              />
            </div>
            <div className="btn">
              <button type="submit" className="submit" disabled={isSubmitting}>
                {isSubmitting ? "submitting..." : "submit"}
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
    margin-top: 20px;
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
    margin-bottom: 14px;
  }
  label {
    font-size: 18px;
    font-weight: 500;
    text-transform: capitalize;
    color: #9510ca;
  }
  select {
    margin-left: 5px;
    padding: 5px;
    color: #9510ca;
    border-radius: 4px;
    outline: none;
    border-color: #9510ca;
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
export default EditEmployee;
