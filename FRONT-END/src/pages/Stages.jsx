import React from "react";

import Banner from "../components/Banner";
import Slots from "../components/Slots";

import Pay from "../assets/cb.png";
import Payx3 from "../assets/cbx3.png";

const Stages = () => {
  return (
    <div className="stages">
      <Banner />
      <div className="stages__container">
        <p className="stages__container__route"> Accueil / Tous les stages de récupération de points en France * / Ile de France / Yvelines (78)</p>
        <h1>Stages de récupération de points dans les Yvelines (78)</h1>
        <p className="stages__container__text">Retrouvez tous les stages de récupération de points dans les Yvelines. En effectuant un stage, vous pouvez récupérer jusqu'à 4 points sur votre permis de conduire. Il y a 137 stages disponibles dans les Yvelines, à partir du 16 Juin. </p>
        <Slots />
        <div className="stages__container__info">
          <div className="stages__container__info__contact">
            <p className="phone-number"><i class="fas fa-phone"></i> 0 891 510 225</p>
            <p className="service">CONSEILS ET INSCRIPTION</p>
            <p>du <span>Lundi</span> au <span>Vendredi</span> de 9h à 18h</p>
          </div>
          <div className="stages__container__info__pay">
            <p>5 MOYENS DE PAIEMENT</p>
            <p><i></i> Paiement sécurisé</p>
            <img src={Pay} alt="pay-img" />
            <img src={Payx3} alt="payx3-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stages;