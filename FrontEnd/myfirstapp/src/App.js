import React, { Component } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/Layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddPerson from "./components/Persons/AddPerson";
import { Provider } from "react-redux";
import store from "./store";

import Landing from "./components/Layout/Landing";
import Register from "./components/UserManagement/Register";
import Login from "./components/UserManagement/Login";
import Profile from "./components/Profile/Profile";
import ProfileEdit from "./components/Profile/ProfileEdit";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          {
            //Public Routes
          }
          
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />

          {
            //Private Routes
          }
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/addPerson" component={AddPerson} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/profileedit" component={ProfileEdit} />
        
        </div>
      </Router>
    </Provider>
  );
}
export default App;