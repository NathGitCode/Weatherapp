import React from "react";

const CurrentCard = ({ currentWeatherCard }) => {
  return (
    <div>
      <h4>{currentWeatherCard.location.name}</h4>
      <div>
        <img src={currentWeatherCard.current.condition.icon} alt="icon" />
        <p>{currentWeatherCard.current.condition.text}</p>
      </div>
    </div>
  );
};

export default CurrentCard;
