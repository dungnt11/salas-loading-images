import React, { Component } from "react";

import Button from "../button";
import { connect } from "react-redux";
// test api
import { fetchImages } from "../../api";

class ImagesGrid extends Component {
  componentDidMount() {
    fetchImages(1).then(res => console.log(res));
  }
  constructor(props) {
    super(props);
    console.log(this.props.test);
  }
  render() {
    return (
      <div className="content">
        <section className="grid" />
        <Button loading={false}>Loadmore</Button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    test: state.isLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    //
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImagesGrid);
