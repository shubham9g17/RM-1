import React from "react";

function Input({ data, onChange }) {
  const { name, value, label, type, required } = data;
  return (
    <div className={"mb-3"}>
      <label className={"form-label"} htmlFor={name}>
        {label}
      </label>
      <input
        className={"form-control"}
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
