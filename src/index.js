import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Weather";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="container wholepage">
      <Weather defaultCity="New York" />
      <br />
      <App />
    </div>
  </React.StrictMode>
);

reportWebVitals();
