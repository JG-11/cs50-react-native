import React from "react";
import "./styles.css";

export default function App(props) {
  return(
    <div className="App">
      <h1>{props.count}</h1>
    </div>
  )
}
