import { createStore, applyMiddleware, compose } from "redux";
import rootReducers from "../reducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../saga";
// goi saga midderware
const sagaMiddleware = createSagaMiddleware();

const configStore = () => {
  const store = createStore(
    rootReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? compose(
          applyMiddleware(sagaMiddleware),
          window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
        )
      : applyMiddleware(sagaMiddleware)
  );
  sagaMiddleware.run(rootSaga)
  return store;
};

export default configStore;
