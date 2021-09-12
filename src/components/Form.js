import React, { useState } from "react";
import DisplayData from "./DisplayData";
import InputField from "./InputField";
import getAllGenders from "./../helpers/getAllGenders";

function Form(props) {
  const [Fields, setFields] = useState([
    {
      name: "firstName",
      label: "First Name",
      options: [],
      type: "text",
      value: "",
    },
    {
      name: "lastName",
      label: "Last Name",
      options: [],
      type: "text",
      value: "",
    },
    {
      name: "email",
      label: "Email",
      options: [],
      type: "email",
      value: "",
    },
    {
      name: "gender",
      label: "Gender",
      options: getAllGenders(),
      type: "select",
      value: "Female",
    },
    {
      name: "age",
      label: "Age",
      options: [],
      type: "number",
      value: "",
    },
    {
      name: "maritalStatus",
      label: "Marital Status",
      options: ["Maried", "Single"],
      type: "radio",
      value: "",
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

  return (
    <div>
      {Fields.map((Field, index) => (
        <InputField
          onChange={handleChange}
          onMultiCheckBoxChange={handleMultiCheckBoxChange}
          data={Field}
          key={index}
        />
      ))}
      <DisplayData />
    </div>
  );
}

export default Form;
