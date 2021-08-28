import React, { useReducer } from "react";
import "./App.css";
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
import Profile from "./components/Profile/Profile";
import PurchaseHistory from "./components/PurchaseHistory/PurchaseHistory";

import jwt_decode from "jwt-decode";
import setJWTToken from "./securityUtils/setJWTToken";
import { SET_CURRENT_USER } from "./actions/types";
import { logout } from "./actions/securityActions";
import SecuredRoute from "./securityUtils/SecureRoute";

const guestValue = {};
const loginReducer = (currentUser, action) => {
  switch(action.type) {
    case 'login':
      return action.userInput;
    case 'logout':
      return guestValue;
    default:
      throw new Error()
  }
}

export const UserContext = React.createContext();

const App = () => {

  const [user, dispatch] = useReducer(loginReducer, guestValue);

  const jwtToken = localStorage.jwtToken;

  //Homy Code: dont't touch
  if (jwtToken) {
    // setJWTToken(jwtToken);
    const decoded_jwtToken = jwt_decode(jwtToken);
    // store.dispatch({
    //   type: SET_CURRENT_USER,
    //   payload: decoded_jwtToken
    // });

    const currentTime = Date.now() / 1000;
    if (decoded_jwtToken.exp < currentTime) {
      localStorage.removeItem("jwtToken");
      dispatch({ userInput: guestValue, type: 'logout' });
      // store.dispatch(logout());
      window.location.href = "/";
    }
  }

  return (
    <UserContext.Provider value={{userState: user, userDispatch: dispatch}}>
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
            <Route exact path="/purchaseHistory" component={PurchaseHistory}/>
            <Route exact path="/profile" component={Profile} />
            {
              //Private Routes
            }
            <Route exact path="/addPerson" component={AddPerson} />
          
          </div>
        </Router>
      </Provider>
    </UserContext.Provider>
  );
}

export default App;
