import React from 'react';

import Map from "../assets/map.png";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__content">
        <h1>Points Auto</h1>
        <div className="search-bar">
          <input type="text" placeholder="Chercher un lieu ou un département" />
          <button type="button">
            <span role="img" aria-label="Rechercher">
              🔍
            </span>
          </button>
        </div>
      </div>
      <img src={Map} alt="map-iledefrance" />
    </div>
  );
};

export default Banner;

