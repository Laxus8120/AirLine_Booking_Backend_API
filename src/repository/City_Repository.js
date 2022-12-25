const City = require('../models/index.js');

class CityRepository{
    async createCity({name}){
        try{
            const city  = await City.create({name});
            return city;
        }
        catch{
            console.log("Something went wrong in repo layer")
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
            return true;
        }
        catch(error){
            console.log("Something went wrong in repo layer")
            throw{error};
        }
    }

    async getCity(cityID){
        try {
            const city = await City.findByPk(cityID);
            return city;
        } catch (error) {
            console.log("Something went wrong in repo layer")
            throw{error};
        }
    }

    async upadateCity(cityID, data){
        try {
            const city = await City.update(data, {
                where : {
                    id : cityID;
                }
            });
            return city;
        } catch (error) {
            console.log("Something went wrong in repo layer")
            throw{error};
        }
    }
}

module.exports = CityRepository;