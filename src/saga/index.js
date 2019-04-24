import { all } from "redux-saga/effects";
import watchFetchApi from "./loadImages";

let rootsaga = function*() {
  yield all([watchFetchApi()]);
};

export default rootsaga;
