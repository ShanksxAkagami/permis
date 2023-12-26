import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';



const Slots = () => {
  const stagess = [
    {
      id: 640778,
      prix: 230,
      adresse: 'Rue Mayet',
      ville: 'Paris 6',
      date: 'Ven 16 et Sam 17 Juin',
      placesDisponibles: true,
      numeroPrefectoral: '23R130750010000013',
    },
    {
      id: 640778,
      prix: 230,
      adresse: 'Rue Mayet',
      ville: 'Paris 6',
      date: 'Ven 16 et Sam 17 Juin',
      placesDisponibles: true,
      numeroPrefectoral: '23R130750010000013',
    },
    {
      id: 640778,
      prix: 230,
      adresse: 'Rue Mayet',
      ville: 'Paris 6',
      date: 'Ven 16 et Sam 17 Juin',
      placesDisponibles: true,
      numeroPrefectoral: '23R130750010000013',
    },
  ];






  ///////////////////////////////


  const { position } = useParams();
  const [stages, setStages] = useState([]);

  useEffect(() => {
    // Effectuez une requête vers le backend en utilisant les données extraites.
    fetch(`http://localhost:3000/stages?postalCode=${position}`)
      .then((response) => response.json())
      .then((data) => setStages(data))
      .catch((error) => console.error('Erreur lors de la récupération des données :', error));
  }, []);





  ///////////////////////////////

  return (
    <form className="slots">
      <fieldset className="slots__titles">
          <div className="slots__titles__prix">Prix</div>
          <div className="slots__titles__infos">Infos</div>
          <div className="slots__titles__dates">Dates</div>
      </fieldset>
      <fieldset className="slots__stages">
        {stagess.map((stage) => (
          <div key={stage.id} className="slots__stages__product">
            <div className="slots__stages__product__prix">
              <p>{stage.prix} €</p>
            </div>
            <div className="slots__stages__product__infos">
              <p className="ville">{stage.ville}</p>
              <p className="adresse">{stage.adresse}</p>
              <p className="numero">N° stage Préfectoral : {stage.numeroPrefectoral}</p>
              <a href="/about">+ d'info</a>
            </div>
            <div className="slots__stages__product__dates">
              <p className="date">{stage.date}</p>
              <p className="place">{stage.placesDisponibles ? 'Places disponibles' : ''}</p>
            </div>
            <div className="slots__stages__product__btn">
              <button>S'inscrire</button>
            </div>
          </div>
        ))}
      </fieldset>
    </form>
  );
};

export default Slots;
