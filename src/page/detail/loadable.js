import Loadable from "react-loadable";
import React from "react";
const LoadableComponent = Loadable({
  loader: () => import("./"),
  loading() {
    // this method is used for display is loading
    return <div>正在加载</div>;
  }
});

export default () => <LoadableComponent />;
