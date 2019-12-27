import { combineReducers } from "redux";
import message from "./modules/AddToDo/reducer/reducer";

const rootReducer = combineReducers({
  message
});

export default rootReducer;
