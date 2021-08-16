import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import personReducer from "./personReducer";
import securityReducer from "./securityReducer";

export default combineReducers({
  errors: errorReducer,
  person: personReducer,
  security: securityReducer
});

