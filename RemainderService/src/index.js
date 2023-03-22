const express = require('express');
const bodyParser  = require('body-parser');

const {PORT}   = require('./config/serverConfig');

// const {sendBasicEmail}  = require('./services/email_service');
const TicketController  = require('./controllers/ticketController'); 
const jobs  = require('./utils/job');

const setupAndStartServer  = () =>{
    
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.post('/api/v1/tickets',TicketController.create);

    app.listen(PORT,()=>{

        console.log(` Server Started on PORT ${PORT}`);
        jobs();

    })
    // sendBasicEmail(

    //     'laxus@admin.com',
    //     'laxusstudy812@gmail.com',
    //     'This is testing mail',
    //     'Hey, how are you, I hope you like the support'
    // )

}

setupAndStartServer();