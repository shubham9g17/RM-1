import React, { useState } from "react";
import DisplayData from "./DisplayData";
import InputField from "./InputField";

function Form(props) {
  const [Fields, setFields] = useState([
    {
      name: "firstName",
      label: "First Name",
      options: [],
      type: "text",
      select: false,
      value: "",
    },
    {
      name: "lastName",
      label: "Last Name",
      options: [],
      type: "text",
      select: false,
      value: "",
    },
    {
      name: "email",
      label: "Email",
      options: [],
      type: "email",
      select: false,
      value: "",
    },
  ]);
  const handleChange = ({ target }) => {
    const newFields = [...Fields];
    const currentField = newFields.find(
      (newField) => newField.name === target.name
    );
    const index = newFields.findIndex((newField) => newField === currentField);
    const newCurrentField = { ...currentField, value: target.value };
    newFields[index] = newCurrentField;
    setFields(newFields);
  };

  return (
    <div>
      {Fields.map((Field, index) => (
        <InputField onChange={handleChange} data={Field} key={index} />
      ))}
      <DisplayData />
    </div>
  );
}

export default Form;
