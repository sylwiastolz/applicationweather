import React, { useState } from "react";
import "./index.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./Forecast.js";

<WeatherInfo />;
export default function Weather(props) {
  let [city, setCity] = useState(props.defaultCity);
  let [weather, setWeather] = useState({ ready: false });

  function displayWeather(response) {
    setWeather({
      ready: true,
      date: new Date(response.data.dt * 1000),
      coordinates: response.data.coord,
      city: response.data.name,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }
  function search() {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=58b3466d5113849cc0dbfb1ee306eb84&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
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

      <button>Search</button>
      <br />
      <br />
      <button>Weather in your city</button>
    </form>
  );
  if (weather.ready) {
    return (
      <div>
        <WeatherInfo data={weather} />
        {form}
        <WeatherForecast coordinates={weather.coordinates} />
      </div>
    );
  } else {
    search();
    return form;
  }
}
