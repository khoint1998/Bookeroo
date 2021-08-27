import React from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/Layout/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddPerson from "./components/Persons/AddPerson";
import { Provider } from "react-redux";
import store from "./store";

import Register from "./components/UserManagement/Register/Register";
import Login from "./components/UserManagement/Login/Login";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import Homepage from "./components/Homepage/Homepage";


const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          {
            //Public Routes
          }
          
          <Route exact path="/" component={Homepage} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          
          <Route exact path="/about" component={AboutUs} />
          <Route exact path="/contact" component={ContactUs} />
          {
            //Private Routes
          }
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/addPerson" component={AddPerson} />
        
        </div>
      </Router>
    </Provider>
  );
}
export default App;