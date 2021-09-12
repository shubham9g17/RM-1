import React from "react";

function Input({ data, onChange }) {
  const { name, value, label, type, required } = data;
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <br />
      <input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        required={required}
      />
    </div>
  );
}

export default Input;
