const express = require('express')
const router = express.Router();
const {
  saveHouse, updateHouse, getHouse
} = require('../controllers/housesController.js')

router.post('/', saveHouse);
router.get('/:id', getHouse);
router.put('/:id', updateHouse);

module.exports = router