import { IMAGES } from "../constants";

const isLoading = (state = true, action) => {
  switch (action.type) {
    case IMAGES.LOAD_SUCCESS:
      return false;
    default:
      return true;
  }
}; // load thanh cong return true

export default isLoading;
