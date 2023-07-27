import React, { useState } from 'react';
 // Assurez-vous de créer le fichier CSS associé

const StageForm = () => {
  // State pour stocker les valeurs du formulaire
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    civilite: '',
    dateDeNaissance: '',
    paysDeNaissance: '',
    ville: '',
    adresseMail: '',
    telephone: '',
  });

  // Gestionnaire pour soumettre le formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    // Vous pouvez ici traiter les données du formulaire, les envoyer au serveur, etc.
    console.log(formData);
  };

  // Gestionnaire pour mettre à jour les valeurs du formulaire lorsqu'elles changent
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form className="stage-form" onSubmit={handleSubmit}>

      <div className="stage-form__field">
        <label htmlFor="nom">Nom :</label>
        <input type="text" id="nom" name="nom" value={formData.nom} onChange={handleChange} />
      </div>

      <div className="stage-form__field">
        <label htmlFor="prenom">Prénom :</label>
        <input
          type="text"
          id="prenom"
          name="prenom"
          value={formData.prenom}
          onChange={handleChange}
        />
      </div>

      <div className="stage-form__field">
        <label htmlFor="civilite">Civilité :</label>
        <select id="civilite" name="civilite" value={formData.civilite} onChange={handleChange}>
          <option value="">Sélectionner</option>
          <option value="Mme">Mme</option>
          <option value="Mlle">Mlle</option>
          <option value="M">M</option>
        </select>
      </div>

      {/* Ajoutez les autres champs du formulaire ici */}

      <div className="stage-form__field">
        <button type="submit">Soumettre</button>
      </div>

    </form>
  );
};

export default StageForm;













































































import React, { useState } from 'react';
import './StageForm.css'; // Assurez-vous de créer le fichier CSS associé

const StageForm = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    adresseMail: '',
  });

  // Fonction de validation de l'adresse e-mail
  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Si le champ est l'adresse e-mail, vérifier la validité en temps réel
    if (name === 'adresseMail') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
        isEmailValid: isEmailValid(value), // Ajouter la propriété isEmailValid à formData
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  return (
    <form className="stage-form">
      <div className="stage-form__field">
        <label htmlFor="nom">Nom :</label>
        <input type="text" id="nom" name="nom" value={formData.nom} onChange={handleChange} />
      </div>
      <div className="stage-form__field">
        <label htmlFor="prenom">Prénom :</label>
        <input
          type="text"
          id="prenom"
          name="prenom"
          value={formData.prenom}
          onChange={handleChange}
        />
      </div>
      <div className="stage-form__field">
        <label htmlFor="adresseMail">Adresse e-mail :</label>
        <input
          type="text"
          id="adresseMail"
          name="adresseMail"
          value={formData.adresseMail}
          onChange={handleChange}
          className={formData.isEmailValid !== undefined ? (formData.isEmailValid ? 'valid' : 'invalid') : ''}
        />
      </div>
      {/* Ajoutez les autres champs du formulaire ici */}
      <div className="stage-form__field">
        <button type="submit">Soumettre</button>
      </div>
    </form>
  );
};

export default StageForm;
