import React, { useState } from "react";
import "./TemperatureC.css";
import CorrectedDate from "./CorrectedDate";
import Celsius from "./Celsius";
import axios from "axios";

export default function Temperature(props) {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.city);

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
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "7012c7fcda50068220d3e6f3e6ec7ff3";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weather.ready) {
    return (
      <div className="Weather-html">
        <h1 id="city">{weather.city}</h1>
        <p id="date">
          <CorrectedDate date={weather.date} />
        </p>
        <form id="enter-city" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="enter city"
            id="city-input"
            autoComplete="off"
            onChange={handleCityChange}
          />
          <input type="submit" value="search" />
        </form>

        <div className="Row">
          <div className="Col-6">
            <ul>
              <li>
                <img
                  src="  https://openweathermap.org/img/wn/{weather.icon}@2x.png "
                  alt=""
                  id="icon"
                />
                <span id="sky">{weather.description}</span>
              </li>
              <li>
                <Celsius celsius={weather.temperature} />
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
    search();
    return "Searching..";
  }
}
