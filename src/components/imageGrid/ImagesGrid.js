import React, { Component } from "react";
import { connect } from "react-redux";

import Button from "../button";
import "./style.css";
// import action phuc vu viec load api
import { fetchApi } from "../../actions";

class ImagesGrid extends Component {
  componentDidMount() {
    this.props.fetchApi();
  }

  render() {
    const { fetchApi, statusLoad, images } = this.props; // status la trang thai loading
    return (
      <div className="content">
        <section className="grid">
          {images.map(image => (
            <div
              key={image.id}
              className={`item item-${Math.ceil(image.height / image.width)}`}
            >
              {/* <Stats stats={imageStats[image.id]} /> */}
              <img src={image.urls.small} alt={image.user.username} />
            </div>
          ))}
        </section>
        <Button onClick={() => !statusLoad && fetchApi()} loading={statusLoad}>
          Loadmore
        </Button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    statusLoad: state.isLoading,
    images: state.data
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
