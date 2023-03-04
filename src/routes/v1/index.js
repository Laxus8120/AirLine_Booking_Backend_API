const express  = require('express');
const {BookingController}  = require('../../controller/index')

const router = express.Router();
// const {createChannel} = require('../../utils/messageQueue');

// const channel  = await createChannel();

const bookingController  = new BookingController();

router.post('/bookings' , bookingController.create);

module.exports = router;