import React, { useState } from "react";
export default function Units(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div>
        {Math.round(props.celsius)}
        <span className="linkTemp">
          °C|
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheitTemp = (props.celsius * 9) / 5 + 32;
    return (
      <div>
        {Math.round(fahrenheitTemp)}
        <span className="linkTemp">
          <a href="/" onClick={showCelsius}>
            °C{" "}
          </a>
          |°F
        </span>
      </div>
    );
  }
}
