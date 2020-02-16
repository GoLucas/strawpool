import React, { useEffect, useState } from "react";
import axios from "axios";
import EditForm from "./EditForm";
import { useParams } from "react-router-dom";
const URL = `http://localhost:8080/questiontypes`;

const EditFormComponent = props => {
  const para = useParams();
  const [questionTypes, setQuestionTypes] = useState([]);

  useEffect(() => {
    const getQuestionTypes = async (url, formTitle) => {
      try {
        const response = await axios.get(url);
        console.log(response.data);
        setQuestionTypes(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    getQuestionTypes(URL);
  }, []);

  return <EditForm data={questionTypes} formId={para.id} />;
};
export default EditFormComponent;
