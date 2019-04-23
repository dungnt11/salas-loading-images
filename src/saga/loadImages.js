import { put, call, select, takeLatest } from "redux-saga/effects";

import { fetchImages } from "../api";
import { getImagesError, getImagesSuccess } from "../actions";
import { IMAGES } from '../constants';
// const getCurrentPage = ...

export function* getApi() {
  try {
    let imgs = yield call(fetchImages, 1);
    yield put(getImagesSuccess(imgs));
  } catch (err) {
    yield put(getImagesError(err));
  }
} // get api from api/index.js

export default function* watchFetchApi() {
  yield takeLatest(IMAGES.FETCH, getApi)
}
