import React from "react";

function Radio({ data, onChange }) {
  const { name, value, label, options } = data;
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <br />
      {options.map((opt, index) => (
        <div key={index}>
          {opt}:{" "}
          <input type="radio" name={name} value={value} onChange={onChange} />
          <br />
        </div>
      ))}
    </div>
  );
}

export default Radio;
