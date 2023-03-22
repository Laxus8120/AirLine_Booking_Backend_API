const {AirportService} = require('../services/index');

const airportService = new AirportService();

const create = async (req,res) => {

    try {
        const response = await airportService.create(req.body);
        return res.status(200).json({
            message : " created the airport",
            error : {},
            data : response,
            success : true
        })
    } catch (error) {
        res.status(500).json({
            data : {},
            success : false,
            error : error,
            message : " cannot create a new airport"
        })
    }
}

module.exports = {
    create
}