class AppError extends Error{
    constructor(
        name,
        message,
        explanation,
        statusCodes
    ){

        this.name = name;
        this.message = message;
        this.explanation = explanation;
        this.statusCodes = statusCodes;
    }
}
module.exports = AppError;