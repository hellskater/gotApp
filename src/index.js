// CORE
import React from "react";
import ReactDOM from "react-dom";

// REDUX TOOLKIT
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { getTotals } from "./slices/cartSlice";

// INTERNAL
import App from "./App";

// REDUX STORE CONFIGURATION
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

store.dispatch(getTotals());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
