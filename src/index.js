const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const {PORT}  = require('./config/serverConfig');

const UserRepository = require('./repository/UsersRepository');

const apiRouter = require('./Routes/index')
const userRepository = new UserRepository();

const prepareAndStartServer = ()=>{

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));


    app.use('/api', apiRouter);

    app.listen(PORT, async () => {
        console.log(`Server Started at PORT no : ${PORT}`);


        const responce = await userRepository.getById(4);
        console.log(responce);
    })

}

prepareAndStartServer();