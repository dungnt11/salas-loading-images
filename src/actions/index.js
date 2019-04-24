import { IMAGES } from "../constants";

const getImagesError = err => ({
  type: IMAGES.LOAD_FAIL,
  err
});

const getImagesSuccess = data => ({
  type: IMAGES.LOAD_SUCCESS,
  data
});

const fetchApi = () => ({
  type: IMAGES.FETCH
});

export { getImagesError, getImagesSuccess, fetchApi };
