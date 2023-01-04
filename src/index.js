const bodyParser = require('body-parser');
const express = require('express');
const {PORT} = require('./config/serverConfig');
const db = require('./models/index');
// const {Airplane} = require('./models/index')
const ApiRoutes  = require('./Route/index');
const setupAndStartServer = async () =>{

    const app = express();
   
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));

    app.use('/api', ApiRoutes);

    app.listen(PORT, async() =>{
        
        console.log(`Server Started at ${PORT}`);
        if(process.env.SYNC_DB){
            db.sequelize.sync({alter :true});
        }
    });
} 

setupAndStartServer();
