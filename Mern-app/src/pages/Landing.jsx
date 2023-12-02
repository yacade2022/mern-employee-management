import React from "react";
import styled from "styled-components";
import image from "../assets/image-desk1.jpg";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <div className="container">
        <div>
          <h1>Employees Management</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
            praesentium cum deserunt possimus, sequi, suscipit ipsam
            necessitatibus laborum veritatis asperiores temporibus dolor eveniet
            deleniti illo accusamus voluptatibus beatae iste nihil.
          </p>

          <Link to="register" className="register">
            Register
          </Link>
          <Link to="login" className="login">
            Login
          </Link>
        </div>
        <div className="image">
          <img src={image} alt="image" />
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100vw;
  margin-top: 60px;
  .container {
    width: 90%;
    padding: 10px;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr;
  }
  h1 {
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 16px;
    color: #9510ca;
  }
  p {
    line-height: 1.8;
    font-size: 18px;
    margin-bottom: 36px;
  }
  .register,
  .login {
    color: #fff;
    background-color: #9510ca;
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    margin-right: 10px;
    padding: 8px;
    border-radius: 4px;
  }
  .image {
    display: none;
  }
  @media (min-width: 768px) {
    .container {
      grid-template-columns: 1fr auto;
      gap: 20px;
    }
    .image {
      display: block;
    }
    img {
      border-radius: 88px;
      width: 400px;
    }
  }
`;
export default Landing;
