import { createStore } from "redux";
import rootReducers from "../reducers";

const configStore = () => {
  const store = createStore(
    rootReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};

export default configStore;
