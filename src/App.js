import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PersonList from "./components/PersonList";
import CreatePerson from "./components/CreatePerson";
import EditPerson from "./components/EditPerson";
import Navigation from "./components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="container">
      <Router>
        <Navigation />
        <Route path="/" exact component={PersonList} />
        <Route path="/create" component={CreatePerson} />
        <Route path="/edit/:id" component={EditPerson} />
      </Router>
    </div>
  );
};

export default App;
