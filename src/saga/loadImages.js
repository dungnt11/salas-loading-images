import { put, call, select, takeLatest } from "redux-saga/effects";

import { fetchImages } from "../api";
import { getImagesError, getImagesSuccess } from "../actions";
import { IMAGES } from "../constants";
export const getCurrentPage = state => state.currentPage;

export function* getApi() {
  try {
    let currentPage = yield select(getCurrentPage);
    let imgs = yield call(fetchImages, currentPage);
    yield put(getImagesSuccess(imgs));
  } catch (err) {
    yield put(getImagesError(err));
  }
} // get api from api/index.js

export default function* watchFetchApi() {
  yield takeLatest(IMAGES.FETCH, getApi);
}
