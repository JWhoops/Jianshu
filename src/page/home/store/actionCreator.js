import axios from "axios";
import * as actionType from "./actionType";
import { fromJS } from "immutable";
const changHomeData = result => ({
  type: actionType.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  recommendList: result.recommendList
});

const addHomeList = (list, nextPage) => ({
  type: actionType.ADD_ARTICLE_LIST,
  list: fromJS(list), // convert normal array to immutable array
  nextPage
});

export const getHomeInfo = () => {
  return dispatch => {
    axios.get("/api/home.json").then(res => {
      const result = res.data.data;
      dispatch(changHomeData(result));
    });
  };
};

export const getMoreList = page => {
  return dispatch => {
    axios.get("/api/homeList.json?page=" + page).then(res => {
      const result = res.data.data;
      dispatch(addHomeList(result, page + 1));
    });
  };
};

export const toggleTopShow = show => ({
  type: actionType.TOGGLE_SCROLL_TOP,
  show
});
