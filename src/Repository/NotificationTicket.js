const {NotificationTicket}  = require('../models/index');
const {Op}  = require('sequelize');
class NotificationTicketRepository{

    async getAll(){

        try {
            
            const ticket  = await NotificationTicket.findAll();
            return ticket;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw(error);
        }
    }

    async create(data){
        try {
            const ticket  = await NotificationTicket.create(data);
            return ticket;
        } catch (error) {
            console.log('somehting went wrong in repo layer');
            throw(error);
        }
    }

    async get(filter){
        try {
            const tickets = await NotificationTicket.findAll({
                where: {
                    status : filter.status,
                    notificationTime: {
                        [Op.lte]: new Date()
                    }
                }
            })
            return tickets;
        } catch (error) {
            throw error;
        }
    }
}

module.exports  = NotificationTicketRepository;
