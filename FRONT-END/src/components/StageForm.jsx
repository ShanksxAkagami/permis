import React, { useState } from 'react';
import validator from 'validator';


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



  const host = "http://localhost:3000/api/products/";



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



/////////////////////////////////////
/////////////////
/////////////


const [errors, setErrors] = useState({});



const validateForm = () => {
  setErrors({}); // Réinitialisez les erreurs à chaque validation

    // Validation pour le champ "nom"
    if (!formData.nom || !validator.isAlpha(formData.nom)) {
      setErrors((prevErrors) => ({ ...prevErrors, nom: 'Le nom doit contenir uniquement des caractères alphabétiques.' }));
    }
  
    // Validation pour le champ "prenom"
    if (!formData.prenom || !validator.isAlpha(formData.prenom)) {
      setErrors((prevErrors) => ({ ...prevErrors, prenom: 'Le prénom doit contenir uniquement des caractères alphabétiques.' }));
    }
  
    // Validation pour le champ "dateNaissance"
    if (!formData.dateNaissance || !validator.isDate(formData.dateNaissance)) {
      setErrors((prevErrors) => ({ ...prevErrors, dateNaissance: 'La date de naissance n\'est pas valide.' }));
    }
  
    // Validation pour le champ "paysNaissance"
    if (!formData.paysNaissance || !validator.isAlpha(formData.paysNaissance)) {
      setErrors((prevErrors) => ({ ...prevErrors, paysNaissance: 'Le pays de naissance doit contenir uniquement des caractères alphabétiques.' }));
    }
  
    // Validation pour le champ "villeNaissance"
    if (!formData.villeNaissance || !validator.isAlpha(formData.villeNaissance)) {
      setErrors((prevErrors) => ({ ...prevErrors, villeNaissance: 'La ville de naissance doit contenir uniquement des caractères alphabétiques.' }));
    }
  

    // Validation pour le champ "adresse"
    if (!formData.adresse || !validator.isAlphanumeric(formData.adresse)) {
      setErrors((prevErrors) => ({ ...prevErrors, adresse: 'L\'adresse doit contenir uniquement des chiffres et des lettres.' }));
    }

    // Validation pour le champ "codePostal"
    if (!formData.codePostal || !validator.isPostalCode(formData.codePostal, 'any')) {
      setErrors((prevErrors) => ({ ...prevErrors, codePostal: 'Le code postal n\'est pas valide.' }));
    }
  
    // Validation pour le champ "email"
    if (!formData.email || !validator.isEmail(formData.email)) {
      setErrors((prevErrors) => ({ ...prevErrors, email: 'L\'adresse e-mail n\'est pas valide.' }));
    }
  
    // Validation pour le champ "telephone"
    if (!formData.telephone || !validator.isMobilePhone(formData.telephone, 'any', { strictMode: false })) {
      setErrors((prevErrors) => ({ ...prevErrors, telephone: 'Le numéro de téléphone n\'est pas valide.' }));
    } 













  if (!formData.case1 && !formData.case2 && !formData.case3 && !formData.case4) {
    setErrors((prevErrors) => ({ ...prevErrors, nom: 'Le nom est requis' }));
  }

  if (formData.case1) {
    if (!formData.stagescas1nombrepoint && !formData.stagescas1nombrepointinconnu) {
      setErrors((prevErrors) => ({ ...prevErrors, stagecas1vide: 'selectionnez' }));
    }
  }

  if (formData.case2) {
    if (!formData.stagecas2adresse || !validator.isAlphanumeric(formData.stagecas2adresse)) {
      setErrors((prevErrors) => ({ ...prevErrors, adresse: 'L\'adresse doit contenir uniquement des chiffres et des lettres.' }));
    }
    if (!formData.stagecas2date|| !validator.isDate(formData.stagecas2date)) {
      setErrors((prevErrors) => ({ ...prevErrors, dateNaissance: 'La date de naissance n\'est pas valide.' }));
    }
    if (!formData.stagecas2heure || !validator.isAlphanumeric(formData.stagecas2heure)) {
      setErrors((prevErrors) => ({ ...prevErrors, adresse: 'L\'adresse doit contenir uniquement des chiffres et des lettres.' }));
    }
    if (!formData.stagecas2motif) {
      setErrors((prevErrors) => ({ ...prevErrors, adresse: 'L\'adresse doit contenir uniquement des chiffres et des lettres.' }));
    }
    if (!formData.stagecas2soldepoints) {
      setErrors((prevErrors) => ({ ...prevErrors, adresse: 'L\'adresse doit contenir uniquement des chiffres et des lettres.' }));
    }
    if (!formData.stagecas2date48N|| !validator.isDate(formData.stagecas2date48N)) {
      setErrors((prevErrors) => ({ ...prevErrors, dateNaissance: 'La date de naissance n\'est pas valide.' }));
    }
  }









  if (formData.case1 || formData.case2) {
    if (!formData.casenewpermis && !formData.casenewpermi) { 
      setErrors((prevErrors) => ({ ...prevErrors, nom: 'Le nom est requis' }));
    }
    if (formData.casenewpermis) { 
      if (!formData.permisdatedelivrance|| !validator.isDate(formData.permisdatedelivrance)) {
        setErrors((prevErrors) => ({ ...prevErrors, dateNaissance: 'La date de naissance n\'est pas valide.' }));
      }
      if (!formData.permisville || !validator.isAlpha(formData.permisville)) {
        setErrors((prevErrors) => ({ ...prevErrors, villeNaissance: 'La ville de naissance doit contenir uniquement des caractères alphabétiques.' }));
      }
      if (!formData.permisnumero || !validator.isNumeric(formData.permisnumero)) {
        setErrors((prevErrors) => ({ ...prevErrors, villeNaissance: 'La ville de naissance doit contenir uniquement des caractères alphabétiques.' }));
      }
      if (!formData.permisdateancienne|| !validator.isDate(formData.permisdateancienne)) {
        setErrors((prevErrors) => ({ ...prevErrors, dateNaissance: 'La date de naissance n\'est pas valide.' }));
      }
    }
    if (formData.caseoldpermis) { 
      if (!formData.permisdatedelivrance|| !validator.isDate(formData.permisdatedelivrance)) {
        setErrors((prevErrors) => ({ ...prevErrors, dateNaissance: 'La date de naissance n\'est pas valide.' }));
      }
      if (!formData.permisville || !validator.isAlpha(formData.permisville)) {
        setErrors((prevErrors) => ({ ...prevErrors, villeNaissance: 'La ville de naissance doit contenir uniquement des caractères alphabétiques.' }));
      }
      if (!formData.permisnumero || !validator.isNumeric(formData.permisnumero)) {
        setErrors((prevErrors) => ({ ...prevErrors, villeNaissance: 'La ville de naissance doit contenir uniquement des caractères alphabétiques.' }));
      }
      if (!formData.permisdateancienne|| !validator.isDate(formData.permisdateancienne)) {
        setErrors((prevErrors) => ({ ...prevErrors, dateNaissance: 'La date de naissance n\'est pas valide.' }));
      }
      // je sais pourquoi jai fais ca ci dessous 
      if (formData.oldpermischamp1 && !validator.isNumeric(formData.oldpermischamp1)) {
        setErrors((prevErrors) => ({ ...prevErrors, villeNaissance: 'La ville de naissance doit contenir uniquement des caractères alphabétiques.' }));
      }
      if (formData.oldpermischamp2 && !validator.isNumeric(formData.oldpermischamp2)) {
        setErrors((prevErrors) => ({ ...prevErrors, villeNaissance: 'La ville de naissance doit contenir uniquement des caractères alphabétiques.' }));
      }
    }
  }





  return Object.keys(errors).length === 0; // Si l'objet errors est vide, le formulaire est valide
};




