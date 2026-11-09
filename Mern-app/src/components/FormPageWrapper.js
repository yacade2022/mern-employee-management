import styled from "styled-components";

// Shared layout for the dashboard forms (Add / Edit employee, Profile).
const FormPageWrapper = styled.section`
  max-width: 720px;
  margin: 0 auto;
  padding: 1.5rem;

  .page-header {
    margin-bottom: 1.25rem;
  }
  .page-header h2 {
    font-size: var(--text-2xl);
    font-weight: 700;
  }
  .page-header p {
    margin-top: 0.25rem;
    color: var(--text-muted);
    font-size: var(--text-sm);
  }

  form {
    display: grid;
    gap: 1.125rem;
    padding: 1.5rem;
  }

  .form-actions {
    display: flex;
    justify-content: flex-end;
    gap: 0.75rem;
    border-top: 1px solid var(--border);
    margin-top: 0.25rem;
    padding-top: 1.25rem;
  }

  @media (min-width: 640px) {
    form {
      grid-template-columns: 1fr 1fr;
      gap: 1.25rem 1.5rem;
      padding: 2rem;
    }
    .span-2,
    .form-actions {
      grid-column: 1 / -1;
    }
  }

  @media (max-width: 639px) {
    padding: 1rem;
    .form-actions .btn {
      width: 100%;
    }
  }
`;

export default FormPageWrapper;
