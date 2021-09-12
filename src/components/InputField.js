import React from "react";
import CheckBox from "./common/CheckBox";
import Input from "./common/Input";
import Radio from "./common/Radio";
import Select from "./common/Select";
import MultipleCheckBox from "./common/MultipleCheckBox";

function InputField({ data, onChange, onMultiCheckBoxChange }) {
  switch (data.type) {
    case "multicheckbox":
      return <MultipleCheckBox data={data} onChange={onMultiCheckBoxChange} />;
    case "select":
      return <Select data={data} onChange={onChange} />;
    case "radio":
      return <Radio data={data} onChange={onChange} />;
    case "checkbox":
      return <CheckBox data={data} onChange={onChange} />;
    default:
      return <Input data={data} onChange={onChange} />;
  }
}

export default InputField;
