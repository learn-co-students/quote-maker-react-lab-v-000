import { combineReducers } from "redux";
import quoteReducer from "./quotes";

export default combineReducers({
  quotes: quoteReducer
});
