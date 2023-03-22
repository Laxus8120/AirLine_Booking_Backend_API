const {FlightsRepository,AirplaneRepository} = require('../repository/index');
const { Compare} = require('../utils/helper');
class FlightService{

    constructor(){
        this.airplaneRepository = new AirplaneRepository();
        this.flightsRepository = new FlightsRepository();
    }
    async createFlight(data){
        try {
            if(!Compare(data.arrivalTime,data.departureTime)){
                throw{error : 'Arrival Time cannot be less than departure Time'}
            }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightsRepository.createFlight({
                ...data, totalSeats:airplane.capacity 
            });
            return flight;
        } catch (error) {
           console.log("Somthing went wrong in  flight service layer");
           throw{error}; 
        }
    }

    async getAllFlight(data){
        try {
            const flight = await this.flightsRepository.getAllFlight(data);
            return flight;
        } catch (error) {
            console.log("Somthing went wrong in service layer");
           throw{error}; 
        }
    }

    async getFlight(flightId) {
        
        try {
            const flight = await this.flightsRepository.getFlight(flightId);
            return flight;
        } catch (error) {
            console.log("Somthing went wrong in  getting the flight with this Id");
           throw{error}; 
        }
    }

    async updateFlight(flightId,data){

        try {
            const response = await this.flightsRepository.updateFlight(flightId,data);
            return response;
        } catch (error) {
            console.log("Somthing went wrong in  updating the flight with this Id");
           throw{error}; 
        }
    }

}

    /**
        *   {
        *    flightNumber,
        *    airplaneId,
        *    departureAirportId,
        *    arrivalAirportId,
        *    arrivalTime,
        *    departureTime,
        *    price,
        *    totalSeats   -->  this field is taken from airplane Repository                
        *   }
        */
module.exports = FlightService;