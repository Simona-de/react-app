import React, { useState } from "react";
import "./TemperatureC.css";
import CorrectedDate from "./CorrectedDate";
import axios from "axios";

export default function Temperature(props) {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.City);

  function handleResponse(response) {
    setWeather({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
      date: new Date(response.data.dt * 1000)
    });
  }

  if (weather.ready) {
    return (
      <div className="Weather-html">
        <h1 id="city">{props.city}</h1>
        <p id="date">
          <CorrectedDate date={weather.date} />
        </p>
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
        <div className="Row">
          <div className="Col-6">
            <ul>
              <li>
                <img src="{weather.icon}" alt="" id="icon" />
                <span id="sky">{weather.description}</span>
              </li>
              <li>
                <span className="Temperature" id="temp">
                  {weather.temperature}{" "}
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
                Humidity <span id="humidity">{weather.humidity}</span>%
              </li>
              <li>
                Wind <span id="wind">{weather.wind}</span>km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let Apikey = "7012c7fcda50068220d3e6f3e6ec7ff3";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${Apikey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Searching..";
  }
}
