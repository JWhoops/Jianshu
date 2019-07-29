import React, { Component } from "react";
import Header from "./common/header";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./page/home";
import Detail from "./page/detail/loadable.js";
import Login from "./page/login";
import Write from "./page/write";

class App extends Component {
  render() {
    return (
      // provider can automatically get data from store
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/write" exact component={Write} />
            <Route path="/detail/:id" exact component={Detail} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
