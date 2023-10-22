import React, { useState } from 'react';


import NewPermis from "../assets/newPermis-1.png";
import NewPermisVerso from "../assets/newPermis-2.png";
import OldPermis from "../assets/oldPermis.png";

/////////////////////////////////


const StageForm = () => {


///////////////////////////////////


  // State pour stocker les valeurs du formulaire
  const listePays = [
    'France',
    'Allemagne',
    'Espagne',
    'Italie',
    'Royaume-Uni',
    'États-Unis',
    'Canada',
    // Ajoutez d'autres pays à la liste selon vos besoins
  ];
  
  const [formData, setFormData] = useState({
    civilite: '',
    nom: '',
    prenom: '',
    dateNaissance: '',
    paysNaissance: '',
    villeNaissance: '',
    adresse: '',
    adresseComplete: '',
    codePostal: '',
    email: '',
    telephone: ''
  });

  const [autreCoordonnees, setAutreCoordonnees] = useState({
    adresse: '',
    codePostal: '',
    ville: ''
  });

  const [paysSuggestions, setPaysSuggestions] = useState([]);

  const [stageVolontaire1, setStageVolontaire1] = useState(false);
  const [stageVolontaire2, setStageVolontaire2] = useState(false);
  const [stageVolontaire3, setStageVolontaire3] = useState(false);
  const [stageVolontaire4, setStageVolontaire4] = useState(false);
  const [newPermis, setNewPermis] = useState(false);
  const [oldPermis, setOldPermis] = useState(false);



//////////////////////////////////


    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData({
        ...formData,
        [name]: value
      });
  
      // Filtrer les suggestions de pays
      const suggestions = listePays.filter(pays => pays.toLowerCase().includes(value.toLowerCase()));
      setPaysSuggestions(suggestions);
    };

    const handleSelectPays = (pays) => {
      setFormData({
        ...formData,
        paysNaissance: pays
      });
      // Effacer les suggestions après avoir sélectionné un pays
      setPaysSuggestions([]);
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      // Traitez les données du formulaire ici
      console.log(formData);
    };

    const handleStageVolontaire1 = (event) => {
      setStageVolontaire1(event.target.checked);
      setStageVolontaire2(false); setStageVolontaire3(false); setStageVolontaire4(false);
    };
    const handleStageVolontaire2 = (event) => {
      setStageVolontaire2(event.target.checked);
      setStageVolontaire1(false); setStageVolontaire3(false); setStageVolontaire4(false);
      //ne pas oublier de set la donnée des sous formulaire en false/null quand on change d'inpute, comme : effacer la donnée de "Je ne connais pas mon solde"
    };
    const handleStageVolontaire3 = (event) => {
      setStageVolontaire3(event.target.checked);
      setStageVolontaire1(false); setStageVolontaire2(false); setStageVolontaire4(false);
      //ne pas oublier de set la donnée des sous formulaire en false/null quand on change d'inpute, comme : effacer la donnée de "Je ne connais pas mon solde"
    };
    const handleStageVolontaire4 = (event) => {
      setStageVolontaire4(event.target.checked);
      setStageVolontaire1(false); setStageVolontaire2(false); setStageVolontaire3(false);
      //ne pas oublier de set la donnée des sous formulaire en false/null quand on change d'inpute, comme : effacer la donnée de "Je ne connais pas mon solde"
    };

    const handleAutreCoordonneesChange = (event) => {
      const { name, value } = event.target;
      setAutreCoordonnees({
        ...autreCoordonnees,
        [name]: value
      });
    };

    const handleNewPermis = (event) => {
      setNewPermis(event.target.checked);
      setOldPermis(false);
    };
    const handleOldPermis = (event) => {
      setOldPermis(event.target.checked);
      setNewPermis(false);
    };







