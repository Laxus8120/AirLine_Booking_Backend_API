const UserRepository = require('../repository/UsersRepository');

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
}

module.exports = UserService;