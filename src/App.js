import React from "react";
import Temperature from "./Temperature";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="Weather-html">
        <h1 id="city">Tokyo</h1>
        <p id="date">Monday 16:00</p>
        <form id="enter-city">
          <input
            type="text"
            placeholder="enter city"
            id="city-input"
            autoComplete="off"
          />
          <input type="submit" value="search" />
        </form>
        <button id="current-Loc">current location</button>

        <Temperature />

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
    </div>
  );
}
