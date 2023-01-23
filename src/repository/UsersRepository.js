const ValidationError= require('../utils/Validation-error');
const {User,Roles} = require('../models/index');
const { StatusCodes } = require('http-status-codes');
const ClientError = require('../utils/client-error');
class UserRepository {

    async create(data)  {

        try {
            const user = await User.create(data);
            return user;
        } catch (error) {
            if(error.name == 'SequelizeValidationError'){
                throw new ValidationError(error);
            }            
            console.log("Something went wrong in rep layer of create function ");
            throw error;
        }        
    }

    async destroy(userId) {

        try {
            await User.destroy({
                where : {
                    id : userId
                }
            })
            return true;
        }
         catch (error) {
            console.log("Something went wrong in rep layer of destroy function");
            throw error;
        } 
    }

    async getById(userId){

        try {
            const user = await User.findByPk(userId,{
                attributes : ['email', 'id']
            });
            return user;
    
        } catch (error) {
            
            console.log("Something went wrong in rep layer of getByEmail repo function");
            throw error;
        }        
    }

    async getByEmail(userEmail){
        
        try {
            const user = await User.findOne({
                where : {
                    Email : userEmail
                }
            });
            if(!user){
                throw new ClientError(
                    'AttributeNotFound',
                    'Invalid Email sent in the request',
                    'Please check the email, as there is no record of the email',
                    StatusCodes.NOT_FOUND
                )
            }
            return user;
    
        } catch (error) {
            
            console.log("Something went wrong in rep layer of getByEmail rep function");
            throw error;
        }        
    }

    async isAdmin(userId){
        try {
            const user = await User.findByPk(userId);
            const Adminrole = await Roles.findOne({
                where : {
                    name : 'ADMIN'
                }
            })

            return user.hasRole(Adminrole);
        } catch (error) {
            console.log("Something went wrong in rep layer of isAdmin  function");
            throw error;
        }
    }
}

module.exports = UserRepository;