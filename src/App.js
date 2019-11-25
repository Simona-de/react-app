import React from "react";
import Temperature from "./Temperature.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Temperature city="Tokyo" />
      <br />
      <br />
      <br />
      <div className="row weather-forecast" id="forecast"></div>
      <small>
        <a href="https://github.com/Simona-de/react-appnp" target="blank">
          {" "}
          Oper source code
        </a>{" "}
        by Simona Delogu
      </small>
    </div>
  );
}
