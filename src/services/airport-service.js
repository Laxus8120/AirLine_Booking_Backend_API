const { AirPortRepository } = require('../repository/index');
const CrudService = require('./CrudService');

class AirPortService extends CrudService{

    constructor(){
        const airPortRepository = new AirPortRepository();
        super(airPortRepository);
    }
}

module.exports = AirPortService;