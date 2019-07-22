import * as actionTypes from "./actionTypes";
import { fromJS } from "immutable";

const defaultState = fromJS({
  focused: false,
  list: [] // fromJS defined this array as an immutable array
});

export default (state = defaultState, action) => {
  switch (action.type) {
    /* set in immutable does not change the object, but return an
     completely new object with updated field */
    case actionTypes.SEARCH_FOCUS:
      return state.set("focused", true);
    case actionTypes.SEARCH_BLUR:
      return state.set("focused", false);
    /* we cannot pass immutable array cannot set to be normal array
       so we need to convert normal array to immutable array
       using fromJS() */
    case actionTypes.CHANGE_LIST:
      return state.set("list", fromJS(action.data.data));
    default:
      return state;
  }
};
