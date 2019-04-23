import { combineReducers } from "redux";

import loadingReducer from './loadingReducer';

const rootReducers = combineReducers({
  isLoading: loadingReducer
});

export default rootReducers;
