import React, { useReducer } from "react";
import "./App.css";
import Header from "./components/Layout/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Register from "./components/UserManagement/Register/Register";
import Login from "./components/UserManagement/Login/Login";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import Homepage from "./components/Homepage/Homepage";
import Profile from "./components/Profile/Profile";
import PurchaseHistory from "./components/PurchaseHistory/PurchaseHistory";

import jwt_decode from "jwt-decode";
import MyRegistration from "./components/MyRegistration/MyRegistration";
import MyShops from "./components/MyShops/MyShops";
import Shop from "./components/Shop/Shop";
import IncomingRegistrations from "./components/IncomingRegistration/IncomingRegistration";
import BookSearch from "./components/SearchResult/BookSearch/BookSearch";
import BookDescription from "./components/BookDescription/BookDescription";
import Cart from "./components/Cart/Cart";
import OrderComplete from "./components/OrderComplete/OrderComplete";
import NotificationPage from "./components/Notification/NotificationPage";
import SellerSearch from "./components/SearchResult/SellerSearch/SellerSearch";
import AdminHomePage from "./components/AdminPage/AdminHomePage/AdminHomePage";
import AdminSearchPage from "./components/AdminPage/AdminSearchPage/AdminSearchPage";

const guestValue = {};
const defaultCart = [];

const jwtToken = localStorage.jwtToken;
const currentCart = localStorage.cart;

const loginReducer = (currentUser, action) => {
  switch(action.type) {
    case 'login':
      return {
        user: action.userInput,
      };
    case 'logout':
      return guestValue;
    default:
      throw new Error()
  }
}

const cartReducer = (cart, action) => {
  switch(action.type) {
    case 'add to cart':
      return [...cart, action.selectedCopy];
    case 'remove from cart':
      return cart.filter(data => data !== action.selectedCopy)
    case 'clear cart':
      return cart;
    default:
      throw new Error()
  }
}

export const UserContext = React.createContext();
export const CartContext = React.createContext();

const App = () => {

  const [user, dispatch] = useReducer(loginReducer, guestValue);
  const [cart, cartDispatch] = useReducer(cartReducer, (currentCart && JSON.parse(currentCart)) || defaultCart);

  if (jwtToken) {
    const decoded_jwtToken = jwt_decode(jwtToken);
    if(JSON.stringify(user) === JSON.stringify({})) {
      dispatch({ userInput: decoded_jwtToken, type: 'login' });
    }

    const currentTime = Date.now() / 1000;
    if (decoded_jwtToken.exp < currentTime) {
      localStorage.removeItem("jwtToken");
      dispatch({ type: 'logout' });
      window.location.href = "/";
    }
  }

  return (
    <UserContext.Provider value={{userState: user, userDispatch: dispatch}}>
      <CartContext.Provider value={{cartState: cart, cartDispatch: cartDispatch}}>
        <Router>
          <div className="App">
            <Header />
            
            <Route exact path="/" component={Homepage} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/about" component={AboutUs} />
            <Route exact path="/contact" component={ContactUs} />
            <Route exact path="/purchaseHistory" component={PurchaseHistory}/>
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/my-shops" component={MyShops} />
            <Route exact path="/shop" component={Shop} />
            <Route exact path="/my-registration" component={MyRegistration} />
            <Route exact path="/incoming-reg" component={IncomingRegistrations} />
            <Route exact path="/book-search" component={BookSearch} />
            <Route exact path="/book-description" component={BookDescription} />
            <Route exact path="/cart" component={Cart}/>
            <Route exact path="/order-complete" component={OrderComplete}/>
            <Route exact path="/notification" component={NotificationPage}/>
            <Route exact path="/seller-search" component={SellerSearch}/>
            <Route exact path="/admin-home" component={AdminHomePage}/>
            <Route exact path="/admin-search" component={AdminSearchPage}/>

          </div>
        </Router>
      </CartContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
