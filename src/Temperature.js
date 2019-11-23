import React from "react";

export default function Temperature() {
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
            <span id="sky"></span>
          </li>
          <li>
            <span className="Temperature" id="temp">
              {" "}
            </span>
            <span className="Unit">
              {" "}
              <a id="celsius">°C</a> | <a id="fahrenheit">F</a>
            </span>
          </li>
        </ul>
      </div>
      <div className="Col-6">
        <ul className="Details">
          <li>
            Humidity <span id="humidity"></span>%
          </li>
          <li>
            Wind <span id="wind"></span>km/h
          </li>
        </ul>
      </div>
    </div>
  );
}
