import React from "react";
import { Route, Switch } from "react-router-dom";
import { useLocation } from "react-router";
import FormsGridComponent from "./FormsListComponent/FormsGridComponent";
import FillFormComponent from "./FillFormComponent/FillFormComponent";
import AddFormComponent from "./AddForm/AddFormComponent";
import EditFormComponent from "./EditFormComponent/EditFormComponent";

const Home = () => {
  let location = useLocation();
  console.log(location);
  return <div>Home component</div>;
};

function RouterContainer() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/forms">
        <FormsGridComponent />
      </Route>
      <Route path="/fillform/:id">
        <FillFormComponent />
      </Route>
      <Route path="/addform">
        <AddFormComponent />
      </Route>
      <Route path="/editform/:id">
        <EditFormComponent />
      </Route>
    </Switch>
  );
}

export default RouterContainer;
