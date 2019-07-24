import * as actionTypes from "./actionTypes";
import { fromJS } from "immutable";

const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [], // fromJS defined this array as an immutable array
  page: 1,
  totalPage: 1
});

export default (state = defaultState, action) => {
  switch (action.type) {
    /* set in immutable does not change the object, but return an
     completely new object with updated field */
    case actionTypes.SEARCH_FOCUS:
      return state.set("focused", true);
    case actionTypes.SEARCH_BLUR:
      return state.set("focused", false);
    case actionTypes.MOUSE_ENTER:
      return state.set("mouseIn", true);
    case actionTypes.MOUSE_LEAVE:
      return state.set("mouseIn", false);
    case actionTypes.CHANGE_PAGE:
      return state.set("page", action.page);
    /* we cannot pass immutable array cannot set to be normal array
       so we need to convert normal array to immutable array
       using fromJS() */
    case actionTypes.CHANGE_LIST:
      // merge() can replace set().set().set()....
      return state.merge({
        list: fromJS(action.data),
        totalPage: action.totalPage
      });
    default:
      return state;
  }
};
