import React, { useState } from "react";
import axios from "axios";
import { Form, Input, Button, notification } from "antd";

const AddFormComponent = () => {
  const FORM_URL = `http://localhost:8080/forms`;
  const [input, setInput] = useState("");

  const addForm = async (url, formTitle) => {
    try {
      if (formTitle.length > 0) {
        const response = await axios.post(url, {
          ftitle: formTitle
        });
        notification.info({
          message: `Form added succesfully`,
          description: `Title : ${formTitle}`,
          placement: "bottomRight"
        });
      } else {
        notification.warning({
          message: `Cannot add new Form`,
          description: "reason: Title cannot be empty",
          placement: "bottomRight"
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const buttonCallback = e => {
    addForm(FORM_URL, input);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center"
      }}
    >
      <Form style={{ width: 600 }}>
        <Form.Item label="Add form">
          <Input
            placeholder="form title"
            onInput={e => setInput(e.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Button
            block
            type="primary"
            shape="round"
            icon="save"
            style={{ width: 600 }}
            onClick={buttonCallback}
          >
            SAVE
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddFormComponent;
