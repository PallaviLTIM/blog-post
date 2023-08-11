import { createStore } from "redux";
import user_data from "./reducer/index";

const store = createStore(user_data);

export default store;
