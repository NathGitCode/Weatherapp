import React from "react";
import CurrentCard from "./currentCard/CurrentCard";

const Current = ({ currentWeather }) => {
  console.log(currentWeather);
  return (
    <div>
      {currentWeather.map((currentWeatherCard, index) => (
        <CurrentCard key={index} currentWeatherCard={currentWeatherCard} />
      ))}
    </div>
  );
};

export default Current;
