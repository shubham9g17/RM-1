import React from "react";
import getDisplayValue from "./../helpers/getDisplayValue";

function DisplayData({ data }) {
  //console.log(data);
  return (
    <div class="list-group">
      {data.map((d, index) => (
        <>
          <div className="d-flex w-100 justify-content-between" key={index}>
            <h5 class="mb-1">{d.label}</h5>
          </div>
          <p class="mb-1">{getDisplayValue(d.value)}</p>
        </>
      ))}
    </div>
  );
}

export default DisplayData;
