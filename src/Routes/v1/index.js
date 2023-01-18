const express = require('express');;

const router = express.Router();

const UserController = require('../../controllers/UserController');

const {AuthRequestValidators} = require('../../middlewares/index');

router.post(
    '/signup',
    AuthRequestValidators.validateUserAuth,
    UserController.create
);
router.post(
    '/signin',
    AuthRequestValidators.validateUserAuth,
    UserController.signIn
);
module.exports = router;