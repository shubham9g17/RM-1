import React from "react";
import getDisplayValue from "./../helpers/getDisplayValue";

function DisplayData({ data }) {
  //console.log(data);
  return (
    <div>
      {data.map((d, index) => (
        <div key={index}>
          {d.label} :- {getDisplayValue(d.value)}
          <br />
        </div>
      ))}
    </div>
  );
}

export default DisplayData;
