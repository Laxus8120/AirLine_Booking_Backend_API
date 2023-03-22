const { BookingRepository}  = require('../repository/index');
const axios  = require('axios');

const { FLIGHT_SERVICE_PATH}  = require('../config/serverConfig');
const { ServiceError } = require('../utils/error');

class BookingService {

    constructor(){
        this.bookingRepository  = new BookingRepository();
    }

    async createBooking(data){
        try {
            const flightId  = data.flightId; 
            const getFlightRequestUrl  = `${FLIGHT_SERVICE_PATH}/api/v1/flights/${flightId}`;
            const response  = await axios.get(getFlightRequestUrl);
            const flightData  = response.data.data;
            let priceOfTheFlight  = flightData.price;
            if(data.noOfSeat > flightData.totalSeats) {
                throw new ServiceError('Something went wrong in the booking Process','Insufficient seats in the flight');
            }
            const totalCost = data.noOfSeats  * priceOfTheFlight;
            const bookingPayload  = {...data, totalCost};
            console.log(bookingPayload);
            const booking = await this.bookingRepository.create(bookingPayload);
            const updateFlightReqUrl  = `${FLIGHT_SERVICE_PATH}/api/v1/flights/${booking.flightId}`;
            await axios.patch(updateFlightReqUrl,{ totalSeats : flightData.totalSeats - booking.noOfSeats});
            const finalBooking  = await this.bookingRepository.update(booking.id,{status:"Booked"});
            return finalBooking;


        } catch (error) {

            if(error.name   == 'RepositoryError' || error.name == 'ValidationError'){
                throw error;
            }
            throw new ServiceError();
        }
    }

}

module.exports  = BookingService;