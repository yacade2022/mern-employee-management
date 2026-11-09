import React from "react";
import styled from "styled-components";
import image from "../assets/image-desk1.jpg";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <header className="top-bar">
        <span className="brand">Employees Management</span>
        <Link to="login" className="top-link">
          Login
        </Link>
      </header>

      <section className="hero">
        <div className="hero-text">
          <h1>
            Employees <span>Management</span>
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
            praesentium cum deserunt possimus, sequi, suscipit ipsam
            necessitatibus laborum veritatis asperiores temporibus dolor eveniet
            deleniti illo accusamus voluptatibus beatae iste nihil.
          </p>

          <div className="actions">
            <Link to="register" className="btn">
              Register
            </Link>
            <Link to="login" className="btn btn-outline">
              Login
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <img
            src={image}
            alt="Office desk with a laptop, representing employee management"
            width="440"
            height="440"
          />
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  min-height: 100vh;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;

  .top-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: var(--nav-height);
  }
  .brand {
    font-weight: 700;
    color: var(--primary-600);
  }
  .top-link {
    font-weight: 600;
    text-decoration: none;
    padding: 0.5rem 0.75rem;
    border-radius: var(--radius-sm);
  }
  .top-link:hover {
    background-color: var(--primary-50);
  }

  .hero {
    flex: 1;
    display: grid;
    align-items: center;
    gap: 2.5rem;
    padding: 2rem 0 4rem;
  }
  h1 {
    font-size: var(--text-3xl);
    font-weight: 800;
    letter-spacing: -0.02em;
    margin-bottom: 1rem;
  }
  h1 span {
    color: var(--primary-500);
  }
  p {
    max-width: 60ch;
    font-size: var(--text-lg);
    line-height: 1.7;
    color: var(--gray-600);
    margin-bottom: 2rem;
  }
  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }
  .actions .btn {
    min-width: 128px;
  }
  .hero-image {
    display: none;
  }

  @media (min-width: 768px) {
    padding: 0 2rem;
    .hero {
      grid-template-columns: 1.1fr 1fr;
      gap: 3rem;
    }
    .hero-image {
      display: block;
      justify-self: end;
    }
    img {
      width: 100%;
      max-width: 440px;
      aspect-ratio: 1 / 1;
      object-fit: cover;
      border-radius: 32px;
      box-shadow: var(--shadow-lg);
    }
  }
`;
export default Landing;
