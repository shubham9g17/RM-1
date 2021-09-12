import React from "react";

function MultipleCheckBox({ data, onChange }) {
  const { name, value, label, options } = data;
  return (
    <div>
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
            id={opt}
            name={name}
            checked={value[index]}
            onChange={onChange}
            type={"checkbox"}
          />
        </div>
      ))}
    </div>
  );
}

export default MultipleCheckBox;
