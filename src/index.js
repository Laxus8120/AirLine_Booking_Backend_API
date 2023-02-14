const express = require('express');
const bodyParser  = require('body-parser');

const {PORT}   = require('./config/serverConfig');

const {sendBasicEmail}  = require('./services/email_service');

const setupAndStartServer  = () =>{
    
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));


    app.listen(PORT,()=>{

        console.log(` Server Started on PORT ${PORT}`);
    })

    sendBasicEmail(

        'laxus@admin.com',
        'laxusstudy812@gmail.com',
        'This is testing mail',
        'Hey, how are you, I hope you like the support'
    )

}

setupAndStartServer();