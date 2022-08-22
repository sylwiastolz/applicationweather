import "./index.css";
import Weather from "./Weather";
import axios from "axios";
function App() {
  return (
    <div className="App">
      <p class="signature">
        <strong>
          {" "}
          Github
          <a
            class="gitlink"
            href="https://github.com/sylwiastolz/applicationweather"
            alt="site"
            target="blank"
          >
            Open-source
          </a>
          code by Sylwia Stolz
        </strong>
      </p>
    </div>
  );
}

export default App;
