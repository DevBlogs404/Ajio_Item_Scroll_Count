import { createContext } from "react";

export const UserContext = createContext();

export const initialState = {
  itemCount: 0,
  // totalCount: 24,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "Increment_Count":
      return {
        ...state,
        itemCount: state.itemCount + 1,
      };
    case "Decrement_Count":
      return {
        ...state,
        itemCount:
          state.itemCount <= 0 ? (state.itemCount = 0) : state.itemCount - 1,
      };
    default:
      return state;
  }
};
