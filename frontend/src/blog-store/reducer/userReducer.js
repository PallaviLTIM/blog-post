import { ActionTypes } from "../../utils/Constants";
const initialState = [];

export const userReducer = (state = initialState, action) => {
  //   console.log(ActionTypes.ADD_USER);
  switch (action.type) {
    case ActionTypes.ADD_USER:
      const temp = [...state];
      temp.push(action.payload);
      state = action.payload;
      //   console.log(action.payload);
      return state;
    case ActionTypes.REMOVE_USER:
      if (state.email === action.payload.email) {
        const temp = {};
        state = temp;
      }
      return state;
    default:
      return state;
  }
};
