import React, { useState } from "react";

export default function Temperature(props) {
  const [unit, setUnit] = useState("metrics");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div>
        <span className="Temperature" id="temp">
          {Math.round(props.celsius)}{" "}
        </span>
        <span className="Unit">
          {" "}
          <a href="*">°C</a> |{" "}
          <a href="*" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <span className="Temperature" id="temp">
          {Math.round(fahrenheit())}{" "}
        </span>
        <span className="Unit">
          {" "}
          <a href="*" onClick={showCelsius}>
            °C
          </a>{" "}
          | <a id="fahrenheit">°F</a>
        </span>
      </div>
    );
  }
}