const handleSubmit = async (e) => {
  e.preventDefault();
  // useparams recuperer l:id du produit

  
  const str = window.location;
  const url = new URL(str);
  const id = url.searchParams.get("id");
  const objectURL = host + id;
  const postUrl = host + "order/";
 

  let product = {};
  try {
    const response = await fetch(objectURL);
    const data = await response.json();
    product = data;
  } catch (error) {
    console.error('Erreur lors de la récupération des données :', error);
  }


  if (validateForm()) {

    try {
      const response = await fetch(postUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formData, product }),
        });

        const data = await response.json();
        console.log(data);

        
      //  if case 3 coché ne pas rediriger vers paiment mais vers page de confirmation avec recontact conseiller
        formData.clear();
      // if tout est bon rediriger vers page de paiement 
        let confirmationUrl = "./confirmation.html?id=" + id;
        window.location.href = confirmationUrl;

      }

      catch (error) {
        console.error('Erreur lors de l\'envoi des données au backend:', error);
      }

  }
  else {
    // Il y a des erreurs dans le formulaire, ne procédez pas à l'envoi
    console.log('Le formulaire contient des erreurs. Veuillez les corriger.');
    return; 
  }
};




 








//////////////////////////////////////////////////
///////////////////////////////////////
////////////////////////////////
////////////////////////
//////////////
////////
/////
///
//






  return (


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




















          <h2>Mon stage</h2>

          <div className="stage-form__field stage-form__field--stage">
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
            <div className="stage-form__field-hidden">
              
              <div className="stage-form__field stage-form__field--stage">
              <input
                  type="number"
                  id="champNombre"
                  name="champNombre"

                  onChange={handleAutreCoordonneesChange}
                  min="0"
                  max="12"
                />
                <label htmlFor="champNombre">Je déclare le nombre de points qu'il me restent sur le Fichier National du Permis de Conduire</label>
              </div>


              <div className="stage-form__field stage-form__field--stage">
                <input
                  type="checkbox"
                  id="stageVolontaire"
                  name="stageVolontaire"

                />
                <label htmlFor="stageVolontaire">Je ne connais pas mon solde exact mais je suis en permis à 12 points et suis certain qu'il me reste actuellement entre 1 et 8 points sur le Fichier National du Permis de Conduire.</label>
              </div>
            </div>
          )}

          <div className="stage-form__field stage-form__field--stage">
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
            <div className="stage-form__field-hidden stage-form__field-hidden--cas2">
              
              <div className="stage-form__field">
                <label htmlFor="nom">Lieu de l'infraction :</label>
                <input type="text" id="nom" name="nom" value={formData.nom} onChange={handleChange} />
              </div>

              <div className="stage-form__field">
                <label htmlFor="dateNaissance">Date de l'infraction :</label>
                <input type="date" id="dateNaissance" name="dateNaissance" value={formData.dateNaissance} onChange={handleChange} />
              </div>

              <div className="stage-form__field">
                <label htmlFor="heure">Heure de l'infraction :</label>
                <input type="text" id="heure" name="heure" value={"12h30"} onChange={handleChange} />
              </div>

              <div className="stage-form__field">
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

              <div className="stage-form__field">
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

              <div className="stage-form__field">
                <label htmlFor="dateNaissance">Date de réception de la lettre 48N * :</label>
                <input type="date" id="dateNaissance" name="dateNaissance" value={formData.dateNaissance} onChange={handleChange} />
              </div>

            </div>
          )}

          <div className="stage-form__field stage-form__field--stage">
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
            <div className="stage-form__field__warning-text">
              <p>Vous avez choisi une inscription au cas de stage n°3. Les stages en cas 3 ne permettent pas de récupérer des points. </p>
            </div>
          )}

          <div className="stage-form__field stage-form__field--stage">
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
            <div className="stage-form__field__warning-text">
              <p>Vous êtes dans l'obligation de suivre un stage de sensibilitation à la sécurité routière dans le cadre d'une peine complémentaire. Les stages en cas 4 ne permettent pas de récupérer des points.</p>
            </div>
          )}
















      {(stageVolontaire1 || stageVolontaire2) && (
      <div className="stage-form__permis">

          <h2>Mon permis de conduire</h2>

          <div className="stage-form__field stage-form__field--stage">
            <input
              type="checkbox"
              id="newPermis"
              name="newPermis"
              checked={newPermis}
              onChange={handleNewPermis}
            />
            <label htmlFor="newPermis">Nouveau format</label>
          </div>

          <div className="stage-form__field stage-form__field--stage">
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

              <div className="stage-form__permis__field stage-form__permis__field--newpermis-date-delivrance">
                <label htmlFor="dateNaissance">Permis délivré le * :</label>
                <input type="date" id="dateNaissance" name="dateNaissance" value={formData.dateNaissance} onChange={handleChange} />
              </div>

              <div className="stage-form__permis__field stage-form__permis__field--newpermis-ville">
                <label htmlFor="villee">Ville :</label>
                <input
                  type="text"
                  id="villee"
                  name="villee"
                  value={formData.dateNaissance} onChange={handleChange} 
                />
              </div>

              <div className="stage-form__permis__field stage-form__permis__field--newpermis-number">
                <label htmlFor="adresse">Numéro de permis :</label>
                <input
                  type="text"
                  id="adresse"
                  name="adresse"
                  value={autreCoordonnees.adresse}
                  onChange={handleAutreCoordonneesChange}
                />
              </div>

              <div className="stage-form__permis__field stage-form__permis__field--newpermis-olddate">
                <label htmlFor="dateNaissance">Date la plus ancienne * :</label>
                <input type="date" id="dateNaissance" name="dateNaissance" value={formData.dateNaissance} onChange={handleChange} />
              </div>



            </div>
          )}

          {oldPermis && (
            <div>

              <img src={OldPermis} alt="ancien-permis-img" />

              <div className="stage-form__permis__field stage-form__permis__field--oldpermis-date-delivrance">
                <label htmlFor="dateNaissance">Permis délivré le * :</label>
                <input type="date" id="dateNaissance" name="dateNaissance" value={formData.dateNaissance} onChange={handleChange} />
              </div>

              <div className="stage-form__permis__field stage-form__permis__field--oldpermis-ville">
                <label htmlFor="villee">Ville :</label>
                <input
                  type="text"
                  id="villee"
                  name="villee"
                  value={autreCoordonnees.ville}
                  onChange={handleAutreCoordonneesChange}
                />
              </div>

              <div className="stage-form__permis__field stage-form__permis__field--oldpermis-number">
                <label htmlFor="adresse">Numéro de permis :</label>
                <input
                  type="number"
                  id="adresse"
                  name="adresse"
                  value={autreCoordonnees.adresse}
                  onChange={handleAutreCoordonneesChange}
                />  
              </div>


              <div className="stage-form__permis__field stage-form__permis__field--oldpermis-olddate">
                <label htmlFor="dateNaissance">Date la plus ancienne * :</label>
                <input type="date" id="dateNaissance" name="dateNaissance" value={formData.dateNaissance} onChange={handleChange} />
              </div>

            </div>
          )}
      </div>
      )}









      <div className="stage-form__submit">
        <button type="submit">Soumettre</button>
      </div>






    </form>

  );
};






export default StageForm;