import React, { useEffect, useState } from "react";
import axios from "axios";
import { Form, Input, Button, notification, Select } from "antd";
const { Option } = Select;

const addQuestion = async (url, questionTitle, questionType) => {
  try {
    if (questionTitle.length > 0 && Number.isInteger(questionType)) {
      const response = await axios.post(url, {
        questionTitle: questionTitle,
        questionTypeId: questionType
      });
      if (response.data.success != 0) {
        notification.info({
          message: `Question added succesfully`,
          description: `Title : ${questionTitle}`,
          placement: "bottomRight"
        });
      } else {
        notification.warning({
          message: `Cannot add new Question`,
          description: `reson: ${response.data.message}`,
          placement: "bottomRight"
        });
      }

      console.log(url);
    } else {
      notification.warning({
        message: `Cannot add new Question`,
        description: "reason: Title cannot be empty",
        placement: "bottomRight"
      });
    }
  } catch (e) {
    console.log(e);
  }
};

const EditForm = ({ data, formId }) => {
  const URL = `http://localhost:8080/questions/${formId}`;
  const [questionTitle, setQuestionTitle] = useState("");
  const [type, setType] = useState();

  const buttonCallback = e => {
    addQuestion(URL, questionTitle, type);
  };

  return (
    <Form>
      <Form.Item label="Question title">
        <Input
          placeholder="Question title"
          style={{ width: 600 }}
          onInput={e => setQuestionTitle(e.target.value)}
        />
      </Form.Item>
      <Form.Item label="Question type">
        <Select
          showSearch
          style={{ width: 600 }}
          placeholder="Select a quetion type"
          onChange={value => setType(value)}
          filterOption={(input, option) =>
            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >=
            0
          }
        >
          {data.map((item, index) => (
            <Option value={item.id}>{item.type}</Option>
          ))}
        </Select>
      </Form.Item>
      ,
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
  );
};

export default EditForm;
