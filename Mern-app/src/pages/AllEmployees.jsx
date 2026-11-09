import React from "react";
import { useLoaderData } from "react-router-dom";
import SearchContainer from "./SearchContainer";
import AllEmployeesAdded from "./AllEmployeesAdded";
import styled from "styled-components";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  try {
    const { data } = await customFetch.get("/employee", { params });
    return { data, allParamsValues: { ...params } };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const AllEmployees = () => {
  const { data, allParamsValues } = useLoaderData();

  return (
    <Wrapper>
      <SearchContainer allParamsValues={allParamsValues} />
      <AllEmployeesAdded values={data} />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem 1rem;
  display: grid;
  gap: 1.5rem;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;
export default AllEmployees;