//////////////////////////////////////////////////
///////////////////////////////////////
////////////////////////////////
///////////////////////
//////////////
////////
/////
///
//






  return (

<div>
    <form className="stage-form" onSubmit={handleSubmit}>

      <h2>Mes coordonnées</h2>

      <div className="stage-form__field">
        <label htmlFor="civilite">Civilité :</label>
        <select id="civilite" name="civilite" value={formData.civilite} onChange={handleChange}>
          <option value="">Sélectionner</option>
          <option value="Mme">Mme</option>
          <option value="Mlle">Mlle</option>
          <option value="M">M</option>
        </select>
      </div>

      <div className="stage-form__field">
        <label htmlFor="nom">Nom :</label>
        <input type="text" id="nom" name="nom" value={formData.nom} onChange={handleChange} />
      </div>

      <div className="stage-form__field">
        <label htmlFor="prenom">Prénom :</label>
        <input type="text" id="prenom" name="prenom" value={formData.prenom} onChange={handleChange} />
      </div>


      <div className="stage-form__field">
        <label htmlFor="dateNaissance">Date de naissance :</label>
        <input type="date" id="dateNaissance" name="dateNaissance" value={formData.dateNaissance} onChange={handleChange} />
      </div>

      <div className="stage-form__field">
        <label htmlFor="paysNaissance">Pays de naissance :</label>
        <input
          type="text"
          id="paysNaissance"
          name="paysNaissance"
          value={formData.paysNaissance}
          onChange={handleChange}
        />
        {paysSuggestions.length > 0 && (
          <ul className="pays-suggestions">
            {paysSuggestions.map((pays, index) => (
              <li key={index} onClick={() => handleSelectPays(pays)}>{pays}</li>
            ))}
          </ul>
        )}
      </div>

      <div className="stage-form__field">
        <label htmlFor="paysNaissance">Département de naissance :</label>
        <input type="text" id="depNaissance" name="depNaissance" value={formData.depNaissance} onChange={handleChange} />
      </div>

      <div className="stage-form__field">
        <label htmlFor="villeNaissance">Ville de naissance :</label>
        <input type="text" id="villeNaissance" name="villeNaissance" value={formData.villeNaissance} onChange={handleChange} />
      </div>

      <div className="stage-form__field">
        <label htmlFor="adresseComplete">Adresse complète :</label>
        <input type="text" id="adresseComplete" name="adresseComplete" value={formData.adresseComplete} onChange={handleChange} />
      </div>

      <div className="stage-form__field">
        <label htmlFor="adresseComplete">Complément adresse :</label>
        <input type="text" id="complAdresse" name="complAdresse" value={formData.complAdresse} onChange={handleChange} />
      </div>

      <div className="stage-form__field">
        <label htmlFor="codePostal">Code postal :</label>
        <input type="text" id="codePostal" name="codePostal" value={formData.codePostal} onChange={handleChange} />
      </div>

      <div className="stage-form__field">
        <label htmlFor="email">Adresse e-mail :</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
      </div>

      <div className="stage-form__field">
        <label htmlFor="telephone">Numéro de téléphone :</label>
        <input type="tel" id="telephone" name="telephone" value={formData.telephone} onChange={handleChange} />
      </div>



















      <div>
        <h2>Mon stage</h2>
        <div>
          
          <div className="stage-form__field-stage">
            <input
              type="checkbox"
              id="stageVolontaire1"
              name="stageVolontaire1"
              checked={stageVolontaire1}
              onChange={handleStageVolontaire1}
            />
            <label htmlFor="stageVolontaire1">Stage volontaire de récupération de points, cas n°1</label>
          </div>

          {stageVolontaire1 && (
            <div>
              
              <div className="stage-form__field-stage">
                <label htmlFor="champNombre">Je déclare le nombre de points qu'il me restent sur le Fichier National du Permis de Conduire</label>
                <input
                  type="number"
                  id="champNombre"
                  name="champNombre"

                  onChange={handleAutreCoordonneesChange}
                  min="0"
                  max="12"
                />
              </div>


              <div className="stage-form__field-stage">
                <input
                  type="checkbox"
                  id="stageVolontaire"
                  name="stageVolontaire"

                />
                <label htmlFor="stageVolontaire">Je ne connais pas mon solde exact mais je suis en permis à 12 points et suis certain qu'il me reste actuellement entre 1 et 8 points sur le Fichier National du Permis de Conduire.</label>
              </div>
            </div>
          )}

          <div className="stage-form__field-stage">
            <input
              type="checkbox"
              id="stageVolontaire2"
              name="stageVolontaire2"
              checked={stageVolontaire2}
              onChange={handleStageVolontaire2}
            />
            <label htmlFor="stageVolontaire2">Stage obligatoire aprés réception de la lettre recommandée 48N (permis probatoire), cas n°2</label>
          </div>

          {stageVolontaire2 && (
            <div>
              
              <div className="stage-form__field-stage">
                <label htmlFor="nom">Lieu de l'infraction :</label>
                <input type="text" id="nom" name="nom" value={formData.nom} onChange={handleChange} />
              </div>

              <div className="stage-form__field-stage">
                <label htmlFor="dateNaissance">Date de l'infraction :</label>
                <input type="date" id="dateNaissance" name="dateNaissance" value={formData.dateNaissance} onChange={handleChange} />
              </div>

              <div className="stage-form__field-stage">
                <label htmlFor="heure">Heure de l'infraction :</label>
                <input type="text" id="heure" name="heure" value={"12h30"} onChange={handleChange} />
              </div>

              <div className="stage-form__field-stage">
                <label htmlFor="prenom">Motif de l'infraction :</label>
                <select id="civilite" name="civilite" value={formData.civilite} onChange={handleChange}>
                  <option value="">Sélectionner</option>
                  <option value="Mme">Alcool</option>
                  <option value="Mlle">Vitesse</option>
                  <option value="M">Feu rouge</option>
                  <option value="Mme">Refus</option>
                  <option value="Mlle">Sens interdit </option>
                  <option value="M">Feu rouge</option>
                </select>
              </div>

              <div className="stage-form__field-stage">
                <label htmlFor="dateNaissance">Solde de points :</label>
                <input
                  type="number"
                  id="champNombre"
                  name="champNombre"

                  onChange={handleAutreCoordonneesChange}
                  min="0"
                  max="12"
                />
              </div>

              <div className="stage-form__field-stage">
                <label htmlFor="dateNaissance">Date de réception de la lettre 48N * :</label>
                <input type="date" id="dateNaissance" name="dateNaissance" value={formData.dateNaissance} onChange={handleChange} />
              </div>

            </div>
          )}

          <div className="stage-form__field-stage">
            <input
              type="checkbox"
              id="stageVolontaire3"
              name="stageVolontaire3"
              checked={stageVolontaire3}
              onChange={handleStageVolontaire3}
            />
            <label htmlFor="stageVolontaire3">Stage obligatoire d'alternative aux poursuites ou de composition pénale, cas n°3</label>
          </div>

          {stageVolontaire3 && (
            <div>
              <p>Vous avez choisi une inscription au cas de stage n°3. Les stages en cas 3 ne permettent pas de récupérer des points. </p>
            </div>
          )}

          <div className="stage-form__field-stage">
            <input
              type="checkbox"
              id="stageVolontaire4"
              name="stageVolontaire4"
              checked={stageVolontaire4}
              onChange={handleStageVolontaire4}
            />
            <label htmlFor="stageVolontaire4">Stage obligatoire dans le cadre d'une peine complémentaire, cas n°4</label>
          </div>

          {stageVolontaire4 && (
            <div>
              <p>Vous êtes dans l'obligation de suivre un stage de sensibilitation à la sécurité routière dans le cadre d'une peine complémentaire. Les stages en cas 4 ne permettent pas de récupérer des points.</p>
            </div>
          )}

        </div>

      </div>












      {(stageVolontaire1 || stageVolontaire2) && (
      <div>
        <h2>Mon permis de conduire</h2>

          <div className="stage-form__field-stage">
            <input
              type="checkbox"
              id="newPermis"
              name="newPermis"
              checked={newPermis}
              onChange={handleNewPermis}
            />
            <label htmlFor="newPermis">Nouveau format</label>
          </div>
          <div className="stage-form__field-stage">
            <input
              type="checkbox"
              id="oldPermis"
              name="oldPermis"
              checked={oldPermis}
              onChange={handleOldPermis}
            />
            <label htmlFor="oldPermis">Ancien format</label>
          </div>

          {newPermis && (
            <div>
              <img src={NewPermis} alt="nouveau-permis-img" />
              <img src={NewPermisVerso} alt="nouveau-permis-img" />
              <div className="stage-form__field-permis" id="delivrance">
                <label htmlFor="dateNaissance">Permis délivré le * :</label>
                <input type="date" id="dateNaissance" name="dateNaissance" value={formData.dateNaissance} onChange={handleChange} />
              </div>

              <div className="stage-form__field-permis" id="ville">
                <label htmlFor="villee">Ville :</label>
                <input
                  type="text"
                  id="villee"
                  name="villee"
                  value={formData.dateNaissance} onChange={handleChange} 
                />
              </div>

              <div className="stage-form__field-permis">
                <label htmlFor="adresse">Numéro de permis :</label>
                <input
                  type="number"
                  id="adresse"
                  name="adresse"
                  value={autreCoordonnees.adresse}
                  onChange={handleAutreCoordonneesChange}
                />
              </div>

              <div className="stage-form__field-permis">
                <label htmlFor="dateNaissance">Date la plus ancienne * :</label>
                <input type="date" id="dateNaissance" name="dateNaissance" value={formData.dateNaissance} onChange={handleChange} />
              </div>



            </div>
          )}

          {oldPermis && (
            <div>
              <img src={OldPermis} alt="ancien-permis-img" />

              <div className="stage-form__field">
                <label htmlFor="dateNaissance">Permis délivré le * :</label>
                <input type="date" id="dateNaissance" name="dateNaissance" value={formData.dateNaissance} onChange={handleChange} />
              </div>

              <div className="stage-form__field">
                <label htmlFor="villee">Ville :</label>
                <input
                  type="text"
                  id="villee"
                  name="villee"
                  value={autreCoordonnees.ville}
                  onChange={handleAutreCoordonneesChange}
                />
              </div>

              <div className="stage-form__field">
                <label htmlFor="adresse">Numéro de permis :</label>
                <input
                  type="number"
                  id="adresse"
                  name="adresse"
                  value={autreCoordonnees.adresse}
                  onChange={handleAutreCoordonneesChange}
                />
              </div>

              <div className="stage-form__field">
                <label htmlFor="dateNaissance">Date la plus ancienne * :</label>
                <input type="date" id="dateNaissance" name="dateNaissance" value={formData.dateNaissance} onChange={handleChange} />
              </div>


            </div>
          )}


      </div>
      )}









      <div className="stage-form__field">
        <button type="submit">Soumettre</button>
      </div>






    </form>





</div>

  );
};






export default StageForm;