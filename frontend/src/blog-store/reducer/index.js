import { combineReducers } from "redux";
import { userReducer } from "../reducer/userReducer";

const reducers = combineReducers({
  user_data: userReducer,
});

export default reducers;
