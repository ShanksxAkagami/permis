const Sauce = require('../models/sauce');
const fs = require('fs');


exports.createSauce = (req, res, next) => {
    const sauceObject = req.body;


    const sauce = new Sauce({
        date: sauceObject.date,
        ville: sauceObject.ville,
        numeroPref: sauceObject.numeroPref,
        adresse: sauceObject.adresse,
        placeDispo: sauceObject.placeDispo,
        prix: sauceObject.prix
      });
  


    sauce.save()
    .then(() => { res.status(201).json({message: 'Sauce enregistré !'})})
    .catch(error => { res.status(400).json( { error })})
  };




exports.modifySauce = (req, res, next) => {
  const sauceObject = req.body;

  Sauce.findOne({_id: req.params.id})
      .then(() => {
              Sauce.updateOne({ _id: req.params.id}, { ...sauceObject, _id: req.params.id})

              .then(() => res.status(200).json({message : 'Sauce modifié!'}))
              .catch(error => res.status(401).json({ error }));
          }
      )
      .catch((error) => {
          res.status(400).json({ error });
      });
};



exports.deleteSauce = (req, res, next) => {
  Sauce.findOne({ _id: req.params.id})
      .then(() => {
                  Sauce.deleteOne({_id: req.params.id})
                      .then(() => { res.status(200).json({message: 'Sauce supprimé !'})})
                      .catch(error => res.status(401).json({ error }));       
      })
      .catch( error => {
          res.status(500).json({ error });
      });
};











exports.getOneSauce = (req, res, next) => {
    Sauce.findOne({ _id: req.params.id })
      .then(sauce => res.status(200).json(sauce))
      .catch(error => res.status(404).json({ error }));
};

exports.getAllSauce = (req, res, next) => {
    Sauce.find()
      .then(sauces => res.status(200).json(sauces))
      .catch(error => res.status(400).json({ error }));
};