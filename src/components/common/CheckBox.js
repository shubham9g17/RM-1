import React from "react";

function CheckBox({ data, onChange }) {
  const { name, value, label } = data;
  return (
    <div className={"form-check"}>
      <label className={"form-check-label"} htmlFor={name}>
        {label}
      </label>
      <input
        className={"form-check-input"}
        id={name}
        name={name}
        checked={value}
        onChange={onChange}
        type={"checkbox"}
      />
    </div>
  );
}

export default CheckBox;
