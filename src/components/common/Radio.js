import React from "react";

function Radio({ data, onChange }) {
  const { name, label, options, value } = data;
  return (
    <div className={"mb-3"}>
      <label className={"form-label"} htmlFor={name}>
        {label}
      </label>
      {options.map((opt, index) => (
        <div className={"form-check"} key={index}>
          <label className={"form-check-label"} htmlFor={opt}>
            {opt}
          </label>
          <input
            className={"form-check-input"}
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
