import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { useLocation, Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const BtnContainer = ({ values }) => {
  const { totalOfPages, currentPage } = values;
  const numberOfBtn = Array.from(
    { length: totalOfPages },
    (_, index) => index + 1
  );

  const { search, pathname } = useLocation();
  const navigate = useNavigate();

  const handleChange = (page) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", page);
    navigate(`${pathname}?${searchParams.toString()}`);
  };
  return (
    <Wrapper>
      <button
        className="btn"
        onClick={() => {
          let prevPage = currentPage - 1;
          if (prevPage < 1) prevPage = totalOfPages;
          handleChange(prevPage);
        }}
      >
        <HiChevronDoubleLeft />
        prev
      </button>
      <div className="btn-container">
        {numberOfBtn.map((pageNumber) => {
          return (
            <button
              className={`btn ${pageNumber === currentPage && "active"}`}
              key={pageNumber}
              onClick={() => handleChange(pageNumber)}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>
      <button
        className="btn"
        onClick={() => {
          let nextPage = currentPage + 1;
          if (nextPage > totalOfPages) nextPage = 1;
          handleChange(nextPage);
        }}
      >
        <HiChevronDoubleRight />
        next
      </button>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: flex-end;
  position: relative;

  .btn {
    padding: 5px;
    color: #fff;
    background-color: #10cab7;
    border: none;
    border-radius: 2px;
    cursor: pointer;
  }
  .btn-container {
    display: flex;
    margin: 0 2px;
    .btn {
      width: 30px;
      justify-content: center;
    }
    .active {
      background-color: #9510ca;
    }
  }
`;
export default BtnContainer;
