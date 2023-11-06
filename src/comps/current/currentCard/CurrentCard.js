import React from "react";

const CurrentCard = ({ currentWeatherCard }) => {
  return (
    <div>
      <p>{currentWeatherCard.location.name}</p>
    </div>
  );
};

export default CurrentCard;
