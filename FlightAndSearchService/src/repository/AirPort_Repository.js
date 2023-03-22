const crudRepository = require('./crudRepository');
const {Airport} = require('../models/index');
class AirportRepository extends crudRepository{

    constructor(){
        super(Airport);
    }


}
module.exports = AirportRepository;


// const {Airport} = require('../models/index.js');

// class AirportRepository{

//     async createAirport({name , Address, cityID}){
//         try {
//             const airport = await Airport.create({
//                 name,
//                 Address,
//                 cityID
//             })
//         return airport;
//         } catch (error) {
//             console.log("Something went wrong in repo layer");
//             throw{error};
//         }
//     }

//     async updateAirport(cityId,data){
//         try {
            
//         } catch (error) {
//             console.log("Something went wrong in repo layer");
//             throw{error};
//         }
//     }

//     async deleteAirport(){
//         try {
           
//         } catch (error) {
//             console.log("Something went wrong in repo layer");
//             throw{error};
//         }
//     }

//     async getAirport(){
//         try {
           
//         } catch (error) {
//             console.log("Something went wrong in repo layer");
//             throw{error};
//         }
//     }

//     async getAllAirport(){
//         try {
            
//         } catch (error) {
//             console.log("Something went wrong in repo layer");
//             throw{error};
//         }
//     }
// }

// module.exports = AirportRepository;