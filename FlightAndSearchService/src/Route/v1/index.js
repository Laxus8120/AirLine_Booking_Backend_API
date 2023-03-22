const express = require('express');
const CityController = require('../../controller/city_controller');
const FlightController = require('../../controller/flightController');


const {FlightMiddleware} = require('../../middleware/index')
const router = express.Router();



const AirportController = require('../../controller/airportController')
router.post('/city', CityController.create);
router.delete('/city/:id', CityController.destroy)
router.get('/city/:id', CityController.get)
router.patch('/city/:id', CityController.update)
router.get('/city', CityController.getAllCities);
router.post(
    '/flights',
    FlightMiddleware.validateCreateFlight,
    FlightController.create
 );
router.get('/flights', FlightController.getAllFlight);
router.post('/airports', AirportController.create);
router.get('/flights/:id', FlightController.getFlight);
router.patch('/flights/:id',FlightController.updateFlight);

module.exports = router;