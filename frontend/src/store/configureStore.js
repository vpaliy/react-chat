import thunkMiddleware from "redux-thunk";
import { applyMiddleware, compose, createStore } from "redux";
import { createLogger } from "redux-logger";
import { routerMiddleware } from "connected-react-router";
import rootReducer from "@reducers";

const loggerMiddleware = createLogger();

const configureStore = (history, preloadedState) =>
  createStore(
    rootReducer(history),
    preloadedState,
    compose(
      applyMiddleware(
        routerMiddleware(history),
        thunkMiddleware,
        loggerMiddleware,
      )
    )
  );

export default configureStore;
