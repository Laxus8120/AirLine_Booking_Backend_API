const bodyParser = require('body-parser');
const express = require('express');
const {PORT} = require('./config/serverConfig');

const ApiRoutes  = require('./Route/index');
const setupAndStartServer = async () =>{

    const app = express();
   

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));

    app.use('/api', ApiRoutes);

    app.listen(PORT, () =>{
        console.log(`Server Started at ${PORT}`);
    });
} 

setupAndStartServer();
