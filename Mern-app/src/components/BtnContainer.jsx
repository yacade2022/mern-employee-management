import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { useLocation, useNavigate } from "react-router-dom";
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
    <Wrapper aria-label="Pagination">
      <button
        type="button"
        className="page-btn nav-btn"
        aria-label="Previous page"
        onClick={() => {
          let prevPage = currentPage - 1;
          if (prevPage < 1) prevPage = totalOfPages;
          handleChange(prevPage);
        }}
      >
        <HiChevronDoubleLeft aria-hidden="true" />
        <span>Prev</span>
      </button>
      <div className="btn-container">
        {numberOfBtn.map((pageNumber) => {
          const isActive = pageNumber === currentPage;
          return (
            <button
              type="button"
              className={isActive ? "page-btn active" : "page-btn"}
              key={pageNumber}
              aria-label={`Page ${pageNumber}`}
              aria-current={isActive ? "page" : undefined}
              onClick={() => handleChange(pageNumber)}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>
      <button
        type="button"
        className="page-btn nav-btn"
        aria-label="Next page"
        onClick={() => {
          let nextPage = currentPage + 1;
          if (nextPage > totalOfPages) nextPage = 1;
          handleChange(nextPage);
        }}
      >
        <span>Next</span>
        <HiChevronDoubleRight aria-hidden="true" />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  margin-top: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;

  .btn-container {
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem;
  }
  .page-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    min-width: 40px;
    height: 40px;
    padding: 0 0.75rem;
    font-size: var(--text-sm);
    font-weight: 600;
    color: var(--gray-700);
    background-color: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-sm);
    cursor: pointer;
    transition: background-color var(--transition), border-color var(--transition),
      color var(--transition);
  }
  .page-btn:hover {
    color: var(--primary-700);
    background-color: var(--primary-50);
    border-color: var(--primary-200);
  }
  .page-btn.active {
    color: #fff;
    background-color: var(--primary-500);
    border-color: var(--primary-500);
  }

  @media (max-width: 479px) {
    justify-content: center;
    .nav-btn span {
      display: none;
    }
  }
`;
export default BtnContainer;
