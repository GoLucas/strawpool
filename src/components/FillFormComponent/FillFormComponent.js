import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import FillForm from "./FillForm";

const FillFormComponent = () => {
  const para = useParams();
  const FORM_URL = `http://localhost:8080/questions/${para.id}`;
  const [data, setData] = useState({ forms: [], isFetching: false });
  useEffect(() => {
    const fetchForms = async () => {
      try {
        setData({ forms: data.forms, isFetching: true });
        const response = await axios.get(FORM_URL);
        setData({ forms: response.data, isFetching: false });
      } catch (e) {
        // console.log(e);
        setData({ users: data.forms, isFetching: false });
      }
    };
    fetchForms();
  }, []);

  console.log(data.forms);
  return (
    <>
      {(data.forms && data.forms.length > 0 && (
        <FillForm data={data.forms} isFetching={data.isFetching} />
      )) || <span>Form is Empty</span>}
    </>
  );
};

export default FillFormComponent;
