const { Op } = require('sequelize');
const {City} = require('../models/index.js');
const { ValidationError } = require('../utils/error/index.js');
class CityRepository{
    async createCity({name}){
        try{
            const city  = await City.create({
                name 
            });
            return city;
        }
        catch(error){
            if(error.name  == 'SequelizeValidationError'){
                throw new ValidationError(error);
            }
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
                    id : cityID
                }
            });
            return city;
        } catch (error) {
            console.log("Something went wrong in repo layer")
            throw{error};
        }
    }

    async getAllCities(filter){
        try {
            if(filter.name){
                const cities  = await City.findAll({
                    where: {
                        name:{
                            [Op.startsWith]: filter.name
                        }
                    }
                })
                return cities;
            }
            
        } catch (error) {
            console.log("Something went wrong in repo layer")
            throw{error};
        }
    }
}

module.exports = CityRepository;