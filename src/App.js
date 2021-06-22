
import './App.css';


import Form from "./Form.js";
import Footer from "./Footer";
import CityDisplay from "./CityDisplay";
import WeatherDisplay from "./WeatherDisplay.js";
import Forecast from "./Forecast.js";

import "./WeatherDisplay.css";
import "./Form.css";
import "./CityDisplay.css";
import "./Footer.css";
import "./Forecast.css";
import "./App.css";


export default function App() {
  return (
    <div>
      <div class="card">
        <Form />
        <CityDisplay />
        <WeatherDisplay />
        <Forecast />
        <Footer />
      </div>
    </div>
  );
}


