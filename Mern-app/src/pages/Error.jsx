import { Link, useRouteError } from "react-router-dom";
import styled from "styled-components";

const Error = () => {
  return (
    <Wrapper>
      <div className="container">
        <h1>Error 404</h1>
        <h2>Page not found</h2>
        <p>Sorry we can't find the page you are looking for</p>
        <Link to="/dashboard" className="back-home">
          back home
        </Link>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  .container {
    width: 50%;
    margin: 30px auto;
    text-align: center;
  }
  h2,
  h1 {
    color: #9510ca;
    margin-bottom: 10px;
  }
  p {
    line-height: 2;
    margin-bottom: 10px;
  }
  .back-home {
    font-size: 20px;
  }
`;
export default Error;
