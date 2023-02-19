const sender  = require('../config/emailConfig');
const NotificationTicketRepository = require('../Repository/NotificationTicket');

const repo  = new NotificationTicketRepository();

const sendBasicEmail  = async (mailFrom, mailTo, mailSubject, mailBody ) =>{

    try {
        const response  = await sender.sendMail({

            from : mailFrom,
            to : mailTo,
            subject : mailSubject,
            text : mailBody
        })
        console.log(response);
    } catch (error) {
        console.log(error)
    }
}

const fetchPendingEmails  = async (timestamp) => {

    try {
        const response  = await repo.get({status:"PENDING"});
        return response;

    } catch (error) {
        console.log(error);
    }
}

 const updateTicket  = async (ticketId,data)=>{

    try {
        const response = await repo.update(ticketId,data);
        return response;

    } catch (error) {
        console.log(error);
    }
 }

const createNotification = async (data) =>{
    try {
        
        const response  = await repo.create(data);
        return response;
    } catch (error) {
        console.log("Something went wrong in the service layer");
        throw(error);
    }
}

module.exports  = {

    sendBasicEmail,
    fetchPendingEmails,
    createNotification,
    updateTicket
}