import { Input } from "antd";
import React, { useState } from "react";
const { TextArea } = Input;

const TextareaComponent = props => {
  const onchange = props.callback;

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "left"
        }}
      >
        <TextArea rows={5} onChange={onchange} />
      </div>
    </div>
  );
};

export default TextareaComponent;
