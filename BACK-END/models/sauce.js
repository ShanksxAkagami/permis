const mongoose = require('mongoose');

// schéma de donnée pour une sauce
const sauceSchema = mongoose.Schema({
  date: { type: String, required: true },
  ville: { type: String, required: true },
  numeroPref: { type: String, required: true },
  adresse: { type: String, required: true },
  placeDispo: { type: Number, required: true },
  prix: { type: Number, required: true },
});

module.exports = mongoose.model('Sauce', sauceSchema);