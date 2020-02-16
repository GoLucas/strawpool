import React, { useState } from "react";
import { Button, Divider } from "antd";
import RadioGroupComponent from "./RadioGroupComponent";
import CheckboxComponent from "./CheckboxComponent";
import TextareaComponent from "./TextareaComponent";

const FillForm = ({ data, isFetching }) => {
  const [selectAns, setSelectAns] = useState(null);
  const [boolAns, setBoolAns] = useState(null);
  const [multiselectAns, setMultiselectAns] = useState([]);
  const [OpenAns, setOpenAns] = useState(null);

  const radioGroupCallback = e => {
    setSelectAns(e.target.value);
  };

  const radioBooleanGroupCallback = e => {
    setBoolAns(e.target.value);
  };

  const checkboxCallback = e => {
    if (e.target.checked) {
      setMultiselectAns(oldArray => [...oldArray, e.target.value]);
    } else {
      const arr = multiselectAns;
      arr.splice(arr.indexOf(e.target.value), 1);
      setMultiselectAns(arr);
    }
  };

  const textareaCallback = e => {
    setOpenAns(e.target.value);
  };

  const buttonCallback = e => {
    let sumArr = [];
    if (selectAns !== null) sumArr.push(selectAns);
    if (boolAns !== null) sumArr.push(boolAns);
    if (OpenAns !== null) sumArr.push(OpenAns);
    let answers = [...multiselectAns, ...sumArr];
    console.log("sum:", answers);
  };

  return (
    <>
      {data.map((item, index) => (
        <div>
          <h1>{item.title}</h1>
          <br></br>
          {item.QuestionType.type === "select" && (
            <RadioGroupComponent
              data={item.Answers}
              callback={radioGroupCallback}
            />
          )}
          {item.QuestionType.type === "bool" && (
            <RadioGroupComponent
              data={item.Answers}
              callback={radioBooleanGroupCallback}
            />
          )}
          {item.QuestionType.type === "multiselect" && (
            <CheckboxComponent
              data={item.Answers}
              callback={checkboxCallback}
            />
          )}
          {item.QuestionType.type === "open" && (
            <TextareaComponent callback={textareaCallback} />
          )}
          <Divider />
        </div>
      ))}
      <br></br>
      <br></br>
      <Button
        block
        type="primary"
        shape="round"
        icon="save"
        onClick={buttonCallback}
      >
        SAVE
      </Button>
    </>
  );
};
export default FillForm;
