import { IMAGES } from "../constants";

let myReducer = (state = [], action) => {
  switch (action.type) {
    case IMAGES.LOAD_SUCCESS:
      return [...state, ...action.data];
    default:
      return state;
  }
};

export default myReducer;
