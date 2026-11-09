import { Link } from "react-router-dom";
import styled from "styled-components";

const Error = () => {
  return (
    <Wrapper>
      <div className="container">
        <p className="code">Error 404</p>
        <h1>Page not found</h1>
        <p className="message">
          Sorry, we can&apos;t find the page you are looking for.
        </p>
        <Link to="/dashboard" className="btn">
          Back home
        </Link>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.main`
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 2rem 1rem;

  .container {
    max-width: 480px;
    text-align: center;
  }
  .code {
    display: inline-block;
    margin-bottom: 1rem;
    padding: 0.25rem 0.75rem;
    font-size: var(--text-sm);
    font-weight: 600;
    color: var(--primary-700);
    background-color: var(--primary-50);
    border-radius: 999px;
  }
  h1 {
    font-size: var(--text-3xl);
    font-weight: 800;
    margin-bottom: 0.75rem;
  }
  .message {
    color: var(--text-muted);
    margin-bottom: 2rem;
  }
`;
export default Error;
