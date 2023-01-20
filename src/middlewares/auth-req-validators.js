const validateUserAuth = (req,res,next) => {

    if(!req.body.Email || !req.body.Password){
        return res.status(400).json({
            success : false,
            data : {},
            message : "Something went wrong ",
            err : "Email or Password is missing "
        })
    }
    next();
}

const validateIsAdminRequest = (req,res,next) => {

    if(!req.body.id){
        return res.status(400).json({
            success : false,
            data : {},
            message : "Something went wrong ",
            err : "user Id is not given "
        })
    }
    next();
}

module.exports = {
    validateUserAuth,
    validateIsAdminRequest
}