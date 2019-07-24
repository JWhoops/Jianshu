import React, { Component } from "react";
import { connect } from "react-redux";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList
} from "./style";
import { actionCreators } from "./store";
import { CSSTransition } from "react-transition-group";

class Header extends Component {
  getListArea = () => {
    // destructuring assignment
    const {
      focused,
      list,
      page,
      totalPage,
      mouseIn,
      handleMouseEnter,
      handleMouseLeave,
      hanldeChangePage
    } = this.props;
    const newList = list.toJS(); // convert list to js array since it was an immutable array
    const pageList = [];
    /* init rendering will run the loop, but ajax haven't got data yet,
       so don't run the loop until data is acquired */
    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        );
      }
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
              onClick={() => hanldeChangePage(page, totalPage, this.spinIcon)}
            >
              <i
                ref={
                  /*ref attribute can get current dom*/
                  icon => {
                    this.spinIcon = icon;
                  }
                }
                className="iconfont spin"
              >
                &#xe606;
              </i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>{pageList}</SearchInfoList>
        </SearchInfo>
      );
    } else {
      return null;
    }
  };

  render() {
    const { focused, handleInputBlur, handleInputFocus, list } = this.props;
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition in={focused} timeout={200} classNames="slide">
              <NavSearch
                className={focused ? "focused" : ""}
                onFocus={() => {
                  handleInputFocus(list);
                }}
                onBlur={handleInputBlur}
              />
            </CSSTransition>
            <i className={focused ? "focused iconfont zoom" : "iconfont zoom"}>
              &#xe60b;
            </i>
            {this.getListArea(focused)}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="reg">注册</Button>
          <Button className="writting">
            <i className="iconfont">&#xe615;</i>
            写文章
          </Button>
        </Addition>
      </HeaderWrapper>
    );
  }
}

//associate state and this.props
const mapStateToprops = state => {
  return {
    // because of immutable.js, now use get method
    // focused: state.get("header").get("focused")
    focused: state.getIn(["header", "focused"]),
    list: state.getIn(["header", "list"]),
    page: state.getIn(["header", "page"]),
    mouseIn: state.getIn(["header", "mouseIn"]),
    totalPage: state.getIn(["header", "totalPage"])
  };
};
// dispatch allows component to update data in store
const mapDispatchToprops = dispatch => {
  return {
    /* define methods here in order to communicate
       with state and reducer*/
    handleInputFocus(list) {
      list.size === 0 && dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },
    hanldeChangePage(page, totalPage, spin) {
      // parse number from degree string
      let originAngle = spin.style.transform.replace(/[^0-9]/gi, "");
      originAngle = originAngle ? parseInt(originAngle, 10) : 0;
      spin.style.transform = "rotate(" + (originAngle + 360) + "deg)";
      page < totalPage
        ? dispatch(actionCreators.changePage(page + 1))
        : dispatch(actionCreators.changePage(1));
    }
  };
};

export default connect(
  mapStateToprops,
  mapDispatchToprops
)(Header);
