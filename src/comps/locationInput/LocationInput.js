import React, { useState } from "react";

const LocationInput = ({ location, setLocation }) => {
  const [tempState, setTempState] = useState("");
  const [countryState, setCountryState] = useState("");

  const handleChange = (e) => {
    setTempState(e.target.value);
  };

  const handleCountry = (e) => {
    setCountryState(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLocation(tempState || countryState);
    setTempState("");
    setCountryState("");
  };

  console.log(tempState);
  console.log(location);
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="inputs"
          type="text"
          placeholder="City"
          value={tempState}
          onChange={(e) => handleChange(e)}
        />
        <input
          className="inputs"
          type="text"
          placeholder="Country"
          value={countryState}
          onChange={(e) => handleCountry(e)}
        />
        <input className="buttons" type="submit" value="Show Weather" />
      </form>
    </div>
  );
};

export default LocationInput;
