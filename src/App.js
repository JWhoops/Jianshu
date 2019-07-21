import React, { Component } from "react";
import Header from "./common/header";
import store from "./store";
import { Provider } from "react-redux";

class App extends Component {
  render() {
    return (
      // provider can automatically get data from store
      <Provider store={store}>
        <Header />
      </Provider>
    );
  }
}

export default App;
