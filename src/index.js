const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const {PORT}  = require('./config/serverConfig');

const db= require('./models/index');


const apiRouter = require('./Routes/index');



const prepareAndStartServer = ()=>{

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));


    app.use('/api', apiRouter);

    app.listen(PORT, async () => {
        console.log(`Server Started at PORT no : ${PORT}`);
        if(process.env.DB_SYNC){
            db.sequelize.sync({alter: true})
        }

        
        // const token = userService.createToken({email: 'hemantrawat812@gmaill.com' , id:'1'});
        // console.log(token);
        // const newToken ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhlbWFudHJhd2F0ODEyQGdtYWlsbC5jb20iLCJpZCI6IjEiLCJpYXQiOjE2NzM4NTAxNDQsImV4cCI6MTY3MzkzNjU0NH0.sYkG0v2ZBsxwKEegwTIP_kCqXQ9Aj5q0bkKWCYtR2g8'
        // const response = userService.verifyToken(newToken);
        // console.log(response);
 
    })

}

prepareAndStartServer();