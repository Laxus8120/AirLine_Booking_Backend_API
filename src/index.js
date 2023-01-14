const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const {PORT}  = require('./config/serverConfig');

const apiRouter = require('./Routes/index')

const prepareAndStartServer = ()=>{

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));


    app.use('/api', apiRouter);

    app.listen(PORT,() => {
        console.log(`Server Started at PORT no : ${PORT}`);
    })

}

prepareAndStartServer();