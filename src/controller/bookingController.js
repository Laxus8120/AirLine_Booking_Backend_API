const { BookingService}  =  require('../service/index');
const {StatusCodes}  = require('http-status-codes');
const bookingService  = new BookingService();
const {createChannel,publishMessage} = require('../utils/messageQueue');

const {REMINDER_BINDING_KEY}  = require('../config/serverConfig');

class BookingController {

    constructor(){

    }

    async sendMessageToQueue(req,res){
        const channel  = await createChannel();
        const data  = {message:'Sucess'};
        publishMessage(channel,REMINDER_BINDING_KEY,JSON.stringify(data));
        return res.status(200).json({
            message : 'Successfully published the event'
        })
    }
    async create (req,res) {
        try {
            const response  = await bookingService.createBooking(req.body);
            return res.status(StatusCodes.OK).json({
                message : "Successfully completed booking",
                success : true,
                err : {},
                data : response
            });
        } catch (error) {
            return res.status(error.statusCodes).json({
                message : error.message,
                success : false,
                err : error.explanation,
                data : {}
            });
        }
    }
}

module.exports = BookingController;