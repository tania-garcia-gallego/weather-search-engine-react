import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';
import './Forecast.css';

export default function Forecast() {
  return (
    <div className="Forecast">
      <div class="row">
          <ul>
          <li id="icon">
 <ReactAnimatedWeather
        icon="CLEAR_DAY"
        color="grey"
        size={52}
        animate="true"
      /></li>
       <li id="icon">
      <ReactAnimatedWeather
        icon="CLOUDY"
        color="grey"
        size={52}
        animate="true"
      /></li>
       <li id="icon">
      <ReactAnimatedWeather
        icon="WIND"
        color="grey"
        size={52}
        animate="true"
      /></li>
       <li id="icon">
      <ReactAnimatedWeather
        icon="FOG"
        color="grey"
        size={52}
        animate="true"
      /></li>
       <li id="icon">
      <ReactAnimatedWeather
        icon="SNOW"
        color="grey"
        size={52}
        animate="true"
      /></li>
</ul>
      </div>
    </div>
  );
}