import React from "react";

export default function Oneday(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }
  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[day];
  }

  return (
    <div>
      <div>{day()}</div>
      <div>
        <img src={props.data.icon} alt="dataiconsearch" />
      </div>
      <div>
        {maxTemp()}°C|{minTemp()}°C
      </div>
    </div>
  );
}
