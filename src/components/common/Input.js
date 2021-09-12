import React from "react";

function Input({ data, onChange }) {
  const { name, value, label, type } = data;
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
      />
    </div>
  );
}

export default Input;
