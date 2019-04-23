import React, { Component, Fragment } from "react";
import { Provider } from "react-redux";

import Header from "./components/header";
import ImagesGrid from "./components/imageGrid";
import configStore from './store';

const store = configStore()
class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Fragment>
          <Header />
          <ImagesGrid />
        </Fragment>
      </Provider>
    );
  }
}

export default App;
