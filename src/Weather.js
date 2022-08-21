import React from "react";
import "./index.css";
import axios from "axios";

export default function Weather() {
  return (
    <div classNameName="wholepage">
      <h1>
        <ul>
          <li>New York</li>
          <li>Monday, 05.09.2023</li>
          <li>Rainy</li>
        </ul>
      </h1>

      <div className="row">
        <div className="col-5">
          <ul>
            <li>Humidity:60%</li>
            <li>Wind:21 km/h</li>
          </ul>
        </div>

        <div className="col-2">
          <img className="picture" src="#" alt="weatherpicture" />
        </div>
        <div className="col-5">
          <span className="temperature">
            <span className="temp">31 C</span>
          </span>
        </div>
      </div>

      <form className="console">
        <input
          type="search"
          placeholder="Enter name of the city"
          autoComplete="of"
        />
        <input className="button" type="submit" value="Search" />
        <br />
        <input className="button" type="submit" value="Weather in your city" />
      </form>
    </div>
  );
}
