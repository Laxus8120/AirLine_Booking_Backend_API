const { json } = require('body-parser');
const {CityService} = require('../services/index');

const cityService  = new CityService();
const create = async (req,res) => {               // these are our controller which consist req,res object 
    try {
        const city  = await cityService.createCity(req.body);
        return res.status(201).json({
            data : city,
            success : true,
            message : 'Successfully created a city',
            err : {} //  returning empty error object 
        });
    } catch (error) {
        console.log(error);                     // we are not throwing error here or else we dont able to do error maping
        return res.status(500).json({
            data : {},
            success : false , 
            message : "Not able to create a city",
            err : error                      
        })
    }
}

// PATCH --> /city/:id -->req.body
const update = async (req,res) => {

    try {
        const response  = await cityService.updateCity(req.params.id,req.body); //we are sending the data in service layer so look the service update layer taking input
        return res.status(200).json({
            data : response,
            success : true,
            message : 'Successfully update a city',
            err : {} //  returning empty error object 
        })
    } catch (error) {
        console.log(error); 
        return res.status(500).json({
            data : {},
            success : false , 
            message : "Not able to update  a city",
            err : error                      
        })                         
    }
}

// DELETE -->/city/id  {url}
const destroy = async (req,res) => {
    
    try {
        const response  = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data : response,
            success : true,
            message : 'Successfully deleted a city',
            err : {} //  returning empty error object 
        })
        
    } catch (error) {
        console.log(error);       
        return res.status(500).json({
            data : {},
            success : false , 
            message : "Not able to delete a city",
            err : error                      
        })              
    }
}

// GET --> /city/:id
const get = async (req,res) => {
    
    try {
        const response  = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data : response,
            success : true,
            message : 'Successfully fetched a city',
            err : {} //  returning empty error object 
        })
    } catch (error) {
        console.log(error);   
        return res.status(500).json({
            data : {},
            success : false , 
            message : "Not able to get a city",
            err : error                      
        })                   
    }
}

const getAllCities = async (req,res) => {
    try {
        const Cities = await cityService.getAllCities(req.query);
        return res.status(200).json({
            data : Cities,
            success : true,
            message : 'Successfully fetched a cities',
            err : {}
        })
    } catch (error) {
        console.log(error);   
        return res.status(500).json({
            data : {},
            success : false , 
            message : "Not able to get a cities",
            err : error                      
        })    
    }
}

module.exports= {
    create,
    update,
    destroy,
    get,
    getAllCities
}
