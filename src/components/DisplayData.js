import React from "react";
import getDisplayValue from "./../helpers/getDisplayValue";

function DisplayData({ data }) {
  return (
    <div className="list-group">
      {data.map((d, index) => (
        <div key={index}>
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{d.label}</h5>
          </div>
          <p className="mb-1">{getDisplayValue(d.value)}</p>
        </div>
      ))}
    </div>
  );
}

export default DisplayData;
