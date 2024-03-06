import React, { useState } from 'react';

import validator from 'validator';

import NewPermis from "../assets/newPermis-1.png";
import NewPermisVerso from "../assets/newPermis-2.png";
import OldPermis from "../assets/oldPermis.png";





/////////////////////////////////


const StageForm = () => {


///////////////////////////////////





const host = "http://localhost:3000/api/products/";

  const listePays = [
    'France',
    'Allemagne',
    'Algérie',
    'Almeria',
    'Espagne',
    'Italie',
    'Royaume-Uni',
    'États-Unis',
    'Canada',
    // Ajoutez d'autres pays à la liste selon vos besoins
  ];

  const [paysSuggestions, setPaysSuggestions] = useState([]);
  
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
    telephone: '',

    stageVolontaire1: false,
    stageVolontaire1Solde: '',
    stageVolontaire1SoldeUnknown: false,

    stageVolontaire2: false,
    stageVolontaire2Lieu: '',
    stageVolontaire2Date: '',
    stageVolontaire2Heure: '',
    stageVolontaire2Motif: '',
    stageVolontaire2Solde: '',
    stageVolontaire2Date48N: '',

    stageVolontaire3: false,
    stageVolontaire4: false,

    newPermis: false,
    newPermisDateDeliv: '',
    newPermisVille: '',
    newPermisNumber: '',
    newPermisDateAncienne: '',

    oldPermis: false,
    oldPermisDateDeliv: '',
    oldPermisVille: '',
    oldPermisNumber: '',
    oldPermisDateAncienne: '',

    paiementOnLine: '',
  });


//////////////////////////////////


const handleChange = (e) => {
  const { name, type, value, checked } = e.target;
  // Si le champ est de type checkbox
  if (type === 'checkbox') {
    setFormData((prevData) => {
      // Si c'est une case de stageVolontaire, décochez les autres
      if (name.startsWith('stageVolontaire')) {
        const updatedFormData = { ...prevData };
        for (const key in updatedFormData) {
          if ( name !== "stageVolontaire1SoldeUnknown" && key.startsWith('stageVolontaire')) {
            updatedFormData[key] = false;
          }
        }
        updatedFormData[name] = checked;
        return updatedFormData;
      }

      // Si c'est une case de permis, décochez l'autre
      if (name === 'newPermis' && checked) {
        return {
          ...prevData,
          newPermis: true,
          oldPermis: false,
          oldPermisDateDeliv: '',
          oldPermisVille: '',
          oldPermisNumber: '',
          oldPermisDateAncienne: '',
        };
      }

      if (name === 'oldPermis' && checked) {
        return {
          ...prevData,
          newPermis: false,
          oldPermis: true,
          newPermisDateDeliv: '',
          newPermisVille: '',
          newPermisNumber: '',
          newPermisDateAncienne: '',
        };
      }

      // Pour d'autres types de checkbox, mettez à jour directement
      return {
        ...prevData,
        [name]: checked,
      };
    });
  } 
  else if (name === 'paysNaissance') {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
    const suggestions = listePays.filter(pays => pays.toLowerCase().startsWith(value.toLowerCase()));
    setPaysSuggestions(suggestions);
  }
  else {
    // Si ce n'est pas une case de checkbox, mettez à jour directement
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }
};


