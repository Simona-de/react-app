import React from "react";
import App from "./App.css";
import axios from "axios";

export default function Temperature() {
  const Apikey = "7012c7fcda50068220d3e6f3e6ec7ff3";
  return (
    <div className="Row">
      <div className="Col-6">
        <ul>
          <li>
            <img
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt=""
              id="icon"
            />
            <span id="sky">clear Sky</span>
          </li>
          <li>
            <span className="Temperature" id="temp">
              25{" "}
            </span>
            <span className="Unit">
              {" "}
              <a id="celsius">°C</a> | <a id="fahrenheit">°F</a>
            </span>
          </li>
        </ul>
      </div>
      <div className="Col-6">
        <ul className="Details">
          <li>
            Humidity <span id="humidity">65</span>%
          </li>
          <li>
            Wind <span id="wind">2</span>km/h
          </li>
        </ul>
      </div>
    </div>
  );
}
