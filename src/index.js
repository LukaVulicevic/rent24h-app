import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { GlobalStyles } from "./global-styles";
import {FirebaseContextProvider} from './context/firebase'
import {CartContextProvider} from './context/cart'

ReactDOM.render(
  <>
    <FirebaseContextProvider>
      <CartContextProvider>
        <App />
        <GlobalStyles />
      </CartContextProvider>
    </FirebaseContextProvider>
  </>,
  document.getElementById("root")
);