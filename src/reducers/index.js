import { combineReducers } from "redux";
import userReduc from "./usersReduc";

export default combineReducers({
  users: userReduc,
});
