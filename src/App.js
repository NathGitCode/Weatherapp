import { React, useState, useEffect } from "react";
import { getWeatherData } from "./utils";
import "./App.css";
import Current from "./comps/current/Current";
import LocationInput from "./comps/locationInput/LocationInput";

function App() {
  const [currentWeather, setCurrentWeather] = useState([]);
  const [location, setLocation] = useState("London");
  useEffect(() => {
    const fetchCurrentData = async () => {
      const response = await getWeatherData(location);
      setCurrentWeather([response]);
    };
    fetchCurrentData();
  }, [location]);
  console.log(currentWeather);
  return (
    <div className="App">
      <LocationInput location={location} setLocation={setLocation} />
      <Current currentWeather={currentWeather} />
    </div>
  );
}

export default App;
