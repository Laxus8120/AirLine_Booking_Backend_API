const { StatusCodes } = require('http-status-codes');
const { Booking}  = require('../models/index');
const {ValidationError,AppError} = require('../utils/error/index');

class BookingRepository {

async create(data){

    try {
        
        const booking = Booking.create(data);
        return booking;
    } catch (error) {
        
        if(error.name == 'SequelizeValidationError'){
            throw new ValidationError(error);
        }
        throw new AppError(
            'RepositoryError',
            'Cannot Create Booking',
            'There is some issue creating the booking, please try again later',
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
}

async update(bookingId,data){

    try {
        const booking  = await Booking.findByPk(bookingId);
        if(data.status){
            booking.status  = data.status;
        }
        booking.save();
        return booking;

    } catch (error) {
        
        throw new AppError(
            'RepositoryError',
            'Cannot Update Booking',
            'There is some issue updating the booking, please try again later',
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
}

}

module.exports = BookingRepository;