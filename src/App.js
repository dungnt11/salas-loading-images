import React, { Component, Fragment } from "react";

import Header from "./components/header";
import ImagesGrid from "./components/imageGrid";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <ImagesGrid />
      </Fragment>
    );
  }
}

export default App;
