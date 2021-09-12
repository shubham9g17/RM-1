import React from "react";

function Input({ data, onChange }) {
  const { name, value, label, type, required, validator } = data;
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
      <div
        style={
          value
            ? value.match(validator)
              ? { display: "none" }
              : { display: "contents" }
            : { display: "none" }
        }
        className="invalid-feedback"
      >
        Please Enter Valid {label}.
      </div>
    </div>
  );
}

export default Input;
