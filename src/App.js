import React from "react";
import Temperature from "./Temperature";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <body>
        <div className="Weather-html">
          <h1 id="city"></h1>
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
            <a href="https://hopeful-euler-f54ff6.netlify.com" target="blank">
              {" "}
              Oper source code
            </a>{" "}
            by Simona Delogu
          </small>
        </div>
      </body>
    </div>
  );
}
