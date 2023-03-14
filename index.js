const express = require('express');

const morgan = require('morgan');  // it is a logger npm package which helps us to do better debugging .
const app = express();

const {createProxyMiddleware} = require('http-proxy-middleware');
const rateLimit = require('express-rate-limit');

const PORT = 3005;
const limiter = rateLimit({
	windowMs: 2 * 60 * 1000, // 15 minutes
	max: 5, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
})

app.use(morgan('combined'));
app.use(limiter);
app.use('/bookingservice',createProxyMiddleware({target :'http://localhost:3002/',changeOrigin : true }));
app.get('/home', (req,res) =>{

    return res.status(200).json({
        message : 'oK'
    })
})
app.listen(PORT,()=>{
    console.log(`Server started on Port no. ${PORT}`);
} )