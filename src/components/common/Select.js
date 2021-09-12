import React from "react";

function Select({ data, onChange }) {
  const { name, value, label, options, required } = data;
  return (
    <div className={"mb-3"}>
      <label className={"form-label"} htmlFor={name}>
        {label}
      </label>
      <select
        className={"form-select"}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        required={required}
      >
        {options.map((opt, index) => (
          <option key={index} value={opt.value}>
            {opt.value}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
