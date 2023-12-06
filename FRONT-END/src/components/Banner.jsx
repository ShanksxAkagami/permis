
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Map from "../assets/map.png";
import Logo from "../assets/logo.png";





const Banner = () => {

  const [postalCode, setPostalCode] = useState('');


  return (
    <div className="banner">
      <div className="banner__content">

        <img src={Logo} alt="Logo" />
        <p className="banner__content__texte1">Tous les stages de récupération de points*</p>
        <p className="banner__content__texte2">Trouvez un stage et récupérez 4 points</p>

        <div className="search-bar">
          <input type="text" placeholder="Chercher un lieu ou un département" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} />
          <Link to={`/stages?postalCode=${postalCode}`}>
          <button type="button">
            <span role="img" aria-label="Rechercher">
              🔍
            </span>
          </button>
          </Link>
        </div>

      </div>
      <img src={Map} alt="map-iledefrance" className="Map" />
      <div className="banner__content__line">       
      <p className="line-text">* Stage volontaire de récupération de points, pour permis probatoire, composition pénale, peine complémentaire.</p>
      </div>

    </div>
  );
};

export default Banner;