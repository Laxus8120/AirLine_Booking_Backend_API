const City = require('../models/index.js');

class CityRepository{
    async createCity({name}){
        try{
            const city  = await City.create({name});
            return city;
        }
        catch{
            throw{error};
        }
    }

    async deleteCity(cityID){

        try {
            await City.destroy({
                where : {
                    id : cityID
                }
            });
        }
        catch{
            throw{error};
        }
    }
}

module.exports = CityRepository;