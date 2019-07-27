import { fromJS } from "immutable";

const defaultState = fromJS({
  topicList: [
    {
      id: 1,
      title: "社会热点",
      imgUrl:
        "https://n.sinaimg.cn/sinacn13/448/w1024h1024/20180504/7b5f-fzyqqiq8228305.jpg"
    },
    {
      id: 2,
      title: "随便热点",
      imgUrl:
        "https://n.sinaimg.cn/sinacn13/448/w1024h1024/20180504/7b5f-fzyqqiq8228305.jpg"
    }
  ]
});

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
