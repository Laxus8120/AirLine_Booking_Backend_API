const {Airplane} = require('../models/index');

class AirplaneRepository{

    async getAirplane(id){
        try {
            const airplane = await Airplane.findByPk(id);
            return airplane;
        } catch (error) {
            console.log("Something went wrong in Repo Layer");
            throw{error};
        }
    }
}
module.exports = AirplaneRepository;