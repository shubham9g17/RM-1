import React, { useState } from "react";
import DisplayData from "./DisplayData";
import InputField from "./InputField";
import getAllGenders from "./../helpers/getAllGenders";

function Form() {
  const [display, setDisplay] = useState(false);
  const [Fields, setFields] = useState([
    {
      name: "firstName",
      label: "First Name",
      options: [],
      type: "text",
      value: "",
      required: true,
    },
    {
      name: "lastName",
      label: "Last Name",
      options: [],
      type: "text",
      value: "",
      required: false,
    },
    {
      name: "email",
      label: "Email",
      options: [],
      type: "email",
      value: "",
      required: true,
    },
    {
      name: "gender",
      label: "Gender",
      options: getAllGenders(),
      type: "select",
      value: "Male",
      required: true,
    },
    {
      name: "age",
      label: "Age",
      options: [],
      type: "number",
      value: "",
      required: true,
    },
    {
      name: "maritalStatus",
      label: "Marital Status",
      options: ["Single", "Maried"],
      type: "radio",
      value: "Single",
    },
    {
      name: "qualification",
      label: "Qualification",
      options: ["10th", "12th", "Btech"],
      type: "multicheckbox",
      value: { "10th": false, "12th": false, Btech: false },
    },
  ]);
  const handleMultiCheckBoxChange = ({ target }) => {
    const newFields = [...Fields];
    const currentField = newFields.find(
      (newField) => newField.name === target.name
    );
    const index = newFields.findIndex((newField) => newField === currentField);

    const newCurrentField = {
      ...currentField,
      value: { ...currentField.value, [target.id]: target.checked },
    };
    newFields[index] = newCurrentField;
    setFields(newFields);
  };
  const handleChange = ({ target }) => {
    const newFields = [...Fields];
    const currentField = newFields.find(
      (newField) => newField.name === target.name
    );
    const index = newFields.findIndex((newField) => newField === currentField);

    const newCurrentField =
      target.type === "checkbox"
        ? { ...currentField, value: target.checked }
        : { ...currentField, value: target.value };
    newFields[index] = newCurrentField;
    setFields(newFields);
  };
  const handleSubmit = (ev) => {
    ev.preventDefault();
    alert("Form Submitted");
    setDisplay(true);
  };

  return (
    <div className={"row"}>
      <div className={"col"}>
        <form onSubmit={handleSubmit}>
          {Fields.map((Field, index) => (
            <InputField
              onChange={handleChange}
              onMultiCheckBoxChange={handleMultiCheckBoxChange}
              data={Field}
              key={index}
            />
          ))}
          <button className={"btn btn-primary"} type="submit">
            Submit
          </button>
        </form>
      </div>
      <div className="col">{display && <DisplayData data={Fields} />}</div>
    </div>
  );
}

export default Form;
