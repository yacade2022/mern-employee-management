import React from "react";
import styled from "styled-components";
import { Link, Form } from "react-router-dom";
import { FaRegEnvelope, FaMapMarkerAlt, FaUsers } from "react-icons/fa";
import BtnContainer from "../components/BtnContainer";

const AllEmployeesAdded = ({ values }) => {
  const { employee, totalEmployees, totalOfPages, currentPage } = values;

  if (employee.length === 0) {
    return (
      <Wrapper>
        <div className="card empty-state" role="status">
          <FaUsers className="empty-icon" aria-hidden="true" />
          <h3>No employees to display</h3>
          <p>
            Try changing your search or filters, or add a new employee to get
            started.
          </p>
          <div className="empty-actions">
            <Link to="/dashboard/all-employees" className="btn btn-outline">
              Reset all values
            </Link>
            <Link to="/dashboard" className="btn">
              Add employee
            </Link>
          </div>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div className="list-header">
        <h3>Employees</h3>
        <span className="count">
          {totalEmployees} total employee{totalEmployees > 1 && "s"}
        </span>
      </div>

      <ul className="all-employees">
        {employee.map((element) => {
          return (
            <li key={element._id}>
              <article className="card article">
                <header className="article-header">
                  <div className="avatar" aria-hidden="true">
                    {element.name?.charAt(0)}
                  </div>
                  <div className="identity">
                    <h4>{element.name}</h4>
                    <span className="badge">{element.category}</span>
                  </div>
                </header>

                <dl className="details">
                  <div>
                    <dt>Salary</dt>
                    <dd className="salary">{element.salary} $</dd>
                  </div>
                  <div>
                    <dt>
                      <FaRegEnvelope aria-hidden="true" />
                      <span className="sr-only">Email</span>
                    </dt>
                    <dd>{element.email}</dd>
                  </div>
                  <div>
                    <dt>
                      <FaMapMarkerAlt aria-hidden="true" />
                      <span className="sr-only">Address</span>
                    </dt>
                    <dd>{element.adress}</dd>
                  </div>
                </dl>

                <footer className="actions">
                  <Link
                    to={`/dashboard/edit/${element._id}`}
                    className="btn btn-outline btn-sm"
                    aria-label={`Edit ${element.name}`}
                  >
                    Edit
                  </Link>
                  <Form
                    method="post"
                    action={`../delete/${element._id}`}
                    onSubmit={(event) => {
                      const confirmed = window.confirm(
                        `Delete ${element.name}? This cannot be undone.`
                      );
                      if (!confirmed) event.preventDefault();
                    }}
                  >
                    <button
                      type="submit"
                      className="btn btn-danger btn-sm"
                      aria-label={`Delete ${element.name}`}
                    >
                      Delete
                    </button>
                  </Form>
                </footer>
              </article>
            </li>
          );
        })}
      </ul>

      {totalOfPages > 1 && (
        <BtnContainer values={{ totalOfPages, currentPage }} />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .list-header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 1rem;
  }
  .list-header h3 {
    font-size: var(--text-xl);
    font-weight: 700;
  }
  .count {
    font-size: var(--text-sm);
    color: var(--text-muted);
  }

  .all-employees {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1rem;
  }
  .all-employees > li {
    display: flex;
  }

  .article {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1.25rem;
    transition: box-shadow var(--transition), border-color var(--transition),
      transform var(--transition);
  }
  .article:hover {
    border-color: var(--primary-200);
    box-shadow: var(--shadow);
    transform: translateY(-2px);
  }

  .article-header {
    display: flex;
    align-items: center;
    gap: 0.875rem;
    margin-bottom: 1rem;
  }
  .avatar {
    flex-shrink: 0;
    display: grid;
    place-items: center;
    width: 44px;
    height: 44px;
    font-weight: 700;
    font-size: var(--text-lg);
    text-transform: uppercase;
    color: var(--primary-700);
    background-color: var(--primary-50);
    border-radius: 50%;
  }
  .identity {
    min-width: 0;
  }
  .identity h4 {
    font-size: var(--text-base);
    font-weight: 600;
    text-transform: capitalize;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .badge {
    display: inline-block;
    margin-top: 0.25rem;
    padding: 0.125rem 0.5rem;
    font-size: var(--text-xs);
    font-weight: 600;
    text-transform: capitalize;
    color: var(--primary-700);
    background-color: var(--primary-50);
    border-radius: 999px;
  }

  .details {
    display: grid;
    gap: 0.5rem;
    font-size: var(--text-sm);
  }
  .details > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    min-width: 0;
  }
  dt {
    display: inline-flex;
    flex-shrink: 0;
    color: var(--text-muted);
  }
  dd {
    color: var(--gray-700);
    overflow-wrap: anywhere;
  }
  .salary {
    font-weight: 600;
    color: var(--gray-900);
  }

  .actions {
    display: flex;
    gap: 0.5rem;
    margin-top: auto;
    padding-top: 1rem;
    border-top: 1px solid var(--border);
  }
  .details {
    margin-bottom: 1rem;
  }
  .actions > * {
    flex: 1;
  }
  .actions .btn {
    width: 100%;
  }

  /* Empty state */
  .empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 3rem 1.5rem;
  }
  .empty-icon {
    font-size: 2.5rem;
    color: var(--primary-200);
    margin-bottom: 1rem;
  }
  .empty-state h3 {
    font-size: var(--text-xl);
    margin-bottom: 0.5rem;
  }
  .empty-state p {
    max-width: 42ch;
    color: var(--text-muted);
    margin-bottom: 1.5rem;
  }
  .empty-actions {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.75rem;
  }
`;
export default AllEmployeesAdded;
