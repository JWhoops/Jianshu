import React, { Component } from "react";
import Header from "./common/header";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./page/home";
import Detail from "./page/detail";

class App extends Component {
  render() {
    return (
      // provider can automatically get data from store
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={Home} />
            <Route path="/detail" exact component={Detail} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
