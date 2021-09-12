import React from "react";

function CheckBox({ data, onChange }) {
  const { name, value, label } = data;
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <br />
      <input
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
