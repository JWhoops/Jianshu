import React, { Component } from "react";
import { TopicWrapper, TopicItem } from "../style";
import { connect } from "react-redux";

class Topic extends Component {
  render() {
    const { list } = this.props;
    return (
      <TopicWrapper>
        {list.map(item => (
          <TopicItem key={item.get("id")}>
            <img className="topic-pic" alt="" src={item.get("imgUrl")} />
            {item.get("title")}
          </TopicItem>
        ))}
      </TopicWrapper>
    );
  }
}

const mapStateToProp = state => ({
  list: state.getIn(["home", "topicList"])
});
export default connect(
  mapStateToProp,
  null
)(Topic);
