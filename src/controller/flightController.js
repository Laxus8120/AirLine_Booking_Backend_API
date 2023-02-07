const {FlightService} = require('../services/index');
const {SuccessCodes} = require('../utils/error-codes')
const flightService = new FlightService();


const create =  async (req,res) => {

        try {
            const flightRequestData= {
                flightNumber : req.body.flightNumber,
                airplaneId : req.body.airplaneId,
                departureAirportId : req.body.departureAirportId,
                arrivalAirportId : req.body.arrivalAirportId,
                arrivalTIme : req.body.arrivalTIme,
                departureTime : req.body.departureTime,
                price : req.body.price
            }
            const flight = await flightService.createFlight(flightRequestData);
            return res.status(SuccessCodes.CREATED).json({
                data : flight ,
                success : true,
                error : {},
                message : "Successfully created a flight"
            })
        } catch (error) {
            console.log(error);   
        return res.status(500).json({
            data : {},
            success : false , 
            message : "Not able to create a flight ",
            err : error                      
        })    
        }
}

const getAllFlight = async (req,res) => {
    try {
        const flight = await flightService.getAllFlight(req.query);
        return res.status(SuccessCodes.OK).json({
            data : flight ,
            success : true,
            error : {},
            message : "Successfully fetches the flights"
        })
    } catch (error) {
        console.log(error);   
        return res.status(500).json({
            data : {},
            success : false , 
            message : "Not able to create a flight ",
            err : error                      
        })  
    }
}

const getFlight  = async (req,res) =>{
    
    try {
        const flight = await flightService.getFlight(req.params.id);
        return res.status(SuccessCodes.OK).json({
            data : flight ,
            success : true,
            error : {},
            message : "Successfully fetched the flights"
        })
    } catch (error) {
        console.log(error);   
        return res.status(500).json({
            data : {},
            success : false , 
            message : "Not able to create a flight ",
            err : error                      
        })  
    }
}

const updateFlight  = async (req,res) =>{

    try {
        const flight = await flightService.updateFlight(req.params.id, req.body);
        return res.status(SuccessCodes.OK).json({
            data : flight ,
            success : true,
            error : {},
            message : "Successfully update the flights"
        })
    } catch (error) {
        console.log(error);   
        return res.status(500).json({
            data : {},
            success : false , 
            message : "Not able to update a flight ",
            err : error                      
        })  
    }
}

module.exports = {
    create,
    getAllFlight,
    getFlight,
    updateFlight
}