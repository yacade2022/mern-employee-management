// Label + input pair used by every form in the app.
// Extra props (required, minLength, autoComplete, defaultValue…) pass straight to <input>.
const FormRow = ({ name, label, type = "text", id, hint, ...inputProps }) => {
  const inputId = id || name;
  const hintId = hint ? `${inputId}-hint` : undefined;

  return (
    <div className="form-row">
      <label htmlFor={inputId} className="form-label">
        {label}
      </label>
      <input
        type={type}
        id={inputId}
        name={name}
        className="form-input"
        aria-describedby={hintId}
        {...inputProps}
      />
      {hint && (
        <span id={hintId} className="form-hint">
          {hint}
        </span>
      )}
    </div>
  );
};

export default FormRow;
