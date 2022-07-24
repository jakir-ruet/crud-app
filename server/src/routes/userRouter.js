const router = require('express').Router();
const userController = require('../controller/userController');

router
    .post('/create', userController.createUser)
    .get('/find', userController.findUser)
    .post('/update', userController.updateUser);
module.exports = {router};