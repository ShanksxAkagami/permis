import React from 'react';

import StageForm from '../components/StageForm';
import Map from "../assets/capturetest.PNG";

const StageReservation = () => {
  return (
    <div className="stage-reservation">
        <h1>Stage de récupération de points du lundi 17 et mardi 18 juillet 2023</h1>
        <div className="stage-reservation__content">
            <div>
              <img src={Map} alt="map-iledefrance" className="Map" />
            </div>
            <StageForm />
        </div>
    </div>
  );
};

export default StageReservation;