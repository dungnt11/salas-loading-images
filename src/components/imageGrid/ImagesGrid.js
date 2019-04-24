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
    const { fetchApi, statusLoad } = this.props; // status la trang thai loading
    return (
      <div className="content">
        <section className="grid">
          <Button
            onClick={() => !statusLoad && fetchApi()}
            loading={statusLoad}
          >
            Loadmore
          </Button>
        </section>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    statusLoad: state.isLoading
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
