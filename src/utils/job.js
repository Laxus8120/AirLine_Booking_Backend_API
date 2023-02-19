const cron  = require('node-cron');
const emails  = require('../services/email_service');
const sender  = require('../config/emailConfig')

const setupJobs  = () => {
    cron.schedule('*/2 * * * *', async () => {
    
      const response  = await emails.fetchPendingEmails();
      response.forEach((email) =>{
        sender.sendMail({
            to : email.recepientEmail,
            subject : email.subject,
            text : email.content
        }, async (err,data)=>{
           if(err){
            console.log(err);
           }
           else{
            console.log(data);
            await emails.updateTicket(email.id,{status:"SUCCESS"});
           }
        });
      })
      console.log(response);
  });
}

module.exports = setupJobs;