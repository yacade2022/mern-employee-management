import React from "react";
import styled from "styled-components";
import { Form, Link } from "react-router-dom";
import { JOB_CATEGORY } from "../../../utils/constants";

const SearchContainer = ({ allParamsValues }) => {
  const { search, category, sort } = allParamsValues;

  return (
    <Wrapper>
      <Form className="container">
        <div className="input">
          <div className="input-field">
            <label htmlFor="name">search</label>
            <input
              type="search"
              id="name"
              name="search"
              defaultValue={search}
            />
          </div>
          <div className="input-field">
            <label htmlFor="category">category</label>
            <select name="category" id="category" defaultValue={category}>
              <option>all</option>
              <option>{JOB_CATEGORY.FRONT}</option>
              <option>{JOB_CATEGORY.BACK}</option>
              <option>{JOB_CATEGORY.FULL}</option>
            </select>
          </div>
          <div className="input-field">
            <label htmlFor="sort">sort</label>
            <select name="sort" id="sort" defaultValue={sort}>
              <option>newest</option>
              <option>low_salary</option>
              <option> high_salary</option>
            </select>
          </div>
        </div>
        <div>
          <Link to="/dashboard/all-employees" className="link">
            reset all values
          </Link>
          <button type="submit" className="btn">
            submit
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .input {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 10px;
    margin-bottom: 10px;
  }
  .input-field {
    display: flex;
    flex-direction: column;
  }
  .input-field label {
    margin-bottom: 10px;
    color: #9510ca;
    text-transform: capitalize;
  }
  input,
  select {
    outline: none;
    padding: 5px;
    border: none;
    border: 1px solid #9510ca;
    border-radius: 4px;
    color: #9510ca;
  }
  .btn,
  .link {
    color: #fff;
    background-color: #9510ca;
    border: none;
    border-radius: 4px;
    text-transform: capitalize;
    text-align: center;
    cursor: pointer;
  }

  .btn {
    padding: 4px;
    margin-left: 10px;
  }
  .link {
    padding: 3px;
    text-decoration: none;
  }
`;
export default SearchContainer;
