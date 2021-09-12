import React from "react";

function Radio({ data, onChange }) {
  const { name, label, options, value } = data;
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <br />
      {options.map((opt, index) => (
        <div key={index}>
          {opt}:{" "}
          <input
            type="radio"
            name={name}
            checked={opt === value}
            value={opt}
            onChange={onChange}
          />
          <br />
        </div>
      ))}
    </div>
  );
}

export default Radio;
