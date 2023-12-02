import React from "react";
import { useLoaderData } from "react-router-dom";
import SearchContainer from "./SearchContainer";
import AllEmployeesAdded from "./AllEmployeesAdded";
import styled from "styled-components";
import customFetch from "../utils/customFetch";

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
      <div>
        <SearchContainer allParamsValues={allParamsValues} />
        <AllEmployeesAdded values={data} />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 90%;
  margin: 20px auto;
`;
export default AllEmployees;
