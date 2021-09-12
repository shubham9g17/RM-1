import React from "react";

function Select({ data, onChange }) {
  const { name, value, label, options } = data;
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <br />
      <select name={name} id={name} value={value} onChange={onChange}>
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
