const express = require('express');
const {PORT} = require('./config/serverConfig');

const setupAndStartServer = async () =>{

    const app = express();
   
    app.listen(PORT, () =>{
        console.log(`Server Started at ${PORT}`);
    });
}

setupAndStartServer();
