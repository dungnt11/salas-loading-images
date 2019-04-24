import { combineReducers } from "redux";

import loadingReducer from "./loadingReducer";
import currentPage from "./currentPage";
import isLoading from "./isLoading";

const rootReducers = combineReducers({
  data: loadingReducer,
  isLoading,
  currentPage
});

export default rootReducers;
