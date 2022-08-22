import React, { useState } from "react";
import "./index.css";
import axios from "axios";
import Oneday from "./Oneday";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function displayForecast(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    return (
      <div className="row">
        {forecast.map(function (dailyForecast, index) {
          if (index < 4) {
            return (
              <div className="col weekday" key={index}>
                <Oneday data={dailyForecast} />
              </div>
            );
          }
        })}
      </div>
    );
  } else {
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lon;
    let forecastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=58b3466d5113849cc0dbfb1ee306eb84&units=metric`;
    axios.get(forecastUrl).then(displayForecast);
    return null;
  }
}
