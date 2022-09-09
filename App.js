import React from "react"
import Weather from "./weather.json"


function App() {

  console.log(Weather)

  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{Weather.query.results.channel.location.city}, {Weather.query.results.channel.location.country}</p>
            <p className="location-description">{Weather.query.results.channel.item.title}</p>
          </div>
          <div className="temp">
            <h1>{Weather.query.results.channel.item.condition.temp}°F
            </h1>
          </div>
          <div className="description">
            <p>{Weather.query.results.channel.item.condition.text}</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p className="bold">{Weather.query.results.channel.item.forecast[0].high}°F</p>
            <p>High</p>
          </div>
          <div className="humidity">
            <p className="bold">{Weather.query.results.channel.item.forecast[0].low}°F</p>
            <p>Low</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p className="bold">{Weather.query.results.channel.atmosphere.pressure} mb</p>
            <p>Pressure</p>
          </div>
          <div className="humidity">
            <p className="bold">{Weather.query.results.channel.atmosphere.humidity}%</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p className="bold">{Weather.query.results.channel.wind.speed} MPH</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