const handleSelectPays = (pays) => {
  setFormData({
    ...formData,
    paysNaissance: pays
  });
  // Effacer les suggestions après avoir sélectionné un pays
  setPaysSuggestions([]);
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




//////////////////////////
////////



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
        <select id="civilite" name="civilite" onChange={handleChange}>
          <option value="">Sélectionner</option>
          <option value="Mme">Mme</option>
          <option value="Mlle">Mlle</option>
          <option value="M">M</option>
        </select>
      </div>

      <div className="stage-form__field">
        <label htmlFor="nom">Nom :</label>
        <input type="text" id="nom" name="nom" onChange={handleChange} />
      </div>

      <div className="stage-form__field">
        <label htmlFor="prenom">Prénom :</label>
        <input type="text" id="prenom" name="prenom" onChange={handleChange} />
      </div>


      <div className="stage-form__field">
        <label htmlFor="dateNaissance">Date de naissance :</label>
        <input type="date" id="dateNaissance" name="dateNaissance" onChange={handleChange} />
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
          <ul className="stage-form__field__pays">
            {paysSuggestions.map((pays, index) => (
              <li key={index} onClick={() => handleSelectPays(pays)}>{pays}</li>
            ))}
          </ul>
        )}
      </div>

      <div className="stage-form__field">
        <label htmlFor="depNaissance">Département de naissance :</label>
        <input type="text" id="depNaissance" name="depNaissance" onChange={handleChange} />
      </div>

      <div className="stage-form__field">
        <label htmlFor="villeNaissance">Ville de naissance :</label>
        <input type="text" id="villeNaissance" name="villeNaissance" onChange={handleChange} />
      </div>

      <div className="stage-form__field">
        <label htmlFor="adresseComplete">Adresse complète :</label>
        <input type="text" id="adresseComplete" name="adresseComplete" onChange={handleChange} />
      </div>

      <div className="stage-form__field">
        <label htmlFor="complComplete">Complément adresse :</label>
        <input type="text" id="complAdresse" name="complAdresse" onChange={handleChange} />
      </div>

      <div className="stage-form__field">
        <label htmlFor="codePostal">Code postal :</label>
        <input type="text" id="codePostal" name="codePostal" onChange={handleChange} />
      </div>

      <div className="stage-form__field">
        <label htmlFor="email">Adresse e-mail :</label>
        <input type="email" id="email" name="email" onChange={handleChange} />
      </div>

      <div className="stage-form__field">
        <label htmlFor="telephone">Numéro de téléphone :</label>
        <input type="tel" id="telephone" name="telephone" onChange={handleChange} />
      </div>




















          <h2>Mon stage</h2>

          <div className="stage-form__field stage-form__field--stage">
            <input
              type="checkbox"
              id="stageVolontaire1"
              name="stageVolontaire1"
              checked={formData.stageVolontaire1}
              onChange={handleChange}
            />
            <label htmlFor="stageVolontaire1">Stage volontaire de récupération de points, cas n°1</label>
          </div>

          {formData.stageVolontaire1 && (
            <div className="stage-form__field-hidden">
              
              <div className="stage-form__field stage-form__field--stage">
              <input
                  type="number"
                  id="stageVolontaire1Solde"
                  name="stageVolontaire1Solde"
                  onChange={handleChange}
                  min="0"
                  max="12"
                />
                <label htmlFor="stageVolontaire1Solde">Je déclare le nombre de points qu'il me restent sur le Fichier National du Permis de Conduire</label>
              </div>


              <div className="stage-form__field stage-form__field--stage">
                <input
                  type="checkbox"
                  id="stageVolontaire1SoldeUnknown"
                  name="stageVolontaire1SoldeUnknown"
                  onChange={handleChange}
                />
                <label htmlFor="stageVolontaire1SoldeUnknown">Je ne connais pas mon solde exact mais je suis en permis à 12 points et suis certain qu'il me reste actuellement entre 1 et 8 points sur le Fichier National du Permis de Conduire.</label>
              </div>
            </div>
          )}

          <div className="stage-form__field stage-form__field--stage">
            <input
              type="checkbox"
              id="stageVolontaire2"
              name="stageVolontaire2"
              checked={formData.stageVolontaire2}
              onChange={handleChange}
            />
            <label htmlFor="stageVolontaire2">Stage obligatoire aprés réception de la lettre recommandée 48N (permis probatoire), cas n°2</label>
          </div>

          {formData.stageVolontaire2 && (
            <div className="stage-form__field-hidden stage-form__field-hidden--cas2">
              
              <div className="stage-form__field">
                <label htmlFor="stageVolontaire2Lieu">Lieu de l'infraction :</label>
                <input type="text" id="stageVolontaire2Lieu" name="stageVolontaire2Lieu" onChange={handleChange} />
              </div>

              <div className="stage-form__field">
                <label htmlFor="stageVolontaire2Date">Date de l'infraction :</label>
                <input type="date" id="stageVolontaire2Date" name="stageVolontaire2Date" onChange={handleChange} />
              </div>

              <div className="stage-form__field">
                <label htmlFor="stageVolontaire2Heure">Heure de l'infraction :</label>
                <input type="time" id="stageVolontaire2Heure" name="stageVolontaire2Heure" onChange={handleChange} />
              </div>

              <div className="stage-form__field">
                <label htmlFor="stageVolontaire2Motif">Motif de l'infraction :</label>
                <select id="stageVolontaire2Motif" name="stageVolontaire2Motif" onChange={handleChange}>
                  <option value="">Sélectionner</option>
                  <option value="Alcool">Alcool</option>
                  <option value="Vitesse">Vitesse</option>
                  <option value="FeuRouge">Feu rouge</option>
                  <option value="Refus">Refus</option>
                  <option value="SensInterdit">Sens interdit</option>
                </select>
              </div>

              <div className="stage-form__field">
                <label htmlFor="stageVolontaire2Solde">Solde de points :</label>
                <input
                  type="number"
                  id="stageVolontaire2Solde"
                  name="stageVolontaire2Solde"
                  onChange={handleChange}
                  min="0"
                  max="12"
                />
              </div>

              <div className="stage-form__field">
                <label htmlFor="stageVolontaire2Date48N">Date de réception de la lettre 48N * :</label>
                <input type="date" id="stageVolontaire2Date48N" name="stageVolontaire2Date48N" onChange={handleChange} />
              </div>

            </div>
          )}

          <div className="stage-form__field stage-form__field--stage">
            <input
              type="checkbox"
              id="stageVolontaire3"
              name="stageVolontaire3"
              checked={formData.stageVolontaire3}
              onChange={handleChange}
            />
            <label htmlFor="stageVolontaire3">Stage obligatoire d'alternative aux poursuites ou de composition pénale, cas n°3</label>
          </div>

          {formData.stageVolontaire3 && (
            <div className="stage-form__field__warning-text">
              <p>Vous avez choisi une inscription au cas de stage n°3. Les stages en cas 3 ne permettent pas de récupérer des points. </p>
            </div>
          )}

          <div className="stage-form__field stage-form__field--stage">
            <input
              type="checkbox"
              id="stageVolontaire4"
              name="stageVolontaire4"
              checked={formData.stageVolontaire4}
              onChange={handleChange}
            />
            <label htmlFor="stageVolontaire4">Stage obligatoire dans le cadre d'une peine complémentaire, cas n°4</label>
          </div>

          {formData.stageVolontaire4 && (
            <div className="stage-form__field__warning-text">
              <p>Vous êtes dans l'obligation de suivre un stage de sensibilitation à la sécurité routière dans le cadre d'une peine complémentaire. Les stages en cas 4 ne permettent pas de récupérer des points.</p>
            </div>
          )}
















      {(formData.stageVolontaire1 || formData.stageVolontaire2) && (

        <div className="stage-form__permis">

            <h2>Mon permis de conduire</h2>

            <div className="stage-form__field stage-form__field--stage">
              <input
                type="checkbox"
                id="newPermis"
                name="newPermis"
                checked={formData.newPermis}
                onChange={handleChange}
              />
              <label htmlFor="newPermis">Nouveau format</label>
            </div>

            <div className="stage-form__field stage-form__field--stage">
              <input
                type="checkbox"
                id="oldPermis"
                name="oldPermis"
                checked={formData.oldPermis}
                onChange={handleChange}
              />
              <label htmlFor="oldPermis">Ancien format</label>
            </div>

            {formData.newPermis && (
              <div>

                <img src={NewPermis} alt="nouveau-permis-img" />
                <img src={NewPermisVerso} alt="nouveau-permis-img" />

                <div className="stage-form__permis__field stage-form__permis__field--newpermis-date-delivrance">
                  <label htmlFor="newPermisDateDeliv">Permis délivré le * :</label>
                  <input type="date" id="newPermisDateDeliv" name="newPermisDateDeliv" onChange={handleChange} />
                </div>

                <div className="stage-form__permis__field stage-form__permis__field--newpermis-ville">
                  <label htmlFor="newPermisVille">Ville :</label>
                  <input
                    type="text"
                    id="newPermisVille"
                    name="newPermisVille"
                    onChange={handleChange} 
                  />
                </div>

                <div className="stage-form__permis__field stage-form__permis__field--newpermis-number">
                  <label htmlFor="newPermisNumber">Numéro de permis :</label>
                  <input
                    type="text"
                    id="newPermisNumber"
                    name="newPermisNumber"
                    onChange={handleChange} 
                  />
                </div>

                <div className="stage-form__permis__field stage-form__permis__field--newpermis-olddate">
                  <label htmlFor="newPermisDateAncienne">Date la plus ancienne * :</label>
                  <input type="date" id="newPermisDateAncienne" name="newPermisDateAncienne" onChange={handleChange} />
                </div>

              </div>
            )}

            {formData.oldPermis && (
              <div>

                <img src={OldPermis} alt="ancien-permis-img" />

                <div className="stage-form__permis__field stage-form__permis__field--oldpermis-date-delivrance">
                  <label htmlFor="oldPermisDateDeliv">Permis délivré le * :</label>
                  <input type="date" id="oldPermisDateDeliv" name="oldPermisDateDeliv" onChange={handleChange} />
                </div>

                <div className="stage-form__permis__field stage-form__permis__field--oldpermis-ville">
                  <label htmlFor="oldPermisVille">Ville :</label>
                  <input
                    type="text"
                    id="oldPermisVille"
                    name="oldPermisVille"
                    onChange={handleChange}
                  />
                </div>

                <div className="stage-form__permis__field stage-form__permis__field--oldpermis-number">
                  <label htmlFor="oldPermisNumber">Numéro de permis :</label>
                  <input
                    type="number"
                    id="oldPermisNumber"
                    name="oldPermisNumber"
                    onChange={handleChange}
                  />  
                </div>


                <div className="stage-form__permis__field stage-form__permis__field--oldpermis-olddate">
                  <label htmlFor="oldPermisDateAncienne">Date la plus ancienne * :</label>
                  <input type="date" id="oldPermisDateAncienne" name="oldPermisDateAncienne" onChange={handleChange} />
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