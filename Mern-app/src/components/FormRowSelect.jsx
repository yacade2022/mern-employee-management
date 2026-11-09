// Label + select pair. `options` is a list of strings.
const FormRowSelect = ({ name, label, options, id, ...selectProps }) => {
  const selectId = id || name;

  return (
    <div className="form-row">
      <label htmlFor={selectId} className="form-label">
        {label}
      </label>
      <select id={selectId} name={name} className="form-select" {...selectProps}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormRowSelect;
