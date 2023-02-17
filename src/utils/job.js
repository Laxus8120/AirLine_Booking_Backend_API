const cron  = require('node-cron');
const emails  = require('../services/email_service');

const setupJobs  = () => {
    cron.schedule('*/2 * * * *', async () => {
    
      const response  = await emails.fetchPendingEmails();
      console.log(response);
  });
}

module.exports = setupJobs;