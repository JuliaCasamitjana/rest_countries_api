import React from "react";
import ReactDOM from "react-dom";
import "./styles/styles.scss";
import AppRouter from "./router/AppRouter";
import { createStore } from "redux";
import modeReducer from "./reducers/mode";
import { Provider } from "react-redux";
import "normalize.css/normalize.css";

const store = createStore(
  modeReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const jsx = (
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>
);

ReactDOM.render(jsx, document.getElementById("root"));
