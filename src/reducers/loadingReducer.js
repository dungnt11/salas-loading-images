import { IMAGES } from "../constants";

let myReducer = (state = [1, 2, 3], action) => {
  switch (action.type) {
    case IMAGES.LOAD_SUCCESS:
      console.log([...state, action.data]);
      return [...state, action.data];
    default:
      return state;
  }
};

export default myReducer;
