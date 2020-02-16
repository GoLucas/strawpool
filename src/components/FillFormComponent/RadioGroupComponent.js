import React, { useState } from "react";
import { Radio } from "antd";

const RadioGroupComponent = props => {
  const data = props.data;
  const onchange = props.callback;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "left"
      }}
    >
      <Radio.Group onChange={onchange}>
        {data.map((item, index) => (
          <div>
            <Radio value={item.id}>{item.answer}</Radio>
            <br></br>
          </div>
        ))}
      </Radio.Group>
    </div>
  );
};

export default RadioGroupComponent;
