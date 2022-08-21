import React, { useState } from "react";
import "./index.css";
import axios from "axios";
import FormatedDate from "./FormatedDate";
export default function Weather() {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState({ ready: false });

  function displayWeather(response) {
    setWeather({
      ready: true,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=58b3466d5113849cc0dbfb1ee306eb84&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function newCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form className="console" onSubmit={handleSubmit}>
      <input
        onChange={newCity}
        type="search"
        placeholder="Enter name of the city"
        autoComplete="of"
      />
      <br />
      <br />
      <button>Search</button>
      <br />
      <br />
      <button>Weather in your city</button>
    </form>
  );

  if (weather.ready) {
    return (
      <div>
        <h1>
          <ul className="text-capitalize">
            <li>{weather.city}</li>
            <li>
              <FormatedDate date={weather.date} />
            </li>
            <li>{weather.description} </li>
          </ul>
        </h1>
        <br />
        <div className="row">
          <div className="col-6">
            <ul>
              <li>Humidity: {Math.round(weather.humidity)} %</li>
              <li>Wind: {Math.round(weather.wind)} km/h</li>
            </ul>
          </div>

          <div className="col-1">
            <img src={weather.icon} alt="weathericonsearch" />
          </div>

          <div className="col-1"></div>
          <div className="col-3">
            <span className="temperature">
              {Math.round(weather.temperature)}°C
            </span>
          </div>
        </div>
        {form}
      </div>
    );
  } else {
    return form;
  }
}
