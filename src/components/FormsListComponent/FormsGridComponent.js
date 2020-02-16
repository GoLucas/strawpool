import React, { useEffect, useState } from "react";
import axios from "axios";
import FormsGrid from "./FormsGrid";
const FORM_URL = "http://localhost:8080/forms";

const FormsGridComponent = props => {
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
  return <FormsGrid data={data.forms} isFetching={data.isFetching} />;
};
export default FormsGridComponent;
