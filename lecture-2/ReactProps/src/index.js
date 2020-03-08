import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");

let count = 0;
ReactDOM.render(
  <React.StrictMode>
    <App count={count} />
  </React.StrictMode>,
  rootElement
);
