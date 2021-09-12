import React from "react";

function MultipleCheckBox({ data, onChange }) {
  const { name, value, label, options } = data;
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <br />
      {options.map((opt, index) => (
        <div key={index}>
          <label htmlFor={opt}>{opt}</label>{" "}
          <input
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
