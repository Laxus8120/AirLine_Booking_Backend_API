const express = require('express');
const CityController = require('../../controller/city_controller');

const router = express.Router();

router.post('/city', CityController.create);

module.exports = router;