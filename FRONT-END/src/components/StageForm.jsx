import React, { useState } from 'react';
 // Assurez-vous de créer le fichier CSS associé














const StageForm = () => {
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


  
  
    const [paysSuggestions, setPaysSuggestions] = useState([]);
    




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







     ///////////////////////////////



     

     const [stageVolontaire, setStageVolontaire] = useState(false);

     const [autreCoordonnees, setAutreCoordonnees] = useState({
       adresse: '',
       codePostal: '',
       ville: ''
     });
   
     const handleStageVolontaireChange = (event) => {
       setStageVolontaire(event.target.checked);
     };
   
     const handleAutreCoordonneesChange = (event) => {
       const { name, value } = event.target;
       setAutreCoordonnees({
         ...autreCoordonnees,
         [name]: value
       });
     };













  return (

<div>
    <form className="stage-form" onSubmit={handleSubmit}>


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


      <div className="stage-form__field">
        <button type="submit">Soumettre</button>
      </div>

    </form>





    <form className="stage-form" onSubmit={handleSubmit}>
      <div>
        <h2>Mon stage</h2>
        <div>
          <input
            type="checkbox"
            id="stageVolontaire"
            name="stageVolontaire"
            checked={stageVolontaire}
            onChange={handleStageVolontaireChange}
          />
          <label htmlFor="stageVolontaire">Stage volontaire de récupération de points, cas n°1</label>

          {stageVolontaire && (
            <div>
              <div className="stage-form__field">
                <label htmlFor="adresse">Adresse :</label>
                <input
                  type="text"
                  id="adresse"
                  name="adresse"
                  value={autreCoordonnees.adresse}
                  onChange={handleAutreCoordonneesChange}
                />
              </div>

              <div className="stage-form__field">
                <label htmlFor="codePostal">Code postal :</label>
                <input
                  type="text"
                  id="codePostal"
                  name="codePostal"
                  value={autreCoordonnees.codePostal}
                  onChange={handleAutreCoordonneesChange}
                />
              </div>

              <div className="stage-form__field">
                <label htmlFor="ville">Ville :</label>
                <input
                  type="text"
                  id="ville"
                  name="ville"
                  value={autreCoordonnees.ville}
                  onChange={handleAutreCoordonneesChange}
                />
              </div>
            </div>
          )}
        </div>
      </div>


      <div>
        <h2>Mon permis</h2>
        <div>
          <input
            type="checkbox"
            id="stageVolontaire"
            name="stageVolontaire"
            checked={stageVolontaire}
            onChange={handleStageVolontaireChange}
          />
          <label htmlFor="stageVolontaire">Stage volontaire de récupération de points, cas n°1</label>

          {stageVolontaire && (
            <div className='permisnouveau'>
              <div className="stage-form__field">
                <label htmlFor="adresse">Adresse :</label>
                <input
                  type="text"
                  id="adresse"
                  name="adresse"
                  value={autreCoordonnees.adresse}
                  onChange={handleAutreCoordonneesChange}
                />
              </div>

              <div className="stage-form__field">
                <label htmlFor="codePostal">Code postal :</label>
                <input
                  type="text"
                  id="codePostal"
                  name="codePostal"
                  value={autreCoordonnees.codePostal}
                  onChange={handleAutreCoordonneesChange}
                />
              </div>

              <div className="stage-form__field">
                <label htmlFor="ville">Ville :</label>
                <input
                  type="text"
                  id="ville"
                  name="ville"
                  value={autreCoordonnees.ville}
                  onChange={handleAutreCoordonneesChange}
                />
              </div>
            </div>
          )}
        </div>




      </div>






      <div className="stage-form__field">
        <button type="submit">Soumettre</button>
      </div>

    </form>





</div>

  );
};

export default StageForm;