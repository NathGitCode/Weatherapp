import { React, useState, useEffect } from "react";
import { getWeatherData } from "./utils";
import "./App.css";
import Current from "./comps/current/Current";

function App() {
  const [currentWeather, setCurrentWeather] = useState([]);
  useEffect(() => {
    const fetchCurrentData = async () => {
      const response = await getWeatherData();
      setCurrentWeather([response]);
    };
    fetchCurrentData();
  }, []);
  console.log(currentWeather);
  return (
    <div className="App">
      <Current currentWeather={currentWeather} />
    </div>
  );
}

export default App;
