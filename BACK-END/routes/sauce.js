const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();

const sauceCtrl = require('../controllers/sauce');

router.post('/', auth, sauceCtrl.createSauce);
router.put('/:id', auth, sauceCtrl.modifySauce);
router.delete('/:id', auth, sauceCtrl.deleteSauce);

router.get('/:id', sauceCtrl.getOneSauce);
router.get('/', sauceCtrl.getAllSauce);

// pour poster les donnees du formulaire 
router.post('/order', sauceCtrl.createSauce);


module.exports = router;