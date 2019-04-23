import React, { Component } from "react";
import { connect } from "react-redux";

import Button from "../button";
// import action phuc vu viec load api
import { fetchApi } from "../../actions";

class ImagesGrid extends Component {
  componentDidMount() {
    this.props.fetchApi();
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
    fetchApi: () => dispatch(fetchApi())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImagesGrid);
