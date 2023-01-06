const {Flights} = require('../models/index');

class FlightsRepository{

    async createFlight(data){
        try {
            const flight = await Flights.create(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong in repo Layer");
            throw{error};
        }
    }
}
module.exports = FlightsRepository;