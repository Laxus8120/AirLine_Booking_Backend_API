const UserRepository = require('../repository/UsersRepository');

const {JWT_KEY}  = require('../config/serverConfig');
const jwt = require('jsonwebtoken');
class UserService {

    constructor(){
        this.userRepository = new UserRepository();
    }

    async create(data){

        try {
            const user = await this.userRepository.create(data);
            return user;
        } catch (error) {
            console.log("something went wrong in service layer of create");
            throw error;
        }        
    }


    createToken(user){
        try {
            const result = jwt.sign(user, JWT_KEY, { expiresIn : '1d'});
            return result;

        } catch (error) {
            console.log("Something went wrong in token creation");
            throw error;
        }
    }

    verifyToken(token){
        try {
            const response = jwt.verify(token, JWT_KEY);
            return response;

        } catch (error) {
            console.log("Something went wrong in token validation", error);
            throw error;
        }
    }
}

module.exports = UserService;