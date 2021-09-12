import React from "react";
import Input from "./common/Input";
import Select from "./common/Select";

function InputField(props) {
  if (props.data.select) {
    return <Select />;
  }

  return <Input data={props.data} onChange={props.onChange} />;
}

export default InputField;
