import React, { Component } from "react";
import { connect } from "react-redux";
import { HomeWrapper, HomeLeft, HomeRight, BackToTop } from "./style";
import Topic from "./components/Topic";
import Writer from "./components/Writer";
import Recommend from "./components/Recommend";
import List from "./components/List";
import { actionCreator } from "./store";

class Home extends Component {
  handleScrollTop() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            alt=""
            className="banner-img"
            src="//upload.jianshu.io/admin_banners/web_images/4680/f3832b8ec185f3772a31960a2494964132f29ce0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
          />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        {this.props.showScroll ? (
          <BackToTop onClick={this.handleScrollTop}>顶部</BackToTop>
        ) : null}
      </HomeWrapper>
    );
  }

  bindEvents() {
    window.addEventListener("scroll", this.props.changeScrollTopShow);
  }
  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.props.changeScrollTopShow);
  }
}
const mapDispatch = dispatch => ({
  changeHomeData() {
    const action = actionCreator.getHomeInfo();
    dispatch(action);
  },
  changeScrollTopShow() {
    if (document.documentElement.scrollTop > 100)
      dispatch(actionCreator.toggleTopShow(true));
    else dispatch(actionCreator.toggleTopShow(false));
  }
});

// don't forget to wrap function body with ()
const mapState = state => ({
  showScroll: state.getIn(["home", "showScroll"])
});

export default connect(
  mapState,
  mapDispatch
)(Home);
