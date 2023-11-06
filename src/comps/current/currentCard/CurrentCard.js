import React from "react";

const CurrentCard = ({ currentWeatherCard }) => {
  return (
    <div>
      <h4>{currentWeatherCard.location.name}</h4>
      <div>
        <h1>{currentWeatherCard.current.temp_c} °C</h1>
        <img src={currentWeatherCard.current.condition.icon} alt="icon" />
        <p>{currentWeatherCard.current.condition.text}</p>
        <p>Last Updated: {currentWeatherCard.current.last_updated}</p>
      </div>
    </div>
  );
};

export default CurrentCard;
