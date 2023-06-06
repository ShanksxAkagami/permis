import React from 'react';

import Stage from "../assets/section-stage.png";

const SectionHome = () => {
  return (
    <div className="section-home">
      <div className="section-home__info">
        <div className="section-home__info__card">
          <i class="fa-solid fa-face-smile"></i>
          <h3>98% Satisfaits</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam
            libero ac urna commodo, quis efficitur lectus luctus.{' '}
            <a href="#">En savoir plus</a>
          </p>
        </div>
        <div className="section-home__info__card">
          <i class="fas fa-medal"></i>
          <h3>Stages agréés</h3>
          <p>
            Sed vehicula urna quis ultricies fermentum. Mauris maximus felis
            id tellus fringilla, at bibendum lectus tincidunt.{' '}
            <a href="#">Voir les dates</a>
          </p>
        </div>
        <div className="section-home__info__card">
          <i class="fas fa-credit-card"></i>
          <h3>Paiement sécurisé</h3>
          <p>
            Fusce in ipsum sagittis, consectetur massa vitae, vulputate lectus.
            Quisque tristique mauris id volutpat efficitur.{' '}
            <a href="#">Réserver maintenant</a>
          </p>
        </div>
        <div className="section-home__info__card">
          <i class="fas fa-phone"></i>
          <h3>Service d’experts</h3>
          <p>
            Nullam sit amet turpis efficitur, vestibulum ipsum ac, aliquet
            quam. Aliquam convallis risus sed eros facilisis, at scelerisque
            lectus efficitur. <a href="#">Lire les témoignages</a>
          </p>
        </div>
      </div>



      <div className="section-home__stages">
        <h2>Titre 2</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          volutpat ullamcorper lacus, a aliquam lectus. Sed at leo ac diam
          consequat suscipit. Nulla convallis felis sed felis feugiat, nec
          molestie justo vulputate. <a href="#">En savoir plus</a>
        </p>
        <button className="orange-button">
          <span>Acheter un stage</span>
        </button>
        <img src={Stage} alt="stages" />
      </div>



      <div className="section-home__permis">
        <h2>Titre 3</h2>
        <p>
          Fusce ultricies leo a justo ullamcorper, vitae scelerisque velit
          lacinia. Maecenas tincidunt lobortis mauris, a fringilla turpis
          hendrerit sed. Vivamus bibendum purus vel volutpat feugiat.{' '}
          <a href="#">Voir les offres</a>
        </p>
        <button className="orange-button">
          <span>Réserver maintenant</span>
        </button>
      </div> 
    </div>
  );
};

export default SectionHome;

