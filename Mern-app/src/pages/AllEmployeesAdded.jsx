import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Form } from "react-router-dom";
import BtnContainer from "../components/BtnContainer";

const AllEmployeesAdded = ({ values }) => {
  const { employee, totalEmployees, totalOfPages, currentPage } = values;

  if (employee.length === 0) {
    return (
      <Wrapper>
        <h3>no employees to display...</h3>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div className="container">
        <h3 className="total-employees">
          total of employee{totalEmployees > 1 && "s"} : {totalEmployees}
        </h3>
        <div className="all-employees">
          {employee.map((element) => {
            return (
              <article key={element._id} className="article">
                <div>
                  <div className="headers">
                    <p>
                      <span>name:</span> {element.name}
                    </p>
                    <p>
                      <span>salary:</span> {element.salary} $
                    </p>
                  </div>

                  <p>
                    <span>category:</span> {element.category}
                  </p>
                  <p>
                    <span>email:</span> {element.email}
                  </p>
                  <p>
                    <span>adress:</span> {element.adress}
                  </p>
                </div>
                <div className="btn">
                  <Link to={`/dashboard/edit/${element._id}`} className="edit">
                    Edit
                  </Link>
                  <Form method="post" action={`../delete/${element._id}`}>
                    <button type="submit" className="button">
                      Delete
                    </button>
                  </Form>
                </div>
              </article>
            );
          })}
        </div>
        <div>
          {totalOfPages > 1 && (
            <BtnContainer values={{ totalOfPages, currentPage }} />
          )}
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  min-height: 100vh;

  .all-employees {
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 10px;
  }
  .article {
    padding: 5px;
    box-shadow: 0 0 5px black;
    border-radius: 4px;
  }
  .headers {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  p {
    color: #361515;
  }
  span {
    text-transform: capitalize;
    color: #9510ca;
  }
  .btn {
    margin-top: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .edit,
  .button {
    width: 50px;
    padding: 3px;
    color: #fff;
    background-color: #10cab7;
    border: none;
    border-radius: 2px;
    text-decoration: none;
    text-align: center;
    cursor: pointer;
  }
  h3 {
    color: #9510ca;
    text-transform: capitalize;
    margin-top: 30px;
  }
  .total-employees {
    margin-top: 10px;
  }
`;
export default AllEmployeesAdded;
