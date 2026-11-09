import React from "react";
import styled from "styled-components";
import { Form, Link, useNavigation } from "react-router-dom";
import { JOB_CATEGORY } from "../../../utils/constants";
import FormRow from "../components/FormRow";
import FormRowSelect from "../components/FormRowSelect";

const SearchContainer = ({ allParamsValues }) => {
  const { search, category, sort } = allParamsValues;
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <Wrapper className="card">
      <Form role="search" aria-label="Filter employees">
        <h2 className="title">Search employees</h2>
        <div className="fields">
          <FormRow
            type="search"
            id="name"
            name="search"
            label="Search"
            placeholder="Name..."
            defaultValue={search}
          />
          <FormRowSelect
            name="category"
            label="Category"
            defaultValue={category}
            options={["all", ...Object.values(JOB_CATEGORY)]}
          />
          <div className="form-row">
            <label htmlFor="sort" className="form-label">
              Sort
            </label>
            <select
              name="sort"
              id="sort"
              className="form-select"
              defaultValue={sort}
            >
              <option value="newest">Newest</option>
              <option value="low_salary">Salary: low to high</option>
              <option value="high_salary">Salary: high to low</option>
            </select>
          </div>
        </div>
        <div className="actions">
          <Link to="/dashboard/all-employees" className="btn btn-outline">
            Reset all values
          </Link>
          <button
            type="submit"
            className="btn"
            disabled={isLoading}
            aria-busy={isLoading}
          >
            {isLoading ? "Searching..." : "Search"}
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 1.25rem;

  .title {
    font-size: var(--text-lg);
    font-weight: 700;
    margin-bottom: 1rem;
  }
  .fields {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
  }
  .form-select {
    text-transform: capitalize;
  }
  .actions {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: 0.75rem;
    margin-top: 1.25rem;
  }

  @media (min-width: 768px) {
    padding: 1.5rem;
  }
  @media (max-width: 479px) {
    .actions .btn {
      flex: 1;
    }
  }
`;
export default SearchContainer;
