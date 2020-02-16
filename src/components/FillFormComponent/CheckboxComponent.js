import { Checkbox } from "antd";
import React, { useState } from "react";

const CheckboxComponent = props => {
  const data = props.data;
  const onchange = props.callback;

  return (
    <div>
      {data.map((item, index) => (
        <div
          style={{
            display: "flex",
            justifyContent: "left"
          }}
        >
          <Checkbox onChange={onchange} value={item.id}>
            {item.answer}
          </Checkbox>
          <br></br>
        </div>
      ))}
    </div>
  );
};

export default CheckboxComponent;
