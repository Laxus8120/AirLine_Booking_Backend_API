const UserService = require('../services/User-Service');

const userService = new UserService();

const create = async (req,res) => {
    try {
        const response = await userService.create({
            Email : req.body.Email,
            Password : req.body.Password
        });
        return res.status(201).json({
            success : true,
            message : 'Successfully created a new user',
            data : response,
            error : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(error.statusCode).json({
            message : error.message,
            data : {},
            success : false ,
            error : error.explanation
        })
    }
}

const signIn = async (req,res) =>{

    try {
        
        const response = await userService.signIn(req.body.Email , req.body.Password);
        return res.status(200).json({
            success : true,
            message : 'Successfully SignIn ',
            data : response,
            error : {}
        })
    } catch (error) {
        console.log(error);
        console.log("hello")
        return res.status(error.statusCode).json({
            message : error.message,
            data : {},
            success : false ,
            err : error.explaination
        })
    }
}

const isAuthenticated = async (req,res) => {

    try {
        
        const token = req.headers['x-access-token'];
        const response = await userService.isAuthenticated(token);
        return res.status(200).json({
            success : "true",
            error : {},
            data : response,
            message : "user is authenticated and token is valid"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message : "Something went wrong",
            data : {},
            success : false ,
            err : error
        })
    }
}

const isAdmin = async(req,res) => {

    try {
        
        const response = await userService.isAdmin(req.body.id);
        return res.status(200).json({
            success : "true",
            error : {},
            data : response,
            message : "Successfully fetch the user in admin or not"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message : "Something went wrong",
            data : {},
            success : false ,
            err : error
        }) 
    }
}

module.exports = {
    create,
    signIn,
    isAuthenticated,
    isAdmin
}