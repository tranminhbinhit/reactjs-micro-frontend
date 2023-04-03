import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import { Counter } from "./components/Counter";

const App = () => (
  <div className="container">
    <div>Name: micro_counter</div>
    <Counter />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
