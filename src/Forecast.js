import React from "react";
import "./index.css";
import axios from "axios";

export default function forecast(props) {
  function displayForecast(response) {
    console.log(response.data);
  }

  let lon = props.coordinates.lon;
  let lat = props.coordinates.lon;
  let forecastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=58b3466d5113849cc0dbfb1ee306eb84&units=metric`;
  axios.get(forecastUrl).then(displayForecast);
  console.log(forecastUrl);
  return (
    <div className="row">
      <div className="col weekday">
        <div>monday</div>
        <div>img</div>
        <div>19°C|21°C</div>
      </div>
    </div>
  );
}
