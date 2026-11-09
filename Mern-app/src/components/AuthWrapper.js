import styled from "styled-components";

// Shared layout for the Login and Register pages.
const AuthWrapper = styled.main`
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 2rem 1rem;
  background-color: var(--gray-100);
  background-image: linear-gradient(
      rgba(28, 24, 35, 0.55),
      rgba(104, 11, 141, 0.55)
    ),
    url("/images/t%C3%A9l%C3%A9chargement.jpg");
  background-position: center;
  background-size: cover;

  .auth-card {
    width: 100%;
    max-width: 420px;
    padding: 2rem 1.5rem;
    border: none;
    box-shadow: var(--shadow-lg);
  }

  .brand {
    display: inline-block;
    margin-bottom: 1.5rem;
    font-size: var(--text-sm);
    font-weight: 700;
    letter-spacing: 0.02em;
    color: var(--primary-600);
    text-decoration: none;
  }

  h1 {
    font-size: var(--text-2xl);
    font-weight: 700;
  }
  .subtitle {
    margin-top: 0.25rem;
    margin-bottom: 1.75rem;
    color: var(--text-muted);
    font-size: var(--text-sm);
  }

  form {
    display: grid;
    gap: 1rem;
  }
  form .btn {
    margin-top: 0.5rem;
  }

  .switch {
    margin-top: 1.5rem;
    text-align: center;
    font-size: var(--text-sm);
    color: var(--text-muted);
  }
  .switch a {
    font-weight: 600;
    margin-left: 0.25rem;
    text-decoration: none;
  }
  .switch a:hover {
    text-decoration: underline;
  }

  @media (min-width: 480px) {
    .auth-card {
      padding: 2.5rem 2.25rem;
    }
  }
`;

export default AuthWrapper;
