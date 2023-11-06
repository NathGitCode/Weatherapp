import React from "react";
import "./NavBar.css";

const NavBar = ({ setLocation }) => {
  const handleOnClick = (e) => {
    setLocation(e.value);
  };

  return (
    <div className="nav-container">
      <div className="countries">
        <h5>United Kingdom</h5>
        <select id="dropdown" onChange={(e) => handleOnClick(e.target)}>
          <option value="London">London</option>
          <option value="Manchester">Manchester</option>
          <option value="Liverpool">Liverpool</option>
        </select>
      </div>
      <div className="countries">
        <h5>France</h5>
        <select id="dropdown" onChange={(e) => handleOnClick(e.target)}>
          <option>London</option>
          <option>Manchester</option>
          <option>Liverpool</option>
        </select>
      </div>
      <div className="countries">
        <h5>Germany</h5>
        <select id="dropdown" onChange={(e) => handleOnClick(e.target)}>
          <option>London</option>
          <option>Manchester</option>
          <option>Liverpool</option>
        </select>
      </div>
      <div className="countries">
        <h5>USA</h5>
        <select id="dropdown" onChange={(e) => handleOnClick(e.target)}>
          <option>London</option>
          <option>Manchester</option>
          <option>Liverpool</option>
        </select>
      </div>
    </div>
  );
};

export default NavBar;
