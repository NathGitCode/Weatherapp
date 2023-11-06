import React from "react";
import CurrentCard from "./currentCard/CurrentCard";

const Current = ({ currentWeather }) => {
  return (
    <div className="current-container">
      {currentWeather.map((currentWeatherCard, index) => (
        <CurrentCard key={index} currentWeatherCard={currentWeatherCard} />
      ))}
    </div>
  );
};

export default Current;
