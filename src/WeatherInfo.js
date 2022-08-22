import React from "react";
import "./index.css";
import FormatedDate from "./FormatedDate";
import Units from "./Units";

export default function WeatherInfo(props) {
  return (
    <div>
      <h1>
        <ul className="text-capitalize">
          <li>{props.data.city}</li>
          <li>
            <FormatedDate date={props.data.date} />
          </li>
          <li>{props.data.description} </li>
        </ul>
      </h1>
      <br />
      <div className="row">
        <div className="col-6">
          <ul>
            <li>Humidity: {Math.round(props.data.humidity)} %</li>
            <li>Wind: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>

        <div className="col-1 icon">
          <img src={props.data.icon} alt="dataiconsearch" />
        </div>

        <div className="col-4">
          <span className="temperature">
            <Units celsius={props.data.temperature} />
          </span>
        </div>
      </div>
    </div>
  );
}
