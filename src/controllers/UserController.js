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
        return res.status(500).json({
            message : "Something went wrong",
            data : {},
            success : false ,
            err : error
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
    signIn
}