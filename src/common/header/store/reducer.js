import * as actionTypes from "./actionTypes";
import { fromJS } from "immutable";

const defaultState = fromJS({
  focused: false
});

export default (state = defaultState, action) => {
  if (action.type === actionTypes.SEARCH_FOCUS) {
    // set in immutable does not change the object, but return an
    // completely new object with updated field
    return state.set("focused", true);
  }
  if (action.type === actionTypes.SEARCH_BLUR) {
    return state.set("focused", false);
  }
  return state;
};
